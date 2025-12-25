import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Download, Github, Linkedin, Calendar, Award, Briefcase } from 'lucide-react';
import TypeWriter from '../components/TypeWriter';

const Home = ({ scrollToSection }) => {
  const roles = ['Software Engineer', 'MERN Stack Developer', 'Full Stack Developer', 'Web Developer'];
  
  // Use public folder path for the image
  const profileImage = '/Profile-Image.jpeg';

  return (
    <section id="home" className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Content - Text */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-400/10 mb-8"
            >
              <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 mr-2" />
              <span className="text-sm text-gray-300">Software Engineer</span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-white">Muhammad</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Waleed
              </span>
            </motion.h1>

            <motion.div
              className="text-2xl lg:text-3xl mb-8 h-12 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <TypeWriter 
                words={roles} 
                speed={80} 
                deleteSpeed={40} 
                delayBetween={1500} 
              />
            </motion.div>

            <motion.p
              className="text-gray-400 text-lg mb-10 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              I craft exceptional digital experiences with modern web technologies. 
              Passionate about building scalable applications that solve real-world problems.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-lg flex items-center justify-center space-x-3 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1"
              >
                <span>View Projects</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="group px-8 py-4 text-blue-400 font-semibold rounded-lg flex items-center justify-center space-x-3 hover:bg-blue-500/10 transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
                <span>Hire Me</span>
              </button>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-8 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">1+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">15+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">100%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <a
                href="https://github.com/MuhammadWaleed110"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 rounded-lg text-gray-300 hover:text-white hover:bg-blue-500/10 transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-waleed-gazar/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 rounded-lg text-gray-300 hover:text-white hover:bg-blue-500/10 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="p-3 bg-slate-800/50 rounded-lg text-gray-300 hover:text-white hover:bg-blue-500/10 transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
              </button>
              <button
                onClick={() => scrollToSection('resume')}
                className="p-3 bg-slate-800/50 rounded-lg text-gray-300 hover:text-white hover:bg-blue-500/10 transition-all duration-300"
              >
                <Download className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Background Effects */}
              <motion.div
                className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 blur-3xl rounded-full"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Glowing Rings */}
              <motion.div
                className="absolute -inset-4 rounded-full border-2 border-blue-400/10"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              {/* Main Profile Container */}
              <div className="relative z-10">
                {/* Changed from rounded-2xl to rounded-full for circular shape */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 overflow-hidden rounded-full shadow-2xl border-4 border-white/5">
                  <img 
                    src={profileImage} 
                    alt="Muhammad Waleed"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      // Fallback image
                      e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  {/* Gradient overlay adjusted for circle */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent rounded-full" />
                </div>
                
                {/* Floating Info Cards */}
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-slate-900/80 backdrop-blur-md p-4 rounded-xl shadow-lg"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                      <Briefcase className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Experience</p>
                      <p className="text-white font-semibold">MERN Stack</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -top-6 -right-6 bg-slate-900/80 backdrop-blur-md p-4 rounded-xl shadow-lg"
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Status</p>
                      <p className="text-white font-semibold">Open to Work</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;