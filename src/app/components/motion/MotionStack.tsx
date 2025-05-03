
'use client';

import { motion } from 'framer-motion';
import { FC, PropsWithChildren } from 'react';

interface MotionStackProps {
  delay?: number;
  stagger?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Wraps children in a motion.div with staggered reveal animation
 */
const MotionStack: FC<PropsWithChildren<MotionStackProps>> = ({
  delay = 0.2,
  stagger = 0.1,
  className = '',
  as: Component = 'div',
  children,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionStack;
