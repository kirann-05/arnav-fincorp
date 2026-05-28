import React from 'react';
import { Link } from 'react-router-dom';
import SafeImage from './SafeImage';

export function LoanCard({ loan }) {
  return (
    <Link
      to={`/loan/${loan.slug}`}
      className="loan-card"
      style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
      aria-label={`View details for ${loan.name}`}
    >
      <article style={{ display: 'contents' }}>
        {/* Image — ALWAYS 16:9 */}
        <div className="loan-card-image">
          <SafeImage
            src={loan.image}
            alt={loan.imageAlt || loan.name}
            loading="lazy"
          />
        </div>

        {/* Body */}
        <div className="loan-card-body">
          <h3 className="loan-card-title">{loan.name}</h3>
          <p className="loan-card-desc">{loan.description}</p>

          {/* Stats — label: value separated */}
          <div className="loan-card-stats">
            <div className="loan-card-stat-row">
              <span className="loan-card-stat-label">Interest Rate</span>
              <span className="loan-card-stat-value">{loan.interestRate} p.a.</span>
            </div>
            <div className="loan-card-stat-row">
              <span className="loan-card-stat-label">Max Tenure</span>
              <span className="loan-card-stat-value plain">{loan.maxTenure}</span>
            </div>
          </div>

          {/* CTA — visual affordance, not a nested link */}
          <span className="loan-card-cta" aria-hidden="true">
            Apply Now →
          </span>
        </div>
      </article>
    </Link>
  );
}

export default LoanCard;
