"use client";

import { useState, useEffect } from 'react';
import { X, Instagram, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { navLinks } from '@/data/navigation';
import { siteConfig } from '@/data/config';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // Using mounted state to prevent hydration mismatch (common pattern in Next.js)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setIsOpen(false);
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  if (!mounted) return null;

  return (
    <>
      {/* Permanent Top Bar - Adjusted for Contrast */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-6 lg:px-12 flex justify-between items-center ${
          isScrolled 
            ? 'py-4 bg-background shadow-[0_4px_30px_-10px_rgba(0,0,0,0.1)] border-b border-border' 
            : 'py-8 bg-transparent'
        }`}
      >
        <button
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <span className="h-10 w-9 relative">
            <Image 
              src="/Logo.svg" 
              alt="Kulam Logo" 
              fill 
              className={`object-contain transition-all duration-500 ${isScrolled ? 'scrolled-logo' : 'default-logo'}`} 
            />
          </span>
        </button>

        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-4 group focus:outline-none"
        >
          {/* Menu Text Contrast */}
          <span className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-colors hidden sm:block ${
            isScrolled ? 'text-text-primary' : 'text-white text-legible'
          }`}>
            Menu
          </span>
          <div className="flex flex-col gap-1.5 items-end">
            <div className={`w-8 h-[2.5px] rounded-full transition-colors ${
              isScrolled ? 'bg-primary-500' : 'bg-white shadow-md'
            }`}></div>
            <div className={`w-5 h-[2.5px] rounded-full transition-all duration-300 group-hover:w-8 ${
              isScrolled ? 'bg-primary-500' : 'bg-white shadow-md'
            }`}></div>
          </div>
        </button>
      </nav>

      {/* Full-Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[60] bg-primary-900 flex flex-col lg:flex-row overflow-hidden"
          >
            {/* Left Decor / Info */}
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="hidden lg:flex flex-col justify-between w-1/3 p-20 border-r border-white/5 bg-primary-500/10"
            >
              <div>
                <span className="text-accent-500 font-bold tracking-[0.3em] text-[10px] uppercase block mb-6">Contact</span>
                <p className="text-white text-2xl font-serif italic mb-2">ruputhapa77@gmail.com</p>
                <p className="text-white/60 font-sans font-medium">+91 83738 19862</p>
              </div>

              <div>
                <span className="text-accent-500 font-bold tracking-[0.3em] text-[10px] uppercase block mb-6">Social</span>
                <div className="flex gap-8 text-white">
                  <a href="https://www.instagram.com/kulamhomestay2025/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-500 cursor-pointer transition-colors">
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Main Links */}
            <div className="flex-1 relative flex flex-col p-10 lg:p-24 justify-center">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-10 right-10 lg:top-20 lg:right-20 text-white/60 hover:text-white transition-colors flex items-center gap-3 uppercase text-[10px] font-black tracking-[0.2em]"
              >
                Close <X size={32} strokeWidth={1.5} />
              </button>

              <div className="flex flex-col space-y-8 lg:space-y-6">
                {navLinks.map((link, i) => (
                  link.href ? (
                    <a
                      key={link.id}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group text-left flex items-baseline gap-8"
                    >
                      <span className="text-accent-500/40 font-serif italic text-3xl group-hover:text-accent-500 transition-colors">0{i + 1}</span>
                      <div className="flex flex-col">
                        <span className="text-5xl lg:text-8xl font-serif font-bold text-white tracking-tighter group-hover:italic transition-all duration-300">
                          {link.label}
                        </span>
                        <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-accent-500 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 duration-300">
                          {link.subtitle}
                        </span>
                      </div>
                      <ArrowRight className="text-accent-500 opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 transition-all duration-300 hidden sm:block" size={48} />
                    </a>
                  ) : (
                    <motion.button
                      key={link.id}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * i + 0.3, duration: 0.6 }}
                      onClick={() => scrollToSection(link.id)}
                      className="group text-left flex items-baseline gap-8"
                    >
                      <span className="text-accent-500/40 font-serif italic text-3xl group-hover:text-accent-500 transition-colors">0{i + 1}</span>
                      <div className="flex flex-col">
                        <span className="text-5xl lg:text-8xl font-serif font-bold text-white tracking-tighter group-hover:italic transition-all duration-300">
                          {link.label}
                        </span>
                        <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-accent-500 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 duration-300">
                          {link.subtitle}
                        </span>
                      </div>
                      <ArrowRight className="text-accent-500 opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 transition-all duration-300 hidden sm:block" size={48} />
                    </motion.button>
                  )
                ))}
              </div>
            </div>

            {/* Mobile Bottom Footer */}
            <div className="lg:hidden p-10 mt-auto border-t border-white/10 flex justify-between items-center text-white">
               <div className="flex gap-8">
                 <Instagram size={22} />
               </div>
               <span className="text-[10px] font-bold tracking-widest uppercase italic opacity-60 text-accent-500">Kulam Homestay</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
