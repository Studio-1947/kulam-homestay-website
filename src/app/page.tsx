import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Culture from '../components/Culture';
import Boutique from '../components/Boutique';
import Rooms from '../components/Rooms';
import Special from '../components/Special';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Culture />
        <Rooms />
        <Boutique />
        <Special />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
