'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle,
  Loader2,
  Plus,
  Sparkles,
  Eye,
  EyeOff,
} from 'lucide-react';
import WithShimmer from './WithShimmer';

interface Props {
  loading?: boolean;
}

const DiscoverMock = ({ loading = false }: Props) => {
  const [notes, setNotes] = useState([
    { id: 1, text: 'Founder interview complete', done: true },
    { id: 2, text: 'Competitor analysis uploaded', done: true },
    { id: 3, text: 'Persona research: in progress', done: false },
  ]);
  const [input, setInput] = useState('');
  const [showCompleted, setShowCompleted] = useState(true);
  const [showToast, setShowToast] = useState(false);

  const handleAdd = () => {
    if (!input.trim()) return;
    const newNote = {
      id: Date.now(),
      text: input,
      done: false,
    };
    setNotes(prev => [...prev, newNote]);
    setInput('');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  return (
    <motion.div
      className='relative w-full rounded-xl border border-gray-200 bg-white p-6 shadow-sm ring-1 ring-inset ring-gray-100 transition-shadow duration-300 hover:shadow-xl hover:ring-[var(--accent)]'
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <WithShimmer loading={loading}>
        <motion.div
          className='mb-4 flex items-center justify-between text-sm font-bold text-gray-800 tracking-wide'
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <div className='flex items-center gap-2 tracking-wide'>
            <Sparkles className='h-4 w-4 text-[var(--accent)]' />
            Discovery Tracker
          </div>
          <button
            onClick={() => setShowCompleted(!showCompleted)}
            className='flex items-center gap-1 text-xs text-gray-500 hover:text-gray-800 transition tracking-wide'
          >
            {showCompleted ? (
              <>
                <EyeOff className='h-4 w-4' />
                Hide Completed
              </>
            ) : (
              <>
                <Eye className='h-4 w-4' />
                Show Completed
              </>
            )}
          </button>
        </motion.div>

        <ul className='space-y-3 text-sm tracking-wide'>
          <AnimatePresence initial={false}>
            {notes
              .filter(n => showCompleted || !n.done)
              .map(note => (
                <motion.li
                  key={note.id}
                  className={`flex items-center gap-2 tracking-wide ${
                    note.done
                      ? 'text-green-600'
                      : 'text-yellow-600 animate-pulse'
                  }`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {note.done ? (
                    <CheckCircle className='h-4 w-4' />
                  ) : (
                    <Loader2 className='h-4 w-4 animate-spin' />
                  )}
                  {note.text}
                </motion.li>
              ))}
          </AnimatePresence>
        </ul>

        {/* Note input */}
        <div className='mt-6 flex items-center gap-2 tracking-wide'>
          <input
            type='text'
            placeholder='Add discovery note...'
            value={input}
            onChange={e => setInput(e.target.value)}
            className='flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition placeholder-gray-400'
          />
          <button
            onClick={handleAdd}
            className='inline-flex items-center gap-1 rounded-md bg-[var(--accent)] px-4 py-2 text-sm text-white shadow-md hover:shadow-lg transition hover:bg-[var(--accent-hover)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent)]'
          >
            <Plus className='h-4 w-4' />
            Add
          </button>
        </div>
      </WithShimmer>

      {/* Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className='fixed top-6 left-1/2 z-50 -translate-x-1/2 rounded-md bg-green-600 px-5 py-2 text-sm font-medium text-white shadow-lg'
          >
            ✅ Note added!
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default DiscoverMock;
