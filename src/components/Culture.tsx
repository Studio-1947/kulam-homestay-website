import { Heart, Users, Leaf, Book } from 'lucide-react';

const Culture = () => {
  const culturalHighlights = [
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Warm Hospitality',
      description:
        'Experience genuine care and warmth that makes you feel like family from the moment you arrive.',
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Community Living',
      description:
        'Engage with local communities, participate in daily rituals, and create meaningful connections.',
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      title: 'Sustainable Practices',
      description:
        'We honor nature through organic farming, rainwater harvesting, and eco-friendly living.',
    },
    {
      icon: <Book className="w-12 h-12" />,
      title: 'Traditional Wisdom',
      description:
        'Learn ancient practices, traditional cooking methods, and time-honored crafts from locals.',
    },
  ];

  return (
    <section id="culture" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-forest-900 mb-4">
            Our Culture
          </h2>
          <div className="w-24 h-1 bg-forest-600 mx-auto mb-6"></div>
          <p className="text-lg text-forest-700 max-w-3xl mx-auto leading-relaxed">
            At Kulam Homestay, we celebrate the rich tapestry of traditions,
            values, and practices that have been passed down through generations.
            Our culture is rooted in harmony with nature and community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {culturalHighlights.map((item, index) => (
            <div
              key={index}
              className="bg-beige-50 rounded-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-forest-600 flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-forest-900 mb-3">
                {item.title}
              </h3>
              <p className="text-forest-700 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-forest-700 to-forest-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-center">
              Experience Authentic Village Life
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-3">Daily Activities</h4>
                <ul className="space-y-2 text-beige-100">
                  <li>• Morning yoga by the pond</li>
                  <li>• Traditional cooking workshops</li>
                  <li>• Organic farming participation</li>
                  <li>• Evening storytelling sessions</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">Cultural Events</h4>
                <ul className="space-y-2 text-beige-100">
                  <li>• Festival celebrations</li>
                  <li>• Folk music performances</li>
                  <li>• Craft-making workshops</li>
                  <li>• Community gatherings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
