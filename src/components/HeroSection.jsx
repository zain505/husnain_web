import HeroPortrait from './HeroPortrait.jsx'
import Icon from './Icon.jsx'

function HeroSection() {
  return (
    <section className="hero-panel section-frame" id="home">
      <div className="hero-panel__copy">
        <span className="eyebrow eyebrow--intro">Hello, I'm</span>
        <h1>Muhammad Husnain Ashraf</h1>
        <p className="hero-panel__role">
          Senior Software Engineer | .NET Architect
        </p>
        <p className="hero-panel__text">
          13+ years of experience building mission-critical, high-scale systems
          that power millions of users. Passionate about clean architecture,
          performance, and delivering real business impact.
        </p>

        <div className="hero-panel__actions">
          <a className="button button--primary" href="#projects">
            View My Work
            <Icon name="arrow" />
          </a>
          <a
            className="button button--ghost"
            href="https://www.linkedin.com/in/muhammad-husnain-ashraf-7b637037/"
            target="_blank"
            rel="noreferrer"
          >
            Let's Connect
            <Icon name="arrow" />
          </a>
        </div>
      </div>

      <div className="hero-panel__visual">
        <span className="hero-panel__mesh" />
        <span className="hero-panel__ring hero-panel__ring--one" />
        <span className="hero-panel__ring hero-panel__ring--two" />
        <span className="orbit-badge orbit-badge--top">.NET</span>
        <span className="orbit-badge orbit-badge--left">C#</span>
        <span className="orbit-badge orbit-badge--right">&lt;/&gt;</span>
        <span className="orbit-badge orbit-badge--cloud">
          <Icon name="cloud" />
        </span>

        <HeroPortrait />
      </div>
    </section>
  )
}

export default HeroSection
