import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const springX = useSpring(cursorX, { stiffness: 120, damping: 18 });
  const springY = useSpring(cursorY, { stiffness: 120, damping: 18 });
  const dotSpringX = useSpring(dotX, { stiffness: 300, damping: 25 });
  const dotSpringY = useSpring(dotY, { stiffness: 300, damping: 25 });

  const isHovering = useRef(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      dotX.set(e.clientX - 4);
      dotY.set(e.clientY - 4);
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      isHovering.current = !!(
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-cursor]')
      );
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
    };
  }, [cursorX, cursorY, dotX, dotY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] rounded-full border border-cyan-400/60 mix-blend-difference"
        style={{ x: springX, y: springY }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[9999] rounded-full bg-cyan-400"
        style={{ x: dotSpringX, y: dotSpringY }}
      />
    </>
  );
}
