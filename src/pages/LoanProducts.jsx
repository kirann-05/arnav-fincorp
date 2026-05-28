import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import LoanCard from '../components/LoanCard'
import ParticleCanvas from '../components/ParticleCanvas'
import SectionLabel from '../components/SectionLabel'
import { loanCardsData } from '../data/loans'

const LoanProducts = () => {
  const { t } = useTranslation()

  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }

  return (
    <div style={{ minHeight: '100vh', paddingTop: 120, paddingBottom: 80, position: 'relative' }}>
      <ParticleCanvas />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 6%', position: 'relative', zIndex: 2 }}>

        {/* Header */}
        <motion.div className="section-header" {...fadeUp}>
          <SectionLabel>{t('products.eyebrow')}</SectionLabel>
          <h1 className="section-title" style={{ marginTop: 16 }}>
            {t('products.titleStart')} <span className="italic-accent">{t('products.titleAccent')}</span> {t('products.titleEnd')}
          </h1>
          <p style={{ color: 'var(--text-secondary)', marginTop: 16, maxWidth: 560, margin: '16px auto 0' }}>
            Discover financial solutions tailored for every stage of your life and business journey.
          </p>
        </motion.div>

        {/* Grid — all 8 cards, strict 3-col */}
        <motion.div
          className="loan-grid"
          initial="hidden"
          animate="show"
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
        >
          {loanCardsData.map((card) => {
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
              <motion.div
                key={card.key}
                variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }}
              >
                <LoanCard loan={loan} />
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </div>
  )
}

export default LoanProducts
