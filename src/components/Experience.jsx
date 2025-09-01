import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaBriefcase, 
  FaCalendarAlt, 
  FaGraduationCap,
  FaAward,
  FaStar
} from 'react-icons/fa';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const experienceRef = useRef(null);
  const isInView = useInView(experienceRef, { once: true, amount: 0.3 });

  // Experience data
  const experiences = [
    {
      id: 1,
      role: "Frontend Developer",
      company: "Tech Innovations Inc.",
      duration: "Jan 2023 - Present",
      description: "Developed responsive web applications using React.js and Next.js. Collaborated with UX designers to implement pixel-perfect interfaces.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      achievements: ["Improved page load time by 40%", "Led a team of 3 developers", "Implemented CI/CD pipeline"]
    },
    {
      id: 2,
      role: "Web Development Intern",
      company: "Digital Solutions LLC",
      duration: "Jun 2022 - Dec 2022",
      description: "Built and maintained client websites. Implemented new features and optimized existing code for better performance.",
      technologies: ["JavaScript", "HTML/CSS", "Node.js", "MongoDB"],
      achievements: ["Delivered 5+ client projects", "Reduced bug reports by 60%", "Created comprehensive documentation"]
    },
    {
      id: 3,
      role: "Freelance Web Developer",
      company: "Self-Employed",
      duration: "Mar 2021 - May 2022",
      description: "Worked with various clients to create custom web solutions and e-commerce platforms.",
      technologies: ["React", "Express", "MongoDB", "Firebase"],
      achievements: ["Maintained 95% client satisfaction", "Completed 10+ projects", "Developed reusable component library"]
    }
  ];

  // Education data
  const education = [
    {
      id: 1,
      degree: "Bachelor of Computer Science",
      institution: "Tech University",
      duration: "2019 - 2023",
      description: "Specialized in Web Development and Software Engineering. Graduated with honors.",
      achievements: ["GPA: 3.8/4.0", "Dean's List 2021-2023", "Capstone Project Award"]
    },
    {
      id: 2,
      degree: "Full Stack Web Development Bootcamp",
      institution: "Code Academy",
      duration: "2022",
      description: "Intensive 6-month program covering modern web development technologies.",
      achievements: ["Top 5% of cohort", "Built 10+ projects", "MERN Stack Certification"]
    }
  ];

  return (
    <section className="relative min-h-screen py-20 px-6 md:px-20 lg:px-32 bg-slate-950 text-white overflow-hidden">
      
      {/* Simplified Background - Reduced animations and effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Static gradient orbs - removed complex animations */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-indigo-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-20 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
        
        {/* Reduced number of floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="absolute w-2 h-2 rounded-full bg-indigo-500/30"
            style={{
              top: `${15 + (i * 15)}%`,
              left: `${10 + (i * 15)}%`,
            }}
          />
        ))}
        
        {/* Static grid pattern - removed animation */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-20 max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            My <span className="text-indigo-400">Journey</span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            My path in web development has been an exciting journey of continuous learning and growth
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-slate-800/50 rounded-full p-1 flex border border-slate-700/30">
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 transition-all ${
                activeTab === 'experience'
                  ? 'bg-indigo-600 shadow-lg'
                  : 'hover:bg-slate-700/50'
              }`}
            >
              <FaBriefcase />
              Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 transition-all ${
                activeTab === 'education'
                  ? 'bg-indigo-600 shadow-lg'
                  : 'hover:bg-slate-700/50'
              }`}
            >
              <FaGraduationCap />
              Education
            </button>
          </div>
        </motion.div>

        {/* Content Section - Reduced effects for better performance */}
        <div ref={experienceRef} className="bg-slate-800/30 rounded-2xl p-6 md:p-8 border border-slate-700/30">
          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
                <FaBriefcase className="text-indigo-400" />
                Work Experience
              </h2>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-indigo-500/30"></div>
                
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="relative pl-16 pb-8 last:pb-0"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-0 w-14 h-14 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg">
                      <FaBriefcase className="text-white" />
                    </div>
                    
                    <div className="bg-slate-800/70 rounded-xl p-6 border border-slate-700/30">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <div className="flex items-center gap-4">
                          <div>
                            <h3 className="text-xl font-bold">{exp.role}</h3>
                            <p className="text-slate-300">{exp.company}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400">
                          <FaCalendarAlt />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                      
                      <p className="text-slate-300 mb-4">{exp.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-slate-200 mb-2 flex items-center gap-2">
                          <FaStar className="text-yellow-400" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li 
                              key={i}
                              className="flex items-center text-sm text-slate-400"
                            >
                              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs bg-slate-700/50 rounded-full text-slate-300 border border-slate-600/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Education Tab */}
          {activeTab === 'education' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
                <FaGraduationCap className="text-purple-400" />
                Education
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="bg-slate-800/70 rounded-xl p-6 border border-slate-700/30"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-2xl p-3 rounded-full bg-purple-600/20">
                        <FaGraduationCap className="text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{edu.degree}</h3>
                        <p className="text-slate-300">{edu.institution}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-slate-400 mb-4">
                      <FaCalendarAlt />
                      <span>{edu.duration}</span>
                    </div>
                    
                    <p className="text-slate-300 mb-4">{edu.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-slate-200 mb-2 flex items-center gap-2">
                        <FaAward className="text-yellow-400" />
                        Achievements
                      </h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <li 
                            key={i}
                            className="flex items-center text-sm text-slate-400"
                          >
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;