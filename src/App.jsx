import { ArrowRight, Leaf, HeartHandshake, Clock3 } from 'lucide-react'

const FORM_URL = 'https://tally.so/r/YOUR_FORM_ID'

function App() {
  return (
    <main className="site-shell">
      <section className="hero">
        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />

        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="/" aria-label="Olive Tree DPC home">
            <img src="/logo-horizontal.svg" alt="Olive Tree DPC" />
          </a>
          <a className="nav-cta" href={FORM_URL}>Join the Interest List</a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Opening soon to South Florida</p>
            <h1>Primary care rooted in relationship.</h1>
            <p className="subheadline">
              Olive Tree DPC is building a calmer, more personal approach to primary care:
              centered on meaningful relationships, thoughtful accessibility, and whole-person care.
            </p>
            <div className="cta-row">
              <a className="button-primary" href={FORM_URL}>
                Join the Interest List
                <ArrowRight size={18} strokeWidth={1.8} />
              </a>
              <p className="cta-note">Be the first to hear when memberships open.</p>
            </div>
          </div>

          <div className="hero-card" aria-label="Olive Tree DPC brand card">
            <img src="/logo-stacked.svg" alt="" className="hero-logo" />
            <div className="card-line" />
            <p>A new kind of primary care experience.</p>
          </div>
        </div>
      </section>

      <section className="pillars" aria-label="Olive Tree DPC values">
        <article>
          <Clock3 size={24} strokeWidth={1.6} />
          <h2>Thoughtful care</h2>
          <p>Built around time, attention, and relationships that can grow.</p>
        </article>
        <article>
          <HeartHandshake size={24} strokeWidth={1.6} />
          <h2>Personal connection</h2>
          <p>A quieter, more accessible experience designed for continuity.</p>
        </article>
        <article>
          <Leaf size={24} strokeWidth={1.6} />
          <h2>Whole-person focus</h2>
          <p>Care grounded in compassion, trust, and intentionality.</p>
        </article>
      </section>

      <section className="closing">
        <p>Thoughtful care takes time.</p>
        <h2>Olive Tree DPC is being intentionally built for individuals and families seeking a more personal healthcare experience.</h2>
        <a className="button-secondary" href={FORM_URL}>Join the Interest List</a>
      </section>

      <footer>
        <p>© 2026 Olive Tree DPC. All rights reserved.</p>
        <p>Direct primary care. South Florida.</p>
      </footer>
    </main>
  )
}

export default App
