import { story } from '../data/story';
import ScrollReveal from './ui/ScrollReveal';

export default function OurStory() {
  return (
    <section className="py-20 px-6" style={{ background: 'var(--cream-dark)' }}>
      <ScrollReveal direction="up" className="text-center mb-12">
        <h2
          className="text-title font-light"
          style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--rose-deep)',
          }}
        >
          Nuestra Historia
        </h2>
      </ScrollReveal>

      <div className="relative max-w-lg mx-auto pl-8">
        {/* Vertical line */}
        <div
          className="absolute left-2 top-0 bottom-0 w-px"
          style={{ background: 'var(--rose-light)' }}
        />

        {story.timeline.map((event, i) => (
          <ScrollReveal
            key={event.id}
            direction="up"
            delay={i * 0.15}
            className="relative mb-16 last:mb-0"
          >
            {/* Timeline dot */}
            <div
              className="absolute -left-8 w-4 h-4 rounded-full z-10 border-2"
              style={{
                background: 'var(--cream)',
                borderColor: 'var(--rose)',
                top: '0.5rem',
                transform: 'translateX(calc(-50% + 0.5rem))',
              }}
            />

            {/* Date badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">{event.emoji}</span>
              <span
                className="text-sm uppercase tracking-widest"
                style={{
                  fontFamily: 'var(--font-body)',
                  color: 'var(--gold)',
                }}
              >
                {event.date}
              </span>
            </div>

            {/* Photo */}
            <div
              className="aspect-[4/5] rounded-2xl overflow-hidden mb-4"
              style={{
                boxShadow: '0 8px 32px rgba(44, 27, 36, 0.15)',
              }}
            >
              <img
                src={event.photo}
                alt={event.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Title */}
            <h3
              className="text-section mb-2"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--ink)',
                fontWeight: 500,
              }}
            >
              {event.title}
            </h3>

            {/* Description */}
            <p
              className="text-body leading-relaxed"
              style={{
                fontFamily: 'var(--font-body)',
                color: 'var(--ink-soft)',
              }}
            >
              {event.description}
            </p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
