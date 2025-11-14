import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaPhone, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { portfolioData } from '../data/portfolioData';

/**
 * Contact Section - Logos on Left, Form on Right
 */
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  // EmailJS Configuration
  const EMAILJS_SERVICE_ID = 'service_iz7i10q';
  const EMAILJS_TEMPLATE_ID = 'template_3tzlf4h';
  const EMAILJS_PUBLIC_KEY = '7JqNoF-RajuH9dP1D';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          reply_to: formData.email, // Set reply-to to sender's email
          message: formData.message,
          to_email: portfolioData.email, // Your email address
        },
        EMAILJS_PUBLIC_KEY
      );

      if (result.text === 'OK') {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Thank you! Your message has been sent successfully.' 
        });
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        });
      }
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Sorry, there was an error sending your message. Please try again or contact me directly.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
    {
      id: 'facebook',
      icon: FaFacebook,
      label: 'Facebook',
      value: 'Connect with me',
      href: 'https://www.facebook.com/share/1UXLy7e3aD/',
      iconBg: 'bg-black',
      iconShadow: 'shadow-gray-300',
      borderColor: 'border-gray-200',
      external: true,
    },
    {
      id: 'instagram',
      icon: FaInstagram,
      label: 'Instagram',
      value: 'Follow me',
      href: 'https://www.instagram.com/sabareeshmasi?igsh=bDdqZDltNnpjdzlw',
      iconBg: 'bg-black',
      iconShadow: 'shadow-gray-300',
      borderColor: 'border-gray-200',
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 bg-gray-100" style={{ scrollMarginTop: '80px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
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

        {/* Main Content - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Icons Grid (Dice Format 3x2) */}
          <div className="flex justify-center lg:justify-start">
            <div className="grid grid-cols-3 gap-6">
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-20 h-20 bg-black rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                      <Icon className="text-white text-2xl" />
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name and Last Name - Side by Side */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full border-b-2 border-gray-900 focus:outline-none focus:border-gray-600 bg-transparent py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full border-b-2 border-gray-900 focus:outline-none focus:border-gray-600 bg-transparent py-2"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-b-2 border-gray-900 focus:outline-none focus:border-gray-600 bg-transparent py-2"
                />
              </div>

              {/* Message */}
              <div>
                {!formData.message && (
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Write a message
                  </label>
                )}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write a message"
                  rows={6}
                  className="w-full border-b-2 border-gray-900 focus:outline-none focus:border-gray-600 bg-transparent py-1 resize-none overflow-y-auto"
                  style={{ lineHeight: '1.4' }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending...' : 'Submit'}
              </button>

              {/* Status Message */}
              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 p-4 rounded-lg ${
                    submitStatus.type === 'success'
                      ? 'bg-green-100 text-green-800 border border-green-300'
                      : 'bg-red-100 text-red-800 border border-red-300'
                  }`}
                >
                  <p className="text-sm font-medium">{submitStatus.message}</p>
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
