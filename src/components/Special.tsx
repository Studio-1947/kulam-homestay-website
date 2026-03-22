import { Star, TreePine, Home, Utensils, Sun, Moon } from 'lucide-react';

const Special = () => {
  const features = [
    {
      icon: <TreePine className="w-8 h-8" />,
      title: 'Surrounded by Nature',
      description:
        'Wake up to birdsong and fall asleep under starlit skies. Our homestay is nestled in 5 acres of pristine forest.',
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Authentic Architecture',
      description:
        'Experience traditional Kerala-style architecture with modern comforts, built using sustainable local materials.',
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: 'Farm-to-Table Dining',
      description:
        'Savor organic meals prepared with vegetables and herbs from our own garden, cooked in traditional style.',
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: 'Slow Living Philosophy',
      description:
        'Disconnect from the rush and reconnect with yourself. No TVs, just nature, books, and meaningful conversations.',
    },
    {
      icon: <Moon className="w-8 h-8" />,
      title: 'Peaceful Ambiance',
      description:
        'Find your inner peace in our meditation garden, yoga pavilion, and serene pond with lotus flowers.',
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Personalized Experience',
      description:
        'We host only 3 families at a time, ensuring personalized attention and an intimate, home-like atmosphere.',
    },
  ];

  return (
    <section id="special" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-forest-900 mb-4">
            Why We Are Special
          </h2>
          <div className="w-24 h-1 bg-forest-600 mx-auto mb-6"></div>
          <p className="text-lg text-forest-700 max-w-3xl mx-auto leading-relaxed">
            Kulam Homestay is not just a place to stay; it's a journey back to
            simplicity, authenticity, and the art of slow living.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-beige-50 to-forest-50 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-forest-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-forest-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-forest-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="relative rounded-3xl overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Peaceful homestay view"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-900/80 to-forest-700/80 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Your Home Away From Home
              </h3>
              <p className="text-xl mb-6 text-beige-100">
                Where time slows down and life feels meaningful again
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                  <p className="text-2xl font-bold">4.9/5</p>
                  <p className="text-sm text-beige-200">Guest Rating</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                  <p className="text-2xl font-bold">200+</p>
                  <p className="text-sm text-beige-200">Happy Guests</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                  <p className="text-2xl font-bold">5 Acres</p>
                  <p className="text-sm text-beige-200">Of Nature</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-beige-600 to-beige-500 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience Slow Living?</h3>
          <p className="text-lg mb-6 text-beige-50 max-w-2xl mx-auto">
            Book your stay at Kulam Homestay and rediscover the joy of simple
            pleasures, meaningful connections, and the beauty of doing nothing.
          </p>
          <button className="px-10 py-4 bg-white text-forest-800 rounded-lg hover:bg-beige-50 transition-all transform hover:scale-105 shadow-lg font-semibold text-lg">
            Book Your Stay
          </button>
        </div>
      </div>
    </section>
  );
};

export default Special;
