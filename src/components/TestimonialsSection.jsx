import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'
import SectionHeader from './SectionHeader.jsx'
import { testimonials } from '../data/portfolioData.js'

function getCardsPerView() {
  if (typeof window === 'undefined') {
    return 3
  }

  if (window.innerWidth <= 780) {
    return 1
  }

  if (window.innerWidth <= 1260) {
    return 2
  }

  return 3
}

function getInitials(name) {
  const parts = name.trim().split(/\s+/)

  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase()
  }

  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
}

function createPages(items, pageSize) {
  const pages = []

  for (let index = 0; index < items.length; index += pageSize) {
    pages.push(items.slice(index, index + pageSize))
  }

  return pages
}

function TestimonialsSection() {
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

  const pages = createPages(testimonials, cardsPerView)
  const pageCount = pages.length

  useEffect(() => {
    setActivePage((currentPage) => Math.min(currentPage, pageCount - 1))
  }, [pageCount])

  const canGoPrevious = activePage > 0
  const canGoNext = activePage < pageCount - 1

  return (
    <section className="section-block section-frame" id="testimonials">
      <SectionHeader eyebrow="Testimonials" title="Recommendations That Matter" />

      <div className="testimonials-toolbar">
        <p className="testimonials-toolbar__text">
          Real LinkedIn recommendations from teammates, mentors, and friends.
        </p>

        <div className="testimonials-nav">
          <span className="testimonials-nav__count">
            {String(activePage + 1).padStart(2, '0')} /{' '}
            {String(pageCount).padStart(2, '0')}
          </span>

          <button
            aria-label="Show previous testimonials"
            className="testimonials-nav__button"
            disabled={!canGoPrevious}
            onClick={() => setActivePage((page) => page - 1)}
            type="button"
          >
            <Icon name="chevron-left" />
          </button>

          <button
            aria-label="Show next testimonials"
            className="testimonials-nav__button"
            disabled={!canGoNext}
            onClick={() => setActivePage((page) => page + 1)}
            type="button"
          >
            <Icon name="chevron-right" />
          </button>
        </div>
      </div>

      <div className="testimonials-slider">
        <div className="testimonials-slider__viewport">
          <div
            className="testimonials-slider__track"
            style={{ transform: `translateX(-${activePage * 100}%)` }}
          >
            {pages.map((page, pageIndex) => (
              <div
                className="testimonials-page"
                key={`page-${pageIndex + 1}`}
                style={{ '--testimonial-columns': cardsPerView }}
              >
                {page.map((item) => (
                  <article
                    className="testimonial-card testimonial-card--recommendation"
                    key={`${item.name}-${item.date}`}
                  >
                    <div className="testimonial-card__topline">
                      <span className="testimonial-card__badge">
                        {item.relationship}
                      </span>
                      <span className="testimonial-card__date">
                        {item.date}
                      </span>
                    </div>

                    <div className="testimonial-card__footer">
                      <div className="avatar">{getInitials(item.name)}</div>
                      <div>
                        <strong>{item.name}</strong>
                        <span>{item.role}</span>
                        <span className="testimonial-card__meta">
                          {item.context}
                        </span>
                      </div>
                    </div>

                    <p className="testimonial-card__quote">{item.quote}</p>
                    <span className="quote-mark">"</span>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="slider-dots">
          {pages.map((_, index) => (
            <button
              aria-label={`Show testimonial page ${index + 1}`}
              className={index === activePage ? 'is-active' : ''}
              key={`dot-${index + 1}`}
              onClick={() => setActivePage(index)}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
