import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

/**
 * Modern Portfolio Footer
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Navigation Links */}
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <a href="#home" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Project</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400">
            Copyright © {currentYear} {portfolioData.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
