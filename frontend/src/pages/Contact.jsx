import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, Calendar, Briefcase, MessageSquare, ExternalLink, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [errors, setErrors] = useState({});
  const [backendStatus, setBackendStatus] = useState('unknown');

  // Backend API URL - Fallback to localhost in development
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'waleedahmad1102@gmail.com',
      href: 'mailto:waleedahmad1102@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 3155570362',
      href: 'tel:+923155570362',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nawabshah, Pakistan',
      href: '#',
      note: 'Available for remote positions worldwide',
    },
  ];

  const inquiryTypes = [
    { value: 'full-time', label: 'Full-time Position' },
    { value: 'contract', label: 'Contract Work' },
    { value: 'freelance', label: 'Freelance Project' },
    { value: 'technical-interview', label: 'Technical Interview' },
    { value: 'other', label: 'Other Inquiry' },
  ];

  // Function to check backend health
  const checkBackendHealth = async () => {
    try {
      setBackendStatus('checking');
      const response = await fetch(`${API_URL}/health`);
      if (response.ok) {
        setBackendStatus('healthy');
        alert('✅ Backend is connected and healthy!');
      } else {
        setBackendStatus('unhealthy');
        alert('⚠️ Backend connection issue');
      }
    } catch (error) {
      setBackendStatus('offline');
      alert('❌ Cannot connect to backend. Check if server is running.');
    }
  };

  // Function to check contact API health
  const checkContactAPIHealth = async () => {
    try {
      const response = await fetch(`${API_URL}/api/contact/health`);
      if (response.ok) {
        const data = await response.json();
        alert(`✅ Contact API is healthy\nTimestamp: ${data.timestamp}`);
      } else {
        alert('⚠️ Contact API connection issue');
      }
    } catch (error) {
      alert('❌ Cannot connect to Contact API.');
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    } else if (formData.name.trim().length > 100) {
      newErrors.name = 'Name must be less than 100 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    } else if (formData.email.trim().length > 150) {
      newErrors.email = 'Email must be less than 150 characters';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Please provide more details (minimum 20 characters)';
    } else if (formData.message.trim().length > 5000) {
      newErrors.message = 'Message must be less than 5000 characters';
    }

    if (formData.company && formData.company.trim().length > 200) {
      newErrors.company = 'Company name must be less than 200 characters';
    }

    if (formData.phone && formData.phone.trim().length > 20) {
      newErrors.phone = 'Phone number must be less than 20 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        console.log('Sending request to:', `${API_URL}/api/contact`);
        
        const response = await fetch(`${API_URL}/api/contact`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            company: formData.company ? formData.company.trim() : '',
            email: formData.email.trim(),
            phone: formData.phone ? formData.phone.trim() : '',
            subject: formData.subject.trim(),
            message: formData.message.trim(),
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          console.error('API Error Response:', data);
          throw new Error(data.message || `Failed to send message (Status: ${response.status})`);
        }

        if (!data.success) {
          throw new Error(data.message || 'Failed to send message');
        }

        // Success
        console.log('Success Response:', data);
        setShowSuccess(true);
        setFormData({ 
          name: '', 
          company: '', 
          email: '', 
          phone: '', 
          subject: '', 
          message: '' 
        });
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => setShowSuccess(false), 5000);
        
      } catch (error) {
        console.error('Submission Error:', error);
        setSubmitError(error.message || 'Failed to send message. Please try again or email directly at waleedahmad1102@gmail.com');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
    
    if (submitError) {
      setSubmitError('');
    }
  };

  // Get backend status color and text
  const getBackendStatusInfo = () => {
    switch (backendStatus) {
      case 'healthy':
        return { color: 'text-green-400', text: 'Connected', icon: '🟢' };
      case 'unhealthy':
        return { color: 'text-yellow-400', text: 'Issues', icon: '🟡' };
      case 'offline':
        return { color: 'text-red-400', text: 'Offline', icon: '🔴' };
      case 'checking':
        return { color: 'text-blue-400', text: 'Checking...', icon: '⏳' };
      default:
        return { color: 'text-gray-400', text: 'Unknown', icon: '⚪' };
    }
  };

  const statusInfo = getBackendStatusInfo();

  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <div className="h-2 w-2 rounded-full bg-blue-400 mr-2" />
            <span className="text-sm text-blue-300 font-medium">Get In Touch</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Let's Discuss</span>{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Opportunities
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Interested in collaborating or have a position that matches my skills? 
            I'm open to discussing full-time, contract, or freelance opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional Inquiry</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm currently accepting new opportunities and would be happy to discuss 
                how I can contribute to your team. Whether it's a full-time position, 
                contract work, or a specific project, let's connect.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start space-x-4 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-blue-500/30 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg group-hover:bg-gradient-to-br group-hover:from-blue-500/20 group-hover:to-blue-600/20 transition-colors">
                      <Icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm mb-1">{item.label}</p>
                      <p className="text-white font-medium text-lg">{item.value}</p>
                      {item.note && (
                        <p className="text-gray-500 text-sm mt-1">{item.note}</p>
                      )}
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Availability & Quick Links */}
            <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
              <div className="flex items-center mb-4">
                <Calendar className="h-5 w-5 text-blue-400 mr-3" />
                <h4 className="text-lg font-bold text-white">Current Availability</h4>
              </div>
              <div className="flex items-center mb-3">
                <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse mr-3" />
                <span className="text-green-400 font-medium">Open to Opportunities</span>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Available for immediate start. Response time: Within 24 hours.
              </p>
              
              <div className="flex items-center mb-4">
                <Clock className="h-4 w-4 text-blue-400 mr-2" />
                <span className="text-sm text-gray-400">Backend Status: 
                  <span 
                    className={`ml-1 ${statusInfo.color} font-medium cursor-pointer hover:opacity-80 transition-opacity`}
                    onClick={checkBackendHealth}
                    title="Click to check backend status"
                  >
                    {statusInfo.icon} {statusInfo.text}
                  </span>
                </span>
                <button 
                  onClick={checkContactAPIHealth}
                  className="ml-2 text-xs text-blue-400 hover:text-blue-300 flex items-center"
                  title="Check Contact API health"
                >
                  <ExternalLink className="h-3 w-3 inline mr-1" />
                  API Check
                </button>
              </div>
              
              <div className="flex space-x-4">
                <a
                  href="https://github.com/MuhammadWaleed110"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800/50 rounded-lg border border-slate-700 text-gray-300 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
                  title="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-waleed-gazar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800/50 rounded-lg border border-slate-700 text-gray-300 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Technical Info */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center mb-3">
                <svg className="h-5 w-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h4 className="text-lg font-bold text-white">Technical Delivery</h4>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0" />
                  <span><strong>Real-time Email Notifications:</strong> Instant delivery to my inbox</span>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0" />
                  <span><strong>Rate Limited:</strong> 5 submissions per 15 minutes for security</span>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0" />
                  <span><strong>No Data Storage:</strong> Your information is sent directly via email</span>
                </li>
              </ul>
            </div>

            {/* Professional Note */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700">
              <MessageSquare className="h-6 w-6 text-blue-400 mb-3" />
              <h4 className="text-lg font-bold text-white mb-2">What to Expect</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0" />
                  <span>Detailed response within 24 hours</span>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0" />
                  <span>Availability for technical interviews</span>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 flex-shrink-0" />
                  <span>Portfolio review and case study discussion</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Professional Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700"
          >
            <div className="flex items-center mb-6">
              <Briefcase className="h-6 w-6 text-blue-400 mr-3" />
              <div>
                <h3 className="text-2xl font-bold text-white">Professional Inquiry Form</h3>
                <p className="text-gray-400 text-sm mt-1">
                  Connected to backend server at: 
                  <span className="text-blue-400 font-mono block mt-1 bg-slate-800/50 px-2 py-1 rounded">
                    {API_URL}
                  </span>
                </p>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.name 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-slate-600 focus:border-blue-400 focus:ring-blue-400/20'
                    }`}
                    placeholder="Your full name"
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-1"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className="block text-gray-300 text-sm font-medium mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.company 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-slate-600 focus:border-blue-400 focus:ring-blue-400/20'
                    }`}
                    placeholder="Your company name"
                    disabled={isSubmitting}
                  />
                  {errors.company && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-1"
                    >
                      {errors.company}
                    </motion.p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.email 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-slate-600 focus:border-blue-400 focus:ring-blue-400/20'
                    }`}
                    placeholder="work@company.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-1"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-300 text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.phone 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-slate-600 focus:border-blue-400 focus:ring-blue-400/20'
                    }`}
                    placeholder="+92 (315) 123-4567"
                    disabled={isSubmitting}
                  />
                  {errors.phone && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-1"
                    >
                      {errors.phone}
                    </motion.p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
                  Inquiry Type *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white focus:outline-none focus:ring-2 transition-all duration-300 ${
                    errors.subject 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-slate-600 focus:border-blue-400 focus:ring-blue-400/20'
                  }`}
                  disabled={isSubmitting}
                >
                  <option value="">Select inquiry type</option>
                  {inquiryTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
                {errors.subject && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-1"
                  >
                    {errors.subject}
                  </motion.p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                  Project Details / Position Description *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                    errors.message 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-slate-600 focus:border-blue-400 focus:ring-blue-400/20'
                  }`}
                  placeholder="Tell me about the position, project requirements, timeline, and any specific technical needs..."
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-1"
                  >
                    {errors.message}
                  </motion.p>
                )}
                <p className="text-gray-500 text-sm mt-2">
                  Please include project scope, technologies involved, and timeline if applicable.
                  <span className="text-gray-400"> (Minimum 20 characters, maximum 5000 characters)</span>
                </p>
              </div>

              <div className="space-y-3">
                <motion.button
                  type="submit"
                  disabled={isSubmitting || backendStatus === 'offline'}
                  className={`w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 ${
                    isSubmitting || backendStatus === 'offline' ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                  whileHover={isSubmitting || backendStatus === 'offline' ? {} : { scale: 1.02 }}
                  whileTap={isSubmitting || backendStatus === 'offline' ? {} : { scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Processing...</span>
                    </>
                  ) : backendStatus === 'offline' ? (
                    <>
                      <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Backend Offline</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Submit Professional Inquiry</span>
                    </>
                  )}
                </motion.button>

                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm text-center p-4 bg-red-900/30 rounded-lg border border-red-700/50"
                  >
                    <div className="flex items-start">
                      <svg className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div className="text-left">
                        <p className="font-medium">Submission Error</p>
                        <p className="mt-1">{submitError}</p>
                        <a 
                          href="mailto:waleedahmad1102@gmail.com" 
                          className="text-blue-400 hover:text-blue-300 text-sm mt-2 inline-block"
                        >
                          Click here to email directly
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}

                <AnimatePresence>
                  {showSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center justify-center space-x-3 bg-green-900/30 border border-green-700/50 text-green-400 p-4 rounded-lg"
                    >
                      <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                      <div className="text-left">
                        <p className="font-medium">Inquiry submitted successfully!</p>
                        <p className="text-sm mt-1 text-green-300">
                          Your message has been sent to my email. I'll respond within 24 hours.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="text-gray-500 text-sm text-center pt-4 border-t border-slate-700">
                  <p className="mb-2">
                    💡 <strong>How it works:</strong> Your inquiry is sent directly to my email via secure backend.
                  </p>
                  <p>
                    All inquiries are confidential. I respect your privacy and will not share your information.
                  </p>
                  <p className="mt-2 text-xs text-gray-600">
                    API Status: <span className={statusInfo.color}>{statusInfo.icon} {statusInfo.text}</span>
                  </p>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;