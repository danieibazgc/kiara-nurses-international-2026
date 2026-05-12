import { motion } from 'framer-motion';
import { story } from '../data/story';
import ScrollReveal from './ui/ScrollReveal';

export default function NurseTribute() {
  return (
    <section
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: 'var(--rose-deep)' }}
    >
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 80%, var(--rose-light) 0%, transparent 50%), radial-gradient(circle at 80% 20%, var(--gold) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 max-w-lg mx-auto text-center">
        {/* Animated nurse cross */}
        <ScrollReveal direction="fade">
          <motion.div
            className="flex justify-center mb-10"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
              <rect x="22" y="4" width="12" height="48" rx="2" fill="var(--cream)" opacity="0.9" />
              <rect x="4" y="22" width="48" height="12" rx="2" fill="var(--cream)" opacity="0.9" />
              <circle cx="28" cy="28" r="6" fill="var(--rose-light)" opacity="0.7" />
            </svg>
          </motion.div>
        </ScrollReveal>

        {/* Main quote */}
        <ScrollReveal direction="up" delay={0.2}>
          <p
            className="text-section italic leading-snug mb-10"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--cream)',
              fontWeight: 300,
            }}
          >
            "Hoy el mundo celebra
            <br />
            a las enfermeras.
            <br />
            Yo te celebro a ti."
          </p>
        </ScrollReveal>

        {/* Credentials */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="space-y-2 mb-10">
            <p
              className="text-sm uppercase tracking-[0.2em]"
              style={{
                fontFamily: 'var(--font-body)',
                color: 'var(--rose-light)',
              }}
            >
              {story.nurses.degree}
            </p>
            <p
              className="text-body"
              style={{
                fontFamily: 'var(--font-body)',
                color: 'var(--cream)',
                opacity: 0.9,
              }}
            >
              {story.nurses.university}
            </p>
            <div
              className="w-12 h-px mx-auto my-4"
              style={{ background: 'var(--gold)' }}
            />
            <p
              className="text-body font-medium"
              style={{
                fontFamily: 'var(--font-body)',
                color: 'var(--cream)',
              }}
            >
              {story.nurses.role}
            </p>
            <p
              className="text-sm"
              style={{
                fontFamily: 'var(--font-body)',
                color: 'var(--rose-light)',
                opacity: 0.8,
              }}
            >
              {story.nurses.workplace}
            </p>
          </div>
        </ScrollReveal>

        {/* Closing quote */}
        <ScrollReveal direction="up" delay={0.6}>
          <p
            className="text-body italic"
            style={{
              fontFamily: 'var(--font-body)',
              color: 'var(--gold-light)',
              maxWidth: '360px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            "Cuidas a otros como nadie.
            <br />
            Yo me encargo de cuidarte a ti."
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
