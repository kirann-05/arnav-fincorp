import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, FileText, Star } from 'lucide-react';

const FlipCard = ({ image, title, desc, rate, tenure, amount, backTitle, eligibility, documents, benefits, applyLabel, rateLabel, tenureLabel, amountLabel, link }) => {
  const ButtonWrapper = ({ children }) => {
    if (link) {
      return (
        <Link to={link} className="w-full">
          {children}
        </Link>
      )
    }
    return <>{children}</>
  }

  return (
    <div className="flip-card" id={`flip-card-${title?.replace(/\s+/g, '-').toLowerCase()}`}>
      <div className="flip-card-inner">
        {/* FRONT */}
        <div className="flip-card-front">
          <div className="flip-card-image">
            <img src={image} alt={title} loading="lazy" />
            <div className="flip-card-image-overlay" />
          </div>
          <div className="flip-card-body">
            <h3 className="flip-card-title">{title}</h3>
            <p className="flip-card-desc">{desc}</p>
            <div className="flip-card-stats">
              <div className="flip-stat">
                <span className="flip-stat-value">{rate}</span>
                <span className="flip-stat-label">{rateLabel}</span>
              </div>
              <div className="flip-stat">
                <span className="flip-stat-value">{tenure}</span>
                <span className="flip-stat-label">{tenureLabel}</span>
              </div>
              <div className="flip-stat">
                <span className="flip-stat-value">{amount}</span>
                <span className="flip-stat-label">{amountLabel}</span>
              </div>
            </div>
            <ButtonWrapper>
              <motion.button
                className="flip-card-cta"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {applyLabel}
              </motion.button>
            </ButtonWrapper>
          </div>
        </div>

        {/* BACK */}
        <div className="flip-card-back">
          <div className="flip-back-content">
            <h3 className="flip-back-title">{backTitle}</h3>
            <div className="flip-back-section">
              <div className="flip-back-icon"><CheckCircle size={18} /></div>
              <div>
                <h4>Eligibility</h4>
                <p>{eligibility}</p>
              </div>
            </div>
            <div className="flip-back-section">
              <div className="flip-back-icon"><FileText size={18} /></div>
              <div>
                <h4>Documents</h4>
                <p>{documents}</p>
              </div>
            </div>
            <div className="flip-back-section">
              <div className="flip-back-icon"><Star size={18} /></div>
              <div>
                <h4>Benefits</h4>
                <p>{benefits}</p>
              </div>
            </div>
            <ButtonWrapper>
              <motion.button
                className="flip-card-cta"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {applyLabel}
              </motion.button>
            </ButtonWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
