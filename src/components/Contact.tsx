import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaPhone, FaGithub, FaQuoteLeft } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

/**
 * Contact Section with Darker Background, Attractive Logos, and Quotes
 */
const Contact: React.FC = () => {
  const contactItems = [
    {
      id: 'email',
      icon: FaEnvelope,
      label: 'Email',
      value: portfolioData.email,
      href: `mailto:${portfolioData.email}`,
      iconBg: 'bg-black',
      iconShadow: 'shadow-gray-300',
      borderColor: 'border-gray-200',
    },
    {
      id: 'phone',
      icon: FaPhone,
      label: 'Phone',
      value: portfolioData.phone,
      href: `tel:${portfolioData.phone}`,
      iconBg: 'bg-black',
      iconShadow: 'shadow-gray-300',
      borderColor: 'border-gray-200',
    },
    {
      id: 'linkedin',
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: portfolioData.linkedinUrl,
      iconBg: 'bg-black',
      iconShadow: 'shadow-gray-300',
      borderColor: 'border-gray-200',
      external: true,
    },
    {
      id: 'github',
      icon: FaGithub,
      label: 'GitHub',
      value: 'View my work',
      href: portfolioData.githubUrl,
      iconBg: 'bg-black',
      iconShadow: 'shadow-gray-300',
      borderColor: 'border-gray-200',
      external: true,
    },
  ];

  const quotes = [
    {
      text: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney"
    },
    {
      text: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs"
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 bg-gray-100" style={{ scrollMarginTop: '80px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-3 tracking-wider">
            CONTACT ME
          </h2>
          <div className="w-20 h-px bg-gray-400 mx-auto mb-3" />
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto editorial-text">
            Let's connect and bring your ideas to life
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Left Side - Contact Information */}
          <div className="lg:col-span-2 space-y-3">
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.id}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="group block"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`bg-white border-2 ${item.borderColor} rounded-xl p-4 hover:shadow-lg transition-all duration-300 group-hover:border-opacity-60`}>
                    <div className="flex items-center gap-4">
                      {/* Attractive Icon Container */}
                      <motion.div
                        className={`flex-shrink-0 w-14 h-14 ${item.iconBg} rounded-xl flex items-center justify-center ${item.iconShadow} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                        whileHover={{ 
                          rotate: [0, -5, 5, -5, 0],
                          scale: 1.1
                        }}
                      >
                        <Icon className="text-white text-lg" />
                      </motion.div>
                      
                      {/* Text Content */}
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-gray-500 mb-0.5 uppercase tracking-wider">
                          {item.label}
                        </p>
                        <p className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors truncate">
                          {item.value}
                        </p>
                      </div>

                      {/* Arrow Indicator */}
                      <motion.div
                        className="flex-shrink-0 text-gray-300 group-hover:text-blue-600 transition-colors"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Right Side - Quotes */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white border border-gray-300 rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <FaQuoteLeft className="text-2xl text-blue-600" />
                  <h3 className="text-lg font-bold text-gray-900">Inspiration</h3>
                </div>
                
                <div className="space-y-4">
                  {quotes.map((quote, index) => (
                    <motion.div
                      key={index}
                      className="border-l-4 border-blue-500 pl-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      <p className="text-xs text-gray-700 italic mb-1 editorial-text">
                        "{quote.text}"
                      </p>
                      <p className="text-xs text-gray-500 font-semibold">
                        — {quote.author}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
