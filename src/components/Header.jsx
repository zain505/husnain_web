import Icon from './Icon.jsx'
import { navItems } from '../data/portfolioData.js'

function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="#home">
        MH.
      </a>

      <nav className="topnav" aria-label="Primary">
        {navItems.map(([href, label]) => (
          <a key={href} href={`#${href}`}>
            {label}
          </a>
        ))}
      </nav>

      <a className="download-link" href="#contact">
        Download CV
        <Icon name="download" />
      </a>
    </header>
  )
}

export default Header
