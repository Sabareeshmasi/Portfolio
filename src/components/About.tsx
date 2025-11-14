import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

/**
 * About Section - Matching Naveen Template Style (Without Experience/Education)
 */
const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-600 mb-2">Get To Know More</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
            About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Profile Picture */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
                <img
                  src="/about-image.jpg"
                  alt={portfolioData.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = portfolioData.profileImage || 'https://via.placeholder.com/400x400?text=Photo';
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right Section - Description Only */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            {/* Description */}
            <div>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                Recent university graduate passionate about <strong className="text-gray-900">AI development</strong>, 
                <strong className="text-gray-900"> SAP integration</strong>, and <strong className="text-gray-900">prompt engineering</strong>. 
                My goal is to make my mark in digital media and tech spaces.
              </p>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg mt-4">
                Currently serving as a <strong className="text-gray-900">SAP AI NextGen Intern</strong> at IT Resonance, 
                I've completed an intensive SAP ABAP development program with hands-on exposure to SAP BTP services, 
                SAP BAS for development, and SAP BPA concepts.
              </p>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg mt-4">
                My expertise spans building advanced <strong className="text-gray-900">RAG systems</strong> with re-ranking capabilities, 
                developing conversational AI assistants integrated with SAP Fiori, and creating 
                <strong className="text-gray-900"> multi-agent systems</strong> for complex automation workflows.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
