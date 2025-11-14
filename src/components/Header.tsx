import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

/**
 * Header Section - Exactly Matching Naveen Template
 */
const Header: React.FC = () => {
  const fullName = 'Sabareeshwaran'; // Full name
  const profession = 'AI Developer | SAP Developer'; // Custom profession text
  const [linkedinImageError, setLinkedinImageError] = useState(false);
  const [githubImageError, setGithubImageError] = useState(false);

  const handleDownloadCV = async () => {
    const resumeUrl = portfolioData.resumeUrl || '/resume.pdf';
    
    // Check if it's a Google Drive link
    const isGoogleDrive = resumeUrl.includes('drive.google.com');
    
    if (isGoogleDrive) {
      // For Google Drive, use direct download link
      // Google Drive direct download format
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = 'Sabareeshwaran_Resume.pdf';
      link.target = '_blank'; // Open in new tab as fallback
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        document.body.removeChild(link);
      }, 100);
    } else {
      // For local files, use blob download
      try {
        const response = await fetch(resumeUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch resume');
        }
        
        // Get the blob with explicit PDF MIME type to preserve content
        const blob = await response.blob();
        const pdfBlob = new Blob([blob], { type: 'application/pdf' });
        
        // Create a download link
        const url = window.URL.createObjectURL(pdfBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Sabareeshwaran_Resume.pdf';
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        
        // Clean up after a short delay to ensure download starts
        setTimeout(() => {
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        }, 100);
      } catch (error) {
        console.error('Error downloading resume:', error);
        // Fallback: try direct download
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'Sabareeshwaran_Resume.pdf';
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        setTimeout(() => {
          document.body.removeChild(link);
        }, 100);
      }
    }
  };

  const handleContactInfo = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center bg-white px-4 sm:px-6 lg:px-8 pt-24 overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Section - Profile Picture */}
          <motion.div
            className="flex justify-center lg:justify-start order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
                <img
                  src={portfolioData.profileImage || '/placeholder-profile.jpg'}
                  alt={portfolioData.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x400?text=Your+Photo';
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right Section - Text Content */}
          <motion.div
            className="order-1 lg:order-2 w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="text-left">
              {/* Greeting - Properly aligned with name */}
              <p className="text-base sm:text-lg text-gray-600 mb-2 leading-none">
                Hello, I'm
              </p>
              
              {/* Name - Full name on single line */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-3 leading-tight">
                {fullName}
              </h1>
              
              {/* Profession */}
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8">
                {profession}
              </p>

              {/* Button Container */}
              <div className="btn-container flex flex-col sm:flex-row gap-4 mb-8">
                <motion.button
                  className="btn btn-color-2 inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-gray-900 text-gray-900 rounded-xl font-semibold text-base transition-colors hover:bg-gray-50 whitespace-nowrap cursor-pointer"
                  onClick={handleDownloadCV}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Download CV
                </motion.button>
                
                <motion.button
                  className="btn btn-color-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold text-base transition-colors hover:bg-gray-800 whitespace-nowrap cursor-pointer"
                  onClick={handleContactInfo}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Info
                </motion.button>
              </div>

              {/* Social Links Container */}
              <div id="socials-container" className="flex gap-4">
                {!linkedinImageError ? (
                  <motion.img
                    src="/linkedin.png"
                    alt="My Linked-in Profile"
                    className="icon w-10 h-10 rounded-xl cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => window.open(portfolioData.linkedinUrl, '_blank')}
                    onError={() => setLinkedinImageError(true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  />
                ) : (
                  <motion.div
                    className="icon w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center text-white hover:bg-gray-800 transition-colors cursor-pointer"
                    onClick={() => window.open(portfolioData.linkedinUrl, '_blank')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLinkedin className="text-lg" />
                  </motion.div>
                )}
                
                {!githubImageError ? (
                  <motion.img
                    src="/github.png"
                    alt="My Github Profile"
                    className="icon w-10 h-10 rounded-xl cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => window.open(portfolioData.githubUrl, '_blank')}
                    onError={() => setGithubImageError(true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  />
                ) : (
                  <motion.div
                    className="icon w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center text-white hover:bg-gray-800 transition-colors cursor-pointer"
                    onClick={() => window.open(portfolioData.githubUrl, '_blank')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="text-lg" />
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
