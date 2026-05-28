import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Linkedin, MessageSquare } from 'lucide-react'

const Contact = () => {
  const { t } = useTranslation()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }

  return (
    <section className="contact-page">
      <div className="contact-container">
        <motion.div className="contact-header" {...fadeUp}>
          <span className="section-eyebrow">{t('contactPage.eyebrow')}</span>
          <h1 className="contact-title">
            {t('contactPage.titleStart')} <br />
            <span className="italic-accent">{t('contactPage.titleAccent')}</span>
          </h1>
          <p className="contact-desc">{t('contactPage.desc')}</p>
        </motion.div>

        <div className="contact-grid">
          {/* Form Side */}
          <motion.div 
            className="contact-form-wrapper glass"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>{t('contactPage.form.name')}</label>
                  <input type="text" placeholder={t('contactPage.form.namePlaceholder')} required />
                </div>
                <div className="form-group">
                  <label>{t('contactPage.form.email')}</label>
                  <input type="email" placeholder={t('contactPage.form.emailPlaceholder')} required />
                </div>
              </div>

              <div className="form-group">
                <label>{t('contactPage.form.phone')}</label>
                <input type="tel" placeholder={t('contactPage.form.phonePlaceholder')} />
              </div>

              <div className="form-group">
                <label>{t('contactPage.form.message')}</label>
                <textarea rows="5" placeholder={t('contactPage.form.messagePlaceholder')} required></textarea>
              </div>

              <motion.button 
                type="submit" 
                className="btn btn-primary btn-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {submitted ? t('contactPage.form.success') : t('contactPage.form.submit')} 
                <Send size={18} style={{ marginLeft: '8px' }} />
              </motion.button>
            </form>
          </motion.div>

          {/* Info Side */}
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Help Card */}
            <div className="info-card glass">
              <h3>{t('contactPage.sidebar.helpTitle')}</h3>
              <p>{t('contactPage.sidebar.helpDesc')}</p>
              
              <div className="social-links-wrapper">
                <h4>{t('contactPage.sidebar.socialLinks')}</h4>
                <div className="social-icons">
                  <a href="#" className="social-icon"><Facebook size={20} /></a>
                  <a href="#" className="social-icon"><Instagram size={20} /></a>
                  <a href="#" className="social-icon"><Linkedin size={20} /></a>
                  <a href="#" className="social-icon"><MessageSquare size={20} /></a>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="info-card glass mt-32">
              <h3>{t('contactPage.sidebar.addressTitle')}</h3>
              
              <div className="contact-detail">
                <div className="detail-icon"><MapPin size={20} /></div>
                <div className="detail-text">
                  <p>{t('contactPage.sidebar.addressValue')}</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="detail-icon"><Phone size={20} /></div>
                <div className="detail-text">
                  <p>{t('contactPage.sidebar.phoneValue')}</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="detail-icon"><Mail size={20} /></div>
                <div className="detail-text">
                  <p>{t('contactPage.sidebar.emailValue')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
