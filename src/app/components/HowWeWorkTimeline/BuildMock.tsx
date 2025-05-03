'use client';

import { motion } from 'framer-motion';
import WithShimmer from './WithShimmer';
import IDEMock from './IDEMock';

interface Props {
  loading?: boolean;
}

const BuildMock = ({ loading = false }: Props) => {
  return (
    <motion.div
      className='relative w-full rounded-xl border border-gray-800 bg-black p-4 font-mono text-sm text-green-400 shadow-inner tracking-wide ring-1 ring-gray-700 transition-all duration-300 hover:ring-[var(--accent)]'
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <WithShimmer loading={loading}>
        <IDEMock loading={loading} />
      </WithShimmer>
    </motion.div>
  );
};

export default BuildMock;
