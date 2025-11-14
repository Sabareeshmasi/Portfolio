import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaVideo } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';

/**
 * Minimalist Editorial Projects Section - Light Gray Background
 */
const Projects: React.FC = () => {
  const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
    return (
      <motion.div
        className="group relative h-full bg-white border border-gray-300 p-6 sm:p-8 shadow-sm"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.6,
          delay: index * 0.1,
          ease: "easeOut",
        }}
      >
        {/* Project Number */}
        <div className="flex items-start justify-between mb-4">
          <div className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-wider">
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 tracking-wider leading-tight">
          {project.title.toUpperCase()}
        </h3>

        {/* Description */}
        <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base editorial-text line-clamp-4">
          {project.description}
        </p>

        {/* Technologies - Minimalist Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-gray-50 text-gray-700 border border-gray-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 text-xs font-semibold text-gray-500 bg-gray-50 border border-gray-200">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Action Links - Minimalist */}
        <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-300">
          {project.liveLink && (
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors border-b border-gray-900 hover:border-gray-700"
              whileHover={{ x: 2 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaExternalLinkAlt className="text-xs" />
              <span>VIEW</span>
            </motion.a>
          )}

          {project.githubLink && (
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors border-b border-gray-900 hover:border-gray-700"
              whileHover={{ x: 2 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaGithub className="text-xs" />
              <span>CODE</span>
            </motion.a>
          )}

          {project.videoLink && (
            <motion.a
              href={project.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors border-b border-gray-900 hover:border-gray-700"
              whileHover={{ x: 2 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaVideo className="text-xs" />
              <span>VIDEO</span>
            </motion.a>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="section-padding bg-gray-50 relative" style={{ scrollMarginTop: '80px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-wider">
            PROJECTS
          </h2>
          <div className="w-20 h-px bg-gray-400 mx-auto mb-4" />
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto editorial-text">
            Innovative AI-powered solutions and cutting-edge implementations
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
