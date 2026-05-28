import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../context/ThemeContext'
import { Sun, Moon } from 'lucide-react'

const Navbar = () => {
  const { t, i18n } = useTranslation()
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const toggleLanguage = () => {
    const next = i18n.language === 'en' ? 'hi' : 'en'
    i18n.changeLanguage(next)
    try { window.localStorage.setItem('arnav-lang', next) } catch (e) { /* ignore quota errors */ }
  }

  const isHomePage = location.pathname === '/'

  const NavLink = ({ to, children, isAnchor }) => {
    if (isAnchor) {
      if (!isHomePage) {
        return <Link to={`/${to}`} onClick={() => setMobileMenuOpen(false)}>{children}</Link>
      }
      return <a href={to} onClick={() => setMobileMenuOpen(false)}>{children}</a>
    }
    return <Link to={to} onClick={() => setMobileMenuOpen(false)}>{children}</Link>
  }

  return (
    <nav className={`navbar glass-strong ${scrolled ? 'navbar--scrolled' : ''}`} id="main-nav">
      <Link to="/" className="nav-brand">
        <div className="nav-logo-icon">
          <img src="/assets/logo-icon.png" alt="Arnav FinCorp Logo" className="nav-logo-image" />
        </div>
      </Link>

      <div className="nav-links-wrapper">
        <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <NavLink to="/">{t('nav.home')}</NavLink>
          <NavLink to="/loans">{t('nav.loanProducts')}</NavLink>
          <NavLink to="/about">{t('nav.about')}</NavLink>
          <NavLink to="#calculator" isAnchor>{t('nav.calculator')}</NavLink>
          <NavLink to="#testimonials" isAnchor>{t('nav.feedback')}</NavLink>
        </div>
      </div>

      <div className="nav-actions">
        {/* Theme Toggle */}
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          <motion.div
            key={theme}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </motion.div>
        </button>

        {/* Language Toggle */}
        <div className="lang-toggle" onClick={toggleLanguage}>
          <div className={`lang-slider-thumb ${i18n.language === 'hi' ? 'hi' : 'en'}`} />
          <span className={i18n.language === 'en' ? 'active' : ''}>EN</span>
          <span className={i18n.language === 'hi' ? 'active' : ''}>हिं</span>
        </div>

        {/* CTA */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/contact" className="nav-cta">
            {t('nav.contactUs')}
          </Link>
        </motion.div>

        {/* Mobile Hamburger */}
        <button className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu">
          <span className={mobileMenuOpen ? 'open' : ''} />
          <span className={mobileMenuOpen ? 'open' : ''} />
          <span className={mobileMenuOpen ? 'open' : ''} />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
