import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin } from 'lucide-react';

const roles = ['Frontend Developer', 'Problem Solver', 'Open Source Contributor', 'UI/UX Enthusiast'];

function TypewriterText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<number>(0);

  useEffect(() => {
    const current = roles[roleIndex];
    if (!isDeleting) {
      if (displayed.length < current.length) {
        timeoutRef.current = window.setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeoutRef.current = window.setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = window.setTimeout(() => setDisplayed(displayed.slice(0, -1)), 50);
      } else {
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
      {displayed}
      <span className="inline-block w-0.5 h-6 bg-cyan-400 ml-0.5 animate-pulse" />
    </span>
  );
}

function ParticleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-cyan-400/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const handleScroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-950"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(6,182,212,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(59,130,246,0.08),transparent_60%)]" />
      <ParticleBackground />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center py-24">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Available for work
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
          >
            Hi, I'm{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 animate-gradient">
              Md. Pranto Islam
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-slate-300 mb-6 font-medium h-8"
          >
            <TypewriterText />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-slate-400 text-base leading-relaxed mb-8 max-w-lg"
          >
            Passionate frontend developer from Uttara, Dhaka, Bangladesh. I craft beautiful,
            performant web experiences and love contributing to open source.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <motion.button
              onClick={() => handleScroll('#projects')}
              whileHover={{ scale: 1.04, boxShadow: '0 0 24px rgba(6,182,212,0.4)' }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 transition-all"
            >
              View Projects
            </motion.button>
            <motion.button
              onClick={() => handleScroll('#contact')}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3 rounded-full border border-cyan-400/30 text-cyan-400 font-semibold text-sm hover:bg-cyan-400/5 transition-all"
            >
              Contact Me
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex gap-4"
          >
            <motion.a
              href="https://linkedin.com/in/md-pranto-islam-6a4829249"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-blue-400 hover:border-blue-400/30 transition-colors"
            >
              <Linkedin size={18} />
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-colors"
            >
              <Github size={18} />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:block w-full h-[500px] relative"
        >
          <div className="absolute inset-0 rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-cyan-400/10 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="w-32 h-32 rounded-full border-2 border-transparent border-t-cyan-400 border-r-blue-500"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-950/30 rounded-3xl pointer-events-none" />
        </motion.div>
      </div>

      <motion.button
        onClick={() => handleScroll('#about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
