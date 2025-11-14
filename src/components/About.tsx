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
                I am an <strong className="text-gray-900">AI and SAP Developer</strong> with a strong focus on building reliable, efficient, and scalable solutions for enterprise environments. My work centers around developing intelligent systems, automation workflows, and data-driven applications that enhance business operations. I take a structured and analytical approach to problem-solving, ensuring every solution is well-designed, maintainable, and aligned with real-world needs.
              </p>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg mt-4">
                I am committed to continuous learning, professional growth, and delivering high-quality results. I aim to contribute to impactful projects where technology, innovation, and business value come together to create meaningful outcomes.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
