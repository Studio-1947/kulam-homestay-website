"use client";

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { specialFeatures } from '@/data/special';

const Special = () => {
  return (
    <section id="special" className="py-24 md:py-48 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-24 items-start">
          
          {/* Left: Text Content Suite */}
          <div className="lg:w-1/2 z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-accent-500 font-bold tracking-[0.4em] text-[10px] uppercase mb-6 block">Why Us</span>
              <h2 className="text-6xl md:text-8xl font-serif font-bold text-primary-500 leading-[0.85] mb-10 tracking-tighter">
                A journey <br/>
                <span className="italic font-light text-accent-500">beyond.</span>
              </h2>
              <p className="text-xl text-text-secondary font-medium leading-relaxed mb-16 max-w-md">
                Kulam is your gateway to the tranquil life of Mirik. We've created a space where you can relax amidst tea gardens and find peace in the pine forests.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 mb-16">
                {specialFeatures.map((feature) => (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex gap-4 items-start group"
                  >
                    <div className="text-accent-500 mt-1 transition-transform duration-500 group-hover:scale-110">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-serif font-bold text-primary-500 mb-1">{feature.title}</h4>
                      <p className="text-text-muted text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Overlapping Image Collage */}
          <div className="lg:w-1/2 relative h-[600px] md:h-[800px] w-full">
            
            {/* Main Tall Image */}
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 right-0 w-[75%] h-[80%] rounded-3xl overflow-hidden shadow-2xl z-10 border border-border"
            >
              <Image
                src="/outside.jpg"
                alt="Mirik Outdoors"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary-900/10 mix-blend-multiply" />
            </motion.div>

            {/* Bottom Left Detail Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1.2 }}
              className="absolute bottom-0 left-0 w-[55%] h-[45%] rounded-2xl overflow-hidden shadow-2xl z-30 border-[10px] border-background"
            >
              <Image
                src="/dinning5.jpg"
                alt="Local Tea Culture"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
                className="object-cover"
              />
            </motion.div>

            {/* Small Floating Accent Image */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 1.2 }}
              className="absolute top-[15%] left-[-10%] w-[40%] h-[30%] rounded-xl overflow-hidden shadow-xl z-20 border-[6px] border-background hidden md:block"
            >
              <Image
                src="/mirik1.png"
                alt="Authentic Details"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
                className="object-cover"
              />
            </motion.div>

            {/* Floating Trust Badge */}
            <motion.div
              initial={{ opacity: 0, rotate: -10 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="absolute top-[-20px] right-[-20px] bg-accent-500 p-8 rounded-full shadow-2xl z-40 flex flex-col items-center justify-center text-white"
            >
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="white" />)}
              </div>
              <span className="text-2xl font-serif font-bold leading-none">4.9</span>
              <span className="text-[8px] font-black tracking-widest uppercase opacity-80">Rating</span>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Special;
