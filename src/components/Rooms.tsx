"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { rooms } from '@/data/rooms';

const Rooms = () => {
  return (
    <section id="rooms" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Intro */}
        <div className="mb-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent-500 font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block font-sans">Rooms</span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-primary-500 tracking-tighter leading-none mb-6">
              Our <span className="italic font-light text-accent-500">Rooms.</span>
            </h2>
            <div className="w-20 h-px bg-accent-500/30 mx-auto" />
          </motion.div>
        </div>

        {/* Alternating Room Blocks */}
        <div className="space-y-32 md:space-y-48">
          {rooms.map((room, i) => (
            <div 
              key={room.id}
              className={`flex flex-col gap-12 lg:gap-24 items-center ${
                i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Text Side */}
              <motion.div 
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="w-full lg:w-1/2"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-accent-500 font-bold tracking-[0.2em] text-[10px] uppercase">{room.type}</span>
                  <div className="w-8 h-px bg-accent-500/30" />
                  <span className="text-text-muted text-[10px] font-medium tracking-widest uppercase">{room.view}</span>
                </div>

                <h3 className="text-4xl md:text-6xl font-serif font-bold text-primary-500 mb-8 tracking-tight leading-[0.95]">
                  {room.title}
                </h3>
                
                <p className="text-xl text-text-secondary font-medium leading-relaxed mb-10 max-w-lg">
                  {room.description}
                </p>

                <div className="flex flex-col gap-4 border-t border-border pt-8">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-accent-600 uppercase">Featured Amenities</span>
                  <p className="text-sm text-primary-500 font-bold tracking-wide italic font-serif">
                    {room.amenities}
                  </p>
                </div>
              </motion.div>

              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="w-full lg:w-1/2 h-full"
              >
                <div className="relative h-full min-h-[400px] md:min-h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-border group">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="lazy"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-[3s]"
                  />
                  <div className="absolute inset-0 bg-primary-900/10 mix-blend-multiply" />
                </div>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Rooms;