'use client';

import { FC, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type AnimatedDiagonalBackgroundProps = {
  accent?: string;
  className?: string;
};

const AnimatedDiagonalBackground: FC<AnimatedDiagonalBackgroundProps> = ({
  accent = 'var(--accent)',
  className = '',
}) => {
  const bgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: bgRef,
    offset: ['start end', 'end start'],
  });

  // Animate these based on scroll
  const polygonY = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const polygonOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.15]);

  return (
    <div ref={bgRef} className={`absolute inset-0 z-0 pointer-events-none ${className}`}>
      <motion.svg
        className='w-full h-full'
        viewBox='0 0 100 100'
        preserveAspectRatio='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        {/* Primary animated triangle */}
        <motion.polygon
          points='0,0 0,100 100,100'
          fill={accent}
          style={{
            y: polygonY,
            opacity: polygonOpacity,
          }}
        />
        {/* Faint overlay for depth */}
        <motion.polygon
          points='0,0 0,80 100,100'
          fill='white'
          style={{ opacity: overlayOpacity }}
        />
      </motion.svg>
    </div>
  );
};

export default AnimatedDiagonalBackground;
