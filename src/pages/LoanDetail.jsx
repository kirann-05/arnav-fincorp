import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowLeft, CheckCircle2, FileText, Sparkles, ArrowRight } from 'lucide-react'
import EMICalculator from '../components/EMICalculator'
import ParticleCanvas from '../components/ParticleCanvas'
import SectionLabel from '../components/SectionLabel'
import { loanCardsData } from '../data/loans'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
}

const LoanDetail = () => {
  const { id } = useParams()
  const { t } = useTranslation()

  const loan = loanCardsData.find((l) => l.slug === id || l.key === id)
  const data = loan ? t(`products.${loan.key}`, { returnObjects: true }) : null

  if (!data) {
    return (
      <div className="about-page" style={{ paddingTop: 200, textAlign: 'center' }}>
        <h1 className="section-title" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>{t('loanDetail.notFoundTitle')}</h1>
        <p style={{ color: 'var(--text-secondary)', marginTop: 16 }}>{t('loanDetail.notFoundDesc')}</p>
        <Link to="/loans" className="btn btn-primary" style={{ marginTop: 24, display: 'inline-flex' }}>
          <ArrowLeft size={18} /> {t('loanDetail.notFoundCta')}
        </Link>
      </div>
    )
  }

  return (
    <div className="about-page">
      <ParticleCanvas />

      {/* ══ HERO ══ */}
      <section className="about-hero" style={{ paddingBottom: 48, textAlign: 'left' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {/* Breadcrumb */}
          <motion.nav
            aria-label="Breadcrumb"
            {...fadeUp}
            style={{ marginBottom: 20, fontSize: '0.78rem', color: 'var(--text-tertiary)', letterSpacing: '0.05em' }}
          >
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>{t('common.home')}</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link to="/loans" style={{ color: 'inherit', textDecoration: 'none' }}>{t('loanDetail.breadcrumbLoans')}</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--text-secondary)' }}>{data.title}</span>
          </motion.nav>

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1fr)', gap: 48, alignItems: 'center' }} className="loan-detail-hero-grid">
            {/* Left: text */}
            <motion.div {...fadeUp}>
              <SectionLabel>{t('products.eyebrow')}</SectionLabel>
              <h1
                className="about-hero-title"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', textAlign: 'left', marginLeft: 0, marginTop: 16, marginBottom: 20 }}
              >
                {data.title.split(' ').map((word, i) =>
                  word.toLowerCase() === 'loan'
                    ? <span key={i} className="italic-accent">{word} </span>
                    : <span key={i}>{word} </span>
                )}
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 32, maxWidth: 540 }}>
                {data.desc}
              </p>

              {/* Stat tiles */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 32, maxWidth: 480 }}>
                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 16, padding: '18px 20px' }}>
                  <span style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--text-tertiary)', textTransform: 'uppercase', marginBottom: 8 }}>
                    {t('products.labelRate')}
                  </span>
                  <span style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--accent)' }}>{data.rate}</span>
                </div>
                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 16, padding: '18px 20px' }}>
                  <span style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--text-tertiary)', textTransform: 'uppercase', marginBottom: 8 }}>
                    {t('products.labelTenure')}
                  </span>
                  <span style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--accent)' }}>{data.tenure}</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary" style={{ padding: '14px 28px' }}>
                  {t('products.applyNow')} <ArrowRight size={16} />
                </Link>
                <a href="#calculator" className="btn btn-outline" style={{ padding: '14px 28px' }}>
                  {t('common.calculateEMI')}
                </a>
              </div>
            </motion.div>

            {/* Right: hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'relative',
                borderRadius: 24,
                overflow: 'hidden',
                aspectRatio: '4 / 3',
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-elevated)',
              }}
            >
              <img src={loan.image} alt={`${data.title} — Arnav FinCorp`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.55) 100%)' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ BODY ══ */}
      <div className="about-grid" style={{ paddingTop: 24 }}>

        {/* ── Eligibility / Documents / Benefits — 3-col ── */}
        <motion.div className="about-val-grid" {...fadeUp} style={{ marginBottom: 40 }}>
          <div className="about-card">
            <div className="about-card-icon"><CheckCircle2 size={22} /></div>
            <p className="about-card-eyebrow">{t('loanDetail.eligibilityEyebrow')}</p>
            <h3 className="about-card-title" style={{ fontSize: '1.15rem' }}>{t('loanDetail.eligibilityTitle')}</h3>
            <p className="about-card-body">{data.eligibility}</p>
          </div>
          <div className="about-card">
            <div className="about-card-icon"><FileText size={22} /></div>
            <p className="about-card-eyebrow">{t('loanDetail.documentsEyebrow')}</p>
            <h3 className="about-card-title" style={{ fontSize: '1.15rem' }}>{t('loanDetail.documentsTitle')}</h3>
            <p className="about-card-body">{data.documents}</p>
          </div>
          <div className="about-card">
            <div className="about-card-icon"><Sparkles size={22} /></div>
            <p className="about-card-eyebrow">{t('loanDetail.benefitsEyebrow')}</p>
            <h3 className="about-card-title" style={{ fontSize: '1.15rem' }}>{t('loanDetail.benefitsTitle')}</h3>
            <p className="about-card-body">{data.benefits}</p>
          </div>
        </motion.div>

        {/* ── EMI Calculator anchor ── */}
        <div id="calculator" style={{ scrollMarginTop: 100, marginBottom: 40 }}>
          <EMICalculator />
        </div>

        {/* ── CTA ── */}
        <motion.div className="about-cta" {...fadeUp}>
          <h2>{t('loanDetail.ctaTitle', { name: data.title })}</h2>
          <p>{t('loanDetail.ctaDesc')}</p>
          <div className="about-cta-btns">
            <Link to="/contact" className="about-cta-btn-primary">{t('common.applyNow')} →</Link>
            <Link to="/loans" className="about-cta-btn-secondary">{t('common.exploreOtherLoans')}</Link>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .loan-detail-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </div>
  )
}

export default LoanDetail
