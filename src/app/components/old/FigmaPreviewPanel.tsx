'use client';

import { FC, useState } from 'react';
import { motion } from 'framer-motion';

const EnhancedFigmaPreview: FC = () => {
  const [activeTab, setActiveTab] = useState('Design');
  const tabs = ['Design', 'Prototype', 'Inspect'];

  return (
    <motion.div
      className='relative w-1/2 bg-white border border-gray-200 rounded-xl shadow-xl'
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      {/* Top Chrome */}
      <div className='border-b border-gray-200'>
        <div className='bg-gray-100 px-4 py-2 flex items-center justify-between text-xs text-gray-500 font-mono border-b border-gray-200'>
          <div className='flex items-center gap-2'>
            <span className='w-3 h-3 rounded-full bg-red-400' />
            <span className='w-3 h-3 rounded-full bg-yellow-400' />
            <span className='w-3 h-3 rounded-full bg-green-400' />
            <span className='ml-4'>Figma — MVP Signup Flow</span>
          </div>
          <span className='text-[10px] px-2 py-0.5 font-semibold bg-blue-100 text-blue-600 rounded-full'>
            Preview
          </span>
        </div>

        {/* Animated Tabs */}
        <div className='relative flex items-center gap-6 px-6 py-2 bg-white text-xs font-medium text-gray-500 border-b border-gray-100'>
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-1 transition-colors ${
                activeTab === tab ? 'text-gray-900' : 'hover:text-gray-700'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId='underline'
                  className='absolute -bottom-0.5 left-0 right-0 h-0.5 bg-blue-500 rounded-full'
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
          <span className='ml-auto text-[10px] bg-gray-100 px-2 py-0.5 rounded-full text-gray-400'>
            ⌘ + /
          </span>
        </div>
      </div>

      {/* Mock Frame Stack with Tooltips */}
      <div className='h-[300px] sm:h-[360px] p-4 bg-white flex flex-col gap-4'>
        {/* Header Bar */}
        <div className='relative group w-full h-8 rounded bg-blue-100 hover:outline hover:outline-2 hover:outline-blue-500'>
          <div className='absolute top-full left-1/2 -translate-x-1/2 mt-2 z-999 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none'>
            <motion.div
              initial={{ y: 6, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className='bg-gray-900 text-white text-[10px] px-2 py-1 rounded shadow-md font-mono'
            >
              Spacing: 24px
            </motion.div>
          </div>
        </div>

        {/* Subheading */}
        <div className='relative group w-4/5 h-6 rounded bg-gray-100 hover:outline hover:outline-2 hover:outline-blue-500'>
          <div className='absolute top-full left-1/2 -translate-x-1/2 z-999 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none'>
            <motion.div
              initial={{ y: 6, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className='bg-gray-900 text-white text-[10px] px-2 py-1 rounded shadow-md font-mono'
            >
              Padding: 16px
            </motion.div>
          </div>
        </div>

        {/* Content Block */}
        <div className='relative group w-full h-40 rounded border border-dashed border-gray-300 bg-gray-50 flex items-center justify-center text-xs text-gray-400 hover:outline hover:outline-2 hover:outline-blue-500 z-10'>
          Live mockup preview
          <div className='absolute top-full left-1/2 -translate-x-1/2 mt-2 z-999 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none'>
            <motion.div
              initial={{ y: 6, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className='bg-gray-900 text-white text-[10px] px-2 py-1 rounded shadow-md font-mono'
            >
              Border: dashed #ccc
            </motion.div>
          </div>
        </div>

        {/* CTA Button */}
        <div className='relative group w-1/2 h-6 bg-blue-200 rounded hover:outline hover:outline-2 hover:outline-blue-500'>
          <div className='absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 z-999 group-hover:opacity-100 transition-all duration-300 pointer-events-none'>
            <motion.div
              initial={{ y: 6, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className='bg-gray-900 text-white text-[10px] px-2 py-1 rounded shadow-md font-mono'
            >
              Width: 50%
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EnhancedFigmaPreview;
