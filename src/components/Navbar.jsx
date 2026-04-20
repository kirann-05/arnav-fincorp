"use client";
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Download } from 'lucide-react';
import Link from 'next/link';
import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'hi' : 'en');
  };

  return (
    <nav className="navbar glass-panel">
      <Link href="/" className="navbar-brand" style={{ textDecoration: 'none' }}>
        <div className="logo-icon">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <span className="brand-text">Arnav Fincorp</span>
      </Link>

      <div className="navbar-links">
        <Link href="/">{t('nav.personal')}</Link>
        <Link href="/about">{t('nav.about')}</Link>
        <Link href="/services">{t('nav.services')}</Link>
      </div>

      <div className="navbar-actions">
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        <div className="lang-slider" onClick={toggleLanguage}>
          <div className={`slider-thumb ${i18n.language === 'hi' ? 'hi' : 'en'}`}></div>
          <span className={i18n.language === 'en' ? 'active' : ''}>EN</span>
          <span className={i18n.language === 'hi' ? 'active' : ''}>HI</span>
        </div>

        <button className="pill-button download-btn">
          <span>{t('nav.download')}</span>
          <Download size={16} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
