import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaCertificate } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import type { Education as EducationType } from '../data/portfolioData';

/**
 * Minimalist Editorial Education Section - Light Gray Background
 */
const Education: React.FC = () => {
  const EducationCard: React.FC<{ education: EducationType; index: number }> = ({ education, index }) => {
    return (
      <motion.div
        className="bg-white border border-gray-300 p-6 h-full group hover:border-gray-400 transition-all shadow-sm"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <div className="flex gap-4">
          {/* Institution image */}
          <div className="flex-shrink-0">
            <div className="relative w-14 h-14 overflow-hidden border border-gray-300 bg-gray-50">
              <img
                src={education.image || '/placeholder-education.jpg'}
                alt={education.institution}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/100x100?text=' + encodeURIComponent(education.institution.substring(0, 2));
                }}
              />
            </div>
          </div>

          {/* Education details */}
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold text-gray-900 mb-1 line-clamp-1 tracking-wider">
              {education.institution.toUpperCase()}
            </h3>
            
            <p className="text-sm font-semibold text-gray-700 mb-1 editorial-text">
              {education.degree}
            </p>
            
            <p className="text-xs text-gray-600 mb-2 editorial-text">
              {education.field}
            </p>
            
            <div className="flex items-center gap-1.5 text-xs text-gray-600 mb-2">
              <FaCalendarAlt />
              <span>{education.year}</span>
            </div>

            {/* Key details */}
            {education.details && education.details.length > 0 && (
              <ul className="space-y-1 mt-2">
                {education.details.slice(0, 2).map((detail, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-gray-600 flex items-start gap-1 editorial-text"
                  >
                    <span className="text-gray-500 mt-0.5">▸</span>
                    <span className="line-clamp-1">{detail}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Certificate link */}
            {education.certificateLink && (
              <a
                href={education.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 transition-colors group/cert"
              >
                <FaCertificate className="text-xs" />
                <span className="editorial-text">View Certificate</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="education" className="section-padding bg-gray-50" style={{ scrollMarginTop: '80px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-wider">
            EDUCATION
          </h2>
          <div className="w-20 h-px bg-gray-400 mx-auto mb-4" />
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto editorial-text">
            My academic background and continuous learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.education.map((education, index) => (
            <EducationCard key={education.id} education={education} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
