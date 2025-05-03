'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Send } from 'lucide-react';
import Image from 'next/image';
import MotionCard from '../motion/MotionCard';

export default function ShareYourIdeaModal() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks, ${name}! We'll be in touch soon.`);
    setOpen(false);
  };

  return (
    <>
      {/* CTA Button */}
      <motion.button
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.03 }}
        className='inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-white bg-[var(--accent)] rounded-md shadow hover:bg-[var(--accent-hover)] transition'
      >
        <span>Share Your Idea</span>
        <Send className='h-4 w-4' />
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className='fixed inset-0 z-40 bg-black/50 backdrop-blur-sm'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal */}
            <motion.div
              className='fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={() => setOpen(false)}
            >
              <motion.div
                onClick={e => e.stopPropagation()}
                className='relative max-w-xl w-full p-6 sm:p-8 bg-white rounded-2xl shadow-2xl text-[#030b1a] overflow-y-auto max-h-[90vh]'
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 22 }}
              >
                {/* Close */}
                <button
                  onClick={() => setOpen(false)}
                  className='absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-lg'
                >
                  ✕
                </button>

                {/* Header */}
                <div className='flex items-center gap-4 mb-4'>
                  <div className='p-3 rounded-full bg-blue-600 text-white'>
                    <Send className='h-5 w-5' />
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-xl font-bold leading-tight'>
                      Let’s Talk About Your Idea
                    </h3>
                    <p className='text-sm text-gray-500'>
                      We love hearing new visions — and helping bring them to
                      life.
                    </p>
                  </div>
                </div>

                <hr className='my-4 border-gray-200' />

                {/* Avatar */}
                <div className='flex items-center gap-4 mb-6'>
                  <div className='h-16 w-16 sm:h-20 sm:w-20 relative rounded-full overflow-hidden'>
                    <Image
                      src='/founder-avatar.jpg'
                      alt='Founder'
                      fill
                      className='object-cover'
                    />
                  </div>
                  <p className='text-sm text-gray-600 leading-snug'>
                    Hi, I’m Frank — excited to learn what you’re building. Fill
                    in your details below and let’s start something great.
                  </p>
                </div>

                {/* Form */}
                <form
                  onSubmit={handleSubmit}
                  className='space-y-5 text-sm tracking-wide'
                >
                  {/* Input Fields */}
                  <div className='space-y-4'>
                    <Input
                      label='Name'
                      value={name}
                      onChange={setName}
                      type='text'
                    />
                    <Input
                      label='Email'
                      value={email}
                      onChange={setEmail}
                      type='email'
                    />
                    <Textarea
                      label='Message'
                      value={message}
                      onChange={setMessage}
                      rows={4}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type='submit'
                    className='w-full mt-4 inline-flex items-center justify-center gap-2 px-5 py-2 text-sm font-medium text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] rounded-md shadow-md transition'
                  >
                    Send
                    {message.length > 3 && (
                      <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [1, 0.6, 1] }}
                        transition={{ repeat: Infinity, duration: 1.4 }}
                      >
                        <Send className='h-4 w-4' />
                      </motion.div>
                    )}
                  </button>
                </form>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// Field components
const Input = ({
  label,
  value,
  onChange,
  type = 'text',
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) => (
  <div className='relative'>
    <input
      type={type}
      required
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={label}
      className='w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent)] text-[#030b1a] placeholder-gray-400'
    />
  </div>
);

const Textarea = ({
  label,
  value,
  onChange,
  rows = 4,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
}) => (
  <div className='relative'>
    <textarea
      required
      rows={rows}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={label}
      className='w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent)] text-[#030b1a] placeholder-gray-400'
    />
  </div>
);
