import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useTheme } from './context/ThemeContext'
import { Shield, Zap, Globe, BarChart3, ArrowRight, TrendingUp } from 'lucide-react'
import FloatingCard3D from './components/FloatingCard3D'
import './App.css'

const AnimatedNumber = ({ value }) => {
  return <span>₹{Math.round(value).toLocaleString('en-IN')}</span>
}

const TiltCard = ({ children, className, ...props }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      {...props}
    >
      <div style={{ transform: "translateZ(30px)", width: "100%", height: "100%", display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
    </motion.div>
  );
};

const App = () => {
  const { t, i18n } = useTranslation()
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  
  // Calculator State
  const [principal, setPrincipal] = useState(500000)
  const [years, setYears] = useState(10)
  
  // Compound interest: A = P(1 + r/n)^(nt). Assuming 12% annual return.
  const rate = 0.12;
  const calculatedTotal = principal * Math.pow(1 + rate, years);

  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, 100])
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLanguage = (e) => {
    e.stopPropagation();
    const nextLang = i18n.language === 'en' ? 'hi' : 'en'
    i18n.changeLanguage(nextLang)
  }

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <div className="app-container">
      {/* Massive Sweeping Gradients */}
      <div className="ambient-gradient color-primary position-top-left" />
      <div className="ambient-gradient color-secondary position-center" />
      <div className="ambient-gradient color-tertiary position-bottom-right" />

      {/* Navbar */}
      <nav className={`navbar glass ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-logo">
          <div className="logo-dot" />
          <span>ARNAV FINCORP</span>
        </div>
        
        <div className="nav-links">
          <a href="#features">{t('nav.features')}</a>
          <a href="#calculator">{t('nav.calculator')}</a>
          <a href="#testimonials">{t('nav.reviews')}</a>
        </div>

        <div className="nav-actions">
          <button className="lang-toggle glass" onClick={toggleLanguage}>
            <span style={{ pointerEvents: 'none' }}>{i18n.language === 'en' ? 'हिन्दी' : 'EN'}</span>
          </button>
          <motion.button 
            className="cta-button primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('nav.getStarted')}
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <motion.div 
          className="hero-content"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <motion.div 
            className="hero-badge glass"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="badge-dot"></span> Announcing our New Platform. Read more →
          </motion.div>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Accelerating digital <br />
            <span className="text-gradient">financial experiences</span>
          </motion.h1>
          
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Arnav FinCorp enables fast, accurate, and transparent <br />
            financial management built for the next generation.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.button 
              className="cta-button primary lg"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 140, 0, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Get early access
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Hero Visual 3D Section */}
      <section className="hero-visual-section">
        <div className="hero-visual-container">
          <FloatingCard3D />
        </div>
      </section>

      {/* Bento Grid Features */}
      <section id="features" className="features">
        <motion.div className="section-header" {...fadeIn}>
          <span className="section-eyebrow text-saffron">FOR EVERYONE</span>
          <h2 className="section-title">Precision Finance.<br />Accuracy to the penny.</h2>
        </motion.div>

        <motion.div 
          className="bento-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <TiltCard className="bento-card large glass" variants={staggerItem}>
            <div className="bento-icon-wrapper"><Zap className="text-saffron" size={24} /></div>
            <h3>Lightning Fast Payments</h3>
            <p>Experience zero-latency transactions globally with our optimized edge infrastructure.</p>
            <div className="card-viz" style={{ marginTop: 'auto' }}>
              <motion.div className="bar saffron" initial={{ width: 0 }} whileInView={{ width: '80%' }} transition={{ duration: 1, delay: 0.5 }} />
              <motion.div className="bar" initial={{ width: 0 }} whileInView={{ width: '40%' }} transition={{ duration: 1, delay: 0.7 }} />
              <motion.div className="bar saffron" initial={{ width: 0 }} whileInView={{ width: '60%' }} transition={{ duration: 1, delay: 0.9 }} />
            </div>
          </TiltCard>
          
          <TiltCard className="bento-card glass" variants={staggerItem}>
            <div className="bento-icon-wrapper"><Shield className="text-saffron" size={24} /></div>
            <h3>Payment Integrity</h3>
            <p>Monitor underpayments and overpayments with absolute precision.</p>
          </TiltCard>

          <TiltCard className="bento-card glass" variants={staggerItem}>
            <div className="bento-icon-wrapper"><Globe className="text-saffron" size={24} /></div>
            <h3>Revenue Intelligence</h3>
            <p>Unprecedented visibility into your cash flows with actionable insights.</p>
          </TiltCard>

          <TiltCard className="bento-card medium glass" variants={staggerItem}>
            <div className="bento-icon-wrapper"><BarChart3 className="text-saffron" size={24} /></div>
            <h3>Predictive Analytics</h3>
            <p>Understand how much wealth will be accumulated over your lifetime.</p>
          </TiltCard>
        </motion.div>
      </section>

      {/* Working Calculator Section */}
      <section id="calculator" className="calculator-sec">
        <motion.div className="section-header" {...fadeIn}>
          <span className="section-eyebrow text-saffron">GROWTH PLANNER</span>
          <h2 className="section-title">Project your wealth.<br />See the future.</h2>
        </motion.div>

        <motion.div className="calc-container glass" {...fadeIn}>
          <div className="calc-grid">
            <div className="calc-inputs">
              <div className="input-group">
                <div className="input-header">
                  <label>{t('calculator.principal')}</label>
                  <div className="val"><AnimatedNumber value={principal} /></div>
                </div>
                <input 
                  type="range" 
                  min="10000" 
                  max="5000000" 
                  step="10000"
                  value={principal} 
                  onChange={(e) => setPrincipal(Number(e.target.value))}
                  className="saffron-slider" 
                />
              </div>
              <div className="input-group" style={{ marginTop: '40px' }}>
                <div className="input-header">
                  <label>{t('calculator.period')}</label>
                  <div className="val">{years} Years</div>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="30" 
                  value={years} 
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="saffron-slider" 
                />
              </div>
            </div>
            
            <motion.div 
              className="calc-result glass glass-glow"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-secondary">Estimated Returns (12% p.a.)</span>
              <div className="total">
                <AnimatedNumber value={calculatedTotal} />
              </div>
              <motion.button 
                className="cta-button primary lg w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('calculator.investNow')}
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="nav-logo">
              <div className="logo-dot" />
              <span>ARNAV FINCORP</span>
            </div>
            <p>Bringing speed and transparency to digital finance.</p>
          </div>
          <div className="footer-links">
            <div className="link-col">
              <h4>Platform</h4>
              <a href="#">Payments</a>
              <a href="#">Security</a>
              <a href="#">Analytics</a>
            </div>
            <div className="link-col">
              <h4>Company</h4>
              <a href="#">About Us</a>
              <a href="#">Careers</a>
              <a href="#">Legal</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2026 Arnav FinCorp. Built for Antigravity.
        </div>
      </footer>
    </div>
  )
}

export default App
