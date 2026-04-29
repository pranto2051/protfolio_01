import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={isDark ? 'dark' : 'light'}>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <CustomCursor />
      <ScrollProgress />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <footer className="bg-slate-950 border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400">
          <p>© 2024 Pranto Islam. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
