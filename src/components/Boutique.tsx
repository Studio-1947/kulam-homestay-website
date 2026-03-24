"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { boutiqueHighlights } from '@/data/boutique';

const Boutique = () => {
  return (
    <section id="boutique" className="py-24 md:py-32 bg-surface-dark/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Editorial Header - Matching "Our Story" style */}
        <div className="flex flex-col md:flex-row items-start justify-between mb-24 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-accent-500 font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">Our Community</span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-primary-500 leading-[0.95] tracking-tighter">
              A circle of <br/>
              <span className="italic font-light text-accent-500">mutual growth.</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-text-secondary font-medium max-w-sm leading-relaxed"
          >
            Every purchase and service at Kulam directly empowers Mirik's local artisans and their families, ensuring traditional skills thrive.
          </motion.p>
        </div>

        {/* Simplified Highlights List (Matching "Our Story" pattern) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          {boutiqueHighlights.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col"
            >
              <div className="text-accent-500 mb-6 p-4 bg-background rounded-2xl w-fit transition-all duration-500 shadow-sm border border-border">
                {item.icon}
              </div>
              <h4 className="text-xl font-serif font-bold text-primary-500 mb-3 tracking-tight">{item.title}</h4>
              <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Social Impact Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-10 md:p-16 bg-primary-500 rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div className="max-w-xl text-left">
            <h3 className="text-3xl font-serif font-bold text-white mb-4">Supporting 50+ local families.</h3>
            <p className="text-white/70 text-sm font-medium leading-relaxed">
              When you choose Kulam, you aren't just visiting a place—you are becoming part of a story that preserves culture and supports sustainable livelihoods in Mirik.
            </p>
          </div>
          <button className="flex-shrink-0 group flex items-center gap-4 bg-white text-primary-500 px-8 py-4 rounded-full text-xs font-black tracking-widest uppercase hover:bg-accent-500 hover:text-white transition-all duration-500 shadow-xl">
            Meet the Makers <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Boutique;