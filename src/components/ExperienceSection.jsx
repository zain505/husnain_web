import SectionHeader from './SectionHeader.jsx'
import { experienceItems } from '../data/portfolioData.js'

const META_SEPARATOR = ' \u00b7 '

function formatMeta(...parts) {
  return parts.filter(Boolean).join(META_SEPARATOR)
}

function ExperienceSection() {
  return (
    <section className="section-block section-frame" id="experience">
      <SectionHeader eyebrow="Experience" title="Professional Journey" />

      <div className="experience-board">
        {experienceItems.map((item) => (
          <article className="experience-entry" key={item.company}>
            <div
              className={`experience-entry__logo experience-entry__logo--${item.logoClass ?? 'default'}`}
              aria-hidden="true"
            >
              <span>{item.logoLabel}</span>
            </div>

            <div className="experience-entry__body">
              {item.positions ? (
                <>
                  <header className="experience-entry__company-head">
                    <h3 className="experience-entry__company">{item.company}</h3>
                    <p className="experience-entry__meta">
                      {formatMeta(item.employmentType, item.totalDuration)}
                    </p>
                    {item.location ? (
                      <p className="experience-entry__location">
                        {item.location}
                      </p>
                    ) : null}
                  </header>

                  <div className="experience-role-list">
                    {item.positions.map((position, index) => (
                      <div
                        className="experience-role"
                        key={`${item.company}-${position.title}-${position.period}`}
                      >
                        <div className="experience-role__rail" aria-hidden="true">
                          <span className="experience-role__dot" />
                          {index < item.positions.length - 1 ? (
                            <span className="experience-role__line" />
                          ) : null}
                        </div>

                        <div className="experience-role__content">
                          <h4>{position.title}</h4>
                          {position.employmentType ? (
                            <p className="experience-role__type">
                              {position.employmentType}
                            </p>
                          ) : null}
                          <p className="experience-role__period">
                            {formatMeta(position.period, position.duration)}
                          </p>

                          <div className="experience-role__details">
                            {position.details.map((detail) => (
                              <p key={detail}>{detail}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="experience-entry__single">
                  <h3 className="experience-entry__title">{item.role}</h3>
                  <p className="experience-entry__company-line">
                    {formatMeta(item.company, item.employmentType)}
                  </p>
                  <p className="experience-entry__period">
                    {formatMeta(item.period, item.duration)}
                  </p>
                  {item.location ? (
                    <p className="experience-entry__location">{item.location}</p>
                  ) : null}

                  <div className="experience-entry__details">
                    {item.details.map((detail) => (
                      <p key={detail}>{detail}</p>
                    ))}
                  </div>
                  {item.skillsSummary ? (
                    <p className="experience-entry__skills">
                      {item.skillsSummary}
                    </p>
                  ) : null}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
