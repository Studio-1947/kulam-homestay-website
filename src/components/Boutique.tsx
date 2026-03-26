"use client";

import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import { boutiqueHighlights } from '@/data/boutique';

const Boutique = () => {
  return (
    <section id="boutique" className="py-24 md:py-32 bg-surface-dark/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Editorial Header - Matching "Our Story" style */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-24 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-accent-500 font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block flex items-center gap-2">
              <ShoppingBag size={14} />
              Local Boutique Shop
            </span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-primary-500 leading-[0.95] tracking-tighter">
              Handcrafted <br/>
              <span className="italic font-light text-accent-500">Treasures.</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-text-secondary font-medium max-w-sm leading-relaxed text-left md:text-right"
          >
            Discover authentic handcrafted goods made by Mirik's skilled artisans. Each piece tells a story of tradition, passion, and timeless craftsmanship.
          </motion.p>
        </div>

        {/* Product Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {boutiqueHighlights.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-surface">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h4 className="text-base font-serif font-bold text-primary-500 mb-1 tracking-tight">{item.title}</h4>
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
            <h3 className="text-3xl font-serif font-bold text-white mb-4">Love what you see?</h3>
            <p className="text-white/70 text-sm font-medium leading-relaxed">
              Every piece you choose brings warmth to a artisan's home and helps keep Mirik's traditions alive. Simply reach out—we'd be happy to share more and help you find the perfect piece.
            </p>
          </div>
          <a 
            href="https://wa.me/918250026001"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 group flex items-center gap-4 bg-white text-primary-500 px-8 py-4 rounded-full text-xs font-black tracking-widest uppercase hover:bg-accent-500 hover:text-white transition-all duration-500 shadow-xl"
          >
            Chat on WhatsApp <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Boutique;