
'use client';

import MotionStack from '@/components/motion/MotionStack';
import { fadeUpChild } from '@/animationConfig';
import { motion } from 'framer-motion';
import HeroSection from '@/components/sections/HeroSection';
import CallToActionSection from '@/components/sections/CallToActionSection';
import PricingSection from '@/components/sections/PricingSection';

export default function DebugSections() {
  return (
    <div className="space-y-24 p-10 bg-white">
      <MotionStack className="motion-stack-md">
        <motion.div variants={fadeUpChild}><HeroSection /></motion.div>
        <motion.div variants={fadeUpChild}><PricingSection /></motion.div>
        <motion.div variants={fadeUpChild}><CallToActionSection /></motion.div>
      </MotionStack>
    </div>
  );
}
