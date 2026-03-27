"use client";

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: '1',
    name: 'Yougesh Pradhan',
    location: 'Guest Review',
    text: 'A Peaceful Stay Wrapped in Nature & Kindness. The property itself is cozy, warm, and thoughtfully maintained — it truly feels like a home rather than just a place to stay. One of the highlights was the peaceful location. Just a short walk away is a serene Buddhist monastery where young monks study, chant, and play — watching them brought a sense of calm and simplicity that\'s rare to find these days.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Dichen Bhutia',
    location: 'Guest Review',
    text: 'Enjoyed our stay to the fullest here! Great ambiance, vibe and food! Rupu was amazing as a host!! Thank you for such a wonderful experience.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Bandana Tamang',
    location: 'Guest Review',
    text: 'Neat and clean room, authentic food, great location, excellent hospitality. All things at one place. We enjoyed our stay.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-surface-dark/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-accent-500 font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">Testimonials</span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-primary-500 leading-[0.95] tracking-tighter">
              What our <br/>
              <span className="italic font-light text-accent-500">guests say.</span>
            </h2>
          </motion.div>
          
          {/* Rating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center bg-primary-500 p-6 rounded-2xl text-white shadow-xl"
          >
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#A88944" className="text-accent-500" />)}
            </div>
            <span className="text-3xl font-serif font-bold leading-none">4.9</span>
            <span className="text-[10px] font-bold tracking-widest uppercase opacity-80 mt-1">Avg Rating</span>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-background rounded-2xl p-8 border border-border shadow-sm relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 bg-accent-500 p-3 rounded-full text-white">
                <Quote size={16} />
              </div>
              
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} size={14} fill="#A88944" className="text-accent-500" />
                ))}
              </div>
              
              {/* Review Text */}
              <p className="text-text-muted text-sm leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h5 className="text-sm font-bold text-primary-500">{testimonial.name}</h5>
                  <p className="text-xs text-text-muted">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
