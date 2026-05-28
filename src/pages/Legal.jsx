import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import { Shield, FileText, Scale, MessageSquare, Percent, UserCheck, Gavel, BookOpen } from 'lucide-react'
import ParticleCanvas from '../components/ParticleCanvas'
import SectionLabel from '../components/SectionLabel'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
}

const policies = [
  { id: 'privacy', icon: <Shield size={18} />, title: 'Privacy Policy', updated: '01 April 2025' },
  { id: 'terms', icon: <FileText size={18} />, title: 'Terms & Conditions', updated: '01 April 2025' },
  { id: 'fair-practice', icon: <Scale size={18} />, title: 'Fair Practices Code', updated: '15 March 2025' },
  { id: 'grievance', icon: <MessageSquare size={18} />, title: 'Grievance Redressal Policy', updated: '01 January 2025' },
  { id: 'interest-rate', icon: <Percent size={18} />, title: 'Interest Rate Policy', updated: '01 April 2025' },
  { id: 'kyc-aml', icon: <UserCheck size={18} />, title: 'KYC & Anti-Money Laundering', updated: '15 March 2025' },
  { id: 'recovery-conduct', icon: <Gavel size={18} />, title: 'Code of Conduct for Recovery Agents', updated: '01 January 2025' },
  { id: 'citizens-charter', icon: <BookOpen size={18} />, title: "Citizen's Charter", updated: '01 April 2025' },
]

// ── Shared typography helpers ──
const h2Style = { fontSize: 'clamp(1.6rem, 2.6vw, 2.1rem)', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: 8, color: 'var(--text-primary)' }
const h3Style = { fontSize: '1.05rem', fontWeight: 600, marginTop: 28, marginBottom: 10, color: 'var(--text-primary)' }
const pStyle = { fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--text-secondary)', marginBottom: 14 }
const metaStyle = { fontSize: '0.78rem', color: 'var(--text-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20, display: 'block' }
const ulStyle = { ...pStyle, paddingLeft: 24, listStyle: 'disc' }

const Legal = () => {
  const { t } = useTranslation()
  const { hash } = useLocation()
  const [activeId, setActiveId] = useState('privacy')
  const sectionRefs = useRef({})

  // Deep-link: scroll to hash on load
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80)
        setActiveId(id)
      }
    }
  }, [hash])

  // Scroll spy: highlight current TOC item
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) {
          const topMost = visible.reduce((a, b) => (a.boundingClientRect.top < b.boundingClientRect.top ? a : b))
          setActiveId(topMost.target.id)
        }
      },
      { rootMargin: '-100px 0px -60% 0px', threshold: 0 }
    )
    policies.forEach((p) => {
      const el = document.getElementById(p.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleTocClick = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.replaceState(null, '', `#${id}`)
    }
  }

  return (
    <div className="about-page" style={{ overflow: 'visible' }}>
      <ParticleCanvas />

      {/* ══ HERO ══ */}
      <section className="about-hero" style={{ paddingBottom: 60 }}>
        <motion.div {...fadeUp}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: 20, fontSize: '0.78rem', color: 'var(--text-tertiary)', letterSpacing: '0.05em' }}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>{t('common.home')}</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--text-secondary)' }}>{t('legalPage.breadcrumb')}</span>
          </nav>
          <SectionLabel>{t('legalPage.eyebrow')}</SectionLabel>
          <h1 className="about-hero-title">
            {t('legalPage.titleStart')}{' '}
            <span className="italic-accent">{t('legalPage.titleAccent')}</span>{t('legalPage.titleEnd')}
          </h1>
          <p className="about-hero-sub">
            {t('legalPage.subtitle')}
          </p>
        </motion.div>
      </section>

      {/* ══ MOBILE TOC (top, visible only on small screens) ══ */}
      <div className="legal-mobile-toc" style={{ padding: '0 8% 24px', maxWidth: 1400, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <details style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 16, padding: '16px 20px' }}>
          <summary style={{ cursor: 'pointer', fontWeight: 600, fontSize: '0.92rem', color: 'var(--text-primary)', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>{t('legalPage.jumpToPolicy')}</span>
            <span style={{ color: 'var(--accent)', fontSize: '0.78rem' }}>▼</span>
          </summary>
          <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0' }}>
            {policies.map((p) => (
              <li key={p.id} style={{ padding: '10px 0', borderTop: '1px solid var(--border-subtle)' }}>
                <a
                  href={`#${p.id}`}
                  onClick={(e) => handleTocClick(e, p.id)}
                  style={{ color: activeId === p.id ? 'var(--accent)' : 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: 10 }}
                >
                  <span style={{ color: 'var(--accent)' }}>{p.icon}</span>
                  {p.title}
                </a>
              </li>
            ))}
          </ul>
        </details>
      </div>

      {/* ══ BODY — 2-COLUMN: CONTENT + STICKY TOC ══ */}
      <div className="legal-body" style={{ padding: '0 8% 60px', maxWidth: 1400, margin: '0 auto', position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 260px', gap: 48, alignItems: 'start' }}>

        {/* ── Main content (single long-scroll) ── */}
        <main style={{ minWidth: 0 }}>
          {/* Intro card */}
          <motion.div className="about-card" {...fadeUp} style={{ marginBottom: 32, padding: 32 }}>
            <p style={{ ...pStyle, marginBottom: 0 }}>
              This page consolidates all statutory and customer-facing policies of Arnav FinCorp Private Limited
              (an NBFC registered with the Reserve Bank of India). Use the index on the right to jump to any
              section. For grievances, see <a href="#grievance" onClick={(e) => handleTocClick(e, 'grievance')} style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Grievance Redressal</a>.
            </p>
          </motion.div>

          {/* ───── 1. PRIVACY POLICY ───── */}
          <section id="privacy" ref={(el) => (sectionRefs.current.privacy = el)} style={{ scrollMarginTop: 100, marginBottom: 72 }}>
            <span style={metaStyle}>Last updated: 01 April 2025</span>
            <h2 style={h2Style}>Privacy Policy</h2>
            <p style={pStyle}>Arnav FinCorp Private Limited ("Arnav FinCorp", "we", "us") is a Non-Banking Financial Company registered with the Reserve Bank of India. This Privacy Policy explains how we collect, use, store, share and protect personal information of customers, applicants and visitors. By using any of our services, you consent to the practices described here.</p>

            <h3 style={h3Style}>1. Information we collect</h3>
            <p style={pStyle}>We collect (a) identity and contact information — name, address, phone, email, PAN, Aadhaar, date of birth, photograph; (b) financial information — bank statements, ITR, GST returns, salary slips, property documents, business turnover; (c) credit information from RBI-licensed Credit Information Companies (CIBIL, Experian, Equifax, CRIF); (d) transactional data — EMI history, loan utilisation, repayment behaviour; (e) technical data — device ID, IP address, geolocation (only with consent on our mobile app), and usage analytics.</p>

            <h3 style={h3Style}>2. Purpose of collection</h3>
            <p style={pStyle}>Information is used only for credit appraisal and KYC verification under the Prevention of Money Laundering Act, 2002 and RBI Master Directions; loan disbursement, servicing and recovery; statutory reporting to RBI, CICs, CKYCR and Income Tax Department; fraud prevention; and customer communication regarding products you have applied for or availed.</p>

            <h3 style={h3Style}>3. Sharing of information</h3>
            <p style={pStyle}>We share data only with (a) Credit Information Companies as mandated by the Credit Information Companies (Regulation) Act, 2005; (b) RBI, courts, statutory or law-enforcement authorities when legally required; (c) co-lending partners, business correspondents and recovery agents under written agreements that include confidentiality clauses; (d) service providers (cloud, e-sign, e-NACH, video-KYC vendors) bound by data-processing agreements. We never sell customer data to third parties for marketing.</p>

            <h3 style={h3Style}>4. Data storage and security</h3>
            <p style={pStyle}>All customer data is stored on servers located in India in compliance with RBI data localisation directives. We deploy industry-standard encryption (TLS 1.3 in transit, AES-256 at rest), role-based access controls, periodic VAPT audits, and ISO 27001 aligned controls. Access is restricted to authorised personnel on a need-to-know basis.</p>

            <h3 style={h3Style}>5. Retention</h3>
            <p style={pStyle}>Customer records are retained for a minimum of 8 years after closure of the loan account, as required under the PMLA and RBI directions. Thereafter, data is securely destroyed or anonymised.</p>

            <h3 style={h3Style}>6. Your rights</h3>
            <p style={pStyle}>You may access your data, request correction of inaccurate data, withdraw consent for non-essential processing, and lodge a grievance with our Grievance Redressal Officer. Withdrawal of consent for essential KYC processing may result in inability to continue services.</p>

            <h3 style={h3Style}>7. Cookies and updates</h3>
            <p style={pStyle}>Our website uses essential cookies for session management and optional analytics cookies which you may disable through your browser. Material changes to this policy will be communicated through SMS, email or in-app notification at least 30 days in advance.</p>
          </section>

          {/* ───── 2. TERMS & CONDITIONS ───── */}
          <section id="terms" ref={(el) => (sectionRefs.current.terms = el)} style={{ scrollMarginTop: 100, marginBottom: 72 }}>
            <span style={metaStyle}>Last updated: 01 April 2025</span>
            <h2 style={h2Style}>Terms &amp; Conditions</h2>
            <p style={pStyle}>By accessing arnavfincorp.com, the Arnav Saathi mobile app, or availing any product or service from Arnav FinCorp Private Limited, you agree to these Terms &amp; Conditions, the Privacy Policy and the product-specific loan agreement.</p>

            <h3 style={h3Style}>1. Eligibility</h3>
            <p style={pStyle}>Users must be a resident citizen of India, at least 21 years of age, of sound mind and legally competent to contract under the Indian Contract Act, 1872. Loan eligibility is at the sole discretion of Arnav FinCorp based on internal credit policy and applicable regulatory norms.</p>

            <h3 style={h3Style}>2. Loan application and approval</h3>
            <p style={pStyle}>Submission of an application does not guarantee approval. All loans are subject to credit appraisal, KYC verification, satisfactory CIBIL/CIC report, and approval by the appropriate sanctioning authority. Indicative rates published on the website are starting rates; the final rate offered is risk-based and communicated in the sanction letter.</p>

            <h3 style={h3Style}>3. Interest, charges and fees</h3>
            <p style={pStyle}>All applicable interest rates, processing fees, prepayment charges, foreclosure charges, bounce charges, penal interest and other fees are disclosed in the Key Fact Statement (KFS) shared with you before sanction, in accordance with the RBI Master Direction on Interest Rate on Advances.</p>

            <h3 style={h3Style}>4. Repayment and default</h3>
            <p style={pStyle}>EMIs are due on the dates specified in the loan agreement. Default attracts penal charges, reporting to Credit Information Companies, and recovery action permitted under applicable law including the SARFAESI Act, 2002 (for secured loans).</p>

            <h3 style={h3Style}>5. Intellectual property</h3>
            <p style={pStyle}>All content on the website and mobile application — including text, graphics, logos, images and software — is the property of Arnav FinCorp Private Limited and protected under the Copyright Act, 1957 and Trade Marks Act, 1999.</p>

            <h3 style={h3Style}>6. Prohibited use</h3>
            <p style={pStyle}>Users shall not submit false or fraudulent information, impersonate any person, attempt unauthorised access to our systems, use the platform for any unlawful purpose, or upload malicious code. Violations may result in account termination and legal action.</p>

            <h3 style={h3Style}>7. Disclaimers</h3>
            <p style={pStyle}>EMI calculators, eligibility checkers and rate tools on our website are indicative only and do not constitute a binding offer. Actual sanction terms are governed solely by the executed loan agreement.</p>

            <h3 style={h3Style}>8. Governing law and jurisdiction</h3>
            <p style={pStyle}>These terms are governed by the laws of India. All disputes shall be subject to the exclusive jurisdiction of the courts at Bikaner, Rajasthan, without prejudice to the rights of customers under the Consumer Protection Act, 2019 and the RBI Integrated Ombudsman Scheme, 2021.</p>
          </section>

          {/* ───── 3. FAIR PRACTICES CODE ───── */}
          <section id="fair-practice" ref={(el) => (sectionRefs.current['fair-practice'] = el)} style={{ scrollMarginTop: 100, marginBottom: 72 }}>
            <span style={metaStyle}>Approved by Board: 15 March 2025</span>
            <h2 style={h2Style}>Fair Practices Code</h2>
            <p style={pStyle}>This Fair Practices Code ("FPC") has been adopted by the Board of Directors of Arnav FinCorp in compliance with the RBI Master Direction — Non-Banking Financial Company – Scale Based Regulation (Reserve Bank) Directions, 2023.</p>

            <h3 style={h3Style}>i. Applications for loans and their processing</h3>
            <p style={pStyle}>All loan applications shall be in vernacular language or a language understood by the borrower. The loan application form shall include all necessary information that affects the interest of the borrower, including fees and charges. The NBFC shall acknowledge receipt of all loan applications, and the time frame for disposal will be communicated at the time of application.</p>

            <h3 style={h3Style}>ii. Loan appraisal and terms / conditions</h3>
            <p style={pStyle}>Written sanction letters shall be issued in the language understood by the borrower, stating the loan amount, annualised interest rate, method of application, EMI schedule, fees, prepayment terms and penal charges in bold. A copy of the signed loan agreement along with all enclosures will be furnished to every borrower at the time of disbursement.</p>

            <h3 style={h3Style}>iii. Disbursement &amp; changes in terms</h3>
            <p style={pStyle}>Any change in terms and conditions — including disbursement schedule, interest rate, service charges or prepayment charges — shall be communicated to the borrower in the vernacular language. Interest rate changes shall apply prospectively only.</p>

            <h3 style={h3Style}>iv. General</h3>
            <p style={pStyle}>Arnav FinCorp shall refrain from interference in the affairs of the borrower except for the purposes provided in the loan agreement. In case of receipt of request for transfer of the loan account, consent shall be conveyed within 21 days. Recovery shall not involve undue harassment — no calls at odd hours, no use of muscle power, and field staff shall carry identity cards.</p>

            <h3 style={h3Style}>v. Responsibility of the Board</h3>
            <p style={pStyle}>The Board of Directors lays down the appropriate grievance redressal mechanism, and reviews the compliance of the FPC and functioning of the grievance redressal mechanism at periodic intervals.</p>

            <h3 style={h3Style}>vi. Language and mode of communication</h3>
            <p style={pStyle}>The FPC is available in English, Hindi and Marwari at all our branches and on this website. A printed copy will be provided free of cost on request.</p>

            <h3 style={h3Style}>vii. Regulation of excessive interest</h3>
            <p style={pStyle}>Arnav FinCorp has laid down internal principles and procedures (see Interest Rate Policy) to determine interest rates, processing and other charges. These take into account cost of funds, risk premium, tenure, and are not excessive.</p>
          </section>

          {/* ───── 4. GRIEVANCE REDRESSAL ───── */}
          <section id="grievance" ref={(el) => (sectionRefs.current.grievance = el)} style={{ scrollMarginTop: 100, marginBottom: 72 }}>
            <span style={metaStyle}>Effective: 01 January 2025</span>
            <h2 style={h2Style}>Grievance Redressal Policy</h2>
            <p style={pStyle}>Arnav FinCorp is committed to providing prompt, fair and effective resolution of customer grievances in line with the RBI Integrated Ombudsman Scheme, 2021 and applicable NBFC directions.</p>

            <h3 style={h3Style}>Level 1 — Branch / Customer Care</h3>
            <p style={pStyle}>Customers may register their complaint at the branch of disbursement or contact our Customer Care:</p>
            <ul style={ulStyle}>
              <li>Toll-Free: 1800-XXX-XXXX (Mon–Sat, 9:00 AM – 7:00 PM IST)</li>
              <li>Email: care@arnavfincorp.in</li>
              <li>Resolution timeline: within 7 working days</li>
            </ul>

            <h3 style={h3Style}>Level 2 — Grievance Redressal Officer</h3>
            <p style={pStyle}>If unresolved at Level 1, or if the response is unsatisfactory, escalate to:</p>
            <ul style={ulStyle}>
              <li>Shri Vikas Agarwal, Grievance Redressal Officer</li>
              <li>Arnav FinCorp Private Limited, Junagarh Road, Bikaner — 334001, Rajasthan</li>
              <li>Email: gro@arnavfincorp.in &nbsp;·&nbsp; Phone: +91-151-XXXXXXX</li>
              <li>Resolution timeline: within 15 working days</li>
            </ul>

            <h3 style={h3Style}>Level 3 — Principal Nodal Officer</h3>
            <p style={pStyle}>If still unresolved within 30 days from the date of first complaint:</p>
            <ul style={ulStyle}>
              <li>Smt. Pooja Rathore, Principal Nodal Officer</li>
              <li>Email: pno@arnavfincorp.in &nbsp;·&nbsp; Phone: +91-151-XXXXXXX</li>
            </ul>

            <h3 style={h3Style}>Level 4 — RBI Integrated Ombudsman</h3>
            <p style={pStyle}>If the complaint is not resolved within 30 days, you may approach the RBI Ombudsman:</p>
            <ul style={ulStyle}>
              <li>Online: <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>cms.rbi.org.in</a></li>
              <li>Toll-Free: 14448 &nbsp;·&nbsp; Email: CRPC@rbi.org.in</li>
              <li>Postal: Centralised Receipt and Processing Centre, RBI, 4th Floor, Sector 17, Chandigarh — 160017</li>
            </ul>
          </section>

          {/* ───── 5. INTEREST RATE POLICY ───── */}
          <section id="interest-rate" ref={(el) => (sectionRefs.current['interest-rate'] = el)} style={{ scrollMarginTop: 100, marginBottom: 72 }}>
            <span style={metaStyle}>Approved by ALCO: 01 April 2025</span>
            <h2 style={h2Style}>Interest Rate Policy</h2>
            <p style={pStyle}>In accordance with the RBI Master Direction on Interest Rate on Advances and the Fair Practices Code, Arnav FinCorp has adopted the following Interest Rate Policy, approved by the Board and reviewed annually by the Asset Liability Management Committee (ALCO).</p>

            <h3 style={h3Style}>1. Methodology</h3>
            <p style={pStyle}>Interest rates are determined on a risk-based pricing model that considers cost of funds, operating cost, credit risk premium (based on the borrower's credit history, repayment capacity, security offered, tenure and ticket size), and a reasonable margin.</p>

            <h3 style={h3Style}>2. Range of interest rates</h3>
            <p style={pStyle}>The annualised interest rate (reducing balance method) charged across our product portfolio ranges between <strong>8.50% and 26.00% per annum</strong>:</p>
            <ul style={ulStyle}>
              <li>Home Loan — 8.50% to 12.50% p.a.</li>
              <li>Loan Against Property — 9.50% to 14.00% p.a.</li>
              <li>Business Loan (Secured) — 11.00% to 18.00% p.a.</li>
              <li>MSME Loan — 12.00% to 20.00% p.a.</li>
              <li>Personal Loan — 14.00% to 24.00% p.a.</li>
              <li>Gold Loan — 9.50% to 16.00% p.a.</li>
            </ul>

            <h3 style={h3Style}>3. Communication</h3>
            <p style={pStyle}>The applicable interest rate, along with the annualised rate of interest and method of application, is explicitly communicated to the borrower in the sanction letter and Key Fact Statement (KFS) before disbursement.</p>

            <h3 style={h3Style}>4. Penal charges</h3>
            <p style={pStyle}>In line with the RBI circular on Fair Lending Practice — Penal Charges in Loan Accounts (August 2023), penal charges for delayed payment are treated as "penal charges" (not penal interest), are reasonable, and do not compound. Current penal charge: 2% per month on overdue EMI, applied flat.</p>

            <h3 style={h3Style}>5. Prepayment / foreclosure</h3>
            <p style={pStyle}>No prepayment charges are levied on floating-rate retail loans (Home Loan, LAP) to individual borrowers, as per RBI directions. For fixed-rate loans and business loans, prepayment charges (if any) are disclosed upfront in the KFS.</p>
          </section>

          {/* ───── 6. KYC & AML ───── */}
          <section id="kyc-aml" ref={(el) => (sectionRefs.current['kyc-aml'] = el)} style={{ scrollMarginTop: 100, marginBottom: 72 }}>
            <span style={metaStyle}>Approved by Board: 15 March 2025</span>
            <h2 style={h2Style}>KYC &amp; Anti-Money Laundering Policy</h2>
            <p style={pStyle}>This policy is adopted in compliance with the Prevention of Money Laundering Act, 2002 (PMLA), the PMLA (Maintenance of Records) Rules, 2005, and the RBI Master Direction — Know Your Customer (KYC) Direction, 2016 (as amended).</p>

            <h3 style={h3Style}>1. Customer Acceptance Policy</h3>
            <p style={pStyle}>No account is opened in anonymous or fictitious / benami name. Customers are categorised into low, medium and high risk based on profile, country, business activity and transaction patterns. Enhanced Due Diligence is performed for politically exposed persons (PEPs) and high-risk customers.</p>

            <h3 style={h3Style}>2. Customer Identification Procedure (CIP)</h3>
            <p style={pStyle}>KYC is mandatorily performed at commencement of relationship, addition of a new loan, suspicion of money laundering, or change in the existing relationship. Officially Valid Documents (OVDs) accepted include Aadhaar (with consent under Aadhaar Act, 2016), PAN, Passport, Voter ID and Driving Licence. Video-KYC is permitted under RBI norms.</p>

            <h3 style={h3Style}>3. Risk Management &amp; Reporting</h3>
            <p style={pStyle}>An independent Risk &amp; Compliance team monitors transactions on an ongoing basis. Suspicious Transaction Reports (STRs) and Cash Transaction Reports (CTRs) are filed with the Financial Intelligence Unit – India (FIU-IND) within the prescribed timelines.</p>

            <h3 style={h3Style}>4. Sanctions screening</h3>
            <p style={pStyle}>All customers and beneficial owners are screened against the United Nations Security Council Consolidated Sanctions List and other applicable lists at onboarding and periodically thereafter.</p>

            <h3 style={h3Style}>5. Record retention &amp; Principal Officer</h3>
            <p style={pStyle}>KYC records are retained for at least 5 years from the date of cessation of business relationship; transaction records for at least 5 years from the date of transaction. The designated Principal Officer for AML/CFT compliance is reachable at po-aml@arnavfincorp.in.</p>
          </section>

          {/* ───── 7. RECOVERY CODE OF CONDUCT ───── */}
          <section id="recovery-conduct" ref={(el) => (sectionRefs.current['recovery-conduct'] = el)} style={{ scrollMarginTop: 100, marginBottom: 72 }}>
            <span style={metaStyle}>Effective: 01 January 2025</span>
            <h2 style={h2Style}>Code of Conduct for Recovery Agents</h2>
            <p style={pStyle}>Arnav FinCorp engages recovery agents only after due diligence and execution of a written agreement that binds them to this code, in line with the RBI Master Direction on Outsourcing of Financial Services and the Fair Practices Code.</p>

            <h3 style={h3Style}>1. Permitted conduct</h3>
            <ul style={ulStyle}>
              <li>Identify themselves with a valid Arnav FinCorp authorisation letter and photo ID on every visit;</li>
              <li>Contact borrowers only between 8:00 AM and 7:00 PM IST, unless the borrower has consented otherwise;</li>
              <li>Maintain civility and respect the privacy of the borrower's family and neighbours;</li>
              <li>Issue valid receipts for all cash collections and deposit collections into the company account on the same working day;</li>
              <li>Honour all reasonable requests by the borrower for rescheduling visits.</li>
            </ul>

            <h3 style={h3Style}>2. Strictly prohibited</h3>
            <ul style={ulStyle}>
              <li>Use of threats, abusive language, intimidation, or any form of harassment;</li>
              <li>Use of muscle power, false representation, or contact with unrelated third parties to embarrass the borrower;</li>
              <li>Persistent calls or visits beyond what is reasonable;</li>
              <li>Disclosure of loan details to any unauthorised person;</li>
              <li>Acceptance of any inducement, gift or favour from the borrower in personal capacity.</li>
            </ul>

            <h3 style={h3Style}>3. Complaints against recovery agents</h3>
            <p style={pStyle}>Any borrower experiencing conduct in violation of this code should immediately contact the Grievance Redressal Officer at gro@arnavfincorp.in or call 1800-XXX-XXXX. All complaints are investigated within 7 days; confirmed violations result in termination of the agent contract.</p>
          </section>

          {/* ───── 8. CITIZEN'S CHARTER ───── */}
          <section id="citizens-charter" ref={(el) => (sectionRefs.current['citizens-charter'] = el)} style={{ scrollMarginTop: 100, marginBottom: 72 }}>
            <span style={metaStyle}>Effective: 01 April 2025</span>
            <h2 style={h2Style}>Citizen&apos;s Charter</h2>
            <p style={pStyle}>This Citizen&apos;s Charter sets out the standards of service that customers of Arnav FinCorp can expect, and the time-bound commitments we make to every borrower.</p>

            <h3 style={h3Style}>1. Our service commitments</h3>
            <ul style={ulStyle}>
              <li>Loan application acknowledgement — within 1 working day</li>
              <li>Loan decision (in-principle) — within 5 working days for retail loans; 10 working days for business loans</li>
              <li>Disbursement after sanction &amp; documentation — within 3 working days</li>
              <li>Statement of account / repayment schedule — provided at disbursement and on request, free of charge</li>
              <li>Foreclosure letter / NOC — issued within 7 working days of full repayment</li>
              <li>Return of original property documents — within 30 days of closure, per RBI circular dated 13 September 2023; delay attracts compensation of ₹5,000 per day</li>
              <li>Grievance acknowledgement — within 24 hours</li>
              <li>Grievance resolution — within 7 working days at Level 1; 15 working days at Level 2</li>
            </ul>

            <h3 style={h3Style}>2. Your responsibilities</h3>
            <p style={pStyle}>To enable us to serve you well, please provide complete and accurate information at the time of application, keep your contact details updated, read the Key Fact Statement and loan agreement carefully before signing, pay EMIs on or before the due date, and intimate us promptly of any change in employment, address or financial circumstances.</p>

            <h3 style={h3Style}>3. Right to information</h3>
            <p style={pStyle}>You have the right to ask, at any time, for the rate of interest applicable to your loan and the method of computation, all charges debited to your account, the outstanding balance and the foreclosure amount, and a copy of the loan agreement and KYC documents submitted.</p>
          </section>

          {/* ───── CTA ───── */}
          <motion.div className="about-cta" {...fadeUp} style={{ marginTop: 16 }}>
            <h2>{t('legalPage.ctaTitle')}</h2>
            <p>{t('legalPage.ctaDesc')}</p>
            <div className="about-cta-btns">
              <Link to="/contact" className="about-cta-btn-primary">{t('common.contactTeam')} →</Link>
              <a href="mailto:gro@arnavfincorp.in" className="about-cta-btn-secondary">{t('common.emailGRO')}</a>
            </div>
          </motion.div>
        </main>

        {/* ── Sticky TOC sidebar (desktop only) ── */}
        <aside className="legal-toc-desktop" style={{ position: 'sticky', top: 100, alignSelf: 'start' }}>
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 16, padding: 24 }}>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 16 }}>{t('legalPage.onThisPage')}</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {policies.map((p, i) => {
                const isActive = activeId === p.id
                return (
                  <li key={p.id} style={{ borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)' }}>
                    <a
                      href={`#${p.id}`}
                      onClick={(e) => handleTocClick(e, p.id)}
                      aria-current={isActive ? 'true' : undefined}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        padding: '12px 0',
                        color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                        textDecoration: 'none',
                        fontSize: '0.85rem',
                        fontWeight: isActive ? 600 : 400,
                        transition: 'color 0.2s',
                        borderLeft: isActive ? '2px solid var(--accent)' : '2px solid transparent',
                        paddingLeft: 12,
                        marginLeft: -14,
                      }}
                    >
                      <span style={{ color: isActive ? 'var(--accent)' : 'var(--text-tertiary)', flexShrink: 0 }}>{p.icon}</span>
                      <span>{p.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </aside>
      </div>

      {/* Responsive: hide desktop TOC on mobile, hide mobile TOC on desktop */}
      <style>{`
        @media (max-width: 980px) {
          .legal-body { grid-template-columns: 1fr !important; gap: 0 !important; }
          .legal-toc-desktop { display: none !important; }
        }
        @media (min-width: 981px) {
          .legal-mobile-toc { display: none !important; }
        }
      `}</style>
    </div>
  )
}

export default Legal
