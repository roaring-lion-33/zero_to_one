'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WithShimmer from './WithShimmer';
import { MonitorSmartphone, TabletSmartphone, Monitor } from 'lucide-react';

const DesignMock = ({ loading = false }: { loading?: boolean }) => {
  const [view, setView] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [modalOpen, setModalOpen] = useState(false);
  const [idle, setIdle] = useState(false);
  const lastInteractionRef = useRef(Date.now());

  useEffect(() => {
    let idleTimeout: ReturnType<typeof setTimeout>;

    const resetIdle = () => {
      lastInteractionRef.current = Date.now();
      setIdle(false);
      clearTimeout(idleTimeout);
      idleTimeout = setTimeout(() => {
        if (Date.now() - lastInteractionRef.current >= 5000) {
          setIdle(true);
        }
      }, 5000);
    };

    const handleScroll = () => resetIdle();
    const handleClick = () => resetIdle();

    resetIdle();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleClick);
      clearTimeout(idleTimeout);
    };
  }, []);

  const cardShake = idle ? 'animate-wiggle' : '';

  const viewIcons = {
    mobile: <MonitorSmartphone className='w-4 h-4' />,
    tablet: <TabletSmartphone className='w-4 h-4' />,
    desktop: <Monitor className='w-4 h-4' />,
  };

  return (
    <motion.div
      className='relative w-full rounded-xl border border-gray-200 bg-white p-6 shadow-lg ring-1 ring-inset ring-gray-100 transition-shadow duration-300 hover:shadow-2xl hover:ring-[var(--accent)]'
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <WithShimmer loading={loading}>
        {/* Top Bar */}
        <div className='mb-4 flex items-center justify-between tracking-wide'>
          {/* Chrome buttons */}
          <div className='flex gap-2'>
            <span className='w-3 h-3 rounded-full bg-red-400 shadow-sm' />
            <span className='w-3 h-3 rounded-full bg-yellow-400 shadow-sm' />
            <span className='w-3 h-3 rounded-full bg-green-400 shadow-sm' />
          </div>

          {/* View switch */}
          <div className='flex gap-2 text-xs'>
            {(['mobile', 'tablet', 'desktop'] as const).map(mode => (
              <button
                key={mode}
                onClick={() => {
                  setView(mode);
                  setIdle(false);
                }}
                className={`flex items-center gap-1 px-2 py-1 rounded transition-all ${
                  view === mode
                    ? 'bg-[var(--accent)] text-white shadow'
                    : 'hover:bg-gray-100'
                }`}
              >
                {viewIcons[mode]}
                {mode}
              </button>
            ))}
          </div>
        </div>

        {/* Title */}
        <div className='text-sm font-medium mb-4 tracking-wide'>
          Responsive UI Preview
        </div>

        {/* View Layout */}
        <div className='text-xs tracking-wide'>
          {view === 'mobile' && (
            <motion.div layout className='space-y-4'>
              <div className='h-10 rounded bg-gray-200 flex items-center justify-center'>
                Navbar
              </div>
              <div className='h-12 rounded bg-gray-100 flex items-center justify-center'>
                Sidebar
              </div>
              {['Card A', 'Card B', 'Card C'].map(label => (
                <motion.div
                  key={label}
                  layout
                  whileHover={{ scale: 1.02 }}
                  className={`h-16 bg-white border rounded shadow-sm flex items-center justify-center transition cursor-pointer ${cardShake}`}
                >
                  {label}
                </motion.div>
              ))}
            </motion.div>
          )}

          {view === 'tablet' && (
            <motion.div layout className='grid grid-cols-2 gap-4'>
              <div className='col-span-2 h-10 bg-gray-200 rounded flex items-center justify-center'>
                Navbar
              </div>
              <div className='col-span-2 h-12 bg-gray-100 rounded flex items-center justify-center'>
                Sidebar
              </div>
              {['Card A', 'Card B', 'Card C', 'Card D'].map(label => (
                <motion.div
                  key={label}
                  layout
                  onClick={() => setModalOpen(true)}
                  whileTap={{ scale: 0.96 }}
                  className={`cursor-pointer h-16 bg-white border rounded shadow-sm flex items-center justify-center hover:bg-gray-50 transition ${cardShake}`}
                >
                  {label}
                </motion.div>
              ))}
            </motion.div>
          )}

          {view === 'desktop' && (
            <motion.div layout className='grid grid-cols-5 gap-4'>
              <div className='col-span-1 h-48 bg-gray-100 rounded flex items-center justify-center'>
                Sidebar
              </div>
              <div className='col-span-4 space-y-3'>
                <div className='h-10 bg-gray-200 rounded flex items-center justify-center'>
                  Navbar
                </div>
                <div className='grid grid-cols-2 gap-3'>
                  {['Card A', 'Card B', 'Card C', 'Card D'].map(label => (
                    <motion.div
                      key={label}
                      layout
                      onClick={() => setModalOpen(true)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className={`cursor-pointer h-16 bg-white border rounded shadow-sm flex items-center justify-center hover:bg-gray-50 transition ${cardShake}`}
                    >
                      {label}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </WithShimmer>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className='fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className='bg-white text-black rounded-xl p-6 w-full max-w-sm shadow-xl relative'
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            >
              <h3 className='text-lg font-semibold mb-2'>Interactive Card</h3>
              <p className='text-sm mb-4'>
                You clicked a card. This could show more details, a component
                preview, or an inline form.
              </p>
              <button
                onClick={() => setModalOpen(false)}
                className='mt-2 px-4 py-2 text-sm bg-[var(--accent)] text-white rounded hover:bg-[var(--accent-hover)] transition'
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default DesignMock;
