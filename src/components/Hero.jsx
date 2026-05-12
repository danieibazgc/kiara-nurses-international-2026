import { motion } from 'framer-motion';
import FloatingHeart from './ui/FloatingHeart';

const heartPositions = [
  { top: '10%', left: '8%', size: 14, delay: 0 },
  { top: '15%', right: '12%', size: 18, delay: 0.5 },
  { top: '30%', left: '5%', size: 12, delay: 1.2 },
  { top: '45%', right: '8%', size: 16, delay: 0.8 },
  { top: '60%', left: '15%', size: 10, delay: 1.5 },
  { top: '70%', right: '18%', size: 14, delay: 0.3 },
  { top: '25%', left: '20%', size: 11, delay: 2 },
  { top: '80%', right: '6%', size: 13, delay: 1 },
  { top: '55%', left: '3%', size: 15, delay: 1.8 },
  { top: '40%', right: '22%', size: 9, delay: 0.6 },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden px-6"
      style={{ background: 'var(--cream)' }}
    >
      {/* Vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 50%, rgba(44, 27, 36, 0.06) 100%)',
        }}
      />

      {/* Floating hearts */}
      {heartPositions.map((pos, i) => (
        <FloatingHeart
          key={i}
          style={{
            top: pos.top,
            left: pos.left,
            right: pos.right,
          }}
          size={pos.size}
          delay={pos.delay}
        />
      ))}

      {/* Content */}
      <motion.div
        className="relative z-10 text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          className="text-script mb-4"
          style={{
            fontFamily: 'var(--font-script)',
            color: 'var(--rose)',
          }}
        >
          Para mi osita
        </motion.p>

        <motion.h1
          variants={item}
          className="text-hero font-light leading-none mb-6"
          style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--ink)',
            letterSpacing: '-0.02em',
          }}
        >
          Kiara
        </motion.h1>

        <motion.p
          variants={item}
          className="text-body italic"
          style={{
            fontFamily: 'var(--font-body)',
            color: 'var(--gold)',
            maxWidth: '320px',
            margin: '0 auto',
          }}
        >
          12 de mayo · Día Internacional de la Enfermera
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--rose-light)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
