import { useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-2xl overflow-hidden bg-slate-800/50 border border-white/5 hover:border-cyan-400/30 transition-colors duration-300 cursor-pointer"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute top-3 right-3 flex gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="p-2 rounded-full bg-slate-900/80 backdrop-blur border border-white/10 text-cyan-400 hover:bg-cyan-400/20 transition-colors"
          >
            <ExternalLink size={14} />
          </motion.a>
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded-full bg-slate-900/80 backdrop-blur border border-white/10 text-slate-300 hover:text-white transition-colors"
            >
              <Github size={14} />
            </motion.a>
          )}
        </div>
      </div>

      <div className="p-5">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full bg-cyan-400/10 border border-cyan-400/15 text-cyan-400"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed mb-4">{project.description}</p>

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors group/link"
        >
          View Live
          <ExternalLink size={12} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </a>
      </div>

      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
        style={{
          background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(6,182,212,0.06), transparent 70%)',
        }}
      />
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(6,182,212,0.05),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">My Work</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Projects
            </span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            A collection of real-world projects I've built — from e-commerce platforms to
            business websites and educational tools.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
