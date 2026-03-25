"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Compass } from 'lucide-react';
import { useRef } from 'react';
import Image from 'next/image';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const letterScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative h-screen bg-primary-900 flex items-center justify-center overflow-hidden"
    >
      {/* Background Layer with dual-toned overlay for text protection */}
      <motion.div 
        style={{ y: imageY }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <video
          src="/0_Couple_Meditate_1280x720.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="/bg.jpeg"
          className="absolute inset-0 w-full h-full object-cover brightness-75 grayscale-[20%]"
        />
        <Image
          src="/bg.jpeg"
          alt="Kulam Nature"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover brightness-75 grayscale-[20%] hidden"
        />
        {/* Dynamic Overlays for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/60 via-transparent to-primary-900/80" />
        <div className="absolute inset-0 bg-primary-900/20 mix-blend-multiply" />
      </motion.div>

      {/* Hero Content */}
      <motion.div 
        style={{ scale: letterScale, opacity }}
        className="relative z-10 w-full h-full flex flex-col pointer-events-none select-none px-6"
      >
        {/* Mobile: Centered content */}
        <div className="flex flex-col items-center justify-center text-center lg:hidden h-full pt-20">
          {/* ESTD Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6 flex items-center gap-3 glass-pill"
          >
            <Compass size={14} className="text-accent-500" />
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-primary-500">ESTD. 2024</span>
          </motion.div>

          {/* H1 Heading */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center"
          >
            <h1 className="text-[15vw] md:text-[18vw] font-serif font-black text-white tracking-tighter leading-none text-legible opacity-90">
              KULAM
            </h1>
            
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ delay: 1, duration: 1 }}
              className="h-[2px] bg-accent-500 mt-6 shadow-lg"
            />
            
            <span className="mt-8 text-[10px] md:text-xs font-bold tracking-[0.8em] text-accent-500 uppercase text-legible">
              Boutique Homestay
            </span>
          </motion.div>

          {/* Body Text - Centered */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-white font-sans text-base leading-relaxed mt-10 max-w-sm text-legible font-medium"
          >
            A peaceful mountain retreat in Mirik, nestled amid lush tea gardens and pine forests of the Darjeeling hills.
          </motion.p>

          {/* CTA Buttons - Centered */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 items-center pointer-events-auto"
          >
            <button 
              onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-6 py-3 bg-white text-primary-500 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase flex items-center gap-3 hover:bg-accent-500 hover:text-white transition-all duration-500 shadow-xl"
            >
              View Our Rooms
            </button>
            <a 
              href="https://wa.me/918373819862"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-3 bg-accent-500 text-white rounded-full text-[10px] font-bold tracking-[0.3em] uppercase flex items-center gap-3 hover:bg-white hover:text-primary-500 transition-all duration-500 shadow-xl"
            >
              Book Now
            </a>
          </motion.div>
        </div>

        {/* Desktop: Centered hero with bottom content */}
        <div className="hidden lg:flex flex-col items-center justify-center h-full">
          {/* ESTD Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8 flex items-center gap-3 glass-pill"
          >
            <Compass size={14} className="text-accent-500" />
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-primary-500">ESTD. 2024</span>
          </motion.div>

          {/* H1 Heading */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center"
          >
            <h1 className="text-[18vw] font-serif font-black text-white tracking-tighter leading-none text-legible opacity-90">
              KULAM
            </h1>
            
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ delay: 1, duration: 1 }}
              className="h-[2px] bg-accent-500 mt-6 shadow-lg"
            />
            
            <span className="mt-8 text-xs font-bold tracking-[0.8em] text-accent-500 uppercase text-legible">
              Boutique Homestay
            </span>
          </motion.div>
        </div>

        {/* Desktop bottom content - Body text left, Our Essence right */}
        <div className="hidden lg:block absolute bottom-24 left-0 right-0 px-24">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-white font-sans text-base leading-relaxed mb-8 text-legible font-medium max-w-sm">
                A peaceful mountain retreat in Mirik, nestled amid lush tea gardens and pine forests of the Darjeeling hills.
              </p>
              <div className="flex gap-4 items-center pointer-events-auto">
                <button 
                  onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group px-6 py-3 bg-white text-primary-500 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase flex items-center gap-3 hover:bg-accent-500 hover:text-white transition-all duration-500 shadow-xl"
                >
                  View Our Rooms
                </button>
                <a 
                  href="https://wa.me/918373819862"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-6 py-3 bg-accent-500 text-white rounded-full text-[10px] font-bold tracking-[0.3em] uppercase flex items-center gap-3 hover:bg-white hover:text-primary-500 transition-all duration-500 shadow-xl"
                >
                  Book Now
                </a>
              </div>
            </div>
            <div className="text-right">
              <span className="text-accent-500 text-[10px] font-bold tracking-[0.3em] uppercase block mb-2 text-legible">Our Essence</span>
              <span className="text-white font-serif italic text-3xl text-legible">Experience Authentic Hill Life</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Discovery Cue - Only visible on md+ */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={() => document.getElementById('culture')?.scrollIntoView({ behavior: 'smooth' })}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-accent-500 transition-all flex flex-col items-center gap-2 group"
      >
        <span className="text-[8px] font-bold tracking-[0.4em] uppercase group-hover:tracking-[0.6em] transition-all">Discover</span>
        <ArrowDown size={20} strokeWidth={1.5} className="animate-bounce" />
      </motion.button>
    </section>
  );
};

export default Hero;
