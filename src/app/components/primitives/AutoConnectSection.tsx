'use client';

import { FC, useRef } from 'react';
import { motion } from 'framer-motion';
import { useConnectorLines } from './hooks/useConnectorLines';

const AutoConnectSection: FC = () => {
  const stepRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const lines = useConnectorLines(stepRefs);

  return (
    <div className='relative px-6 py-32 max-w-6xl mx-auto'>
      {/* SVG connectors */}
      <svg
        className='absolute top-0 left-0 w-full h-full z-[-1]'
        preserveAspectRatio='none'
      >
        {lines.map((line, i) => (
          <motion.line
            key={i}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke='#60a5fa'
            strokeWidth='2'
            strokeDasharray='4 4'
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: i * 0.2 }}
          />
        ))}
      </svg>

      {/* Your Cards */}
      <div className='space-y-20'>
        {['Clarify', 'Map', 'Derisk', 'Deliver'].map((title, i) => (
          <div
            key={title}
            ref={stepRefs[i]}
            className='p-6 bg-white rounded-lg shadow-md max-w-md mx-auto'
          >
            <h3 className='text-xl font-semibold'>{title}</h3>
            <p className='text-sm text-gray-600 mt-2'>
              Sample content for {title} step.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoConnectSection;
