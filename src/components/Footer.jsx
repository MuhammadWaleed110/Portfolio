import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, ArrowUp } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/MuhammadWaleed110', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammad-waleed-gazar/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:waleedahmad1102@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Muhammad Waleed</h3>
                <p className="text-blue-300 text-sm">Software Engineer</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Building scalable web applications with modern technologies. 
              Open to full-time, contract, and freelance opportunities.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-slate-800/50 rounded-lg border border-slate-700 text-gray-300 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
                    title={link.label}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <div className="grid grid-cols-2 gap-4">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Professional Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Professional Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:waleedahmad1102@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                    waleedahmad1102@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-gray-400 text-sm">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/muhammad-waleed-gazar/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    https://www.linkedin.com/in/muhammad-waleed-gazar/
                  </a>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-800">
                <p className="text-gray-400 text-sm mb-2">Response Time</p>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse mr-2" />
                  <span className="text-green-400 text-sm font-medium">Within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Back to Top */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Muhammad Waleed. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Built with React.js, Tailwind CSS, and Framer Motion
            </p>
          </motion.div>

          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors group"
          >
            <span className="text-sm">Back to Top</span>
            <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;