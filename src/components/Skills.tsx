import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

/**
 * Minimalist Editorial Skills Section - Light Gray Background
 */
const Skills: React.FC = () => {
  const skillCategories = {
    'AI & Machine Learning': [
      'PyTorch', 'TensorFlow', 'LangChain', 'LangGraph', 'AutoGen', 'CrewAI',
      'OpenAI API', 'RAG Pipelines', 'Multi-agent Systems', 'Prompt Engineering',
    ],
    'Vector Databases & Tools': [
      'Qdrant', 'Pinecone', 'Weaviate', 'Cohere AI', 'LlamaIndex', 'BabyAGI',
    ],
    'SAP Technologies': [
      'SAP ABAP', 'SAP BTP', 'SAP BAS', 'SAP Fiori',
    ],
    'Development & Frontend': [
      'Python', 'React', 'TypeScript', 'Three.js', 'WebGL',
    ],
    'Tools & APIs': [
      'n8n', 'REST APIs', 'SQL', 'Git',
    ],
  };

  return (
    <section id="skills" className="section-padding bg-gray-50" style={{ scrollMarginTop: '80px' }}>
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
            SKILLS
          </h2>
          <div className="w-20 h-px bg-gray-400 mx-auto mb-4" />
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto editorial-text">
            A comprehensive toolkit organized by expertise areas
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {Object.entries(skillCategories).map(([category, skills], catIndex) => (
            <motion.div
              key={category}
              className="bg-white border border-gray-300 p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              {/* Category Label */}
              <h3 className="text-sm font-bold text-gray-900 mb-4 pb-3 border-b border-gray-300 tracking-wider">
                {category.toUpperCase()}
              </h3>
              
              {/* Skills List */}
              <div className="space-y-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={`${category}-${skill}`}
                    className="py-2 px-3 bg-gray-50 border border-gray-200 hover:border-gray-400 hover:bg-gray-100 transition-all cursor-default"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: catIndex * 0.1 + index * 0.03 }}
                  >
                    <span className="font-medium text-gray-700 text-xs">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Strengths */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-sm text-gray-600 italic mb-6 editorial-text">
            Specialized in building intelligent systems that bridge AI and enterprise solutions
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['RAG Systems', 'Multi-Agent Orchestration', 'SAP AI Integration', 'Prompt Engineering'].map((strength, index) => (
              <motion.span
                key={strength}
                className="px-4 py-2 bg-white border border-gray-300 text-gray-900 text-xs font-semibold shadow-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, borderColor: 'gray-400' }}
              >
                {strength.toUpperCase()}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
