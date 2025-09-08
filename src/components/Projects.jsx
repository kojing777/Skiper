"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaReact, 
  FaNodeJs, 
  FaDatabase,
  FaMobile,
  FaServer
} from "react-icons/fa";
import { 
  SiMongodb, 
  SiExpress, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiTypescript,
  SiFirebase
} from "react-icons/si";
import { MoveUpRight } from "lucide-react";

const visualData = [
  {
    key: 1,
    url: "https://res.cloudinary.com/dp27ua535/image/upload/v1757216017/Screenshot_2025-09-07_091826_w6iplj.png",
    label: "Groceezy",
  },
  {
    key: 2,
    url: "https://res.cloudinary.com/dp27ua535/image/upload/v1757215916/Screenshot_2025-09-07_091455_k50kfz.png",
    label: "MeubelHouse",
  },
  {
    key: 3,
    url: "https://res.cloudinary.com/dp27ua535/image/upload/v1757217075/Screenshot_2025-09-07_093517_ancuhs.png",
    label: "fra-cheur",
  },
  {
    key: 4,
    url: "https://res.cloudinary.com/dp27ua535/image/upload/v1757216059/Screenshot_2025-09-07_091908_gjnpqc.png",
    label: "Portfolio",
  },
];

const ProjectsShowcase = () => {
  const [activeTab, setActiveTab] = useState('showcase');
  const [focusedItem, setFocusedItem] = useState(null);
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [flippedCard, setFlippedCard] = useState(null);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothX = useSpring(cursorX, { stiffness: 300, damping: 40 });
  const smoothY = useSpring(cursorY, { stiffness: 300, damping: 40 });

  useEffect(() => {
    const updateScreen = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };
    updateScreen();
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  const onMouseTrack = (e) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
  };

  const onHoverActivate = (item) => {
    setFocusedItem(item);
  };

  const onHoverDeactivate = () => {
    setFocusedItem(null);
  };

  // Projects data
  const projects = [
    {
      id: 1,
      title: "Groceezy",
      description: "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.",
      features: ["User Authentication", "Payment Integration", "Admin Dashboard", "Product Management"],
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      icons: [FaReact, FaNodeJs, SiMongodb, FaServer],
      githubUrl: "#",
      liveUrl: "#",
      image: "https://res.cloudinary.com/dp27ua535/image/upload/v1757216017/Screenshot_2025-09-07_091826_w6iplj.png"
    },
    {
      id: 2,
      title: "MeubelHouse",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      features: ["Real-time Updates", "Team Collaboration", "Drag & Drop", "Notifications"],
      technologies: ["React", "Firebase", "Tailwind CSS", "Context API"],
      icons: [FaReact, SiFirebase, SiTailwindcss, FaMobile],
      githubUrl: "#",
      liveUrl: "#",
      image: "https://res.cloudinary.com/dp27ua535/image/upload/v1757215916/Screenshot_2025-09-07_091455_k50kfz.png"
    },
    {
      id: 3,
      title: "fra-cheur",
      description: "A comprehensive dashboard for social media analytics with data visualization and reporting.",
      features: ["Data Visualization", "Analytics", "User Reports", "Custom Metrics"],
      technologies: ["Next.js", "TypeScript", "Chart.js", "MongoDB"],
      icons: [SiNextdotjs, SiTypescript, FaDatabase, FaServer],
      githubUrl: "#",
      liveUrl: "#",
      image: "https://res.cloudinary.com/dp27ua535/image/upload/v1757217075/Screenshot_2025-09-07_093517_ancuhs.png"
    },
    {
      id: 4,
      title: "portfolio",
      description: "A mobile-friendly fitness application with workout plans, progress tracking, and social features.",
      features: ["Workout Plans", "Progress Tracking", "Social Features", "Mobile Optimized"],
      technologies: ["React Native", "Node.js", "MongoDB", "Express"],
      icons: [FaMobile, FaNodeJs, SiMongodb, SiExpress],
      githubUrl: "https://github.com/kojing777/Skiper",
      liveUrl: "https://portfolio-wine-alpha-82.vercel.app/",
      image: "https://res.cloudinary.com/dp27ua535/image/upload/v1757216059/Screenshot_2025-09-07_091908_gjnpqc.png"
    }
  ];

  return (
    <section className="relative min-h-screen py-20 px-6 md:px-20 lg:px-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Moving Gradient Bars */}
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -20, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-10 w-2 h-20 bg-gradient-to-b from-cyan-400/20 to-blue-500/20 rounded-full blur-sm"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 30, 0], rotate: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-12 w-2 h-24 bg-gradient-to-b from-purple-400/20 to-pink-500/20 rounded-full blur-sm"
        />
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:20px_20px] opacity-15"></div>
      </div>

  <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            My <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">Projects</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Here are some of the projects I've built using modern technologies and best practices
          </p>
          
          {/* Tab Navigation */}
          <div className="flex justify-center space-x-4 mb-12">
            <button
              onClick={() => setActiveTab('showcase')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'showcase'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Interactive Showcase
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'projects'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Project Portfolio
            </button>
          </div>
        </motion.div>

        {/* Content based on active tab */}
        {activeTab === 'showcase' ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto w-full min-h-fit bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700/50 overflow-hidden"
            onMouseMove={onMouseTrack}
            onMouseLeave={onHoverDeactivate}
          >
            {visualData.map((item) => (
              <div
                key={item.key}
                className="p-4 cursor-pointer relative sm:flex items-center justify-between"
                onMouseEnter={() => onHoverActivate(item)}
              >
                {!isLargeScreen && (
                  <img
                    src={item.url}
                    className="sm:w-32 sm:h-20 w-full h-52 object-cover rounded-md"
                    alt={item.label}
                  />
                )}
                <h2
                  className={`font-mono uppercase md:text-5xl sm:text-2xl text-xl font-semibold sm:py-6 py-2 leading-[100%] relative transition-colors duration-300 ${
                    focusedItem?.key === item.key
                      ? "mix-blend-difference z-20 text-gray-300"
                      : "text-white"
                  }`}
                >
                  {item.label}
                </h2>
                <button
                  className={`sm:block hidden p-4 rounded-full transition-all duration-300 ease-out ${
                    focusedItem?.key === item.key
                      ? "mix-blend-difference z-20 bg-white text-black"
                      : ""
                  }`}
                >
                  <MoveUpRight className="w-8 h-8" />
                </button>
                <div
                  className={`h-[2px] bg-white/70 absolute bottom-0 left-0 transition-all duration-300 ease-linear ${
                    focusedItem?.key === item.key ? "w-full" : "w-0"
                  }`}
                />
              </div>
            ))}

            {isLargeScreen && focusedItem && (
              <motion.div
                className="fixed z-30 pointer-events-none"
                style={{
                  left: smoothX,
                  top: smoothY,
                  x: "-50%",
                  y: "-50%",
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="w-[600px] h-auto max-h-[800px] overflow-hidden rounded-lg bg-slate-950 border border-slate-700 shadow-2xl">
                  <img
                    src={focusedItem.url}
                    alt={focusedItem.label}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            )}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
                isFlipped={flippedCard === project.id}
                setFlipped={setFlippedCard}
              />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

// Project Card Component
// Project Card Component
const ProjectCard = ({ project, index, isFlipped, setFlipped }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative h-[400px] w-full [perspective:2000px]"
      onMouseEnter={() => setFlipped(project.id)}
      onMouseLeave={() => setFlipped(null)}
    >
      <div
        className={`relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'
        }`}
      >
        {/* Front of card */}
        <div
          className={`absolute inset-0 h-full w-full rounded-2xl overflow-hidden border border-slate-700/60
            bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-xl
            transition-all duration-700 ${isFlipped ? 'opacity-0' : 'opacity-100'}`}
        >
          {/* Project image - UPDATED */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <img 
              src={project.image} 
              alt={project.title}
              className="max-w-full max-h-full object-contain rounded-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-slate-900/10"></div>
          </div>

          {/* Tech icons floating animation */}
          <div className="absolute top-4 right-4 flex gap-2">
            {project.icons.map((Icon, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 + 0.3 }}
                className="p-2 bg-slate-800/80 rounded-full backdrop-blur-sm"
              >
                <Icon className="text-lg text-indigo-400" />
              </motion.div>
            ))}
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span 
                  key={i}
                  className="px-2 py-1 text-xs bg-indigo-900/50 text-indigo-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-between items-center"
            >
              <span className="text-slate-300 text-sm">Hover to see details</span>
              <div className="flex gap-2">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href={project.githubUrl}
                  className="p-2 bg-slate-800/80 rounded-full backdrop-blur-sm"
                >
                  <FaGithub className="text-lg text-white" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href={project.liveUrl}
                  className="p-2 bg-slate-800/80 rounded-full backdrop-blur-sm"
                >
                  <FaExternalLinkAlt className="text-lg text-white" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className={`absolute inset-0 h-full w-full rounded-2xl overflow-hidden border border-slate-700/60
            bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-xl p-6 flex flex-col
            transition-all duration-700 [transform:rotateY(180deg)] ${!isFlipped ? 'opacity-0' : 'opacity-100'}`}
        >
          <h3 className="text-xl font-bold mb-4 text-white">{project.title}</h3>
          
          <p className="text-slate-300 mb-6 flex-grow">{project.description}</p>
          
          <div className="mb-6">
            <h4 className="font-semibold mb-3 text-indigo-300">Features</h4>
            <ul className="space-y-2">
              {project.features.map((feature, i) => (
                <motion.li 
                  key={i}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center text-sm text-slate-400"
                >
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="mt-auto flex justify-between items-center">
            <div className="flex gap-2">
              {project.icons.map((Icon, i) => (
                <div key={i} className="p-2 bg-slate-800/80 rounded-full">
                  <Icon className="text-lg text-indigo-400" />
                </div>
              ))}
            </div>
            
            <div className="flex gap-3">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={project.githubUrl}
                className="px-4 py-2 rounded-full bg-slate-800 text-sm font-medium flex items-center gap-2 text-white"
              >
                <FaGithub />
                Code
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={project.liveUrl}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-sm font-medium flex items-center gap-2 text-white"
              >
                <FaExternalLinkAlt />
                Live Demo
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsShowcase;