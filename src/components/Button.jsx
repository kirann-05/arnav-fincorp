"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, outline, className = '', ...props }) => {
  return (
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`pill-button ${outline ? 'outline' : ''} ${className}`} 
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
