'use client';

import { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import WithShimmer from './WithShimmer';
import {
  ArrowUpRight,
  ArrowDownRight,
  Rocket,
  PartyPopper,
} from 'lucide-react';

interface Props {
  loading?: boolean;
}

const LaunchMock = ({ loading = false }: Props) => {
  const users = 1284;
  const conversions = 47;
  const userGrowth = 5.2;
  const convGrowth = -1.3;

  return (
    <motion.div
      className='relative rounded-xl border border-gray-200 bg-white p-6 shadow-md w-full tracking-wide transition-all duration-300 hover:shadow-lg'
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: 'spring' }}
    >
      <WithShimmer loading={loading}>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className='mb-5 text-sm font-semibold text-gray-800 tracking-wide flex items-center gap-2'
        >
          📈 Launch Metrics
        </motion.div>

        {/* Metric Cards */}
        <motion.div
          className='grid grid-cols-2 gap-6 text-sm text-[#030b1a]'
          initial='hidden'
          animate='visible'
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {},
          }}
        >
          {[
            {
              label: 'Users',
              value: users.toLocaleString(),
              growth: userGrowth,
            },
            {
              label: 'MVP Conversions',
              value: `${conversions}%`,
              growth: convGrowth,
            },
          ].map(({ label, value, growth }, idx) => (
            <motion.div
              key={label}
              className='hover:bg-gray-50 transition rounded-md p-2'
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * idx }}
            >
              <div className='text-xs text-gray-500 mb-1'>{label}</div>
              <div className='flex items-center gap-2'>
                <div className='font-bold text-2xl'>{value}</div>
                <span
                  className={`text-xs flex items-center gap-0.5 ${
                    growth >= 0 ? 'text-green-600' : 'text-red-500'
                  }`}
                >
                  {growth >= 0 ? (
                    <ArrowUpRight className='h-3 w-3' />
                  ) : (
                    <ArrowDownRight className='h-3 w-3' />
                  )}
                  {Math.abs(growth)}%
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Progress Bar */}
        <div className='mt-6 tracking-wide'>
          <div className='mb-1 flex justify-between text-xs text-gray-500'>
            <span>Launch Progress</span>
            <span>80%</span>
          </div>
          <div className='h-3 w-full bg-gray-200 rounded-full overflow-hidden'>
            <motion.div
              className='h-full bg-gradient-to-r from-[var(--accent)] to-blue-500 rounded-full'
              initial={{ width: '0%' }}
              animate={{ width: '80%' }}
              transition={{ duration: 1.2 }}
            />
          </div>
        </div>

        {/* Milestone Badge */}
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className='mt-5 flex items-center justify-between bg-blue-50 text-blue-800 border border-blue-200 px-4 py-2 rounded-md text-xs shadow-sm tracking-wide relative overflow-hidden'
        >
          <div className='flex items-center gap-2'>
            <PartyPopper className='h-4 w-4' />
            <span>Next Milestone: V2 Beta (May 20)</span>
          </div>
          <span className='text-xs bg-blue-100 rounded-full px-2 py-0.5 font-medium'>
            Team Goal
          </span>

          {/* Pulse glow */}
          <motion.div
            className='absolute inset-0 rounded-md bg-blue-100 opacity-20 blur-md pointer-events-none'
            animate={{ opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Launch Status */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.3 }}
          className='mt-6 tracking-wide flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-600 to-blue-700 px-5 py-2 text-sm text-white shadow-md'
        >
          <Rocket className='h-4 w-4 animate-pulse' />
          <span>Live and scaling</span>
        </motion.div>
      </WithShimmer>
    </motion.div>
  );
};

export default LaunchMock;
