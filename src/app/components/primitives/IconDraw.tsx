'use client';

import { motion, DOMMotionComponents } from 'framer-motion';
import { isValidElement } from 'react';

const isMotionSVGTag = (tag: string): tag is keyof DOMMotionComponents => {
  return tag in motion;
};

const IconDraw = ({
  icon: Icon,
  delay = 0,
}: {
  icon: React.ComponentType<{ size: number; stroke: string }>;
  delay: number;
}) => {
  const iconElement: React.ReactElement<{ children?: React.ReactNode }> = (
    <Icon size={24} stroke='#030b1a' />
  );

  const children = isValidElement(iconElement)
    ? iconElement.props.children
    : [];

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className='mb-4'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, delay },
        },
      }}
    >
      <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke='#030b1a'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
        className='h-8 w-8'
      >
        {Array.isArray(children)
          ? children.map((child, i) => {
              const type = child.type;
              const El =
                typeof type === 'string' && isMotionSVGTag(type)
                  ? motion[type]
                  : type;

              const props =
                child && typeof child === 'object' && 'props' in child
                  ? child.props
                  : {};

              return (
                <El
                  key={i}
                  {...props}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    duration: 1.4,
                    ease: 'easeInOut',
                    delay,
                  }}
                />
              );
            })
          : null}
      </svg>
    </motion.div>
  );
};

export default IconDraw;
