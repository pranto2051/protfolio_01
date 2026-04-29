import { useScroll, motion } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 z-[60] origin-left bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
