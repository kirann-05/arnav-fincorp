import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import ParticleCanvas from '../components/ParticleCanvas'
import LoanCard from '../components/LoanCard'
import TestimonialCarousel from '../components/TestimonialCarousel'
import EMICalculator from '../components/EMICalculator'
import SectionLabel from '../components/SectionLabel'
import { loanCardsData } from '../data/loans'

const HeroCarousel = () => {
  const images = [
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&q=80',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80',
    'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=700&q=80',
    'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=700&q=80',
  ]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex(p => (p + 1) % images.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="hero-carousel-container">
      <AnimatePresence initial={false}>
        <motion.img
          key={index}
          src={images[index]}
          alt="Arnav FinCorp loans"
          initial={{ x: 260, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -260, opacity: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          loading="eager"
          fetchpriority={index === 0 ? 'high' : 'auto'}
          decoding="async"
        />
      </AnimatePresence>
      {/* gradient overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,15,0.7) 0%, transparent 60%)', pointerEvents: 'none' }} />
      {/* dots */}
      <div style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 8, zIndex: 10 }}>
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            style={{
              height: 6, borderRadius: 3, border: 'none', cursor: 'pointer', padding: 0,
              transition: 'width 0.4s, background 0.4s',
              width: i === index ? 28 : 8,
              background: i === index ? 'var(--accent)' : 'rgba(255,255,255,0.3)',
            }}
          />
        ))}
      </div>
    </div>
  )
}

const Home = () => {
  const { t } = useTranslation()
  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0])
  const heroY = useTransform(scrollY, [0, 400], [0, 60])

  const fadeUp = {
    initial: { opacity: 0, y: 36 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }

  return (
    <>
      {/* ══ HERO ══ */}
      <section className="hero" id="hero">
        <ParticleCanvas />
        <div className="hero-glow" />
        <motion.div className="hero-grid container" style={{ y: heroY, opacity: heroOpacity }}>
          <div className="hero-content-left">
            <motion.div className="hero-badge w-fit" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="badge-dot" /> {t('hero.badge')}
            </motion.div>

            <motion.h1 className="hero-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
              {t('hero.titleStart')} <span className="italic-accent">{t('hero.titleAccent')}</span>
              <br />{t('hero.titleEnd')}
            </motion.h1>

            <motion.p className="hero-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
              {t('hero.subtitle')}
            </motion.p>

            <motion.div className="hero-ctas" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}>
              <motion.a href="#calculator" className="btn btn-primary" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                {t('hero.cta1')} →
              </motion.a>
              <Link to="/loans" className="btn btn-outline">
                {t('hero.cta2')} →
              </Link>
            </motion.div>

            <motion.div className="hero-stats" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }}>
              <div className="hero-stat">
                <span className="hero-stat-value">{t('hero.stat1Value')}</span>
                <span className="hero-stat-label">{t('hero.stat1Label')}</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-value">{t('hero.stat2Value')}</span>
                <span className="hero-stat-label">{t('hero.stat2Label')}</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-value">{t('hero.stat3Value')}</span>
                <span className="hero-stat-label">{t('hero.stat3Label')}</span>
              </div>
            </motion.div>
          </div>

          <motion.div className="hero-content-right" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 1 }}>
            <HeroCarousel />
          </motion.div>
        </motion.div>

        <div className="hero-decoration">
          <svg viewBox="0 0 200 200" className="hero-circle">
            <circle cx="100" cy="100" r="90" fill="none" stroke="var(--accent)" strokeWidth="0.5" opacity="0.3"/>
            <circle cx="100" cy="100" r="70" fill="none" stroke="var(--accent)" strokeWidth="0.3" opacity="0.2"/>
            <circle cx="100" cy="100" r="50" fill="none" stroke="var(--accent)" strokeWidth="0.3" opacity="0.15"/>
          </svg>
        </div>
      </section>

      {/* ══ LOAN PRODUCTS ══ */}
      <section className="section loans" id="loans">
        <motion.div className="section-header" {...fadeUp}>
          <SectionLabel>{t('products.eyebrow')}</SectionLabel>
          <h2 className="section-title">
            {t('products.titleStart')} <span className="italic-accent">{t('products.titleAccent')}</span> {t('products.titleEnd')}
          </h2>
        </motion.div>

        <motion.div
          className="loan-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
        >
          {loanCardsData.slice(0, 3).map((card) => {
            const data = t(`products.${card.key}`, { returnObjects: true })
            const loan = {
              name: data.title,
              description: data.desc,
              image: card.image,
              imageAlt: `${data.title} — Arnav FinCorp`,
              slug: card.slug,
              interestRate: data.rate,
              maxTenure: data.tenure,
            }
            return (
              <motion.div key={card.key} variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }}>
                <LoanCard loan={loan} />
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div style={{ textAlign: 'center', marginTop: 48 }} {...fadeUp}>
          <Link to="/loans" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            {t('products.exploreMore')} →
          </Link>
        </motion.div>
      </section>

      {/* ══ TRUST / STATS — SPLIT LAYOUT ══ */}
      <section className="section trust" id="trust">
        <div
          className="trust-split"
          style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.1fr)', gap: 56, alignItems: 'center' }}
        >
          {/* Left — Person image (humanizes the stats) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              borderRadius: 24,
              overflow: 'hidden',
              aspectRatio: '4 / 5',
              border: '1px solid var(--border-subtle)',
              boxShadow: 'var(--shadow-elevated)',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=900&q=80"
              alt="Arnav FinCorp customer receiving the keys to their first car"
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.55) 100%)' }} />
          </motion.div>

          {/* Right — Narrative + stats stacked */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
          <motion.div className="trust-split-left" {...fadeUp}>
            <span className="section-eyebrow">{t('trust.eyebrow')}</span>
            <h2 className="section-title">
              {t('trust.titleStart')} <span className="italic-accent">{t('trust.titleAccent')}</span>.
            </h2>
            <p className="trust-split-desc">{t('trust.description')}</p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
              <Link to="/about" className="btn btn-outline" style={{ padding: '10px 24px', fontSize: '0.9rem' }}>
                {t('common.ourStory')} →
              </Link>
              <span className="trust-badge">
                <span className="trust-badge-dot" />
                {t('common.rbiNbfc')}
              </span>
            </div>
          </motion.div>

          {/* Right — 2×2 Stats */}
          <motion.div className="trust-stats-grid" {...fadeUp}>
            {['stat1', 'stat2', 'stat3', 'stat4'].map((key) => {
              const s = t(`trust.${key}`, { returnObjects: true })
              return (
                <div key={key} className="stat-item">
                  <span className="stat-value">{s.prefix || ''}{s.value}{s.suffix || ''}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              )
            })}
          </motion.div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .section.trust .trust-split { grid-template-columns: 1fr !important; gap: 32px !important; }
          }
        `}</style>
      </section>

      {/* ══ EMI CALCULATOR ══ */}
      <EMICalculator />

      {/* ══ TESTIMONIALS ══ */}
      <section className="section testimonials" id="testimonials">
        <motion.div className="section-header" {...fadeUp}>
          <SectionLabel>{t('testimonials.eyebrow')}</SectionLabel>
          <h2 className="section-title">
            {t('testimonials.titleStart')} <span className="italic-accent">{t('testimonials.titleAccent')}</span><br />{t('testimonials.titleEnd')}
          </h2>
        </motion.div>
        <TestimonialCarousel items={t('testimonials.items', { returnObjects: true })} />
      </section>
    </>
  )
}

export default Home
