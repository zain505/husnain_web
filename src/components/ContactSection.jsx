import Icon from './Icon.jsx'
import SectionHeader from './SectionHeader.jsx'
import { contactItems } from '../data/portfolioData.js'

function ContactSection() {
  return (
    <section className="section-block section-frame" id="contact">
      <SectionHeader
        eyebrow="Get In Touch"
        title="Let's Build Something Great Together"
      />

      <div className="contact-layout">
        <aside className="contact-card">
          {contactItems.map((item) => (
            <a className="contact-item" href={item.href} key={item.title}>
              <div className="contact-item__icon">
                <Icon name={item.icon} />
              </div>
              <div>
                <strong>{item.title}</strong>
                <span>{item.value}</span>
              </div>
            </a>
          ))}
        </aside>

        <form className="contact-form" action="#">
          <div className="form-grid">
            <label>
              <span>Your Name</span>
              <input type="text" name="name" placeholder="Your Name" />
            </label>
            <label>
              <span>Your Email</span>
              <input type="email" name="email" placeholder="Your Email" />
            </label>
          </div>
          <label>
            <span>Subject</span>
            <input type="text" name="subject" placeholder="Subject" />
          </label>
          <label>
            <span>Your Message</span>
            <textarea name="message" rows="5" placeholder="Your Message" />
          </label>
          <button className="button button--primary button--submit" type="submit">
            Send Message
            <Icon name="arrow" />
          </button>
        </form>

        <aside className="opportunity-card">
          <div className="opportunity-card__icon">
            <Icon name="rocket" />
          </div>
          <h3>Open to Opportunities</h3>
          <p>
            I'm open to exciting opportunities where I can contribute, learn,
            and grow.
          </p>
          <a className="button button--ghost" href="#home">
            Let's Connect
            <Icon name="arrow" />
          </a>
        </aside>
      </div>
    </section>
  )
}

export default ContactSection
