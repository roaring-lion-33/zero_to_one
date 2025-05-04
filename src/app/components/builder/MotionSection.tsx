// components/motion/MotionSection.tsx
'use client';

import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef } from 'react';

type MotionSectionProps = ComponentPropsWithoutRef<typeof motion.section>;

const MotionSection = forwardRef<HTMLElement, MotionSectionProps>(
  ({ children, ...rest }, ref) => {
    return (
      <motion.section
        {...rest}
        ref={ref}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.section>
    );
  }
);

MotionSection.displayName = 'MotionSection';

export default MotionSection;
