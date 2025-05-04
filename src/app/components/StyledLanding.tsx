'use client';

import FloatingSectionNav from './navigation/FloatingSectionNav';
import { HowWeWorkTimeline, CaseStudySection } from './old';
import {
  HeroSection,
  CallToActionSection,
  DiscoverSection,
  DesignSection,
  BuildSection,
  LaunchSection,
  AboutUsUnified,
} from './sections';

export default function StyledLanding() {
  return (
    <main className='bg-white text-[#030b1a] font-sans antialiased scroll-smooth'>
      <FloatingSectionNav />

      <section id='hero'>
        <HeroSection />
      </section>

      <section id='process'>
        <HowWeWorkTimeline />
      </section>

      <section id='discover'>
        <DiscoverSection />
      </section>

      <section id='design'>
        <DesignSection />
      </section>

      <section id='build'>
        <BuildSection />
      </section>

      <section id='launch'>
        <LaunchSection />
      </section>

      <section id='proof'>
        <CaseStudySection />
      </section>

      <section id='about'>
        <AboutUsUnified />
      </section>

      <section id='contact'>
        <CallToActionSection />
      </section>
    </main>
  );
}
