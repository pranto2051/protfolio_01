import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, GraduationCap, Heart, Globe } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const details = [
  { icon: MapPin, label: 'Location', value: 'Uttara, Dhaka, Bangladesh' },
  { icon: GraduationCap, label: 'Education', value: 'Frontend Development & C++' },
  { icon: Heart, label: 'Hobbies', value: 'Coding, Open Source, New Tech' },
  { icon: Globe, label: 'Website', value: 'prantoislam.online' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_60%,rgba(6,182,212,0.05),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={fadeUp}>
            <div className="relative">
              <div className="w-72 h-72 mx-auto lg:mx-0 relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 blur-2xl" />
                <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Pranto Islam"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                </div>
                <motion.div
                  className="absolute -top-3 -right-3 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <span className="text-2xl">💻</span>
                </motion.div>
                <motion.div
                  className="absolute -bottom-3 -left-3 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="text-lg">🚀</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <div>
            <motion.div variants={fadeUp} className="mb-3">
              <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">About Me</span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight"
            >
              Crafting Digital
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Experiences
              </span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-slate-400 leading-relaxed mb-6">
              I'm a passionate frontend developer based in Uttara, Dhaka, Bangladesh. Currently
              sharpening my skills in Frontend Development and C++, I love building beautiful,
              responsive web interfaces that delight users.
            </motion.p>

            <motion.p variants={fadeUp} className="text-slate-400 leading-relaxed mb-8">
              I believe great software should be both technically excellent and visually stunning.
              When I'm not coding, you'll find me exploring open-source projects, learning new
              technologies, and contributing to the developer community.
            </motion.p>

            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {details.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white/3 border border-white/5 hover:border-cyan-400/20 transition-colors group"
                >
                  <div className="p-1.5 rounded-lg bg-cyan-400/10 text-cyan-400 mt-0.5 group-hover:bg-cyan-400/20 transition-colors">
                    <Icon size={14} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">{label}</div>
                    <div className="text-sm text-slate-300 font-medium">{value}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
