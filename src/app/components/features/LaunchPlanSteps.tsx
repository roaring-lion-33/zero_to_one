'use client';

import MotionSection from './builder/MotionSection';
import { motion } from 'framer-motion';
import { Clock, Wrench, Rocket } from 'lucide-react';
import MotionCard from './builder/MotionCard';
import RevealText from './builder/RevealText';

const steps = [
  {
    icon: Clock,
    title: 'Days 1–30: Strategy & Architecture',
    description: 'We clarify your idea, define your MVP, and establish the technical plan for a fast, scalable build.',
  },
  {
    icon: Wrench,
    title: 'Days 31–60: Design & Build',
    description: 'We design clean, user-focused interfaces and develop your app using scalable, maintainable code.',
  },
  {
    icon: Rocket,
    title: 'Days 61–90: Launch & Iterate',
    description: 'We help you launch confidently, gather user feedback, and iterate for traction and growth.',
  },
];

export default function LaunchPlanSteps() {
  return (
    <MotionSection whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="py-24 px-6 bg-white/10" id="launch-plan">
      <div className="w-full mx-auto sm:w-2/3">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-2xl md:text-3xl font-semibold text-center md:text-left text-[#030b1a] sm:text-3xl"
        >
          Your 90-Day Launch Roadmap
        </motion.h2>

        <ol className="relative border-r border-gray-200">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12 mr-6 text-right"
            >
              <span className="absolute flex flex-col h-6 w-6 items-center justify-center ring-8 ring-white shadow-md rounded-full -right-3 md:flex-row bg-[var(--accent)]">
                <Icon className="text-white" size={14} />
              </span>
              <h3 className="mb-1 text-xl font-semibold text-[#030b1a]">{title}</h3>
              <RevealText as='p' className="text-lg text-gray-600">{description}</RevealText>
            </motion.li>
          ))}
        </ol>
      </div>
    </MotionSection>
  );
}
