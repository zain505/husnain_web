import Icon from './Icon.jsx'
import { statItems } from '../data/portfolioData.js'

function StatsSection() {
  return (
    <section className="stats-ribbon section-frame">
      {statItems.map((item) => (
        <article className="stat-card" key={item.label}>
          <div className="stat-card__icon">
            <Icon name={item.icon} />
          </div>
          <div>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        </article>
      ))}
    </section>
  )
}

export default StatsSection
