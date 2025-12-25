import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, GraduationCap, Briefcase, Code2, Users, Award, Download, CheckCircle, Target } from 'lucide-react';

const About = ({ scrollToSection }) => {
  const education = [
    {
      degree: "Bachelor's in Software Engineering",
      institution: 'Mehran University of Engineering & Technology',
      period: 'November 2021 - November 2025',
      location: 'Khairpur, Pakistan',
      gpa: '3.10/4.0',
      icon: GraduationCap,
    },
    {
      degree: 'Intermediate in Pre-Engineering',
      institution: 'Govt. Higher Secondary School',
      period: 'May 2018 - July 2020',
      location: 'Nawabshah, Pakistan',
      icon: GraduationCap,
    },
  ];

  const experience = [
    {
      title: 'Software Engineer',
      company: 'Tech Solutions Inc',
      period: '2023 - Present',
      location: 'Remote',
      responsibilities: [
        'Developed scalable web applications serving 10,000+ users',
        'Built REST APIs with Node.js and Express.js',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Collaborated with cross-functional teams using Agile methodologies',
      ],
      icon: Briefcase,
    },
    {
      title: 'Frontend Developer Intern',
      company: 'StartupXYZ',
      period: '2022 - 2023',
      location: 'Karachi, Pakistan',
      responsibilities: [
        'Created responsive UIs using React and Tailwind CSS',
        'Optimized application performance by 40%',
        'Worked with UI/UX designers to implement designs',
        'Participated in code reviews and maintained coding standards',
      ],
      icon: Users,
    },
  ];

  const coreCompetencies = [
    { skill: 'Mern Stack Development', level: 90 },
    { skill: 'React.js & Modern JavaScript', level: 95 },
    { skill: 'Node.js & Backend Architecture', level: 85 },
    { skill: 'Database Design & Management', level: 80 },
    { skill: 'UI/UX Implementation', level: 90 },
  ];

  const professionalValues = [
    { icon: Target, title: 'Business Focus', description: 'Solutions that drive measurable business outcomes' },
    { icon: CheckCircle, title: 'Quality Code', description: 'Clean, maintainable, and well-documented code' },
    { icon: Users, title: 'Collaboration', description: 'Effective team player and communicator' },
    { icon: Calendar, title: 'Timely Delivery', description: 'Meeting deadlines without compromising quality' },
  ];

  return (
    <section id="about" className="py-24 bg-slate-900">
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
            <span className="text-sm text-blue-300 font-medium">Professional Profile</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">About</span>{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Muhammad Waleed
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Software Engineer specializing in building scalable web applications with modern technologies
          </p>
        </motion.div>

        {/* Professional Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 mb-16 border border-slate-700"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Professional Summary</h3>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  I am a results-driven Software Engineer with 1+ years of experience architecting 
                  and developing scalable web applications. My expertise lies in the MERN stack 
                  (MongoDB, Express.js, React.js, Node.js), with a strong focus on delivering 
                  high-performance solutions that drive business growth.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I have successfully delivered multiple production-ready applications, including 
                  enterprise-level platforms and consumer-facing web applications. My approach 
                  combines technical excellence with business acumen to create solutions that 
                  not only work perfectly but also contribute to organizational success.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                >
                  Schedule Technical Interview
                </button>
                <button className="px-6 py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300 flex items-center space-x-2">
                  <Download className="h-5 w-5" />
                  <span>Download Technical CV</span>
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700">
                <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
                <div className="text-gray-400">Projects Delivered</div>
              </div>
              <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700">
                <div className="text-3xl font-bold text-blue-400 mb-2">1+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700">
                <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
              <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700">
                <Award className="h-8 w-8 text-blue-400 mb-2" />
                <div className="text-gray-400">Award Winner</div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column: Education & Experience */}
          <div className="space-y-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-6 w-6 text-blue-400" />
                  <h3 className="text-2xl font-bold text-white">Education</h3>
                </div>
                <div className="text-sm text-gray-500">Academic Background</div>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => {
                  const Icon = edu.icon;
                  return (
                    <div key={index} className="relative pl-8 border-l-2 border-blue-500">
                      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900" />
                      
                      <div className="bg-slate-800/30 rounded-xl p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                            <p className="text-blue-400 mt-1">{edu.institution}</p>
                          </div>
                          <Icon className="h-5 w-5 text-blue-400" />
                        </div>
                        
                        <div className="flex items-center text-gray-400 text-sm mb-2">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{edu.period}</span>
                          <span className="mx-3">•</span>
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{edu.location}</span>
                        </div>
                        
                        {edu.gpa && (
                          <div className="mt-3">
                            <span className="text-sm text-gray-300">GPA: </span>
                            <span className="text-blue-400 font-semibold">{edu.gpa}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Professional Experience */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <Briefcase className="h-6 w-6 text-blue-400" />
                  <h3 className="text-2xl font-bold text-white">Experience</h3>
                </div>
                <div className="text-sm text-gray-500">Professional Journey</div>
              </div>
              
              <div className="space-y-6">
                {experience.map((exp, index) => {
                  const Icon = exp.icon;
                  return (
                    <div key={index} className="relative pl-8 border-l-2 border-cyan-500">
                      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-900" />
                      
                      <div className="bg-slate-800/30 rounded-xl p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                            <p className="text-cyan-400 mt-1">{exp.company}</p>
                          </div>
                          <Icon className="h-5 w-5 text-cyan-400" />
                        </div>
                        
                        <div className="flex items-center text-gray-400 text-sm mb-4">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{exp.period}</span>
                          <span className="mx-3">•</span>
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{exp.location}</span>
                        </div>
                        
                        <ul className="space-y-3">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start text-gray-300">
                              <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 mt-2 mr-3 flex-shrink-0" />
                              <span className="leading-relaxed">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Skills & Values */}
          <div className="space-y-12">
            {/* Core Competencies */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <Code2 className="h-6 w-6 text-blue-400" />
                  <h3 className="text-2xl font-bold text-white">Core Competencies</h3>
                </div>
                <div className="text-sm text-gray-500">Technical Expertise</div>
              </div>
              
              <div className="space-y-6">
                {coreCompetencies.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.skill}</span>
                      <span className="text-blue-400 font-bold">{skill.level}%</span>
                    </div>
                    
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1.5, 
                          delay: index * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Professional Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-white">Professional Values</h3>
                <div className="text-sm text-gray-500">Work Ethic</div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {professionalValues.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div key={index} className="bg-slate-800/30 rounded-xl p-6 border border-slate-700">
                      <Icon className="h-8 w-8 text-blue-400 mb-4" />
                      <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
                      <p className="text-gray-400 text-sm">{value.description}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold text-white">Availability Status</h4>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse mr-2" />
                  <span className="text-green-400 text-sm font-medium">Available Now</span>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Open to full-time, contract, or freelance opportunities. 
                Ready to start immediately and contribute to your team's success.
              </p>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              >
                Discuss Opportunity
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;