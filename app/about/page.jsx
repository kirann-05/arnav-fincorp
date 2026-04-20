"use client";
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="app-container" style={{ paddingTop: '120px' }}>
      <main className="hero-section" style={{ minHeight: 'auto', paddingBottom: '0' }}>
        <div className="hero-content" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {t('nav.about')}
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{ margin: '24px auto' }}
          >
            We are Arnav Fincorp, dedicated to providing seamless financial services and intuitive tools to take control of your wealth.
          </motion.p>
        </div>
      </main>
    </div>
  );
}
