'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import RevealText from '../motion/RevealText';
import MotionSection from '../motion/MotionSection';
import { Eye, Zap, Handshake, Target, Sparkles } from 'lucide-react';

const items = [
  'Every great product starts as a sketch — a scribble — a spark.',
  'We’ve helped visionaries turn those sparks into funded, scalable products.',
  'From founder decks to real launchable MVPs, we’ve been the force behind 0 → 1.',
  'We don’t just build software. We bring ideas to life with clarity and craft.',
];

const pillars = [
  {
    title: 'Clarity Over Complexity',
    text: 'We cut through the noise to focus on what truly matters for launch.',
    icon: Eye,
  },
  {
    title: 'Speed Meets Substance',
    text: 'We ship fast — with structure. Every build is scalable and fundable.',
    icon: Zap,
  },
  {
    title: 'Partners, Not Vendors',
    text: 'We think with you, shape product with you, and build alongside you.',
    icon: Handshake,
  },
  {
    title: 'Outcomes, Not Outputs',
    text: 'We align every line of code to what moves the needle.',
    icon: Target,
  },
  {
    title: 'Craft Is a Competitive Edge',
    text: 'Great software is not just usable — it’s unforgettable.',
    icon: Sparkles,
  },
];

const AboutUsUnified: FC = () => {
  return (
    <MotionSection
      id='about'
      className='relative overflow-hidden bg-white py-32 px-6 md:px-10'
    >
      {/* ⬇️ Flipped Animated Diagonal SVG Background */}
      <motion.svg
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
          },
        }}
        className='absolute bottom-0 left-0 w-full h-[100dvh] z-0 pointer-events-none'
        viewBox='0 0 100 100'
        preserveAspectRatio='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g transform='scale(-1,1) translate(-100, 0)'>
          <motion.polygon
            points='0,0 0,100 100,100'
            fill='var(--accent)'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />
          <motion.polygon
            points='0,0 0,80 100,100'
            fill='white'
            opacity='0.1'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          />
        </g>
      </motion.svg>

      {/* ⬅️ Flipped Horizontally (X-Axis) */}
      <motion.svg
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
          },
        }}
        className='absolute bottom-0 left-0 w-full h-[100dvh] z-0 pointer-events-none'
        viewBox='0 0 100 100'
        preserveAspectRatio='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        {/* Flip across X axis with translate to re-align */}
        <g transform='scale(-1, 1) translate(-100, 0)'>
          <motion.polygon
            points='0,0 0,100 100,100'
            fill='var(--accent)'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />
          <motion.polygon
            points='0,0 0,80 100,100'
            fill='white'
            opacity='0.1'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          />
        </g>
      </motion.svg>

      {/* ⬅️ Flipped Horizontally (X-Axis) */}
      <motion.svg
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
          },
        }}
        className='absolute bottom-0 left-0 w-full h-[100dvh] z-0 pointer-events-none'
        viewBox='0 0 100 100'
        preserveAspectRatio='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        {/* Flip across X axis with translate to re-align */}
        <g>
          {/* Primary Triangle (Accent) */}
          <motion.polygon
            points='0,0 0,100 100,100'
            fill='var(--accent)'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />

          {/* Secondary Accent Overlay */}
          <motion.polygon
            points='0,0 0,80 100,100'
            fill='white'
            opacity='0.1'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          />

          {/* Tertiary Small Triangle */}
          <motion.polygon
            points='0,0 0,40 60,100'
            fill='white'
            opacity='0.2'
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
          />
        </g>
      </motion.svg>

      {/* Why We Exist */}
      <motion.div
        className='relative text-center max-w-4xl mx-auto mb-32'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className='text-sm uppercase tracking-wider text-blue-600 mb-2 font-medium'>
          How we got here
        </p>

        <h2 className='text-4xl sm:text-5xl font-extrabold text-[#030b1a] mb-4 relative z-10'>
          Why We Exist
          <span className='block mt-2 w-12 h-1 mx-auto bg-[var(--accent)] rounded-full'></span>
        </h2>

        <RevealText className='text-lg sm:text-xl text-gray-600 max-w-xl mx-auto'>
          We close the gap between idea and product.
        </RevealText>
      </motion.div>

      {/* Narrative Paragraphs + Pull Quote */}
      <motion.div
        className='relative max-w-4xl mx-auto text-center mb-20 px-4'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        <div className='mt-12 space-y-8 text-lg text-gray-700'>
          {items.map((text, i) => (
            <RevealText
              key={i}
              className='leading-relaxed tracking-wide max-w-3xl mx-auto'
            >
              {text}
            </RevealText>
          ))}
        </div>

        <motion.blockquote
          className='relative z-10 mt-16 mx-auto max-w-2xl text-lg text-[#030b1a] bg-white/90 border-l-4 border-blue-500 rounded-xl shadow-xl italic p-6 sm:p-8 backdrop-blur-md'
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className='tracking-wide text-base'>
            We exist to turn raw ideas into software that wins hearts, closes
            deals, and scales fast. We’ve seen what happens when great ideas
            never get the right launch. That’s why we care so deeply about
            getting it right from day one.
          </p>
          <div className='mt-4 text-sm font-medium text-gray-500 text-right'>
            – Frank
          </div>
        </motion.blockquote>

        {/* Radial Background Glow */}
        <div className='absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[90%] bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1),transparent_80%)] pointer-events-none' />
      </motion.div>

      {/* Five Pillars */}

      <motion.div
        className='text-center max-w-4xl mx-auto mb-24 tracking-wide'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className='text-sm uppercase tracking-wider text-blue-600 mb-2 font-medium '>
          Development is better with us
        </p>
        <h2 className='text-4xl sm:text-5xl font-extrabold mb-4'>
          What We Believe
        </h2>
        <RevealText className='text-lg sm:text-xl text-gray-600 max-w-xl mx-auto'>
          These five principles guide every product we launch.
        </RevealText>
      </motion.div>

      <motion.div className='max-w-6xl mx-auto text-center mb-24'>
        <motion.div
          className='mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {pillars.map(({ title, text, icon: Icon }, i) => (
            <motion.div
              key={i}
              className='relative flex flex-col p-5 items-center text-center tracking-wide bg-white shadow-sm border border-gray-100 rounded-2xl hover:shadow-md hover:-translate-y-1 hover:ring-2 hover:ring-[var(--accent)] transition-all duration-300 backdrop-blur group'
              initial={{ opacity: 0, scale: 0.95, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className='absolute text-xs text-gray-400 font-mono top-2 right-3'>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className='p-3 bg-blue-50 rounded-full mb-5'>
                <Icon className='h-6 w-6 text-blue-700' />
              </div>
              <h3 className='text-md font-semibold text-[#030b1a] mb-2'>
                {title}
              </h3>
              <RevealText className='text-sm text-gray-600 leading-relaxed'>
                {text}
              </RevealText>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Founder Section */}
      <motion.div
        className='relative max-w-4xl mx-auto px-6 py-12 text-center border border-white/10 rounded-2xl shadow-lg bg-white/70 backdrop-blur-xl backdrop-saturate-150 -mb-24 tracking-wide'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className='mb-6 text-4xl font-bold text-[#030b1a]'>
          Who’s Behind ZeroTo<span className='text-[var(--accent)]'>One</span>?
        </h2>
        <p className='mb-6 max-w-2xl mx-auto text-lg text-gray-700'>
          I’m <strong>Frank Camp</strong>. I’ve spent the last decade helping
          founders turn fuzzy ideas into fundable software — fast. I’ve launched
          VC-backed startups, scaled B2B tools, and built products that got
          acquired.
        </p>
        <p className='mb-10 max-w-2xl mx-auto text-lg text-gray-700'>
          ZeroTo<span className='text-[var(--accent)]'>One</span> is the studio
          I wish I had when I started: fast, collaborative, and driven by craft.
        </p>
        <div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
          <div className='relative h-24 w-24 rounded-full overflow-hidden ring-2 ring-gray-200 shadow'>
            <Image
              src='/founder-avatar.jpg'
              alt='Frank Camp'
              fill
              className='object-cover'
            />
          </div>
          <div className='text-center text-sm text-gray-700 sm:text-left'>
            <p className='text-base font-semibold'>Frank Camp</p>
            <p>Founder & Technical Partner</p>
            <a
              href='https://www.linkedin.com/in/frankcamp'
              target='_blank'
              className='mt-1 inline-block text-sm text-blue-600 hover:underline'
            >
              Meet Frank on LinkedIn →
            </a>
          </div>
        </div>
        <p className='mt-8 text-sm text-gray-500'>
          U.S. based. Globally partnered. Always building what matters.
        </p>
      </motion.div>
    </MotionSection>
  );
};

export default AboutUsUnified;
