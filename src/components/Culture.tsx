"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { cultureHighlights } from '@/data/culture';

const Culture = () => {
  return (
    <section id="culture" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-accent-500 font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">Our Culture</span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-primary-500 leading-[0.95] tracking-tighter">
              Rooted in tradition, <br/>
              <span className="italic font-light text-accent-500">defined by nature.</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-text-secondary font-medium max-w-sm leading-relaxed"
          >
            At Kulam, we believe the best stories are written slowly. Our homestay is a sanctuary for those seeking to reconnect with the earth.
          </motion.p>
        </div>

        {/* Focal Image Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden mb-24 shadow-xl border border-border"
        >
          <Image
            src="https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="The Kulam Experience"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            loading="lazy"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary-900/10 mix-blend-multiply" />
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {cultureHighlights.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col"
            >
              <div className="text-accent-500 mb-6 p-4 bg-surface rounded-2xl w-fit transition-all duration-500 shadow-sm border border-border">
                {item.icon}
              </div>
              <h4 className="text-xl font-serif font-bold text-primary-500 mb-3">{item.title}</h4>
              <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Culture;