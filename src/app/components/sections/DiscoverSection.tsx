'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { Compass, Map, Layers, Lightbulb, Sparkles } from 'lucide-react';
import MotionSection from '../motion/MotionSection';
import RevealText from '../motion/RevealText';

const steps = [
  {
    icon: Compass,
    title: 'Clarify the Vision',
    desc: 'We align on your mission, goals, and the user stories that matter. This is where direction is forged.',
  },
  {
    icon: Map,
    title: 'Map the MVP',
    desc: 'We define what to build — and what to skip. The result is a clear, confidence-boosting scope.',
  },
  {
    icon: Layers,
    title: 'Derisk the Build',
    desc: 'We evaluate technical paths, flag hidden complexities, and design for what’s next — not just what’s now.',
  },
  {
    icon: Lightbulb,
    title: 'Deliver the Blueprint',
    desc: 'You walk away with a founder-ready product brief that’s lean, validated, and launch-focused.',
  },
];

const DiscoverSection: FC = () => {
  return (
    <MotionSection
      id='discover'
      className='relative z-10 px-6 py-36 sm:py-48 max-w-6xl mx-auto text-gray-800 tracking-wide'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <motion.div
        className='text-center max-w-3xl mx-auto mb-24'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <RevealText>
          <p className='text-sm uppercase tracking-wider text-blue-600 mb-2 font-medium'>
            Align, Validate, and Define Your Path
          </p>
          <h2 className='text-4xl sm:text-5xl font-extrabold text-[#030b1a] leading-tight'>
            It All Starts Here.
          </h2>
        </RevealText>
        <p className='mt-4 text-lg sm:text-xl text-gray-600'>
          Discovery isn’t just step one — it’s the ignition switch. We sharpen
          raw ideas into precise, buildable visions.
        </p>
      </motion.div>

      {/* Vertical Timeline Line */}
      <div className='absolute top-[22%] left-1/2 transform -translate-x-1/2 h-1/2 w-[2px] bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 opacity-30 z-0' />

      {/* Step Cards */}
      <div className='relative z-10'>
        {steps.map((step, i) => {
          const isLeft = i % 2 === 0;
          const cardMargin = isLeft ? 'sm:ml-4' : 'sm:mr-4';

          return (
            <motion.div
              key={step.title}
              className={`relative flex flex-col sm:flex-row items-center gap-6 mb-24 ${
                isLeft ? 'sm:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              {/* Card */}
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={`relative bg-white shadow-md rounded-xl border border-gray-200 px-6 py-6 w-full sm:w-1/2 hover:shadow-xl transition-all tracking-wide duration-300 ${cardMargin}`}
              >
                <div className='flex items-center gap-3 mb-3'>
                  <div className='p-3 rounded-full bg-indigo-600 text-white shrink-0'>
                    <step.icon className='w-5 h-5' />
                  </div>
                  <h4 className='text-lg font-semibold'>{step.title}</h4>
                </div>
                <p className='text-sm text-gray-600'>{step.desc}</p>
              </motion.div>

              {/* Pulse Dot on Timeline */}
              <div className='absolute left-1/2 transform -translate-x-1/2 w-6 h-6 z-20'>
                <div className='w-3 h-3 bg-blue-600 rounded-full mx-auto animate-pulse shadow-md' />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Testimonial Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className='mt-32 max-w-xl mx-auto w-full rounded-xl border border-gray-200 bg-white shadow-md px-6 py-8'
      >
        <div className='flex flex-col items-center text-center'>
          <Sparkles className='w-5 h-5 text-blue-500 mb-4' />
          <RevealText className='text-sm sm:text-base text-gray-800 leading-relaxed'>
            <span className='block text-lg sm:text-xl font-semibold text-gray-900 mb-2'>
              “We walked in with fuzzy ideas and walked out with a clear,
              buildable plan.”
            </span>
            The discovery process helped us make smarter tradeoffs and gave our
            investors something concrete to back.
            <br />
            <span className='mt-4 block text-sm text-gray-500 font-medium'>
              — Jordan Ellis, Co-founder of Thryve.io
            </span>
          </RevealText>
        </div>
      </motion.div>
    </MotionSection>
  );
};

export default DiscoverSection;
