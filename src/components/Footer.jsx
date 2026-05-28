import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="nav-brand">
              <div className="nav-logo-icon">
                <img src="/assets/logo-icon.png" alt="Arnav FinCorp Logo" className="nav-logo-image" />
              </div>
            </Link>
            <p className="footer-tagline">{t('footer.tagline')}</p>
          </div>

          <div className="footer-columns">
            <div className="footer-col">
              <h4>{t('footer.products')}</h4>
              <Link to="/loan/homeLoan">{t('footer.homeLoan')}</Link>
              <Link to="/loan/businessLoan">{t('footer.businessLoan')}</Link>
              <Link to="/loan/personalLoan">{t('footer.personalLoan')}</Link>
              <Link to="/loan/msmeLoan">{t('footer.msmeLoan')}</Link>
              <Link to="/loan/goldLoan">{t('footer.goldLoan')}</Link>
              <Link to="/loans" style={{ color: 'var(--accent)', fontWeight: 700, marginTop: 8, display: 'block' }}>View All Loans</Link>
            </div>
            <div className="footer-col">
              <h4>{t('footer.company')}</h4>
              <Link to="/about">{t('footer.aboutUs')}</Link>
              <a href="#">{t('footer.careers')}</a>
              <a href="#">{t('footer.branches')}</a>
              <Link to="/contact">{t('footer.contact')}</Link>
              <Link to="#testimonials">{t('nav.feedback')}</Link>
            </div>
            <div className="footer-col">
              <h4>{t('footer.legal')}</h4>
              <Link to="/legal#terms">{t('footer.termsConditions')}</Link>
              <Link to="/legal#privacy">{t('footer.privacyPolicy')}</Link>
              <Link to="/legal#grievance">{t('footer.grievance')}</Link>
              <Link to="/legal#fair-practice">{t('footer.fairPractice')}</Link>
              <Link to="/legal#interest-rate">Interest Rate Policy</Link>
              <Link to="/legal#kyc-aml">KYC & AML</Link>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border-subtle)', marginTop: 32, paddingTop: 24, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <p style={{ color: 'var(--text-tertiary)', fontSize: 11, lineHeight: 1.6, maxWidth: 880, margin: '0 auto', textAlign: 'center', opacity: 0.8 }}>
            Arnav FinCorp Private Limited is an NBFC registered with the Reserve Bank of India (RBI).
            Loans are subject to credit appraisal. Interest rates are indicative.
            Read all terms before availing any loan product.
          </p>
          <p style={{ color: 'var(--text-tertiary)', fontSize: 12, textAlign: 'center', fontWeight: 500 }}>
            © {new Date().getFullYear()} Arnav FinCorp Private Limited · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
