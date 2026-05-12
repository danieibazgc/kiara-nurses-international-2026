import { useDateCalc } from '../hooks/useDateCalc';
import { useCountUp } from '../hooks/useCountUp';
import { story } from '../data/story';
import ScrollReveal from './ui/ScrollReveal';

function StatCard({ value, label, symbol }) {
  const { count, ref } = useCountUp(value, 2000);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center rounded-2xl px-4 py-6 min-w-[100px]"
      style={{
        background: 'var(--gold-light)',
        border: '1px solid var(--rose-light)',
      }}
    >
      <span
        className="text-title font-bold leading-none"
        style={{
          fontFamily: 'var(--font-display)',
          color: 'var(--rose-deep)',
        }}
      >
        {symbol || count}
      </span>
      <span
        className="text-sm mt-2"
        style={{
          fontFamily: 'var(--font-body)',
          color: 'var(--mauve)',
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default function CounterStats() {
  const { days, months } = useDateCalc(story.anniversaryDate);

  return (
    <section className="py-20 px-6" style={{ background: 'var(--cream)' }}>
      <ScrollReveal direction="up">
        <div className="max-w-md mx-auto grid grid-cols-3 gap-4">
          <StatCard value={days} label="días" />
          <StatCard value={months} label="mesarios" />
          <StatCard value={0} label="amor" symbol="∞" />
        </div>
      </ScrollReveal>
    </section>
  );
}
