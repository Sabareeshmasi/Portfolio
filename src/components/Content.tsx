import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

/**
 * Content/Table of Contents Section - Editorial Style
 */
const Content: React.FC = () => {
  const fullName = portfolioData.name.toUpperCase();
  const firstName = portfolioData.name.split(' ')[0].toUpperCase();

  const contentSections = [
    {
      number: '01',
      title: 'ABOUT',
      description: 'Professional background, expertise, and passion for AI development and SAP integration',
    },
    {
      number: '02',
      title: 'PROJECTS',
      description: 'Innovative AI-powered solutions and cutting-edge implementations showcasing technical excellence',
    },
    {
      number: '03',
      title: 'SKILLS',
      description: 'Technical expertise spanning AI frameworks, SAP technologies, and modern development tools',
    },
    {
      number: '04',
      title: 'EXPERIENCE',
      description: 'Professional journey and hands-on experience in enterprise AI and SAP development',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Section - Portrait and Title */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {/* Portrait Image with L-shaped cutout effect */}
            <div className="relative mb-8">
              <div className="relative">
                <img
                  src={portfolioData.profileImage || '/placeholder-profile.jpg'}
                  alt={portfolioData.name}
                  className="w-full h-auto object-cover"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
                  }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x500?text=Your+Photo';
                  }}
                />
              </div>
            </div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-wider leading-tight">
                CONTENT OF
                <br />
                {firstName}
              </h2>
            </motion.div>
          </motion.div>

          {/* Right Section - Table of Contents */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {contentSections.map((section, index) => (
              <motion.div
                key={section.number}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-black mb-2 tracking-wider">
                      {section.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed editorial-text">
                      {section.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <div className="flex-1 border-t border-dotted border-gray-400" style={{ minWidth: '40px' }}></div>
                    <span className="text-lg sm:text-xl font-bold text-black tracking-wider">
                      {section.number}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Content;

