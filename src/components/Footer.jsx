import ScrollReveal from './ui/ScrollReveal';

export default function Footer() {
  return (
    <footer
      className="py-16 px-6 text-center"
      style={{ background: 'var(--cream-dark)' }}
    >
      <ScrollReveal direction="fade">
        <p
          className="text-body mb-1"
          style={{
            fontFamily: 'var(--font-body)',
            color: 'var(--ink-soft)',
          }}
        >
          Hecho con amor por Daniel
        </p>
        <p
          className="text-script mb-6"
          style={{
            fontFamily: 'var(--font-script)',
            color: 'var(--rose)',
            fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
          }}
        >
          para Kiara
        </p>
        <div className="space-y-1">
          <p
            className="text-sm"
            style={{
              fontFamily: 'var(--font-body)',
              color: 'var(--mauve)',
            }}
          >
            12 de mayo de 2026
          </p>
          <p
            className="text-sm"
            style={{
              fontFamily: 'var(--font-body)',
              color: 'var(--mauve)',
            }}
          >
            Día Internacional de la Enfermera
          </p>
        </div>
        <p className="text-2xl mt-6">❤️</p>
      </ScrollReveal>
    </footer>
  );
}
