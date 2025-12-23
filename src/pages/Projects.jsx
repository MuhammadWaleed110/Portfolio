import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ArrowRight, Users, TrendingUp, Zap, Shield } from 'lucide-react';
import Images from '../Constants/Images';

const Projects = ({ scrollToSection }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'BloodConnect Pakistan',
      category: 'Full Stack',
      image: Images.blood_connect,
      description: 'Digital blood donation platform connecting donors with recipients across Pakistan.',
      longDescription: 'A scalable MERN stack platform that connects blood donors with recipients in real-time across Pakistan. Features include donor availability tracking, secure authentication, responsive UI, and efficient backend logic to facilitate life-saving connections.',
      impact: 'Platform serves 5,000+ monthly users with 95% success rate in donor-recipient matching',
      technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'Socket.io'],
      features: ['Real-time donor matching', 'Secure authentication', 'Responsive design', 'Admin dashboard', 'Notification system'],
      github: 'https://github.com/MuhammadWaleed110',
      live: '#',
      featured: true,
      color: 'from-red-500/20 to-red-600/20',
      icon: Users
    },
    {
      id: 2,
      title: 'Airport Parking System',
      category: 'Full Stack',
      image: Images.airport_Parking,
      description: 'Real-time parking management system with secure booking and availability tracking.',
      longDescription: 'A comprehensive MERN stack airport parking service system with secure booking, real-time availability tracking, and intuitive interface. Designed for fast user interaction and efficient parking management.',
      impact: 'Handles 1,000+ daily bookings with 99.9% uptime and automated payment processing',
      technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
      features: ['Real-time availability', 'Secure payments', 'Admin dashboard', 'QR code entry', 'Analytics'],
      github: 'https://github.com/MuhammadWaleed110/Airport-Parking',
      live: 'https://muhammadwaleed110.github.io/Airport-Parking/',
      featured: true,
      color: 'from-blue-500/20 to-blue-600/20',
      icon: Shield
    },
    {
      id: 3,
      title: 'Coffee Khaas',
      category: 'Frontend',
      image: Images.coffee_khaas,
      description: 'Modern coffee shop website with online ordering and mobile-friendly UI.',
      longDescription: 'A premium coffee shop platform offering freshly brewed drinks made from ethically sourced beans. Features online ordering, menu management, and a seamless user experience with mobile-friendly responsive design.',
      impact: 'Increased online sales by 300% with streamlined ordering process and mobile optimization',
      technologies: ['React.js', 'Tailwind CSS'],
      features: ['Online ordering', 'Menu management', 'Cart system', 'Responsive design', 'Order tracking'],
      github: 'https://github.com/MuhammadWaleed110/Coffee_Khaas',
      live: 'https://muhammadwaleed110.github.io/Coffee_Khaas/',
      featured: true,
      color: 'from-amber-500/20 to-amber-600/20',
      icon: TrendingUp
    },
  ];

  const categories = ['All', 'Full Stack', 'Frontend'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-400/10 border border-blue-500/20 mb-6">
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 mr-2" />
            <span className="text-sm text-gray-300">Projects</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Featured</span>{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing my expertise in building modern web applications
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-slate-800/50 text-gray-300 hover:text-white border border-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className={`bg-gradient-to-br ${project.color} backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 h-full flex flex-col`}>
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-xs font-medium rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Project Content */}
                    <div className="p-6 flex-grow">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-slate-700/50 text-blue-400 text-xs rounded-full border border-slate-600"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-3 py-1 bg-slate-700/50 text-gray-400 text-xs rounded-full border border-slate-600">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* View Button */}
                    <div className="mt-auto p-6 pt-0">
                      <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                        <div className="flex items-center text-blue-400 group-hover:text-cyan-300 transition-colors">
                          <span className="text-sm font-medium">View Details</span>
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                        
                        <div className="flex space-x-2">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-slate-800/50 rounded-lg border border-slate-700 text-gray-300 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
                            title="View Source Code"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                          {project.live !== '#' && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 bg-slate-800/50 rounded-lg border border-slate-700 text-gray-300 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
                              title="Live Demo"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-500/10 via-cyan-400/10 to-blue-500/10 backdrop-blur-sm p-10 rounded-2xl border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Have a project in mind?</h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6">
              Let's work together to bring your ideas to life with modern web technologies.
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              Let's Discuss Your Project
            </button>
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative h-64">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-slate-900/80 backdrop-blur-sm rounded-full text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              {/* Modal Content */}
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 text-blue-400 text-sm font-medium rounded-full border border-blue-500/30">
                      {selectedProject.category}
                    </span>
                  </div>
                  
                  <div className="flex space-x-4 mt-4 lg:mt-0">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-lg transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      <span>Code</span>
                    </a>
                    {selectedProject.live !== '#' && (
                      <a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-5 py-2.5 rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                      >
                        <ExternalLink className="h-5 w-5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
                
                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">About This Project</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>
                
                {/* Technologies */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 text-blue-400 rounded-lg font-medium border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;