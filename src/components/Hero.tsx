import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const element = document.getElementById('culture');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center"
      style={{ backgroundImage: "url('/bg.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Welcome to
            <br />
            <span className="text-beige-200">Kulam Homestay</span>
          </h1>

          <p className="text-xl md:text-2xl text-beige-100 italic max-w-2xl mx-auto">
            A short story of slow living
          </p>

          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            Escape the chaos of modern life and immerse yourself in the tranquil
            embrace of nature. Experience authentic living, rich culture, and the
            gentle rhythm of village life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={() => document.getElementById('special')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-forest-600 text-white rounded-lg hover:bg-forest-700 transition-all transform hover:scale-105 shadow-lg font-medium"
            >
              Discover Our Story
            </button>
            <button
              onClick={() => document.getElementById('boutique')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-beige-600 text-white rounded-lg hover:bg-beige-700 transition-all transform hover:scale-105 shadow-lg font-medium"
            >
              Visit Our Shop
            </button>
          </div>
        </div>

        <button
          onClick={scrollToNext}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-forest-600 hover:text-forest-800 transition-colors"
          aria-label="Scroll to next section"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
