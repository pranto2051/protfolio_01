import { motion } from 'framer-motion';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'backOut' }}
        className="relative mb-8"
      >
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-2xl shadow-cyan-500/40">
          <span className="text-white font-bold text-3xl font-mono">P</span>
        </div>
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-cyan-400/50"
          animate={{ scale: [1, 1.4, 1], opacity: [0.8, 0, 0.8] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-slate-400 text-sm tracking-widest uppercase mb-8"
      >
        Loading Portfolio
      </motion.div>

      <div className="w-48 h-0.5 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
          onAnimationComplete={onComplete}
        />
      </div>
    </motion.div>
  );
}
