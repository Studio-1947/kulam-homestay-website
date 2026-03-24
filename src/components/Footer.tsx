"use client";

import { motion } from 'framer-motion';
import { MapPin, Instagram, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { siteConfig } from '@/data/config';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white pt-24 pb-12 relative overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          
          {/* Brand Identity */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-start"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-[42px] relative">
                  <Image src="/Logo.svg" alt="Kulam" fill className="object-contain brightness-0 invert" />
                </div>
                <h3 className="text-4xl font-serif font-bold tracking-tighter">{siteConfig.name}<span className="text-accent-500">.</span></h3>
              </div>
              <p className="text-white/60 text-lg leading-relaxed max-w-md font-sans font-medium italic">
                "A boutique homestay in Mirik, where every moment is a short story of slow living and authentic discovery."
              </p>
              
              <div className="flex gap-6 mt-10">
                <a 
                  href={siteConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-white/10 hover:border-accent-500 hover:text-accent-500 transition-all duration-500 group"
                >
                  <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 lg:pl-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-[10px] font-black tracking-[0.4em] text-accent-500 uppercase mb-8">Navigation</h4>
              <ul className="space-y-4">
                <li>
                  <button 
                    onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/50 hover:text-white transition-colors font-bold text-sm uppercase tracking-widest flex items-center gap-2 group"
                  >
                    <div className="w-0 h-px bg-accent-500 group-hover:w-4 transition-all" />
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('culture')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/50 hover:text-white transition-colors font-bold text-sm uppercase tracking-widest flex items-center gap-2 group"
                  >
                    <div className="w-0 h-px bg-accent-500 group-hover:w-4 transition-all" />
                    Our Story
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/50 hover:text-white transition-colors font-bold text-sm uppercase tracking-widest flex items-center gap-2 group"
                  >
                    <div className="w-0 h-px bg-accent-500 group-hover:w-4 transition-all" />
                    The Rooms
                  </button>
                </li>
                <li>
                  <a 
                    href="https://wa.me/918373819862"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-white transition-colors font-bold text-sm uppercase tracking-widest flex items-center gap-2 group"
                  >
                    <div className="w-0 h-px bg-accent-500 group-hover:w-4 transition-all" />
                    Contact
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Map Section - Replacing Stay Connected */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="text-[10px] font-black tracking-[0.4em] text-accent-500 uppercase mb-8">Find Your Way</h4>
              
              {/* Stylized Map Container */}
              <div className="relative group rounded-2xl overflow-hidden shadow-2xl h-72 bg-surface-dark/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.123456789012!2d88.1822!3d26.8888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e43df123456789%3A0x1234567890abcdef!2sMirik%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                  className="opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                />
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 text-white/60 text-xs font-bold tracking-widest uppercase">
                  <MapPin size={16} className="text-accent-500" />
                  <span>{siteConfig.address}</span>
                </div>
                <button className="flex items-center gap-3 text-accent-500 text-[10px] font-black tracking-[0.2em] uppercase group hover:text-white transition-colors">
                  Get Directions <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Bottom Utility Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-black tracking-[0.3em] text-white/20 uppercase">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-10">
            <button className="hover:text-accent-500 transition-colors">Privacy Policy</button>
            <button className="hover:text-accent-500 transition-colors">Terms of Stay</button>
            <button className="hover:text-accent-500 transition-colors">Contact Concierge</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;