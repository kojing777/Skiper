import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaBriefcase, 
  FaCalendarAlt, 
  FaCode, 
  FaLaptopCode,
  FaGraduationCap,
  FaAward,
  FaRocket,
  FaHeart,
  FaStar
} from 'react-icons/fa';
import { 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiPython
} from 'react-icons/si';


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
      icon: <SiReact className="text-blue-400" />,
      achievements: ["Improved page load time by 40%", "Led a team of 3 developers", "Implemented CI/CD pipeline"]
    },
    {
      id: 2,
      role: "Web Development Intern",
      company: "Digital Solutions LLC",
      duration: "Jun 2022 - Dec 2022",
      description: "Built and maintained client websites. Implemented new features and optimized existing code for better performance.",
      technologies: ["JavaScript", "HTML/CSS", "Node.js", "MongoDB"],
      icon: <SiJavascript className="text-yellow-400" />,
      achievements: ["Delivered 5+ client projects", "Reduced bug reports by 60%", "Created comprehensive documentation"]
    },
    {
      id: 3,
      role: "Freelance Web Developer",
      company: "Self-Employed",
      duration: "Mar 2021 - May 2022",
      description: "Worked with various clients to create custom web solutions and e-commerce platforms.",
      technologies: ["React", "Express", "MongoDB", "Firebase"],
      icon: <SiNodedotjs className="text-green-500" />,
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
      icon: <FaGraduationCap className="text-purple-400" />,
      achievements: ["GPA: 3.8/4.0", "Dean's List 2021-2023", "Capstone Project Award"]
    },
    {
      id: 2,
      degree: "Full Stack Web Development Bootcamp",
      institution: "Code Academy",
      duration: "2022",
      description: "Intensive 6-month program covering modern web development technologies.",
      icon: <FaLaptopCode className="text-green-400" />,
      achievements: ["Top 5% of cohort", "Built 10+ projects", "MERN Stack Certification"]
    },
    {
      id: 3,
      degree: "Bachelor of Computer Science",
      institution: "Tech University",
      duration: "2019 - 2023",
      description: "Specialized in Web Development and Software Engineering. Graduated with honors.",
      icon: <FaGraduationCap className="text-purple-400" />,
      achievements: ["GPA: 3.8/4.0", "Dean's List 2021-2023", "Capstone Project Award"]
    },
  ];

  // Skills data
  const skills = [
    { name: "React", level: 90, icon: <SiReact className="text-blue-400" />, color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript", level: 85, icon: <SiJavascript className="text-yellow-400" />, color: "from-yellow-500 to-orange-500" },
    { name: "TypeScript", level: 80, icon: <SiTypescript className="text-blue-500" />, color: "from-blue-600 to-blue-700" },
    { name: "Node.js", level: 80, icon: <SiNodedotjs className="text-green-500" />, color: "from-green-500 to-emerald-500" },
    { name: "Next.js", level: 75, icon: <SiNextdotjs className="text-white" />, color: "from-gray-800 to-gray-900" },
    { name: "MongoDB", level: 75, icon: <SiMongodb className="text-green-400" />, color: "from-green-600 to-green-700" },
    { name: "Express.js", level: 80, icon: <SiExpress className="text-gray-200" />, color: "from-gray-600 to-gray-700" },
    { name: "Tailwind CSS", level: 85, icon: <SiTailwindcss className="text-cyan-400" />, color: "from-cyan-500 to-blue-500" },
    { name: "Python", level: 70, icon: <SiPython className="text-blue-600" />, color: "from-blue-700 to-blue-800" },
  ];

  return (
    <section className="relative min-h-screen py-20 px-6 md:px-20 lg:px-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Moving gradient orbs */}
        <motion.div
          animate={{ 
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            x: [0, -50, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 right-20 w-24 h-24 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-full blur-xl"
        />
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, i % 2 === 0 ? 20 : -20, 0],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: i % 3 === 0 
                ? "rgba(99, 102, 241, 0.5)" 
                : i % 3 === 1 
                ? "rgba(139, 92, 246, 0.5)" 
                : "rgba(236, 72, 153, 0.5)",
              top: `${10 + (i * 6)}%`,
              left: `${5 + (i * 7)}%`,
              filter: "blur(4px)",
            }}
          />
        ))}
        
        {/* Grid pattern with animation */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"] 
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear",
            repeatType: "reverse"
          }}
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 -z-10"
          animate={{ 
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          style={{
            backgroundImage: "linear-gradient(270deg, #4f46e5, #9333ea, #ec4899, #22d3ee)",
            backgroundSize: "400% 400%",
            opacity: 0.1,
            filter: "blur(20px)"
          }}
        />
      </div>

      <div className="relative z-20 max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto mb-16 text-center"
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            My <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">Journey</span>
          </motion.h1>
          
          {/* <motion.div 
            className="flex flex-wrap items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 font-medium flex items-center gap-2"
            >
              <FaCalendarAlt />
              <span>3+ Years Experience</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 rounded-full bg-slate-800 font-medium flex items-center gap-2"
            >
              <FaRocket />
              <span>Fast Learner</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 font-medium flex items-center gap-2"
            >
              <FaHeart />
              <span>Passionate Coder</span>
            </motion.div>
          </motion.div> */}
          
          <motion.p 
            className="text-xl text-slate-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            My path in web development has been an exciting journey of continuous learning and growth
          </motion.p>
        </motion.div>

        {/* Tabs Navigation */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-full p-1 flex border border-slate-700/30">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 transition-all ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg'
                  : 'hover:bg-slate-700/50'
              }`}
            >
              <FaBriefcase />
              Experience
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('education')}
              className={`px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 transition-all ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg'
                  : 'hover:bg-slate-700/50'
              }`}
            >
              <FaGraduationCap />
              Education
            </motion.button>
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('skills')}
              className={`px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 transition-all ${
                activeTab === 'skills'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg'
                  : 'hover:bg-slate-700/50'
              }`}
            >
              <FaCode />
              Skills
            </motion.button> */}
          </div>
        </motion.div>

        {/* Content Section */}
        <div ref={experienceRef} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-slate-700/30 shadow-2xl">
          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <motion.h2 
                className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <FaBriefcase className="text-indigo-400" />
                Work Experience
              </motion.h2>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500/30 via-purple-500/30 to-pink-500/30"></div>
                
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative pl-16 pb-8 last:pb-0"
                  >
                    {/* Timeline dot */}
                    <motion.div 
                      className="absolute left-0 top-0 w-14 h-14 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="text-xl">
                        {exp.icon}
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-slate-800/70 backdrop-blur-lg rounded-xl p-6 border border-slate-700/30 shadow-lg"
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
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
                            <motion.li 
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: index * 0.2 + i * 0.1 }}
                              className="flex items-center text-sm text-slate-400"
                            >
                              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: index * 0.2 + i * 0.1 }}
                            className="px-3 py-1 text-xs bg-slate-700/50 rounded-full text-slate-300 border border-slate-600/30"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
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
              <motion.h2 
                className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <FaGraduationCap className="text-purple-400" />
                Education
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="bg-slate-800/70 backdrop-blur-lg rounded-xl p-6 border border-slate-700/30 shadow-lg"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-2xl p-3 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20">
                        {edu.icon}
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
                          <motion.li 
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.2 + i * 0.1 }}
                            className="flex items-center text-sm text-slate-400"
                          >
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2 
                className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <FaCode className="text-cyan-400" />
                Technical Skills
              </motion.h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-800/70 backdrop-blur-lg rounded-xl p-6 border border-slate-700/30 shadow-lg"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="text-xl">
                          {skill.icon}
                        </div>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-slate-400">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-slate-700 rounded-full h-2.5 mb-2">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                        className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color}`}
                      ></motion.div>
                    </div>
                    
                    <motion.div 
                      className="text-xs text-slate-400 text-right"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: index * 0.1 + 0.8 }}
                    >
                      {skill.level >= 90 ? "Expert" : 
                       skill.level >= 80 ? "Advanced" : 
                       skill.level >= 70 ? "Proficient" : "Intermediate"}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Call to Action */}
        {/* <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-slate-300 mb-6">Interested in working together?</p>
          <motion.a 
            href="#contact" 
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 transition-all font-medium shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect
          </motion.a>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Experience;