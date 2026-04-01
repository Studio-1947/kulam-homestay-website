"use client";

import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Compass, X, Clock } from 'lucide-react';
import { useRef } from 'react';
import Image from 'next/image';

const Hero = () => {
  const containerRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const letterScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const openBookingModal = () => setShowModal(true);
  const closeBookingModal = () => setShowModal(false);

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
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-primary-500">ESTD. 2025</span>
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
            <button 
              onClick={openBookingModal}
              className="group px-6 py-3 bg-accent-500 text-white rounded-full text-[10px] font-bold tracking-[0.3em] uppercase flex items-center gap-3 hover:bg-white hover:text-primary-500 transition-all duration-500 shadow-xl"
            >
              Book Now
            </button>
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
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-primary-500">ESTD. 2025</span>
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
                <button 
                  onClick={openBookingModal}
                  className="group px-6 py-3 bg-accent-500 text-white rounded-full text-[10px] font-bold tracking-[0.3em] uppercase flex items-center gap-3 hover:bg-white hover:text-primary-500 transition-all duration-500 shadow-xl"
                >
                  Book Now
                </button>
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

      {/* Booking Modal */}
      {showModal && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={closeBookingModal}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative bg-background rounded-2xl max-w-md w-full p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 p-2 text-text-muted hover:text-primary-500 transition-colors"
              onClick={closeBookingModal}
            >
              <X size={24} />
            </button>

            {/* Modal Header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-serif font-bold text-primary-500 mb-2">Book Your Stay</h3>
              <p className="text-text-muted text-sm">We'd love to host you at Kulam</p>
            </div>

            {/* Check-in / Check-out Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 p-4 bg-surface rounded-xl">
                <div className="p-3 bg-primary-500/10 rounded-lg">
                  <Clock size={20} className="text-primary-500" />
                </div>
                <div>
                  <p className="text-xs font-bold text-text-muted uppercase tracking-wider">Check-in</p>
                  <p className="text-lg font-bold text-primary-500">13:00</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-surface rounded-xl">
                <div className="p-3 bg-primary-500/10 rounded-lg">
                  <Clock size={20} className="text-primary-500" />
                </div>
                <div>
                  <p className="text-xs font-bold text-text-muted uppercase tracking-wider">Check-out</p>
                  <p className="text-lg font-bold text-primary-500">12:00</p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mb-8 p-4 bg-surface-dark/30 rounded-xl">
              <p className="text-sm text-text-muted text-center leading-relaxed">
                For bookings, availability, and special requests, please reach out to us directly on WhatsApp. We'll be happy to assist you!
              </p>
            </div>

            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/918250026001?text=Hi!%20I'd%20like%20to%20book%20a%20stay%20at%20Kulam%20Homestay."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-green-600 text-white rounded-xl font-bold text-sm tracking-wider uppercase hover:bg-green-700 transition-all duration-300 shadow-lg"
            >
              {/* WhatsApp Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
