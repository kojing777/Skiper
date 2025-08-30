import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Globe, ArrowUp, X } from "lucide-react";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [showGame, setShowGame] = useState(false);
  const [gameScore, setGameScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [gameTime, setGameTime] = useState(10);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(Math.round(scrolled));
      setShowScroll(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let timer;
    if (gameActive && gameTime > 0) {
      timer = setTimeout(() => setGameTime(gameTime - 1), 1000);
    } else if (gameTime === 0) {
      setGameActive(false);
    }
    return () => clearTimeout(timer);
  }, [gameActive, gameTime]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const startGame = () => {
    setGameScore(0);
    setGameTime(10);
    setGameActive(true);
    setShowGame(true);
  };

  const handleGameClick = () => {
    if (gameActive) {
      setGameScore(gameScore + 1);
    }
  };

  // Ring settings
  const radius = 20;
  const strokeWidth = 3;
  const circumference = 2 * Math.PI * radius;
  const progress = (scrollPercent / 100) * circumference;

  return (
    <footer className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-300 py-12 overflow-hidden">
      {/* Floating gradient orbs */}
      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-20 w-32 h-32 bg-indigo-500/20 blur-3xl rounded-full"
      />
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-20 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full"
      />

      {/* Footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo / Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Bijaya Tamang
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            MERN Stack Developer • Building modern web apps
          </p>
        </motion.div>

        {/* Navigation Links */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 text-sm font-medium"
        >
          {["Home", "About", "Projects", "Contact"].map((link, i) => (
            <li key={i}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                {link}
              </a>
            </li>
          ))}
        </motion.ul>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-4"
        >
          {[Github, Linkedin, Twitter, Mail, Globe].map((Icon, idx) => (
            <motion.a
              key={idx}
              href="#"
              whileHover={{ scale: 1.2, y: -3 }}
              className="p-2 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-indigo-400 transition"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Mini Game Section */}
      {/* <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative z-10 max-w-2xl mx-auto mt-8 p-4 bg-slate-800/30 rounded-lg border border-slate-700/50 backdrop-blur-sm"
      >
        <div className="text-center">
          <h3 className="text-lg font-semibold text-indigo-300 mb-2">Quick Challenge</h3>
          <p className="text-sm text-slate-400 mb-3">How fast can you click?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={startGame}
            className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-md text-white font-medium text-sm"
          >
            Start 10-Second Game
          </motion.button>
        </div>
      </motion.div> */}

      {/* Game Modal */}
      <AnimatePresence>
        {showGame && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => !gameActive && setShowGame(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 15 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700/50 p-6 max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowGame(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white"
              >
                <X size={20} />
              </button>
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-1">Click Challenge</h3>
                <p className="text-slate-400">Click as many times as you can in 10 seconds!</p>
              </div>
              
              <div className="flex justify-between items-center mb-6">
                <div className="text-center">
                  <div className="text-sm text-slate-400">Time</div>
                  <div className={`text-2xl font-bold ${gameTime < 4 ? "text-red-400" : "text-green-400"}`}>
                    {gameTime}s
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-sm text-slate-400">Score</div>
                  <div className="text-2xl font-bold text-indigo-400">{gameScore}</div>
                </div>
              </div>
              
              <motion.button
                whileHover={gameActive ? { scale: 1.02 } : {}}
                whileTap={gameActive ? { scale: 0.98 } : {}}
                onClick={handleGameClick}
                className={`w-full py-4 rounded-lg text-white font-bold text-lg ${
                  gameActive 
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 cursor-pointer" 
                    : "bg-slate-700 cursor-not-allowed"
                }`}
                disabled={!gameActive}
              >
                {gameActive ? "CLICK ME!" : gameTime === 0 ? "TIME'S UP!" : "GET READY..."}
              </motion.button>
              
              {!gameActive && gameTime === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-slate-700/50 rounded-lg"
                >
                  <h4 className="text-center text-white font-semibold mb-2">Game Over!</h4>
                  <p className="text-center text-slate-300">
                    Your score: <span className="text-indigo-300 font-bold">{gameScore}</span> clicks
                  </p>
                  <p className="text-center text-slate-300 mt-1">
                    {gameScore > 20 ? "Amazing speed! 🚀" : 
                     gameScore > 15 ? "Great job! 👍" : 
                     gameScore > 10 ? "Good effort! 💪" : 
                     "Keep practicing! 👏"}
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="relative z-10 text-center mt-10 border-t border-slate-800 pt-6"
      >
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Bijaya Tamang. All rights reserved.
        </p>
        <p className="text-xs mt-2 text-slate-600">
          Built with{" "}
          <span className="text-green-400 font-semibold">MongoDB</span>,{" "}
          <span className="text-blue-400 font-semibold">Express</span>,{" "}
          <span className="text-cyan-400 font-semibold">React</span>,{" "}
          <span className="text-yellow-400 font-semibold">Node.js</span>
        </p>
      </motion.div>

      {/* Scroll to Top Button with Enhanced Circular Progress */}
      <AnimatePresence>
        {showScroll && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-6 right-6 z-40"
          >
            {/* Button */}
            <button
              onClick={scrollToTop}
              className="relative w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30 text-white hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 group"
            >
              {/* Progress Ring */}
              <svg className="absolute -rotate-90 w-16 h-16">
                <circle
                  cx="32"
                  cy="32"
                  r={radius}
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth={strokeWidth}
                  fill="none"
                />
                <motion.circle
                  cx="32"
                  cy="32"
                  r={radius}
                  stroke="url(#progressGradient)"
                  strokeWidth={strokeWidth}
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference - progress}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                <defs>
                  <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Percentage display - always visible inside circle */}
              <div className="relative flex flex-col items-center justify-center">
                <motion.span 
                  key={scrollPercent}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-xs font-bold text-white"
                >
                  {scrollPercent}%
                </motion.span>
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="absolute -bottom-4"
                >
                </motion.div>
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;