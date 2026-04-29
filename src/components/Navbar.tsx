import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <motion.a
          href="#home"
          onClick={() => handleNav('#home')}
          className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          &lt;Pranto /&gt;
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => handleNav(href)}
              className={`relative text-sm font-medium transition-colors duration-200 ${
                active === href.slice(1)
                  ? 'text-cyan-400'
                  : isDark
                  ? 'text-slate-300 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {label}
              {active === href.slice(1) && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-400 transition-colors"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </motion.button>

          <motion.button
            className="md:hidden p-2 rounded-full bg-white/5 border border-white/10 text-slate-300"
            onClick={() => setMenuOpen((o) => !o)}
            whileTap={{ scale: 0.95 }}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-white/5"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => handleNav(href)}
                  className={`text-left text-sm font-medium transition-colors ${
                    active === href.slice(1) ? 'text-cyan-400' : 'text-slate-300'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
