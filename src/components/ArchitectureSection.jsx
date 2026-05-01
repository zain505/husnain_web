import Icon from './Icon.jsx'
import SectionHeader from './SectionHeader.jsx'
import {
  architectureBenefits,
  architectureDiagram,
} from '../data/portfolioData.js'

function ArchitectureSection() {
  return (
    <section className="section-block section-frame" id="architecture">
      <SectionHeader
        eyebrow="Architecture & Approach"
        title="Building Scalable & Resilient Systems"
      />

      <div className="architecture-layout">
        <div className="benefit-list">
          {architectureBenefits.map((benefit) => (
            <article className="benefit-card" key={benefit.title}>
              <div className="benefit-card__icon">
                <Icon name={benefit.icon} />
              </div>
              <div>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="diagram-card">
          <div className="diagram-grid">
            <div className="diagram-column">
              <h3>Clients</h3>
              {architectureDiagram.clients.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="diagram-arrow" />
            <div className="diagram-column diagram-column--gateway">
              <h3>API Gateway</h3>
            </div>
            <div className="diagram-arrow" />
            <div className="diagram-column diagram-column--services">
              <h3>Microservices</h3>
              <div className="service-grid">
                {architectureDiagram.services.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div className="diagram-arrow" />
            <div className="diagram-column">
              <h3>Data Layer</h3>
              {architectureDiagram.dataLayer.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="diagram-arrow" />
            <div className="diagram-column">
              <h3>External Services</h3>
              {architectureDiagram.externalServices.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div className="cloud-footer">{architectureDiagram.cloudLabel}</div>
        </div>
      </div>
    </section>
  )
}

export default ArchitectureSection
