
'use client';

import { fadeUpChild, motionConfig } from '@/animationConfig';
import MotionStack from '@/components/motion/MotionStack';
import { motion } from 'framer-motion';

export default function AnimationPreview() {
  return (
    <div className="p-10 space-y-12">
      <h1 className="text-2xl font-bold">Animation QA Preview</h1>

      <MotionStack className="motion-stack-md">
        <motion.div variants={fadeUpChild} className="p-4 bg-gray-100 rounded">Stack Item 1</motion.div>
        <motion.div variants={fadeUpChild} className="p-4 bg-gray-100 rounded">Stack Item 2</motion.div>
        <motion.div variants={fadeUpChild} className="p-4 bg-gray-100 rounded">Stack Item 3</motion.div>
      </MotionStack>
    </div>
  );
}
