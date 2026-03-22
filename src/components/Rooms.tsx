import { useState } from 'react';
import { ChevronLeft, ChevronRight, Users, Maximize } from 'lucide-react';

const rooms = [
  {
    title: 'Forest Canopy Suite',
    description: 'Immerse yourself in the treetops with panoramic forest views, a king bed, and a private balcony surrounded by nature.',
    size: '45 m²',
    guests: 2,
    image: '/room1.jpg',
  },
  {
    title: 'Riverside Cottage',
    description: 'A charming standalone cottage steps from the river, featuring stone walls, a wood-burning fireplace, and rustic décor.',
    size: '60 m²',
    guests: 4,
    image: '/room2.jpg',
  },
  {
    title: 'Garden Retreat Room',
    description: 'Open directly onto a private garden with fragrant herbs and wildflowers. Includes a queen bed and outdoor seating.',
    size: '35 m²',
    guests: 2,
    image: '/room3.jpg',
  },
  {
    title: 'Hilltop Panorama Villa',
    description: 'Perched at the highest point, this villa offers 270° views of the valley, a private plunge pool, and a spacious terrace.',
    size: '90 m²',
    guests: 6,
    image: '/room 4.jpg',
  },
  {
    title: 'Bamboo Bungalow',
    description: 'Sustainably built with local bamboo, this eco-bungalow blends seamlessly with the jungle while offering modern comforts.',
    size: '40 m²',
    guests: 2,
    image: '/outside.jpg',
  },
  {
    title: 'Heritage Haveli Room',
    description: 'Styled after traditional Indian architecture, featuring hand-painted walls, carved wooden furniture, and vibrant textiles.',
    size: '50 m²',
    guests: 3,
    image: '/bath1.jpg',
  },
  {
    title: 'Stargazer Loft',
    description: 'A rooftop loft with a glass ceiling perfect for stargazing. Minimalist design, king bed, and a telescope for night-sky exploration.',
    size: '38 m²',
    guests: 2,
    image: '/bath 2.jpg',
  },
];

const VISIBLE = 3;

const Rooms = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, rooms.length - VISIBLE));

  const canPrev = current > 0;
  const canNext = current < rooms.length - VISIBLE;

  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-forest-900 mb-4">
            Our Rooms & Suites
          </h2>
          <div className="w-24 h-1 bg-beige-600 mx-auto mb-6"></div>
          <p className="text-lg text-forest-700 max-w-3xl mx-auto leading-relaxed">
            Each room is thoughtfully designed to connect you with nature while
            providing every comfort you deserve. Choose your perfect sanctuary.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Cards */}
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(calc(-${current} * (100% / ${VISIBLE} + 8px)))` }}
            >
              {rooms.map((room, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-beige-100"
                  style={{ width: `calc((100% - ${(VISIBLE - 1) * 24}px) / ${VISIBLE})` }}
                >
                  <div className="h-56 overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-forest-900 mb-2">
                      {room.title}
                    </h3>
                    <p className="text-forest-700 text-sm leading-relaxed mb-4">
                      {room.description}
                    </p>
                    <div className="flex items-center gap-4 text-forest-600 text-sm">
                      <span className="flex items-center gap-1">
                        <Maximize className="w-4 h-4" />
                        {room.size}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        Up to {room.guests} guests
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            disabled={!canPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 bg-white border border-beige-200 text-forest-800 rounded-full p-2 shadow-md hover:bg-beige-50 transition disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            disabled={!canNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 bg-white border border-beige-200 text-forest-800 rounded-full p-2 shadow-md hover:bg-beige-50 transition disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: rooms.length - VISIBLE + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current ? 'bg-beige-600 w-6' : 'bg-beige-300'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
