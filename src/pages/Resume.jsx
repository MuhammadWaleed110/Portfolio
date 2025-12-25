import React from 'react';
import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, Award, Mail, Phone, MapPin, Globe } from 'lucide-react';

const Resume = () => {
  const experience = [
    {
      title: 'Mern Stack Developer',
      company: 'Tech Solutions Inc',
      period: '2023 - Present',
      location: 'Remote',
      responsibilities: [
        'Developed and maintained 5+ React applications serving 10,000+ users',
        'Built scalable REST APIs using Node.js and Express.js',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Collaborated with cross-functional teams using Agile methodologies',
      ],
    },
    {
      title: 'Frontend Developer Intern',
      company: 'StartupXYZ',
      period: '2022 - 2023',
      location: 'City, Country',
      responsibilities: [
        'Created responsive user interfaces using React and Tailwind CSS',
        'Optimized application performance resulting in 40% faster load times',
        'Worked closely with UI/UX designers to implement pixel-perfect designs',
        'Participated in code reviews and maintained coding standards',
      ],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Software Engineering',
      institution: 'Mehran University of Engineering & Technology',
      period: '2019 - 2023',
      location: 'Khairpur, Pakistan',
      achievements: [
        'Graduated Magna Cum Laude with GPA 3.10/4.0',
        'Specialized in Web Development and Software Architecture',
        'Completed courses in Data Structures, Algorithms, and Database Management',
        'Developed multiple academic projects including e-commerce platforms and management systems',
        'Participated in programming competitions and tech workshops',
        'Maintained strong academic performance throughout the program',
      ],
    },
  ];

  const certifications = [
    'AWS Certified Developer - Associate',
    'MongoDB Certified Developer',
    'Google Cloud Professional Developer',
    'Meta Frontend Developer Certificate',
  ];

  const skills = [
    ['React.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    ['Node.js', 'Express.js', 'postman', 'REST APIs', 'JWT','GraphQL'],
    ['MongoDB', 'PostgreSQL', 'Firebase',],
    ['Git', 'GitHub', 'VS Code', 'Figma', ],
  ];

  // Function to handle CV download
  const handleDownloadCV = () => {
    // Path to your CV file in the public folder
    const cvUrl = '/Muhammad Waleed CV.pdf';
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = cvUrl;
    
    // Set the download attribute with the desired filename
    link.download = 'Muhammad_Waleed_CV.pdf';
    
    // Append to the body
    document.body.appendChild(link);
    
    // Trigger the download
    link.click();
    
    // Clean up
    document.body.removeChild(link);
  };

  // Alternative method for better cross-browser compatibility
  const handleDownloadCVIOS = () => {
    try {
      // Create a temporary anchor element
      const link = document.createElement('a');
      link.href = '/Muhammad Waleed CV.pdf';
      link.download = 'Muhammad_Waleed_CV.pdf';
      
      // Append to the body
      document.body.appendChild(link);
      
      // Trigger the download
      link.click();
      
      // Clean up
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading CV:', error);
      
      // Fallback: Open in new tab if download fails
      window.open('/Muhammad Waleed CV.pdf', '_blank');
    }
  };

  // Function to handle CV view in new tab
  const handleViewCV = () => {
    window.open('/Muhammad Waleed CV.pdf', '_blank');
  };

  return (
    <section id="resume" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
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
            <span className="text-sm text-gray-300">Resume</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Professional</span>{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            A detailed overview of my experience, education, and achievements
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleDownloadCV}
              className="group px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-lg flex items-center justify-center space-x-3 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
            >
              <Download className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
              <span>Download CV</span>
            </button>
            
            {/* Optional: Add a View CV button */}
            <button 
              onClick={handleViewCV}
              className="group px-8 py-3 border-2 border-blue-400/30 text-blue-400 font-semibold rounded-lg flex items-center justify-center space-x-3 hover:bg-blue-500/10 hover:border-blue-400/50 transition-all duration-300"
            >
              <Globe className="h-5 w-5" />
              <span>View CV</span>
            </button>
          </div>
        </motion.div>

        {/* Resume Content */}
        <div className="max-w-5xl mx-auto">
          {/* Resume Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div>
                  <h1 className="text-4xl font-bold text-white mb-2">Muhammad Waleed</h1>
                  <p className="text-xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-medium">
                    Software Engineer
                  </p>
                  <p className="text-gray-300 mt-4 max-w-lg">
                    Passionate full-stack developer specializing in modern web technologies 
                    and scalable application architecture.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-blue-400" />
                    <span className="text-gray-300">waleedahmad1102@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-blue-400" />
                    <span className="text-gray-300">+92 3155570362</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-4 w-4 text-blue-400" />
                    <span className="text-gray-300">Nawabshah, Pakistan</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="p-8 lg:p-12 space-y-12">
              {/* Experience */}
              <section>
                <div className="flex items-center space-x-3 mb-8">
                  <Briefcase className="h-6 w-6 text-blue-400" />
                  <h2 className="text-2xl font-bold text-white">Work Experience</h2>
                </div>
                
                <div className="space-y-8">
                  {experience.map((job, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative pl-8 border-l-2 border-blue-400"
                    >
                      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 border-4 border-slate-900" />
                      
                      <div className="bg-slate-700/30 rounded-xl p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">{job.title}</h3>
                            <p className="text-blue-400 font-medium">{job.company}</p>
                          </div>
                          <div className="text-gray-400 mt-2 lg:mt-0">
                            <p>{job.period}</p>
                            <p className="text-sm">{job.location}</p>
                          </div>
                        </div>
                        
                        <ul className="space-y-2">
                          {job.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 mt-2 mr-3" />
                              <span className="text-gray-300">{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section>
                <div className="flex items-center space-x-3 mb-8">
                  <GraduationCap className="h-6 w-6 text-blue-400" />
                  <h2 className="text-2xl font-bold text-white">Education</h2>
                </div>
                
                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="relative pl-8 border-l-2 border-cyan-400"
                    >
                      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 border-4 border-slate-900" />
                      
                      <div className="bg-slate-700/30 rounded-xl p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                            <p className="text-cyan-400 font-medium">{edu.institution}</p>
                          </div>
                          <div className="text-gray-400 mt-2 lg:mt-0">
                            <p>{edu.period}</p>
                            <p className="text-sm">{edu.location}</p>
                          </div>
                        </div>
                        
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 mt-2 mr-3" />
                              <span className="text-gray-300">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Skills Grid */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-8">Technical Skills</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {skills.map((skillGroup, groupIndex) => (
                    <div key={groupIndex} className="space-y-4">
                      <div className="flex flex-wrap gap-3">
                        {skillGroup.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 text-blue-400 rounded-lg font-medium border border-blue-500/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Certifications */}
              <section>
                <div className="flex items-center space-x-3 mb-6">
                  <Award className="h-6 w-6 text-blue-400" />
                  <h2 className="text-2xl font-bold text-white">Certifications</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 bg-slate-700/30 p-4 rounded-lg"
                    >
                      <Award className="h-5 w-5 text-cyan-400" />
                      <span className="text-gray-300">{cert}</span>
                    </motion.div>
                  ))}
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;