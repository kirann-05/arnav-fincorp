import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowRight } from 'lucide-react'

const EMICalculator = () => {
  const { t, i18n } = useTranslation()

  // Calculator state
  const [loanAmount, setLoanAmount] = useState(1000000)
  const [interestRate, setInterestRate] = useState(12)
  const [loanTenure, setLoanTenure] = useState(5)

  // EMI calculation
  const emi = useMemo(() => {
    const r = interestRate / 12 / 100
    const n = loanTenure * 12
    if (r === 0) return loanAmount / n
    return (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
  }, [loanAmount, interestRate, loanTenure])
  
  const totalAmount = emi * loanTenure * 12
  const totalInterest = totalAmount - loanAmount

  const formatCurrency = (val) => '₹ ' + Math.round(val).toLocaleString('en-IN')

  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }

  return (
    <section className="section calculator" id="calculator">
      <motion.div className="section-header" {...fadeUp}>
        <span className="section-eyebrow">{t('calculator.eyebrow')}</span>
        <h2 className="section-title">
          {t('calculator.titleStart')}<br />
          <span className="italic-accent">{t('calculator.titleAccent')}</span> {t('calculator.titleEnd')}
        </h2>
      </motion.div>

      <motion.div className="calc-wrapper" {...fadeUp}>
        <div className="calc-grid">
          <div className="calc-inputs glass">
            <div className="calc-input-group">
              <div className="calc-input-header">
                <label>{t('calculator.loanAmount')}</label>
                <span className="calc-value">{formatCurrency(loanAmount)}</span>
              </div>
              <input type="range" min="50000" max="5000000" step="50000" value={loanAmount} onChange={e => setLoanAmount(Number(e.target.value))} className="calc-slider" />
              <div className="calc-range-labels"><span>₹50K</span><span>₹50L</span></div>
            </div>

            <div className="calc-input-group">
              <div className="calc-input-header">
                <label>{t('calculator.interestRate')}</label>
                <span className="calc-value">{interestRate}%</span>
              </div>
              <input type="range" min="5" max="24" step="0.5" value={interestRate} onChange={e => setInterestRate(Number(e.target.value))} className="calc-slider" />
              <div className="calc-range-labels"><span>5%</span><span>24%</span></div>
            </div>

            <div className="calc-input-group">
              <div className="calc-input-header">
                <label>{t('calculator.loanTenure')}</label>
                <span className="calc-value">{loanTenure} {i18n.language === 'en' ? 'Years' : 'वर्ष'}</span>
              </div>
              <input type="range" min="1" max="30" value={loanTenure} onChange={e => setLoanTenure(Number(e.target.value))} className="calc-slider" />
              <div className="calc-range-labels"><span>1</span><span>30</span></div>
            </div>
          </div>

          <div className="calc-result glass">
            <div className="calc-result-item highlight">
              <span className="calc-result-label">{t('calculator.monthlyEmi')}</span>
              <span className="calc-result-value">{formatCurrency(emi)}</span>
            </div>
            <div className="calc-result-divider" />
            <div className="calc-result-item">
              <span className="calc-result-label">{t('calculator.totalInterest')}</span>
              <span className="calc-result-value">{formatCurrency(totalInterest)}</span>
            </div>
            <div className="calc-result-item">
              <span className="calc-result-label">{t('calculator.totalAmount')}</span>
              <span className="calc-result-value">{formatCurrency(totalAmount)}</span>
            </div>
            <motion.button
              className="btn btn-primary btn-full"
              whileHover={{ scale: 1.03, boxShadow: '0 8px 30px rgba(255,140,0,0.4)' }}
              whileTap={{ scale: 0.97 }}
            >
              {t('calculator.applyForLoan')} <ArrowRight size={18} />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default EMICalculator
