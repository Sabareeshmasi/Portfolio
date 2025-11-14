import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  image?: string;
}

const certifications: Certification[] = [
  {
    id: '1',
    title: 'SAP AI NextGen',
    issuer: 'SAP',
    date: '2024',
    credentialId: 'SAP-AI-NG-2024',
  },
  {
    id: '2',
    title: 'Model Context Protocol',
    issuer: 'MCP',
    date: '2024',
    credentialId: 'MCP-2024',
  },
  {
    id: '3',
    title: 'SAP ABAP Development',
    issuer: 'SAP',
    date: '2024',
    credentialId: 'SAP-ABAP-2024',
  },
];

/**
 * Minimalist Editorial Certifications Section
 */
const Certifications: React.FC = () => {
  const CertificationCard: React.FC<{ certification: Certification; index: number }> = ({ certification, index }) => {
    return (
      <motion.div
        className="bg-white border border-gray-300 p-6 h-full group hover:border-gray-400 transition-all"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <div className="flex gap-4">
          {/* Certificate icon */}
          <div className="flex-shrink-0">
            <div className="w-14 h-14 bg-gray-50 border border-gray-300 flex items-center justify-center">
              <FaCertificate className="text-2xl text-black" />
            </div>
          </div>

          {/* Certification details */}
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold text-black mb-1 line-clamp-2 tracking-wider">
              {certification.title.toUpperCase()}
            </h3>
            
            <p className="text-sm font-semibold text-gray-700 mb-1 editorial-text">
              {certification.issuer}
            </p>
            
            <p className="text-xs text-gray-600 mb-2 editorial-text">
              {certification.date}
            </p>

            {certification.credentialId && (
              <p className="text-xs text-gray-500 mb-2 editorial-text">
                ID: {certification.credentialId}
              </p>
            )}

            {certification.credentialUrl && (
              <motion.a
                href={certification.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-black hover:text-gray-600 transition-colors border-b border-black hover:border-gray-600"
                whileHover={{ x: 2 }}
              >
                VIEW CREDENTIAL
                <FaExternalLinkAlt className="text-xs" />
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="certifications" className="section-padding bg-white">
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
            CERTIFICATIONS
          </h2>
          <div className="w-20 h-px bg-black mx-auto mb-4" />
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto editorial-text">
            Professional certifications and credentials
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((certification, index) => (
            <CertificationCard key={certification.id} certification={certification} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
