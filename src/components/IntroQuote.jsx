import ScrollReveal from './ui/ScrollReveal';

export default function IntroQuote() {
  return (
    <section className="py-20 px-6" style={{ background: 'var(--cream)' }}>
      <ScrollReveal direction="fade" className="max-w-lg mx-auto text-center">
        <p
          className="text-section italic leading-relaxed"
          style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--mauve)',
            fontWeight: 300,
          }}
        >
          "Hay personas que llegan sin avisar
          <br />
          y sin querer se vuelven el lugar
          <br />
          al que siempre quieres volver."
        </p>
      </ScrollReveal>
    </section>
  );
}
