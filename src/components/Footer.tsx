"use client";

import { motion } from 'framer-motion';
import { MapPin, Instagram, Phone, Mail, ArrowRight } from 'lucide-react';
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
                "A boutique homestay in Mirik, offering a peaceful mountain retreat amidst lush tea gardens and warm hospitality."
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
                <a 
                  href="https://wa.me/918250026001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-white/10 hover:border-green-500 hover:text-green-500 transition-all duration-500 group"
                >
                  {/* WhatsApp Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 group-hover:scale-110 transition-transform">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>

              {/* Contact Information */}
              <div className="mt-8 space-y-3">
                <a 
                  href="tel:+918250026001"
                  className="flex items-center gap-3 text-white/60 hover:text-accent-500 transition-colors group"
                >
                  <Phone size={16} className="text-accent-500" />
                  <span className="text-sm font-medium">+91 82500 26001</span>
                </a>
                <a 
                  href="mailto:kulamnivas2024@gmail.com"
                  className="flex items-center gap-3 text-white/60 hover:text-accent-500 transition-colors group"
                >
                  <Mail size={16} className="text-accent-500" />
                  <span className="text-sm font-medium">kulamnivas2024@gmail.com</span>
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
                    href="https://wa.me/918250026001"
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56936.84638893056!2d88.11557880952047!3d26.88594262205677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e43313944408f7%3A0xfd598e4fe36d658c!2sKulam%20-%20A%20boutique%20homestay!5e0!3m2!1sen!2sin!4v1774603471297!5m2!1sen!2sin"
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
                <a 
                  href="https://maps.app.goo.gl/fdWXSEFL7atXuQUb8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-accent-500 text-[10px] font-black tracking-[0.2em] uppercase group hover:text-white transition-colors"
                >
                  Get Directions <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
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