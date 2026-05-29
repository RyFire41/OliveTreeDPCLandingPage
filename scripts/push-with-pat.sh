#!/usr/bin/env zsh
# push-with-pat.sh
# Small helper script to set HTTPS remote, configure macOS keychain credential helper,
# prompt for a GitHub Personal Access Token (PAT), and push the current branch to origin.
# Usage: ./scripts/push-with-pat.sh [remote-url] [branch]
#   remote-url defaults to: https://github.com/RyFire41/OliveTreeDPCLandingPage.git
#   branch defaults to: main

set -euo pipefail

REPO_DIR="/Users/ryanfisher/Documents/DPC/OliveTree DPC/OliveTreeDPCLandingPage"
DEFAULT_REMOTE="https://github.com/RyFire41/OliveTreeDPCLandingPage.git"
REMOTE_URL=${1:-$DEFAULT_REMOTE}
BRANCH=${2:-main}

echo "Working in: $REPO_DIR"
cd "$REPO_DIR"

# Ensure git credential helper for macOS is configured
echo "Configuring macOS keychain credential helper..."
git config --global credential.helper osxkeychain || true

# Ensure remote is set to HTTPS
echo "Setting remote origin to: $REMOTE_URL"
git remote set-url origin "$REMOTE_URL"

# Prompt for GitHub username and PAT (zsh-compatible)
echo -n "GitHub username (for the account that has repo access): "
read -r GITHUB_USER
if [[ -z "$GITHUB_USER" ]]; then
  echo "No username provided. Aborting."
  exit 1
fi

echo -n "Paste your GitHub Personal Access Token (PAT) and press Enter: "
read -r -s GITHUB_PAT
echo
if [[ -z "$GITHUB_PAT" ]]; then
  echo "No token provided. Aborting."
  exit 1
fi

# Store the PAT temporarily in the macOS keychain via git credential approve
# so git push can pick it up non-interactively.
printf "url=%s\nusername=%s\npassword=%s\n" "$REMOTE_URL" "$GITHUB_USER" "$GITHUB_PAT" | git credential approve

# Push
echo "Pushing branch '$BRANCH' to origin..."
git push -u origin "$BRANCH"

# Optional: clear the stored credential from the keychain if you want
read -q "REPLY?Do you want to remove the PAT from the macOS keychain now? (y/N) "
echo
if [[ "$REPLY" =~ ^[Yy]$ ]]; then
  printf "url=%s\nusername=%s\n" "$REMOTE_URL" "$(git config user.name || echo 'git')" | git credential reject
  echo "PAT removed from keychain."
else
  echo "PAT left in the macOS keychain (so future pushes won't ask)."
fi

echo "Done."