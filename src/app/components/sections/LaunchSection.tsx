'use client';

import { FC, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Rocket,
  ServerCog,
  Layout,
  Sparkles,
  FileText,
  CheckCircle,
} from 'lucide-react';
import MotionSection from '../motion/MotionSection';
import RevealText from '../motion/RevealText';

const launchSteps = [
  {
    icon: Sparkles,
    title: 'Final QA & Polish',
    desc: 'Every pixel reviewed. Every interaction tested. No loose ends, just launch-grade polish.',
  },
  {
    icon: ServerCog,
    title: 'Production Deployments',
    desc: 'Your domains, infra, and pipeline — configured, secure, and ready to go live.',
  },
  {
    icon: Layout,
    title: 'Client Access & Share Links',
    desc: 'Public portals, onboarding flows, tokenized reports. Built for first users.',
  },
  {
    icon: FileText,
    title: 'Branded Output',
    desc: 'PDFs, emails, and touchpoints that reflect your product — clean, sharp, consistent.',
  },
  {
    icon: Rocket,
    title: 'Go-Time Support',
    desc: 'We stay close for rollout, investor demos, and early feedback loops.',
  },
];

const HowWeLaunchSection: FC = () => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedStep(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);
  const [selectedStep, setSelectedStep] = useState<
    null | (typeof launchSteps)[0]
  >(null);

  return (
    <MotionSection
      id='how-we-launch'
      className='relative px-6 py-36 sm:py-48 bg-white tracking-wide overflow-hidden'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {/* Section Header */}
      <motion.div
        className='text-center max-w-3xl mx-auto mb-20'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className='text-sm uppercase tracking-wider text-blue-600 mb-2 font-medium'>
          Final Countdown
        </p>
        <h2 className='text-4xl sm:text-5xl font-extrabold text-[#030b1a] mb-4'>
          Ready for Liftoff
        </h2>
        <RevealText className='text-lg sm:text-xl text-gray-600 max-w-xl mx-auto'>
          We don’t just ship features — we launch fully-formed products with
          confidence, momentum, and mission control.
        </RevealText>
      </motion.div>

      {/* Launch Checklist */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto'>
        {launchSteps.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 40, rotate: i % 2 === 0 ? -3 : 3 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            onClick={() => setSelectedStep({ icon: Icon, title, desc })}
            className='cursor-pointer group relative bg-white border border-gray-200 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden'
          >
            <div className='p-3 bg-green-600 rounded-full w-fit text-white mb-4'>
              <Icon className='w-5 h-5' />
            </div>

            <h3 className='text-lg font-semibold text-[#030b1a]'>{title}</h3>
            <p className='text-sm text-gray-600 mt-1 leading-relaxed'>{desc}</p>

            {/* Status Pill */}
            <div className='absolute bottom-4 right-4 bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full shadow-sm opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300'>
              {i === launchSteps.length - 1
                ? '🚀 Engaged'
                : i >= 2
                  ? '🛠 Prepped'
                  : '✅ Ready'}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Countdown + Launch */}
      <motion.div
        className='text-center mt-16'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className='inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold border border-green-300 shadow-md'
        >
          <CheckCircle className='w-4 h-4 text-green-600' />
          MVP Launched
        </motion.div>
      </motion.div>

      {/* Tweet-Style Testimonial */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className='mt-16 max-w-3xl mx-auto'
      >
        <div className='relative w-full rounded-xl border border-gray-200 bg-white shadow-sm px-6 py-8'>
          {/* Header */}
          <div className='flex items-center gap-3 mb-4'>
            <img
              src='https://i.pravatar.cc/60?img=64'
              alt='Niko Varga'
              className='w-10 h-10 rounded-full object-cover'
            />
            <div>
              <p className='text-sm font-semibold text-gray-900 leading-tight'>
                Niko Varga
              </p>
              <p className='text-xs text-gray-500'>
                @nikovarga • Sr. Systems Architect
              </p>
            </div>
            {/* X logo */}
            <svg
              aria-hidden='true'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='ml-auto w-5 h-5 text-blue-500'
            >
              <path d='M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.38c-.84.5-1.77.87-2.76 1.06A4.26 4.26 0 0015.5 4c-2.37 0-4.3 1.93-4.3 4.3 0 .34.04.67.11.98-3.57-.18-6.74-1.89-8.86-4.5-.37.63-.59 1.37-.59 2.15 0 1.48.75 2.78 1.9 3.54a4.25 4.25 0 01-1.94-.54v.05c0 2.07 1.48 3.8 3.45 4.2-.36.1-.73.15-1.12.15-.27 0-.54-.03-.8-.07.54 1.7 2.1 2.94 3.95 2.97A8.56 8.56 0 013 18.57a12.07 12.07 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2l-.01-.56A8.73 8.73 0 0024 4.59a8.51 8.51 0 01-2.54.7z' />
            </svg>
          </div>

          {/* Content */}
          <RevealText className='text-sm sm:text-base text-gray-800 leading-relaxed'>
            The launch experience was insane — pipelines, infra, QA, and support
            all felt like a Fortune 500 handoff. Best I've seen in a consulting
            team.
          </RevealText>

          {/* Footer */}
          <div className='mt-6 flex items-center gap-4 text-gray-400 text-xs font-medium'>
            <span>🧪 QA Perfected</span>
            <span>🚀 Real Deployment</span>
            <span>📣 Launch Support</span>
          </div>
        </div>
      </motion.div>
      {selectedStep && (
        <motion.div
          className='fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedStep(null)}
        >
          <motion.div
            className='bg-white text-[#030b1a] w-full max-w-md rounded-xl shadow-2xl p-6 relative tracking-wide'
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedStep(null)}
              className='absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition tracking-wide'
            >
              ✕
            </button>

            <div className='flex items-center gap-3 mb-4'>
              <div className='p-3 bg-green-600 text-white rounded-full'>
                <selectedStep.icon className='w-5 h-5' />
              </div>
              <h3 className='text-lg font-semibold'>{selectedStep.title}</h3>
            </div>

            <p className='text-sm text-gray-700 leading-relaxed mb-4'>
              {selectedStep.desc}
            </p>

            <div className='text-xs text-gray-500 tracking-wide'>
              <p>
                <strong>Why it matters:</strong> This step ensures the launch
                feels seamless and strategic.
              </p>
              <p className='mt-2'>
                <strong>What’s included:</strong> Detailed QA passes,
                stakeholder sign-off, and final delivery packaging.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </MotionSection>
  );
};

export default HowWeLaunchSection;
