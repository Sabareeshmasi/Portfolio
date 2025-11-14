import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import type { Experience as ExperienceType } from '../data/portfolioData';

/**
 * Minimalist Editorial Experience Section
 */
const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4 tracking-wider">
            EXPERIENCE
          </h2>
          <div className="w-20 h-px bg-black mx-auto mb-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-gray-50 border border-gray-300 p-6 group hover:border-gray-400 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Company name */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white border border-gray-300 flex items-center justify-center">
                  <FaBuilding className="text-black text-sm" />
                </div>
                <h3 className="text-lg font-bold text-black tracking-wider">
                  {exp.company.toUpperCase()}
                </h3>
              </div>

              {/* Domain/Position */}
              <div className="flex items-center gap-2 mb-3">
                <FaBriefcase className="text-gray-600 text-sm" />
                <p className="text-sm font-medium text-gray-700 editorial-text">{exp.domain}</p>
              </div>

              {/* Duration */}
              <div className="flex items-center gap-2 text-gray-600">
                <FaCalendarAlt className="text-xs" />
                <p className="text-xs font-medium">{exp.duration}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
