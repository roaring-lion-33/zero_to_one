'use client';

import { FC, useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import {
  ServerCog,
  ShieldCheck,
  Terminal,
  Code2,
  CheckCircle,
} from 'lucide-react';
import MotionSection from '../motion/MotionSection';
import RevealText from '../motion/RevealText';

const stackLayers = [
  {
    icon: ServerCog,
    label: 'Backend Infrastructure',
    desc: 'Databases, auth, APIs — built to scale from day one.',
    progress: 25,
    logs: [
      '📦 Installing PostgreSQL...',
      '🔐 Auth service initialized',
      '🌐 API routes mounted',
    ],
  },
  {
    icon: ShieldCheck,
    label: 'Workflow Logic',
    desc: 'Payments, dashboards, and secure flows engineered for real-world use.',
    progress: 50,
    logs: [
      '💳 Stripe billing connected',
      '📊 Admin dashboard deployed',
      '🔁 Workflow logic passing',
    ],
  },
  {
    icon: Terminal,
    label: 'DevOps & Testing',
    desc: 'CI/CD pipelines, test suites, and environments baked into every build.',
    progress: 75,
    logs: [
      '🧪 Unit tests passing',
      '📦 Docker container built',
      '🚚 Deploy pipeline green',
    ],
  },
  {
    icon: Code2,
    label: 'Production Code',
    desc: 'No scaffolds, no demos — just clean, launch-ready code.',
    progress: 100,
    logs: [
      '✅ All checks complete',
      '🚀 Code pushed to main',
      '🌍 Staging environment live',
    ],
  },
];

const BuildSection: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <MotionSection
      id='build'
      className='relative z-10 bg-white px-6 py-36 sm:py-48 text-[#030b1a] tracking-wide overflow-hidden'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {/* Header */}
      <motion.div
        className='text-center max-w-4xl mx-auto mb-28'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className='text-sm uppercase tracking-wider text-blue-600 mb-2 font-medium'>
          Where Code Becomes Product
        </p>
        <h2 className='text-4xl sm:text-5xl font-extrabold mb-4'>
          We Build the Engine
        </h2>
        <RevealText className='text-lg sm:text-xl text-gray-600 max-w-xl mx-auto tracking-wide'>
          Each layer of your product is precision-engineered to work — and to
          last.
        </RevealText>
      </motion.div>

      {/* Build Stack - Interactive */}
      <div className='relative max-w-3xl mx-auto '>
        {stackLayers.map(({ icon: Icon, label, desc, progress, logs }, i) => {
          const isActive = i === activeIndex;

          return (
            <motion.div
              key={label}
              onClick={() => handleClick(i)}
              className={`relative cursor-pointer select-none transition-all duration-500 ease-out group tracking-wide ${
                isActive
                  ? 'z-50 scale-105 -translate-y-3 shadow-2xl'
                  : 'z-10 opacity-80'
              } 
  ${
    i % 2 === 0
      ? 'sm:ml-[10.5%] sm:mr-0' // left-shift
      : 'sm:mr-[10.5%] sm:ml-0' // right-shift
  }
  bg-white border border-gray-200 shadow rounded-xl px-6 py-8 mb-[-48px] sm:mb-[-50px] hover:shadow-xl hover:scale-[1.01] hover:-translate-y-[20px]`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80, y: 40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: 'easeOut' }}
            >
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-blue-600 text-white shrink-0 group-hover:scale-110 transition-transform -mt-4 '>
                  <Icon className='w-6 h-6' />
                </div>
                <div className='flex flex-wrap w-full'>
                  <h3 className='text-lg font-semibold mb-1 w-full flex'>
                    {label}
                    <motion.div
                      className='ml-auto mt-0.5'
                      initial={false}
                      animate={{ rotate: isActive ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-4 w-4 text-gray-400 group-hover:text-blue-500 transition'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M19 9l-7 7-7-7'
                        />
                      </svg>
                    </motion.div>
                  </h3>

                  <p className='text-sm text-gray-600 leading-snug'>{desc}</p>

                  {/* Expanded Content */}
                  {isActive && (
                    <div className='flex justify-center w-full mt-2'>
                      <div className='mt-4 space-y-3  text-center w-1/2'>
                        {/* Progress % */}
                        <motion.div
                          className='text-xs text-blue-600 font-semibold mb-1'
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <AnimatedPercent target={progress} />
                        </motion.div>

                        {/* Progress Bar */}
                        <div className='w-full bg-gray-200 h-2 rounded-full overflow-hidden'>
                          <motion.div
                            className='h-full bg-blue-500 rounded-full'
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 1.2, ease: 'easeOut' }}
                          />
                        </div>

                        {/* Terminal Logs */}
                        <div className='flex justify-center w-full text-left mt-4'>
                          <div className='bg-black text-green-300 text-xs font-mono rounded-md px-4 py-3 w-full sm:w-[90%] md:w-[80%] lg:w-[75%]'>
                            <span className='block text-blue-400 mb-2'>
                              {'>  '}
                              building...
                            </span>
                            {logs.map((line, idx) => (
                              <motion.p
                                key={idx}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 + idx * 0.3 }}
                                className='leading-relaxed'
                              >
                                {line}
                              </motion.p>
                            ))}
                          </div>
                        </div>
                        {/* Special Launch Badge for 100% card */}
                        {progress === 100 && isActive && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              delay: 1,
                              duration: 0.5,
                              ease: 'easeOut',
                            }}
                            className='mt-4 inline-flex items-center gap-2 text-sm font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full border border-green-300 shadow-sm animate-bounce'
                          >
                            <CheckCircle className='w-4 h-4 text-green-500' />
                            Launch Ready
                          </motion.div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Shadow base glow */}
        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-6 bg-blue-300 blur-2xl opacity-20 rounded-full' />
      </div>

      {/* Twitter-Style Testimonial Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        className='mt-32 max-w-2xl mx-auto w-full rounded-xl border border-gray-200 bg-white shadow-sm px-6 py-6'
      >
        {/* Header */}
        <div className='flex items-center gap-3 mb-4'>
          <img
            src='https://i.pravatar.cc/60?img=14'
            alt='Leon Varga'
            className='w-10 h-10 rounded-full object-cover'
          />
          <div className='flex-1'>
            <p className='text-sm font-semibold text-gray-900 leading-tight'>
              Leon Varga
            </p>
            <p className='text-xs text-gray-500'>
              @leon_architect • Senior Systems Architect
            </p>
          </div>
          <svg
            aria-hidden='true'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-5 h-5 text-blue-500'
          >
            <path d='M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.38c-.84.5-1.77.87-2.76 1.06A4.26 4.26 0 0015.5 4c-2.37 0-4.3 1.93-4.3 4.3 0 .34.04.67.11.98-3.57-.18-6.74-1.89-8.86-4.5-.37.63-.59 1.37-.59 2.15 0 1.48.75 2.78 1.9 3.54a4.25 4.25 0 01-1.94-.54v.05c0 2.07 1.48 3.8 3.45 4.2-.36.1-.73.15-1.12.15-.27 0-.54-.03-.8-.07.54 1.7 2.1 2.94 3.95 2.97A8.56 8.56 0 013 18.57a12.07 12.07 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2l-.01-.56A8.73 8.73 0 0024 4.59a8.51 8.51 0 01-2.54.7z' />
          </svg>
        </div>

        {/* Content */}
        <RevealText className='text-sm text-gray-800 leading-relaxed'>
          Their production code is cleaner than most teams’ staging
          environments.
          <br />
          CI/CD, auth, infra — all built-in. I’d ship with them again without
          hesitation.
        </RevealText>

        {/* Footer actions (optional) */}
        <div className='mt-4 flex items-center gap-6 text-gray-400 text-xs font-medium'>
          <div className='flex items-center gap-1'>
            <svg
              className='w-4 h-4'
              fill='currentColor'
              viewBox='0 0 20 20'
              aria-hidden='true'
            >
              <path d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 18.343l-6.828-6.829a4 4 0 010-5.656z' />
            </svg>
            <span>138</span>
          </div>
          <div className='flex items-center gap-1'>
            <svg
              className='w-4 h-4'
              fill='none'
              stroke='currentColor'
              strokeWidth='1.5'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M8 10h.01M12 10h.01M16 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            <span>23</span>
          </div>
        </div>
      </motion.div>
    </MotionSection>
  );
};

export default BuildSection;

// Animated % Counter Component
const AnimatedPercent: FC<{ target: number }> = ({ target }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => `${Math.round(latest)}%`);

  useEffect(() => {
    const controls = animate(count, target, {
      duration: 1.2,
      ease: 'easeOut',
    });
    return controls.stop;
  }, [target]);

  return <motion.span>{rounded}</motion.span>;
};
