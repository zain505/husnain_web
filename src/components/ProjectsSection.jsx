import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'
import SectionHeader from './SectionHeader.jsx'
import { projects } from '../data/portfolioData.js'

function getCardsPerView() {
  if (typeof window === 'undefined') {
    return 2
  }

  if (window.innerWidth <= 920) {
    return 1
  }

  return 2
}

function createPages(items, pageSize) {
  const pages = []

  for (let index = 0; index < items.length; index += pageSize) {
    pages.push(items.slice(index, index + pageSize))
  }

  return pages
}

function ProjectsSection() {
  const [cardsPerView, setCardsPerView] = useState(getCardsPerView)
  const [activePage, setActivePage] = useState(0)

  useEffect(() => {
    function handleResize() {
      setCardsPerView(getCardsPerView())
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const pages = createPages(projects, cardsPerView)
  const pageCount = pages.length
  const displayPageCount = Math.max(pageCount, 1)

  useEffect(() => {
    setActivePage((currentPage) =>
      Math.min(currentPage, Math.max(pageCount - 1, 0)),
    )
  }, [pageCount])

  const canGoPrevious = activePage > 0
  const canGoNext = activePage < pageCount - 1

  return (
    <section className="section-block section-frame" id="projects">
      <SectionHeader
        eyebrow="LinkedIn Projects"
        title="Projects Highlighted Across My Career"
      />

      <div className="projects-toolbar">
        <p className="projects-toolbar__text">
          Updated from the public LinkedIn profile, spanning current enterprise
          platforms and earlier foundational systems.
        </p>

        <div className="projects-nav">
          <span className="projects-nav__count">
            {String(activePage + 1).padStart(2, '0')} /{' '}
            {String(displayPageCount).padStart(2, '0')}
          </span>

          <button
            aria-label="Show previous projects"
            className="projects-nav__button"
            disabled={!canGoPrevious}
            onClick={() => setActivePage((page) => page - 1)}
            type="button"
          >
            <Icon name="chevron-left" />
          </button>

          <button
            aria-label="Show next projects"
            className="projects-nav__button"
            disabled={!canGoNext}
            onClick={() => setActivePage((page) => page + 1)}
            type="button"
          >
            <Icon name="chevron-right" />
          </button>
        </div>
      </div>

      <div className="projects-slider">
        <div className="projects-slider__viewport">
          <div
            className="projects-slider__track"
            style={{ transform: `translateX(-${activePage * 100}%)` }}
          >
            {pages.map((page, pageIndex) => (
              <div
                className="projects-page"
                key={`project-page-${pageIndex + 1}`}
                style={{ '--project-columns': cardsPerView }}
              >
                {page.map((project) => (
                  <article
                    className="project-card project-card--spotlight"
                    key={`${project.title}-${project.period}`}
                  >
                    <div className="project-card__topline">
                      <span className="project-card__badge">
                        {project.category}
                      </span>
                      <span className="project-card__period">
                        {project.period}
                      </span>
                    </div>

                    <div className="project-card__hero">
                      <div className="project-card__icon">
                        <Icon name={project.icon} />
                      </div>

                      <div className="project-card__heading">
                        <h3>{project.title}</h3>
                        <p className="project-card__summary">
                          {project.summary}
                        </p>
                      </div>
                    </div>

                    {project.highlights?.length ? (
                      <ul className="project-card__highlights">
                        {project.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    ) : null}

                    {project.tags?.length ? (
                      <div className="pill-list project-card__tags">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="slider-dots">
          {pages.map((_, index) => (
            <button
              aria-label={`Show project page ${index + 1}`}
              className={index === activePage ? 'is-active' : ''}
              key={`project-dot-${index + 1}`}
              onClick={() => setActivePage(index)}
              type="button"
            />
          ))}
        </div>
      </div>

      <div className="section-actions section-actions--projects">
        <a
          className="button button--ghost"
          href="https://www.linkedin.com/in/muhammad-husnain-ashraf-7b637037/"
          rel="noreferrer"
          target="_blank"
        >
          View Full LinkedIn Profile
          <Icon name="arrow" />
        </a>
      </div>
    </section>
  )
}

export default ProjectsSection
