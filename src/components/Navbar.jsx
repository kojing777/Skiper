import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMail } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const pathToName = {
      "/": "Home",
      "/projects": "Projects",
      "/skills": "Skills",
      "/experience": "Experience",
      "/contact": "Contact",
      "/about": "About",
    };
    setActiveLink(pathToName[location.pathname] || "Home");
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section on scroll - Integrated from second navbar
      const sections = ["top", "about", "projects", "skills", "experience", "contact"];
      let currentSection = "top";
      for (let section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - window.innerHeight / 2) {
          currentSection = section === "top" ? "Home" : section.charAt(0).toUpperCase() + section.slice(1);
        }
      }
      setActiveLink(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  // Integrated scroll function from second navbar
  const handleScrollTo = (path) => {
    let sectionId = path === "/" ? "top" : path.replace("/", "");
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setActiveLink(navLinks.find(link => link.path === path)?.name);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Animated Border Buttons */}
      <style>{`
        @keyframes rotate {
          100% { transform: rotate(1turn); }
        }
        .rainbow-border::before {
          content: '';
          position: absolute;
          z-index: -2;
          left: -50%; 
          top: -50%;
          width: 200%; 
          height: 200%;
          background-repeat: no-repeat;
          background-size: 50% 50%, 50% 50%;
          background-position: 0 0, 100% 0, 100% 100%, 0 100%;
          background-image: 
            linear-gradient(#4f46e5, #4f46e5),
            linear-gradient(#9333ea, #9333ea),
            linear-gradient(#ec4899, #ec4899),
            linear-gradient(#f59e0b, #f59e0b);
          animation: rotate 4s linear infinite;
        }
        
        .blue-border::before {
          content: '';
          position: absolute;
          z-index: -2;
          left: -50%; 
          top: -50%;
          width: 200%; 
          height: 200%;
          background-repeat: no-repeat;
          background-size: 50% 50%, 50% 50%;
          background-position: 0 0, 100% 0, 100% 100%, 0 100%;
          background-image: 
            linear-gradient(#3b82f6, #3b82f6),
            linear-gradient(#06b6d4, #06b6d4),
            linear-gradient(#3b82f6, #3b82f6),
            linear-gradient(#06b6d4, #06b6d4);
          animation: rotate 6s linear infinite;
        }
        
        .nav-glass {
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.125);
        }
        
        .menu-glass {
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          border: 1px solid rgba(71, 85, 105, 0.5);
        }
        
        @keyframes pulse-glow {
          0% { box-shadow: 0 0 5px rgba(99, 102, 241, 0.5); }
          50% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.8); }
          100% { box-shadow: 0 0 5px rgba(99, 102, 241, 0.5); }
        }
        
        .logo-glow {
          animation: pulse-glow 2s infinite;
        }
      `}</style>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 
          flex items-center px-4 md:px-6 transition-all duration-500 ease-in-out
          nav-glass shadow-xl rounded-full
          h-14 md:h-16
          ${
            isScrolled
              ? "w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] scale-100"
              : "w-[92%] md:w-[82%] lg:w-[72%] xl:w-[62%] scale-100"
          }`}
      >
        {/* Logo */}
        <motion.a
          href="/"
          className="flex items-center gap-2 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className={`flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 
            transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 w-9 h-9 md:w-10 md:h-10 logo-glow`}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-bold text-white text-sm md:text-base">
              BT
            </span>
          </motion.div>
          {/* <span
            className={`hidden md:inline font-bold transition-all duration-500 
             text-transparent text-xl bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300`}
          >
            BIJAYA M.
          </span> */}
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 mx-auto">
          {navLinks.map((link, index) => (
            <motion.div key={index} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
              <button
                type="button"
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full
                  ${
                    activeLink === link.name
                      ? "text-white bg-slate-800/50"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/30"
                  }`}
                onClick={() => handleScrollTo(link.path)}
              >
                {link.name}
                {activeLink === link.name && (
                  <motion.span
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                    layoutId="activeLink"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Desktop Right Buttons */}
        <div className="hidden md:flex items-center gap-3 ml-auto">
          {/* Hire Me Button */}
          <motion.div
            className="rainbow-border relative z-0 overflow-hidden p-0.5 flex items-center justify-center rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="mailto:yourgmailaddress@gmail.com?subject=Hire%20Me%20Inquiry"
              className="px-5 py-2 text-sm text-white rounded-full font-medium bg-slate-900/90 flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HiMail className="text-sm" />
              <span>Hire Me</span>
            </a>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden ml-auto relative w-8 h-8 flex flex-col items-center justify-center group"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <span
            className={`absolute w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
            }`}
          ></span>
          <span
            className={`absolute w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`absolute w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
            }`}
          ></span>
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 right-0 mt-3 menu-glass 
              rounded-2xl p-6 flex flex-col items-center gap-4 shadow-xl md:hidden"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  whileTap={{ x: 0 }}
                >
                  <button
                    className={`w-full text-center py-3 px-4 rounded-lg transition-all duration-300
                      ${
                        activeLink === link.name
                          ? "bg-gradient-to-r from-indigo-600/20 to-purple-600/20 text-white"
                          : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                      }`}
                    onClick={() => handleScrollTo(link.path)}
                  >
                    {link.name}
                  </button>
                </motion.div>
              ))}

              <div className="flex flex-col gap-3 w-full items-center mt-2">
                <motion.div
                  className="rainbow-border relative z-0 w-full max-w-xs overflow-hidden p-0.5 flex items-center justify-center rounded-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a
                    href="kojingmoktan92@gmail.com?subject=Hire%20Me%20Inquiry"
                    className="w-full px-4 py-3 text-sm text-white rounded-full font-medium bg-slate-900/90 flex items-center justify-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <HiMail className="text-sm" />
                    <span>Hire Me</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;