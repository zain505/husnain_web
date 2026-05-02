import Icon from './Icon.jsx'
import SectionHeader from './SectionHeader.jsx'
import { contactItems } from '../data/portfolioData.js'

const collaborationAreas = [
  {
    icon: 'layers',
    title: 'Architecture & Modernization',
    text: 'From greenfield platforms to legacy upgrades, with a focus on clarity, scalability, and delivery.',
  },
  {
    icon: 'gauge',
    title: 'Performance & Reliability',
    text: 'For teams improving system stability, throughput, and production readiness under real-world load.',
  },
  {
    icon: 'users',
    title: 'Hands-On Technical Leadership',
    text: 'Strong fit for squads that need engineering direction, mentoring, and execution from the same person.',
  },
]

const engagementPoints = [
  'Leading platform builds and complex enterprise integrations.',
  'Improving architecture, maintainability, and delivery confidence.',
  'Partnering with product and engineering teams to ship at scale.',
]

function ContactSection() {
  const primaryContact =
    contactItems.find((item) => item.title === 'Email') ?? contactItems[0]
  const linkedInContact =
    contactItems.find((item) => item.title === 'LinkedIn') ?? contactItems[0]

  return (
    <section className="section-block section-frame" id="contact">
      <SectionHeader
        eyebrow="Contact"
        title="Let's Talk About What Your Team Needs Next"
      />

      <div className="contact-layout">
        <article className="contact-hero">
          <span className="contact-hero__pill">
            Based in Dubai, collaborating with teams across regions
          </span>

          <h3>
            Need someone who can move from architecture decisions to production
            delivery?
          </h3>
          <p>
            I work best with teams building high-scale products, modernizing
            enterprise systems, or strengthening delivery across backend,
            cloud, and frontend layers.
          </p>

          <div className="contact-hero__actions">
            <a className="button button--primary" href={primaryContact.href}>
              Email Me
              <Icon name="arrow" />
            </a>
            <a
              className="button button--ghost"
              href={linkedInContact.href}
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn
              <Icon name="arrow" />
            </a>
          </div>

          <div className="contact-focus-grid">
            {collaborationAreas.map((area) => (
              <div className="contact-focus-card" key={area.title}>
                <div className="contact-focus-card__icon">
                  <Icon name={area.icon} />
                </div>
                <div>
                  <strong>{area.title}</strong>
                  <span>{area.text}</span>
                </div>
              </div>
            ))}
          </div>
        </article>

        <div className="contact-rail">
          <aside className="contact-card">
            <p className="contact-card__eyebrow">Direct Contact</p>
            <h3 className="contact-card__title">Reach out through the channel that fits best.</h3>
            <p className="contact-card__text">
              Whether you are hiring, planning a new platform, or looking for a
              senior engineer to strengthen delivery, I'd be glad to connect.
            </p>

            {contactItems.map((item) => {
              const isExternal = item.href.startsWith('http')

              return (
                <a
                  className="contact-item"
                  href={item.href}
                  key={item.title}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noreferrer' : undefined}
                >
                  <div className="contact-item__icon">
                    <Icon name={item.icon} />
                  </div>
                  <div className="contact-item__body">
                    <strong>{item.title}</strong>
                    <span>{item.value}</span>
                    <small>{item.note}</small>
                  </div>
                  <div className="contact-item__arrow">
                    <Icon name="arrow" />
                  </div>
                </a>
              )
            })}
          </aside>

          <aside className="opportunity-card">
            <div className="opportunity-card__icon">
              <Icon name="rocket" />
            </div>
            <p className="opportunity-card__eyebrow">Best Fit</p>
            <h3>Where I can add value quickly</h3>
            <p>
              Especially useful when your team needs a senior engineer who can
              balance architecture, execution, and collaboration without losing
              momentum.
            </p>

            <ul className="opportunity-list">
              {engagementPoints.map((point) => (
                <li key={point}>
                  <span className="opportunity-list__dot" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <a className="button button--ghost" href="#projects">
              View Relevant Work
              <Icon name="arrow" />
            </a>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
