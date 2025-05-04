'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, PenTool, Layers3, Figma } from 'lucide-react';
import MotionSection from '../motion/MotionSection';
import RevealText from '../motion/RevealText';
import { FigmaPreviewPanel } from '../old';

const pillars = [
  {
    icon: PenTool,
    title: 'Design It Before You Build It',
    desc: 'Clickable prototypes that simulate the real thing. Validate fast, pivot faster.',
  },
  {
    icon: LayoutDashboard,
    title: 'Interfaces With Purpose',
    desc: 'Every screen supports a goal — from signup to sale to scale.',
  },
  {
    icon: Figma,
    title: 'Made for Handoff',
    desc: 'Our Figma kits are developer-ready, structured for clean collaboration.',
  },
  {
    icon: Layers3,
    title: 'Brand-Driven Beauty',
    desc: 'Polished, modern design that feels like *you* — not a template.',
  },
];

const DesignSection: FC = () => {
  return (
    <MotionSection
      id='design'
      className='relative z-10 px-6 py-36 sm:py-48 bg-white text-[#030b1a] tracking-wide overflow-hidden'
    >
      {/* Section Header */}
      <motion.div
        className='text-center max-w-4xl mx-auto mb-24'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className='text-sm uppercase tracking-wider text-blue-600 mb-2 font-medium'>
          Strategy-Backed Visual Systems
        </p>
        <h2 className='text-4xl sm:text-5xl font-extrabold mb-4'>
          We Design With Intent
        </h2>
        <RevealText className='text-lg sm:text-xl text-gray-600 max-w-xl mx-auto tracking-wide'>
          Where usability meets identity. We don’t just craft UIs — we build
          experiences that move.
        </RevealText>
      </motion.div>

      {/* Pillars */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-14 max-w-5xl mx-auto'>
        {pillars.map(({ icon: Icon, title, desc }, index) => (
          <motion.div
            key={title}
            className='group relative bg-white/70 backdrop-blur-md rounded-xl border border-gray-200 p-6 shadow-md hover:shadow-xl transition-shadow duration-300  hover:z-20 text-center tracking-wide'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ rotateX: 2, rotateY: 2 }}
          >
            {/* Glow trail behind icon */}
            <div className='absolute -top-6 left-6 w-24 h-24 bg-purple-300 blur-2xl opacity-20 rounded-full z-[-1] group-hover:scale-125 transition-transform duration-500' />

            <div className='inline-flex items-center justify-center p-3 rounded-full bg-purple-600 text-white mb-4 group-hover:scale-110 transition-transform'>
              <Icon className='w-6 h-6' />
            </div>
            <h3 className='text-xl font-semibold mb-1 tracking-wide'>
              {title}
            </h3>
            <p className='text-gray-600 text-sm leading-relaxed'>{desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Pull Quote Centerpiece */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.7 }}
        className='mt-24 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12'
      >
        {/* Twitter-Style Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className='relative w-full lg:w-1/2 rounded-xl border border-gray-200 bg-white shadow-sm px-6 py-8'
        >
          {/* Header */}
          <div className='flex items-center gap-3 mb-4'>
            <img
              src='https://i.pravatar.cc/60?img=32'
              alt='Brielle Chan'
              className='w-10 h-10 rounded-full object-cover'
            />
            <div className='flex-1'>
              <p className='text-sm font-semibold text-gray-900 leading-tight'>
                Brielle Chan
              </p>
              <p className='text-xs text-gray-500'>
                @briellechan • Product Lead at Alloy.ai
              </p>
            </div>
            {/* X Logo */}
            <svg
              aria-hidden='true'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-5 h-5 text-blue-500'
            >
              <path d='M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.38c-.84.5-1.77.87-2.76 1.06A4.26 4.26 0 0015.5 4c-2.37 0-4.3 1.93-4.3 4.3 0 .34.04.67.11.98-3.57-.18-6.74-1.89-8.86-4.5-.37.63-.59 1.37-.59 2.15 0 1.48.75 2.78 1.9 3.54a4.25 4.25 0 01-1.94-.54v.05c0 2.07 1.48 3.8 3.45 4.2-.36.1-.73.15-1.12.15-.27 0-.54-.03-.8-.07.54 1.7 2.1 2.94 3.95 2.97A8.56 8.56 0 013 18.57a12.07 12.07 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2l-.01-.56A8.73 8.73 0 0024 4.59a8.51 8.51 0 01-2.54.7z' />
            </svg>
          </div>

          {/* Tweet content */}
          <RevealText className='text-sm sm:text-base text-gray-800 leading-relaxed'>
            We showed investors the prototype and they were{' '}
            <span className='font-medium text-gray-900 italic'>blown away</span>
            .
            <br />
            It looked so real, they thought we’d already launched.
          </RevealText>

          {/* Footer tags */}
          <div className='mt-6 flex items-center flex-wrap gap-3 text-gray-400 text-xs font-medium'>
            <span>✅ Realistic Prototypes</span>
            <span>🚀 MVP Confidence</span>
            <span>🎯 Investor Approved</span>
          </div>
        </motion.div>

        {/* Figma Preview */}
        <FigmaPreviewPanel />
      </motion.div>
    </MotionSection>
  );
};

export default DesignSection;
