import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

/**
 * Modern Portfolio Footer
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-center">
          {/* Copyright - Centered */}
          <p className="text-sm text-white">
            Copyright © 2025 Sabareeshwaran. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
