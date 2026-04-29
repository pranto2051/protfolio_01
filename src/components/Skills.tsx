import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data/skills';

const techIcons: Record<string, string> = {
  html: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  css: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  js: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  react: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  tailwind: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  cpp: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  figma: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
};

function SkillBar({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-6 h-6 flex-shrink-0">
          <img src={techIcons[skill.icon]} alt={skill.name} className="w-full h-full object-contain" />
        </div>
        <span className="text-sm font-medium text-slate-300 flex-1">{skill.name}</span>
        <span className="text-xs text-slate-500 font-mono">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.08 + 0.2, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}

function CircleSkill({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (skill.level / 100) * circumference;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center gap-3 group"
    >
      <div className="relative w-20 h-20">
        <svg className="w-20 h-20 -rotate-90" viewBox="0 0 88 88">
          <circle cx="44" cy="44" r={radius} fill="none" stroke="#1e293b" strokeWidth="5" />
          <motion.circle
            cx="44"
            cy="44"
            r={radius}
            fill="none"
            stroke={skill.color}
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset: offset } : { strokeDashoffset: circumference }}
            transition={{ duration: 1.2, delay: index * 0.1, ease: 'easeOut' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={techIcons[skill.icon]} alt={skill.name} className="w-8 h-8 object-contain" />
        </div>
      </div>
      <div className="text-center">
        <div className="text-xs font-semibold text-slate-300">{skill.name}</div>
        <div className="text-xs text-slate-500">{skill.level}%</div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_40%,rgba(59,130,246,0.06),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">My Toolkit</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
            Skills &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Technologies
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-lg font-semibold text-slate-200 mb-8">Proficiency Levels</h3>
            <div className="space-y-5">
              {skills.map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-200 mb-8">Technology Mastery</h3>
            <div className="grid grid-cols-4 gap-6">
              {skills.map((skill, i) => (
                <CircleSkill key={skill.name} skill={skill} index={i} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-10 p-5 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/15"
            >
              <h4 className="text-sm font-semibold text-slate-200 mb-2">Currently Learning</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Deepening my knowledge in React advanced patterns, TypeScript, and competitive
                programming with C++. Always exploring what's next in the web ecosystem.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {['TypeScript', 'Next.js', 'Data Structures', 'Algorithms'].map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
