"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Navbar from '../src/components/Navbar';
import Button from '../src/components/Button';
import GlassCard from '../src/components/GlassCard';

// Dynamically import Scene3D with ssr: false
const Scene3D = dynamic(() => import('../src/components/Scene3D'), { ssr: false });

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="app-container">
      <Scene3D />
      <Navbar />

      <main className="hero-section">
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {t('hero.title1')} <br />
            <span className="accent-text">{t('hero.title2')}</span> <br />
            {t('hero.brand')}
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {t('hero.subtitle')}
          </motion.p>
          
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Button>{t('hero.cta')} &rarr;</Button>
            
            <div className="hero-stats">
              <span className="stat-number">{t('hero.stats.users')}</span>
              <span className="stat-desc">{t('hero.stats.desc')}</span>
            </div>
          </motion.div>
        </div>

        <div className="hero-visuals">
          <GlassCard className="main-feature-card" delay={0.6}>
            <div className="card-header">
              <div className="chip-icon"></div>
              <div className="nfc-icon">)))</div>
            </div>
            <div className="card-body">
              <span className="balance-label">{t('features.card1')}</span>
              <h2 className="balance-amount">$3,442.60</h2>
            </div>
            <div className="card-footer">
              <Button className="pay-btn">{t('features.payNow')} &rarr;</Button>
            </div>
          </GlassCard>
        </div>
      </main>
    </div>
  );
}
