import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import type { Achievement } from '../data/portfolioData';

/**
 * Modern Achievements section with vibrant design and animated counters
 */
const Achievements: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      y: -10,
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Animated counter component
  const AnimatedCounter: React.FC<{ value: number; suffix?: string }> = ({ 
    value, 
    suffix = '' 
  }) => {
    const [count, setCount] = React.useState(0);

    useEffect(() => {
      if (isInView) {
        const duration = 2;
        const steps = 60;
        const increment = value / (duration * steps);
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= value) {
            setCount(value);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, (duration * 1000) / steps);

        return () => clearInterval(timer);
      }
    }, [isInView, value]);

    return (
      <span>
        {count.toLocaleString()}{suffix}
      </span>
    );
  };

  const AchievementCard: React.FC<{ achievement: Achievement; index: number }> = ({ 
    achievement,
    index
  }) => {
    return (
      <motion.div
        className="group"
        variants={cardVariants}
        whileHover="hover"
      >
        <div className="elegant-card text-center">
          {/* Count or icon - Elegant design */}
          {achievement.count !== undefined ? (
            <div className="mb-3">
              <div className="text-4xl font-serif italic text-brown-600">
                <AnimatedCounter value={achievement.count} />
              </div>
            </div>
          ) : (
            achievement.icon && (
              <div className="text-5xl mb-3">
                <img src={achievement.icon} alt={achievement.title} className="w-14 h-14 mx-auto" />
              </div>
            )
          )}

          {/* Title and description */}
          <p className="text-base font-semibold text-charcoal-800 mb-1">
            {achievement.title}
          </p>
          <p className="text-sm text-charcoal-600">
            {achievement.description}
          </p>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="achievements" className="section-padding relative overflow-hidden bg-beige-200">
      <div className="max-w-7xl mx-auto relative z-10 px-4" ref={containerRef}>
        {/* Section Header - Elegant */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif italic text-brown-600 mb-4">
            My Achievements
          </h2>
          <div className="w-16 h-0.5 bg-brown-600 mx-auto mb-6" />
          <p className="text-lg text-charcoal-600 max-w-2xl mx-auto leading-relaxed">
            Highlights of my professional and academic journey
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {portfolioData.achievements.map((achievement, index) => (
            <AchievementCard key={achievement.id} achievement={achievement} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
