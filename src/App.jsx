import Hero from './components/Hero';
import IntroQuote from './components/IntroQuote';
import CounterStats from './components/CounterStats';
import OurStory from './components/OurStory';
import GoldenDivider from './components/ui/GoldenDivider';
import PhotoGallery from './components/PhotoGallery';
import Letter from './components/Letter';
import NurseTribute from './components/NurseTribute';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--cream)' }}>
      <Hero />
      <IntroQuote />
      <GoldenDivider />
      <CounterStats />
      <GoldenDivider />
      <OurStory />
      <GoldenDivider />
      <PhotoGallery />
      <GoldenDivider />
      <Letter />
      <NurseTribute />
      <Footer />
    </main>
  );
}
