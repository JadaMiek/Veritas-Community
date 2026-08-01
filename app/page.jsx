const trustBenefits = [
  ["Equal Membership", "Every contributor is an equal member regardless of investment size."],
  ["Monthly Dividends", "Profit-sharing distributed to all members based on community contribution."],
  ["Priority Support", "Additional benefits and resources prioritized for those in greatest need."],
  ["Sovereign Security", "Protected community resources independent of traditional financial systems."],
];

const initiatives = [
  ["Food Sovereignty", "Community gardens, food forests, and sustainable agriculture programs."],
  ["Habitat Development", "Collaborative home building and sustainable housing projects."],
  ["Shared Resources", "Common facilities, tools, and infrastructure for mutual benefit."],
  ["Spiritual Growth", "Faith-based education, counseling, and mentorship programs."],
];

const boardMembers = [
  ["Chairperson", "Visionary and strategic leadership coordinator."],
  ["Secretary", "Records management and community communications."],
  ["Treasurer", "Trust fund administration and financial oversight."],
  ["Outreach Director", "Member recruitment and community engagement."],
];

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="wordmark" href="#top">Veritas <span>Community</span></a>
      <nav aria-label="Main navigation">
        <a href="#trust">Trust Fund</a>
        <a href="#initiatives">Community Projects</a>
        <a href="#board">Board</a>
        <a href="#contact">Connect</a>
      </nav>
    </header>
    <section id="top" className="hero">
      <div className="hero-copy">
        <p className="eyebrow">BUILDING SOVEREIGN COMMUNITY THROUGH TRUTH AND SERVICE</p>
        <h1>Where Investment Creates Impact</h1>
        <p className="hero-text">
          A faith-based nonprofit where every contributor becomes an equal member,
          receiving dividends that sustain and grow our shared community vision of
          self-sufficiency, mutual support, and genuine service to all.
        </p>
        <p className="hero-quote">
          "For as many as you did it unto one of the least of these my brethren,
          ye did it unto me." - Matthew 25:40
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
        <h2>Building Sovereign Community Through Truth, Service, and Mutual Support</h2>
      </div>
      <div className="intro-copy">
        <p>
          Veritas Community is a nonprofit organization dedicated to creating a sovereign,
          self-sustaining community where every member is valued and supported. Through
          our trust fund structure, we enable individuals to invest in collective wellbeing
          while receiving returns that help sustain our shared vision of growth, independence,
          and genuine service.
        </p>
        <p>
          Our board of directors operates on a voluntary basis, ensuring transparent
          governance and community-focused decision-making. We prioritize those most
          in need while maintaining equal membership rights for all contributors.
        </p>
        <p>
          We cultivate food, build homes, and create sustainable systems that benefit
          everyone involved. Together, we demonstrate what can be achieved when people
          work in unity, guided by faith and mutual support.
        </p>
      </div>
    </section>
    <section id="trust" className="trust-section">
      <div className="content-width">
        <p className="section-label">TRUST FUND BENEFITS</p>
        <h2>Equal Membership with Shared Prosperity</h2>
        <div className="trust-grid">
          {trustBenefits.map(([title, description]) => (
            <article className="trust-benefit" key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <div className="trust-info">
          <p>
            Our trust fund is structured to ensure every member's financial security
            while investing in community growth. Dividends from sustainable investments
            support both individual needs and collective projects, creating a cycle
            of prosperity that benefits everyone equally.
          </p>
          <p>
            Priority is given to members facing greater challenges, ensuring no one
            is left behind in our journey toward community sovereignty and self-sufficiency.
          </p>
        </div>
      </div>
    </section>
    <section id="initiatives" className="initiatives-section">
      <div className="content-width">
        <p className="section-label">COMMUNITY INITIATIVES</p>
        <h2>Building Sovereignty Through Collaborative Action</h2>
        <div className="initiatives-grid">
          {initiatives.map(([title, description]) => (
            <article className="initiative" key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
    <section id="board" className="board-section">
      <div className="content-width">
        <p className="section-label">BOARD OF DIRECTORS</p>
        <h2>Voluntary Service, Community Guidance</h2>
        <p className="board-intro">
          Our board operates on a completely voluntary basis, ensuring decisions
          always reflect the community's best interests. Members serve without
          compensation, dedicated to transparency and equitable resource distribution.
        </p>
        <div className="board-grid">
          {boardMembers.map(([position, responsibility]) => (
            <article className="board-member" key={position}>
              <h3>{position}</h3>
              <p>{responsibility}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
    <section id="contact" className="contact">
      <p className="section-label">BEGIN YOUR JOURNEY</p>
      <h2>Ready to Build Sovereign Community?</h2>
      <p>
        Join Veritas Community today and become part of a movement dedicated to
        creating self-sustaining, faith-based communities where everyone contributes,
        everyone benefits, and everyone is valued. Our trust fund model ensures
        financial security while building a brighter, more independent future for all.
      </p>
      <p className="contact-quote">
        "Two are better than one; have they not then a good reward for their labour?
        - Ecclesiastes 4:9-10"
      </p>
      <a className="button" href="mailto:veritashq.inc@gmail.com">
        Get Involved Today
      </a>
      <p>
        <a href="tel:+7327731264">(732) 773-1264</a>
      </p>
    </section>
    <footer>
      <span>© 2026 Veritas Community</span>
      <span>Building Sovereign Community Through Truth and Service</span>
    </footer>
  </main>;
}
