import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`ff-header ${scrolled ? 'ff-header--scrolled' : ''}`}>
      <div className="ff-container ff-header__in">
        <Link to="/" className="ff-logo">
          FIT<span>FLEX</span>
        </Link>

        <nav className={`ff-nav ${menuOpen ? 'ff-nav--open' : ''}`}>
          <ul className="ff-nav__list">
            {navItems.map((item) => (
              <li key={item.label} className={item.children ? 'has-children' : ''}>
                <NavLink to={item.to} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </NavLink>
                {item.children && (
                  <ul className="ff-nav__sub">
                    {item.children.map((c) => (
                      <li key={c.label}>
                        <NavLink to={c.to} onClick={() => setMenuOpen(false)}>
                          {c.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="ff-header__right">
          <Link to="/contact" className="ff-btn">CONTACT</Link>
          <button
            className={`ff-burger ${menuOpen ? 'is-open' : ''}`}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
