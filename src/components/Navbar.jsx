import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Code2, Mail } from 'lucide-react';

const Navbar = ({ activeSection, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Resume', id: 'resume' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  const handleHireMeClick = () => {
    scrollToSection('contact');
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="p-2 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <div className="text-left">
              <span className="text-2xl font-bold text-white">
                Muhammad Waleed
              </span>
              <p className="text-xs text-blue-300 -mt-1">Software Engineer</p>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 relative group ${
                  activeSection === item.id
                    ? 'text-blue-400 bg-blue-500/10'
                    : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {activeSection === item.id && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-lg border border-blue-500/20"
                  />
                )}
              </button>
            ))}
            
            {/* Hire Me Button */}
            <button
              onClick={handleHireMeClick}
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center space-x-2"
            >
              <Mail className="h-4 w-4" />
              <span>Hire Me</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={handleHireMeClick}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium rounded-lg"
            >
              Hire Me
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-blue-400 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          height: isOpen ? 'auto' : 0 
        }}
        className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800"
      >
        <div className="px-6 py-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-blue-400 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20'
                  : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;