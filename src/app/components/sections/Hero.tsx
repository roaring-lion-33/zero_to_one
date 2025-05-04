'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MotionSection from '../motion/MotionSection';
import ContactUsModal from '../old/ContactUsModal';
import { ArrowDownIcon } from 'lucide-react';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const watermarkY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const watermarkOpacity = useTransform(scrollYProgress, [0, 1], [0.08, 0]);

  return (
    <MotionSection
      id='hero'
      ref={ref}
      className='relative flex flex-col items-center justify-center text-center bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.5)_30%,_transparent_100%)] min-h-[90vh] sm:min-h-screen overflow-hidden px-4'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* 🌌 Background Glow */}
      <motion.div className='absolute inset-0 z-0 pointer-events-none overflow-hidden'>
        <motion.div
          className='absolute   '
          animate={{ x: ['-10%', '10%', '-10%'] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* 💧 Watermark */}
      <motion.div
        className='absolute z-10 top-[19%] left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none'
        style={{ y: watermarkY, opacity: watermarkOpacity }}
      >
        <span className='block font-black text-gray-400 tracking-tight leading-none text-[clamp(4rem,20vw,16rem)] whitespace-nowrap'>
          <span className='text-[#3b82f6] tracking-tighter'>0</span>→
          <span className='text-[#3b82f6] tracking-tighter'>1</span>
        </span>
      </motion.div>

      {/* 🎯 Foreground Content */}
      <motion.div
        className='relative z-20 w-full'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className='mx-auto mb-4 text-3xl sm:text-6xl font-bold leading-tight tracking-tight text-[#030b1a] max-w-[90vw] sm:max-w-7xl sm:mt-12'
        >
          Turn Bold Ideas Into Launch-Ready Software
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className='mx-auto mb-10 text-lg sm:text-xl text-gray-600 max-w-[90vw] sm:max-w-2xl tracking-wide'
        >
          We help visionaries turn raw ideas into real, working products —
          designed to impress, built to scale, and ready to launch.
        </motion.p>

        <ContactUsModal />

        {/* 👇 Scroll Cue */}
        <motion.button
          aria-label='Scroll to next section'
          className='flex mt-12 mx-auto items-center justify-center animate-bounce tracking-wide'
          onClick={() => {
            document
              .getElementById('process')
              ?.scrollIntoView({ behavior: 'smooth' });
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <ArrowDownIcon className='w-6 h-6 text-gray-700 hover:scale-110 transition-transform tracking-wide' />
        </motion.button>
      </motion.div>
    </MotionSection>
  );
}
