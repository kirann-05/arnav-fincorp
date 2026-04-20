"use client";
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import GlassCard from '../../src/components/GlassCard';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    { title: "Personal Banking", desc: "Manage your day-to-day finances with zero hidden fees and high yield savings." },
    { title: "Business Accounts", desc: "Scale your startup with our intuitive business suite and fundraising tools." },
    { title: "Smart Investments", desc: "Let our AI-driven portfolio manager optimize your assets automatically." },
    { title: "Crypto Exchange", desc: "Seamlessly connect and trade crypto with real-time market analysis." }
  ];

  return (
    <div className="app-container" style={{ paddingTop: '120px', paddingBottom: '64px' }}>
      <main className="hero-section" style={{ minHeight: 'auto', display: 'block', maxWidth: '1000px', margin: '0 auto' }}>
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          {t('nav.services')}
        </motion.h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {services.map((service, index) => (
            <GlassCard key={index} delay={0.2 + (index * 0.1)}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--accent-primary)' }}>{service.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{service.desc}</p>
            </GlassCard>
          ))}
        </div>
      </main>
    </div>
  );
}
