'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import MotionSection from '../motion/MotionSection';
import MotionCard from '../motion/MotionCard';
import Image from 'next/image';
import RevealText from '../motion/RevealText';

const CallToActionSection: FC = () => {
  return (
    <MotionSection
      className='relative overflow-hidden px-4 py-24 text-white text-center sm:px-6 bg-[#3b82f6] tracking-wide'
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className='relative z-10 mx-auto mb-10 max-w-lg rounded-xl bg-white/70 backdrop-blur-xl backdrop-saturate-150 border border-gray-200 shadow-md px-6 py-5 text-left text-gray-900'
      >
        {/* Header */}
        <div className='flex items-center gap-3 mb-3'>
          <Image
            src='/chris.png'
            alt='Alex R.'
            width={32}
            height={32}
            className='w-8 h-8 rounded-full border border-gray-300 object-cover'
          />
          <div>
            <p className='text-sm font-semibold leading-tight text-gray-900'>
              Alex R.
            </p>
            <p className='text-xs text-gray-500'>
              @alexlaunch • Founder at Launchbyte
            </p>
          </div>
        </div>

        {/* Tweet Text */}
        <RevealText className='text-sm sm:text-base text-gray-800 leading-relaxed'>
          “They helped us launch in under 60 days — now we’re demoing to
          investors with confidence.”
        </RevealText>

        {/* Footer Badges */}
        <div className='mt-4 flex items-center gap-4 text-gray-600 text-xs font-medium'>
          <span>🚀 60-Day MVP</span>
          <span>✅ Fundable Launch</span>
        </div>
      </motion.div>

      {/* 🎯 Icon + Title */}
      <motion.div
        className='relative z-10 flex flex-col mb-6 gap-3 items-center md:flex-row md:justify-center md:gap-2'
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className='text-4xl sm:text-5xl font-extrabold leading-tight drop-shadow-lg'>
          Let’s Build Something Worth Launching
        </h2>
      </motion.div>

      {/* 💬 Subtext */}
      <motion.p
        className='mb-3 text-sm font-semibold tracking-widest text-white/70 uppercase'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        Backed by 10+ years of performance. Built for bold founders.
      </motion.p>

      {/* 🧠 Description */}
      <motion.p
        className='relative z-10 max-w-xl mx-auto mb-10 text-base sm:text-lg text-white/90 tracking-wide leading-relaxed'
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Share your idea — and we’ll help you shape it into a polished, fundable,
        launch-ready MVP with real traction.
      </motion.p>

      {/* 🚀 CTA Button */}
      <motion.div
        className='relative z-10'
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <a
          href='mailto:frank@advanced-software-solutions.com'
          className='inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-bold uppercase tracking-wider text-[var(--accent)] transition-all duration-300 ease-out bg-white rounded-full shadow-lg hover:-translate-y-1 hover:shadow-xl group'
        >
          <span>Share Your Idea</span>
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 300 }}
          >
            <Send className='h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5 group-hover:scale-110' />
          </motion.div>
        </a>
      </motion.div>
    </MotionSection>
  );
};

export default CallToActionSection;
