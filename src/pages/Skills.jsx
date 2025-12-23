import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Palette, Server, Cpu, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      skills: [
        { name: "React.js", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Tailwind CSS", level: 90 },
      ],
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "REST APIs", level: 90 },
        { name: "GraphQL", level: 70 },
        { name: "JWT", level: 80 },
      ],
      color: "from-blue-500 to-indigo-400",
    },
    {
      title: "Database & Cloud",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Firebase", level: 85 },
      ],
      color: "from-cyan-400 to-blue-500",
    },
    {
      title: "Tools & Design",
      icon: Palette,
      skills: [
        { name: "Figma", level: 85 },
        { name: "Git/GitHub", level: 95 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 90 },
      ],
      color: "from-indigo-400 to-blue-500",
    },
  ];

  const softSkills = [
    { name: "Problem Solving", icon: Cpu },
    { name: "Team Collaboration", icon: Globe },
    { name: "Communication", icon: Globe },
    { name: "Adaptability", icon: Globe },
    { name: "Time Management", icon: Globe },
    { name: "Leadership", icon: Globe },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-400/10 border border-blue-500/20 mb-6">
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 mr-2" />
            <span className="text-sm text-gray-300">Skills & Expertise</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Technical</span>{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Proficiency
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Mastering modern technologies to build scalable and efficient
            solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div
                    className={`p-3 bg-gradient-to-br ${category.color}/10 rounded-xl`}
                  >
                    <Icon
                      className={`h-7 w-7 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-blue-400 font-bold">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.5,
                            delay: catIndex * 0.1 + skillIndex * 0.05,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-12">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Soft Skills
            </span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="p-3 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 rounded-lg w-fit mx-auto mb-4">
                    <Icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">
                    {skill.name}
                  </h4>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 via-cyan-400/10 to-blue-500/10 backdrop-blur-sm p-10 rounded-2xl border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Always Learning
            </h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Technology evolves rapidly, and I'm committed to continuous
              learning. Currently exploring advanced cloud architectures, AI
              integration, and Web3 technologies to stay at the forefront of web
              development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
