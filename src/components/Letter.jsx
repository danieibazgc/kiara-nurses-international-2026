import { motion } from 'framer-motion';
import { story } from '../data/story';
import ScrollReveal from './ui/ScrollReveal';

export default function Letter() {
  const paragraphs = story.letter.content.split('\n\n');

  return (
    <section className="py-20 px-6" style={{ background: 'var(--cream)' }}>
      <ScrollReveal direction="up" className="text-center mb-10">
        <h2
          className="text-title font-light"
          style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--rose-deep)',
          }}
        >
          Mi Carta para Ti
        </h2>
      </ScrollReveal>

      <motion.div
        className="letter-paper max-w-xl mx-auto relative z-0"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Small nurse cross at top */}
        <div className="flex justify-center mb-6">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="9" y="2" width="6" height="20" rx="1" fill="var(--rose-light)" opacity="0.5" />
            <rect x="2" y="9" width="20" height="6" rx="1" fill="var(--rose-light)" opacity="0.5" />
          </svg>
        </div>

        {paragraphs.map((para, i) => {
          // First paragraph: the greeting "Kiara,"
          if (i === 0) {
            return (
              <p
                key={i}
                className="mb-6 text-lg italic font-semibold"
                style={{
                  fontFamily: 'var(--font-display)',
                  color: 'var(--ink)',
                  fontSize: 'clamp(1.3rem, 4vw, 1.8rem)',
                }}
              >
                {para}
              </p>
            );
          }

          // Last two paragraphs: the closing
          if (i >= paragraphs.length - 2) {
            const isSignature = i === paragraphs.length - 1;
            return (
              <p
                key={i}
                className={`mb-2 ${isSignature ? 'mt-8' : ''}`}
                style={{
                  fontFamily: isSignature ? 'var(--font-script)' : 'var(--font-body)',
                  color: isSignature ? 'var(--rose-deep)' : 'var(--ink-soft)',
                  fontSize: isSignature ? 'clamp(1.5rem, 5vw, 2.2rem)' : 'clamp(1rem, 3vw, 1.15rem)',
                  fontStyle: isSignature ? 'normal' : 'italic',
                  textAlign: 'right',
                }}
              >
                {para}
              </p>
            );
          }

          // Body paragraphs
          return (
            <p
              key={i}
              className={`mb-5 leading-relaxed ${i === 1 ? 'drop-cap' : ''}`}
              style={{
                fontFamily: 'var(--font-body)',
                color: 'var(--ink-soft)',
                fontSize: 'clamp(0.95rem, 2.8vw, 1.1rem)',
                lineHeight: 1.85,
                textAlign: 'justify',
              }}
            >
              {para}
            </p>
          );
        })}
      </motion.div>
    </section>
  );
}
