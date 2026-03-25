"use client";

import { useState, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';
import { Wifi, Car, UtensilsCrossed, Flame, TreePine, Mountain, MapPin, Sunrise, Droplets } from 'lucide-react';

const roomImages = [
  '/room1.jpg', '/room2.jpg', '/room3.jpg', '/room4.jpg', '/room5.jpg',
  '/room6.jpg', '/room7.jpg', '/room8.jpg', '/room9.jpg', '/room10.jpg',
  '/bathroom1.jpg', '/bathroom2.jpg', '/dinning1.jpg', '/dinning2.jpg', '/dinning3.jpg',
  '/dinning4.jpg', '/dinning5.jpg'
];

const features = [
  { icon: <Wifi className="w-5 h-5" />, label: 'WiFi' },
  { icon: <Car className="w-5 h-5" />, label: 'Parking' },
  { icon: <UtensilsCrossed className="w-5 h-5" />, label: 'Restaurant' },
  { icon: <Droplets className="w-5 h-5" />, label: 'Hot Water' },
  { icon: <Flame className="w-5 h-5" />, label: 'Bonfire' },
  { icon: <TreePine className="w-5 h-5" />, label: 'Garden' },
  { icon: <Sunrise className="w-5 h-5" />, label: 'Balcony View' },
  { icon: <Mountain className="w-5 h-5" />, label: 'Trekking Access' },
  { icon: <MapPin className="w-5 h-5" />, label: 'Nearby Attractions' },
];

const Rooms = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimationControls();

  // Start the marquee animation on mount
  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: { duration: 35, repeat: Infinity, ease: "linear" }
    });
  }, []);

  const handleImageClick = (src: string) => {
    controls.stop();
    setIsPaused(true);
    setSelectedImage(src);
  };

  const handleClose = () => {
    setSelectedImage(null);
    setIsPaused(false);
    // Resume the animation
    controls.start({
      x: ["0%", "-50%"],
      transition: { duration: 35, repeat: Infinity, ease: "linear" }
    });
  };

  return (
    <section id="rooms" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-accent-500 font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">The Rooms</span>
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-primary-500 tracking-tighter leading-none mb-6">
            Stay in <span className="italic font-light text-accent-500">Comfort.</span>
          </h2>
          <p className="text-lg text-text-secondary font-medium max-w-2xl leading-relaxed">
            Experience the warmth of traditional Himalayan hospitality combined with modern amenities. 
            Each room is designed to provide a peaceful retreat with stunning views of the misty mountains.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20"
        >
          {features.map((feature, i) => (
            <div 
              key={i}
              className="flex items-center gap-3 p-4 bg-surface rounded-xl border border-border"
            >
              <div className="text-accent-500">
                {feature.icon}
              </div>
              <span className="text-sm font-bold text-primary-500 uppercase tracking-wide">
                {feature.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Photo Marquee with fade effects */}
        <div className="relative">
          {/* Left fade gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          
          {/* Right fade gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          {/* Marquee track */}
          <div className="overflow-hidden py-4">
            <motion.div 
              className="flex gap-4 w-max cursor-pointer"
              animate={isPaused ? { x: 0 } : controls}
              initial={false}
            >
              {[...roomImages, ...roomImages].map((src, i) => (
                <motion.div 
                  key={i}
                  onClick={() => handleImageClick(src)}
                  className="flex-shrink-0 w-48 md:w-72 h-32 md:h-48 rounded-lg overflow-hidden shadow-md border border-border relative cursor-zoom-in"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={src}
                    alt={`Room ${(i % roomImages.length) + 1}`}
                    fill
                    unoptimized
                                        sizes="280px"
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
          onClick={handleClose}
        >
          {/* Close button */}
          <button 
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors z-50"
            onClick={handleClose}
          >
            <X size={32} />
          </button>

          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-[90vw] max-h-[90vh] cursor-zoom-out flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Full size preview"
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Rooms;