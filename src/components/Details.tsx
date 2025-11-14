import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaFilePdf } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

/**
 * Modern Details section with vibrant download resume button
 */
const Details: React.FC = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = portfolioData.resumeUrl;
    link.download = 'resume.pdf';
    link.target = '_blank';
    
    fetch(portfolioData.resumeUrl, { method: 'HEAD' })
      .then((response) => {
        if (response.ok) {
          link.click();
        } else {
          alert('Resume file not found. Please ensure resume.pdf is in the public folder.');
        }
      })
      .catch(() => {
        alert('Resume file not found. Please ensure resume.pdf is in the public folder.');
      });
  };

  return (
    <section id="details" className="section-padding relative overflow-hidden bg-beige-200">
      <div className="max-w-4xl mx-auto relative z-10 px-4">
        {/* Section Header - Elegant */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif italic text-brown-600 mb-4">
            Download Resume
          </h2>
          <div className="w-16 h-0.5 bg-brown-600 mx-auto mb-6" />
          <p className="text-lg text-charcoal-600 max-w-2xl mx-auto leading-relaxed">
            Get my complete resume with detailed experience, skills, and qualifications
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.button
            onClick={handleDownloadResume}
            className="px-8 py-4 bg-brown-600 text-cream-50 rounded-lg font-medium text-lg hover:bg-brown-700 transition-colors flex items-center gap-3"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaFilePdf className="text-xl" />
            <span>Download Resume</span>
            <FaDownload className="text-lg" />
          </motion.button>
        </motion.div>

        {/* Location card - Elegant design */}
        <motion.div
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="elegant-card text-center">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="font-semibold text-charcoal-800 mb-2 text-lg">
              Location
            </h3>
            <p className="text-charcoal-600 text-sm">
              Remote / On-site
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Details;
