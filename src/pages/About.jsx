import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { TrendingUp, Eye, Shield, Zap, BadgeCheck, Heart, Users, MapPin, Briefcase, Wallet, Headphones, Handshake } from 'lucide-react'
import ParticleCanvas from '../components/ParticleCanvas'
import SectionLabel from '../components/SectionLabel'

const fadeUp = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
}

const milestones = [
  { year: '2012', title: 'Founded in Bikaner', desc: 'Started from a two-room office above a family bhujia shop in Kote Gate market — one promise: no shopkeeper turned away for paperwork.' },
  { year: '2016', title: 'Marwar Expansion', desc: 'Opened branches in Jodhpur, Nagaur and Pali — bringing doorstep credit officers to mandi towns ignored by big banks.' },
  { year: '2019', title: 'RBI NBFC Licence', desc: 'Received RBI registration as a Non-Banking Financial Company (NBFC-ICC), formalising 7 years of community lending.' },
  { year: '2022', title: 'Digital + Desi', desc: 'Launched the Arnav Saathi app in Hindi and Marwari — kept the human officer, added 48-hour digital approvals.' },
  { year: '2025', title: '₹325 Cr+ • 48 Branches', desc: 'Serving 12,400+ families across 6 states, still headquartered in Bikaner — Tier 2 Bharat deserves Tier 1 credit.' },
]

const teams = [
  {
    icon: <Briefcase size={22} />,
    title: 'Leadership',
    body: 'Founder Shri Mahendra Singh Rathore leads a board of seasoned NBFC veterans, ex-bankers and Tier 2 business owners — together carrying over 90 years of lending experience across rural and semi-urban India.',
  },
  {
    icon: <Wallet size={22} />,
    title: 'Credit & Risk',
    body: 'A 28-member underwriting team trained on cash-flow analysis rather than CIBIL-only scoring. Every loan above ₹10 lakh is reviewed by a regional credit committee, not a black-box algorithm.',
  },
  {
    icon: <Handshake size={22} />,
    title: 'Field Operations',
    body: '140+ field officers across 48 branches. Hired locally — fluent in Marwari, Mewari, Haryanvi and Brij — they visit shops, farms and homes, often arriving before paperwork is even ready.',
  },
  {
    icon: <Headphones size={22} />,
    title: 'Customer Care',
    body: 'Named relationship managers, not call-centre queues. The officer who approves your loan is the same person you can call directly — in your language, on a working mobile number.',
  },
]

const values = [
  {
    icon: <Shield size={22} />,
    title: 'Transparency',
    body: 'No hidden charges, no fine print. Every term is read aloud in your language before you sign — because trust in a Tier 2 town travels faster than any ad campaign.',
  },
  {
    icon: <Zap size={22} />,
    title: 'Speed',
    body: '48-hour decisioning for ticket sizes up to ₹25 lakh. Our field officers visit your shop, your farm, your home — paperwork should not delay a harvest season or a wedding.',
  },
  {
    icon: <BadgeCheck size={22} />,
    title: 'Responsibility',
    body: 'RBI Registered NBFC committed to the Fair Practices Code. We lend only what you can repay — and we measure success by how many customers come back for their second loan.',
  },
  {
    icon: <Heart size={22} />,
    title: 'Bharat First',
    body: 'Built for the trader in Kota, the farmer in Sri Ganganagar, the boutique owner in Udaipur. We do not chase metro vanity — we serve the Bharat that built India.',
  },
  {
    icon: <Users size={22} />,
    title: 'Relationship Banking',
    body: 'Every customer is assigned a named relationship officer. No call centres, no IVR mazes. The person who approved your loan is the person you can call directly.',
  },
  {
    icon: <MapPin size={22} />,
    title: 'Rooted Local',
    body: 'Our branch managers are hired from within 50 km of each branch. They know the local mandi rates, the festival cycles, the genuine borrowers. Underwriting that machines cannot replicate.',
  },
]

const About = () => {
  const { t } = useTranslation()
  return (
    <div className="about-page">
      <ParticleCanvas />

      {/* ══ HERO ══ */}
      <section className="about-hero">
        <motion.div {...fadeUp}>
          <SectionLabel>{t('aboutPage.eyebrow')}</SectionLabel>
          <h1 className="about-hero-title">
            {t('aboutPage.titleStart')}{' '}
            <span className="italic-accent">{t('aboutPage.titleAccent')}</span>{' '}
            {t('aboutPage.titleEnd')}
          </h1>
          <p className="about-hero-sub">
            {t('aboutPage.subtitle')}
          </p>
        </motion.div>
      </section>

      {/* ══ BODY GRID ══ */}
      <div className="about-grid">

        {/* ── Founder Story Card — lifted up to peek over hero, creating scroll incentive ── */}
        <motion.div
          className="about-card"
          {...fadeUp}
          style={{ marginBottom: 24, maxWidth: 880, marginLeft: 'auto', marginRight: 'auto', marginTop: -64, position: 'relative', zIndex: 2 }}
        >
          <div className="about-card-icon">
            <Heart size={22} />
          </div>
          <p className="about-card-eyebrow">Our Story</p>
          <h2 className="about-card-title">It started with a tea-stall loan denial in Kote Gate, Bikaner.</h2>
          <p className="about-card-body">
            In the winter of 2011, Shri Mahendra Singh Rathore — then a 34-year-old chartered accountant working in Jaipur —
            visited his hometown Bikaner for Diwali. His childhood friend Ramesh, who ran a small bhujia stall outside Kote Gate,
            asked him for help with a ₹2 lakh loan to buy a second namkeen fryer. Three banks had turned Ramesh away.
            His income was real — ₹40,000 a month — but it was cash. No ITR. No salary slip. No CIBIL story for the algorithm to like.
            <br /><br />
            Mahendra-ji lent Ramesh the money from his own savings. Ramesh repaid every rupee with interest in 14 months.
            That conversation — over a kulhad of chai opposite Junagarh Fort — became Arnav FinCorp.
            <br /><br />
            We opened our first office in 2012 above the same bhujia shop. Today, 13 years later, our head office is still
            in Bikaner. We have 48 branches, ₹325+ crore disbursed, and an RBI NBFC licence — but our underwriting
            philosophy has not changed: <em>cash flow is real, character is verifiable, and a Tier 2 borrower with a working
            shop is a better credit risk than any spreadsheet will tell you.</em>
          </p>
        </motion.div>

        {/* ── Our Teams (NEW) ── */}
        <motion.div {...fadeUp} style={{ marginTop: 40 }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <SectionLabel>Our Teams</SectionLabel>
            <h2 className="section-title" style={{ marginTop: 12, fontSize: 'clamp(1.5rem, 2.4vw, 2rem)' }}>The people behind every approval.</h2>
          </div>
          <div className="about-val-grid">
            {teams.map((tm) => (
              <div key={tm.title} className="about-card">
                <div className="about-card-icon">{tm.icon}</div>
                <h3 className="about-card-title" style={{ fontSize: '1.15rem' }}>{tm.title}</h3>
                <p className="about-card-body">{tm.body}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Our Values (3 col) ── */}
        <motion.div {...fadeUp} style={{ marginTop: 48 }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <SectionLabel>Our Values</SectionLabel>
            <h2 className="section-title" style={{ marginTop: 12, fontSize: 'clamp(1.5rem, 2.4vw, 2rem)' }}>What we stand for</h2>
          </div>
          <div className="about-val-grid">
            {values.map((v) => (
              <div key={v.title} className="about-card">
                <div className="about-card-icon">{v.icon}</div>
                <h3 className="about-card-title" style={{ fontSize: '1.15rem' }}>{v.title}</h3>
                <p className="about-card-body">{v.body}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Milestone Timeline ── */}
        <motion.div className="about-timeline" {...fadeUp}>
          <div className="about-timeline-header">
            <SectionLabel>Our Journey</SectionLabel>
            <h2 className="section-title" style={{ marginTop: 12, fontSize: 'clamp(1.5rem, 2.4vw, 2rem)' }}>13 years of trust, one milestone at a time.</h2>
          </div>
          <div className="about-timeline-track">
            {milestones.map((m) => (
              <div key={m.year} className="about-timeline-item">
                <div className="about-timeline-dot">
                  <div className="about-timeline-dot-inner" />
                </div>
                <span className="about-timeline-year">{m.year}</span>
                <span className="about-timeline-title">{m.title}</span>
                <span className="about-timeline-desc">{m.desc}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Mission + Vision (moved here, after Journey) ── */}
        <div className="about-mv-grid" style={{ marginTop: 16 }}>
          <motion.div className="about-card" {...fadeUp}>
            <div className="about-card-icon">
              <TrendingUp size={22} />
            </div>
            <p className="about-card-eyebrow">Mission</p>
            <h2 className="about-card-title">Credit that meets Bharat where it lives — in its mandis, its mohallas, its mandirs.</h2>
            <p className="about-card-body">
              To provide accessible, transparent and fair credit to the 600 million Indians living in Tier 2 and Tier 3
              India who have real income, real assets and real ambition — but no CIBIL track record. We underwrite
              cash-flow first, document second, and the human always at the centre.
            </p>
          </motion.div>

          <motion.div className="about-card" {...fadeUp} transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <div className="about-card-icon">
              <Eye size={22} />
            </div>
            <p className="about-card-eyebrow">Vision</p>
            <h2 className="about-card-title">India&apos;s most trusted Tier 2 NBFC, headquartered in Rajasthan, serving every state of Bharat.</h2>
            <p className="about-card-body">
              By 2030, to be present in 250+ Tier 2 cities with ₹2,000 crore in disbursements — proving that
              the future of Indian lending is not in Mumbai BKC or Bengaluru, but in the towns where India&apos;s
              real entrepreneurs live, work and dream.
            </p>
          </motion.div>
        </div>

        {/* ── CTA ── */}
        <motion.div className="about-cta" {...fadeUp}>
          <h2>{t('aboutPage.ctaTitle')}</h2>
          <p>{t('aboutPage.ctaDesc')}</p>
          <div className="about-cta-btns">
            <Link to="/contact" className="about-cta-btn-primary">{t('aboutPage.ctaPrimary')} →</Link>
            <Link to="/loans" className="about-cta-btn-secondary">{t('aboutPage.ctaSecondary')}</Link>
          </div>
        </motion.div>

      </div>{/* end about-grid */}
    </div>
  )
}

export default About
