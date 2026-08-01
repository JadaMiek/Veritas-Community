const gatherings = [
  ["01", "Faith Breakfasts", "Start your week with fellowship, prayer, and healthy breakfast while sharing life updates."],
  ["02", "Discernment Dialogues", "Structured conversations around scripture, current events, and personal challenges."],
  ["03", "Family Nights", "Monthly potlucks and activities focused on strengthening family bonds through shared faith experiences."],
];

const dialogues = [
  ["Truth & Discernment Councils", "Guided discussions helping individuals and families navigate life decisions through biblical wisdom."],
  ["Life Coaching Circles", "Support groups for personal growth, goal setting, and accountability in living out Christian values."],
  ["Mentorship Programs", "Connection between experienced believers and those seeking guidance in faith and life application."],
];

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="wordmark" href="#top">Veritas <span>Community</span></a>
      <nav aria-label="Main navigation">
        <a href="#gatherings">Gatherings</a>
        <a href="#dialogues">Truth & Discernment</a>
        <a href="#contact">Connect</a>
      </nav>
    </header>
    <section id="top" className="hero">
      <div className="hero-copy">
        <p className="eyebrow">BE EXAMPLES OF "THE WAY, THE TRUTH AND THE LIFE" AS HE INTENDED</p>
        <h1>Building Community Through Truth and Conversation</h1>
        <p className="hero-text">
          A place where individuals and families can come together for meaningful dialogue,
          shared learning, and mutual support in living out truth together.
        </p>
        <p className="hero-quote">
          "For God so loved the world, that he gave his only Son, that whoever believes in
          him should not perish but have eternal life."
        </p>
        <a className="button" href="#contact">Join Our Community</a>
      </div>
      <div className="hero-logo-wrap">
        <img
          className="hero-logo"
          src="/veritas-co-logo.jpg"
          alt="Veritas Community logo"
        />
      </div>
    </section>
    <section className="introduction content-width">
      <div>
        <p className="section-label">OUR MISSION</p>
        <h2>Creating Spaces for Truth, Growth, and Community</h2>
      </div>
      <div className="intro-copy">
        <p>
          Veritas Community exists to bring people together for purposeful gatherings where
          participants can explore faith, share experiences, and support one another on
          their spiritual journeys. We believe in the power of honest conversation to
          build stronger families, healthier communities, and more resilient individuals.
        </p>
        <p>
          Our gatherings are designed to create safe, welcoming environments where everyone
          can be heard, valued, and inspired to live out their faith in practical ways.
        </p>
      </div>
    </section>
    <section id="gatherings" className="gatherings-section">
      <div className="content-width">
        <p className="section-label">COMMUNITY GATHERINGS</p>
        <h2>From Conflict to Connection</h2>
        <div className="gatherings-grid">
          {gatherings.map(([number, title, description]) => (
            <article className="gathering" key={number}>
              <span>{number} ·</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
    <section id="dialogues" className="dialogues-section">
      <div className="content-width">
        <p className="section-label">TRUTH & DISCERNMENT</p>
        <h2>Circles of Learning and Support</h2>
        <div className="dialogues-grid">
          {dialogues.map(([title, description]) => (
            <article className="dialogue" key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <p className="dialogue-quote">
          "In whom we have obtained an inheritance, being predestined according to the plan
          of him who works all things according to the counsel of his will." - Ephesians 1:11
        </p>
      </div>
    </section>
    <section id="contact" className="contact">
      <p className="section-label">BEGIN YOUR JOURNEY</p>
      <h2>Ready to Join a Community That Values Truth?</h2>
      <p>
        Whether you're seeking to grow spiritually, find support in your faith journey, or
        simply want to connect with others who share your values, Veritas Community
        offers a welcoming space for meaningful relationships and growth.
      </p>
      <p className="contact-quote">
        "For where two or three gather together in my name, there am I among them."
        - Matthew 18:20
      </p>
      <a className="button" href="mailto:hello@veritascommunity.org">
        Get Involved Today
      </a>
      <p>
        <a href="tel:+15551234567">(555) 123-4567</a>
      </p>
    </section>
    <footer>
      <span>© 2026 Veritas Community</span>
      <span>Building Community Through Truth</span>
    </footer>
  </main>;
}
