import Icon from './Icon.jsx'
import SectionHeader from './SectionHeader.jsx'
import { expertiseCards } from '../data/portfolioData.js'

function ExpertiseSection() {
  return (
    <section className="section-block section-frame" id="expertise">
      <SectionHeader
        eyebrow="Expertise"
        title="Tech Stack & Core Competencies"
      />

      <div className="stack-grid">
        {expertiseCards.map((card) => (
          <article className="stack-card" key={card.title}>
            <div className="stack-card__icon">
              <Icon name={card.icon} />
            </div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
            <div className="pill-list">
              {card.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ExpertiseSection
