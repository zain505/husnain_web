import Icon from './Icon.jsx'
import SectionHeader from './SectionHeader.jsx'
import { projectCards } from '../data/portfolioData.js'

function ProjectsSection() {
  return (
    <section className="section-block section-frame" id="projects">
      <SectionHeader eyebrow="Featured Projects" title="Key Projects & Systems" />

      <div className="projects-grid">
        {projectCards.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-card__icon">
              <Icon name={project.icon} />
            </div>
            <h3>{project.title}</h3>
            <p>{project.text}</p>
            <div className="pill-list">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="metric-grid">
              {project.metrics.map(([value, label]) => (
                <div key={`${project.title}-${label}`}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="section-actions">
        <a className="button button--ghost" href="#architecture">
          View More Projects
          <Icon name="arrow" />
        </a>
      </div>
    </section>
  )
}

export default ProjectsSection
