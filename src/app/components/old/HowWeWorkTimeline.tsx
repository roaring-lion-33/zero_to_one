'use client';

import { useState, useEffect, FC, useRef, useCallback } from 'react';
import { motion, useTransform, useScroll, Variants } from 'framer-motion';
import MotionSection from '../motion/MotionSection';
import RevealText from '../motion/RevealText';
import DiscoverMock from '../HowWeWorkTimeline/DiscoverMock';
import DesignMock from '../HowWeWorkTimeline/DesignMock';
import BuildMock from '../HowWeWorkTimeline/BuildMock';
import LaunchMock from '../HowWeWorkTimeline/LaunchMock';
import TimelineProgressNav from '../HowWeWorkTimeline/TimelineProgressNav';
import TimelineMobileNav from '../HowWeWorkTimeline/TimelineMobileNav';
import { Lightbulb, Ruler, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    id: 1,
    week: 'Week 1 – 2',
    title: '01. Discover',
    text: 'We turn fuzzy ideas into focused, fundable product plans.',
    bullets: [
      'Align on vision, goals, and user needs',
      'Define your MVP scope — what matters, what doesn’t',
      'Map technical feasibility and risk factors',
      'Prioritize based on customer impact',
      'Create a rapid product brief',
    ],
  },
  {
    id: 2,
    week: 'Week 3 – 4',
    title: '02. Design',
    text: 'We craft interfaces that convert, onboard, and impress.',
    bullets: [
      'Clickable prototype or design system',
      'Clarity, usability, and conversion flows',
      'Brand application or brand creation',
      'Responsive, dev-ready UI',
      'Validate key screens before build',
    ],
  },
  {
    id: 3,
    week: 'Week 5 – 6',
    title: '03. Build',
    text: 'We engineer the real thing — fast, scalable, and bulletproof.',
    bullets: [
      'Full-stack foundation (Rails, React, or both)',
      'Auth, roles, Stripe, dashboards, emails',
      'Real workflows: forms, filters, CRUD logic',
      'Testing, CI/CD, and staging',
      'Gather early feedback from users',
    ],
  },
  {
    id: 4,
    week: 'Week 7 – 8',
    title: '04. Launch',
    text: 'We ship it. Then help you pitch, onboard, and grow.',
    bullets: [
      'Final QA and visual polish',
      'Public share links, tokens, portals',
      'Branded PDFs and transactional emails',
      'Domain setup and deployment',
      'Launch, onboard, and pitch with confidence',
    ],
  },
];

const detailedDescriptions: Record<number, string[]> = {
  1: [
    'Uncover what truly matters to your users and define the product’s north star before writing a single line of code.',
    'We ruthlessly prioritize: what goes in, what gets cut, and what brings you traction fastest.',
    'We assess edge cases, legacy dependencies, and integration hurdles up front — no surprises later.',
    'Every feature we scope ties directly to user value or strategic momentum.',
    'You walk away with a founder-ready summary of goals, users, tech, and next steps.',
  ],
  2: [
    'You’ll test-drive your product before it’s built — with a high-fidelity prototype that feels real.',
    'We obsess over how users land, move, act, and stay. Every screen has a job.',
    'Don’t have a brand yet? We’ll shape one. Already have one? We’ll respect and elevate it.',
    'Our designs are production-ready — with layout, spacing, and state logic all accounted for.',
    'We test, tweak, and refine screens before we build — saving time and cost in dev.',
  ],
  3: [
    'We use modern, proven tech — Rails, React, Tailwind — and structure everything for scale.',
    'We ship real features, not just placeholders. Login, payments, and admin all included.',
    'Your product works out of the box — from create/edit/delete to custom workflows.',
    'Every build includes automated tests, CI pipelines, and a staging environment for demos.',
    'We build feedback loops into the process — so you don’t launch blind.',
  ],
  4: [
    'We comb through every detail — pixels, bugs, loading states — to make your product shine.',
    'We give you tools to share safely: passwordless access, preview tokens, and customer-facing views.',
    'Export branded reports, invoices, or receipts — and send polished onboarding emails automatically.',
    'We configure your custom domains, SSL, DNS, and get you 100% live.',
    'You’ll leave with a real product, real users, and real momentum — ready to demo, onboard, or pitch.',
  ],
};
const iconMap = {
  1: Lightbulb,
  2: Ruler,
  3: Code2,
  4: Rocket,
};

const HowWeWorkTimeline: FC = () => {
  const [view] = useState<'simple' | 'visual'>('visual');
  const [loading, setLoading] = useState(false);
  const [visibleStep, setVisibleStep] = useState<number | null>(null);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);
  const { scrollY } = useScroll();
  const iconY = useTransform(scrollY, [0, 400], [0, 0]);
  const [activeBullet, setActiveBullet] = useState<
    Record<number, number | null>
  >({});

  useEffect(() => {
    if (view === 'visual') {
      setLoading(true);
      const timeout = setTimeout(() => setLoading(false), 1000);
      return () => clearTimeout(timeout);
    }
  }, [view]);

  const scrollToStep = (id: number) => {
    document
      .getElementById(`step-${id}`)
      ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const renderMockUI = useCallback(
    (id: number) => {
      const map = {
        1: <DiscoverMock loading={loading} />,
        2: <DesignMock loading={loading} />,
        3: <BuildMock loading={loading} />,
        4: <LaunchMock loading={loading} />,
      };
      return map[id as keyof typeof map] ?? null;
    },
    [loading]
  );

  useEffect(() => {
    let lastSet = 0;
    const observer = new IntersectionObserver(
      entries => {
        const now = Date.now();
        if (now - lastSet > 200) {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              const index = stepRefs.current.findIndex(
                el => el === entry.target
              );
              if (index !== -1) {
                setVisibleStep(steps[index].id);
                lastSet = now;
              }
              break;
            }
          }
        }
      },
      { threshold: 0.4 }
    );

    // Attach observers
    stepRefs.current.forEach(el => el && observer.observe(el));

    return () => {
      stepRefs.current.forEach(el => el && observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24, skewY: 2 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      skewY: 0,
      transition: { duration: 0.6, delay: i * 0.15 },
    }),
  };

  return (
    <MotionSection
      id='how-we-work'
      className='relative px-6 py-20 sm:py-24 mt-12 z-10 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.5)_30%,_transparent_100%)]'
    >
      <div className='mx-auto w-full sm:w-2/3'>
        {/* Section Header */}
        <motion.div
          className='text-center max-w-3xl mx-auto mb-20'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className='text-sm uppercase tracking-wider text-blue-600 mb-2 font-medium'>
            Building Blocks
          </p>
          <h2 className='text-4xl sm:text-5xl font-extrabold text-[#030b1a] mb-4'>
            How We Work
          </h2>
          <RevealText className='text-lg sm:text-xl text-gray-600 max-w-xl mx-auto'>
            The steps we take to perfect your idea.
          </RevealText>
        </motion.div>

        <div className='grid grid-cols-1 gap-12 md:grid-cols-[200px_1fr] w-full mx-auto'>
          <TimelineProgressNav
            steps={steps}
            visibleStep={visibleStep}
            onScrollToStep={scrollToStep}
          />
          <TimelineMobileNav
            steps={steps}
            visibleStep={visibleStep}
            onScrollToStep={scrollToStep}
          />

          <div className='relative space-y-32'>
            {steps.map((step, i) => {
              const Icon = iconMap[step.id as keyof typeof iconMap];
              const isRight = i % 2 !== 0;

              return (
                <section
                  id={`step-${step.id}`}
                  ref={el => {
                    stepRefs.current[i] = el;
                  }}
                  className='scroll-mt-32 relative z-10'
                  key={step.id}
                >
                  <div
                    className={`flex flex-col md:flex-row items-start gap-6 ${
                      isRight ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    <motion.div
                      custom={i}
                      variants={fadeUp}
                      initial='hidden'
                      whileInView='visible'
                      viewport={{ once: true }}
                      className={`w-full md:w-2/3`}
                    >
                      <div
                        id={`step-card-${step.id}`}
                        className={`group bg-white backdrop-blur-2xl rounded-xl shadow-lg p-6 transform-gpu transition-transform duration-300 hover:shadow-2xl hover:ring-2
    ${
      step.id === 1
        ? 'border-indigo-500 hover:ring-indigo-300/50'
        : step.id === 2
        ? 'border-purple-500 hover:ring-purple-300/50'
        : step.id === 3
        ? 'border-blue-500 hover:ring-blue-300/50'
        : 'border-green-500 hover:ring-green-300/50'
    }
    ${isRight ? 'ml-4 text-right border-r-4' : 'mr-4 text-left border-l-4'}
    animate-shadow-glow`}
                      >
                        <div
                          className={`flex items-center gap-3 mb-4 ${
                            isRight ? 'justify-end' : 'justify-start'
                          }`}
                        >
                          <motion.span
                            style={{ y: iconY }}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              type: 'spring',
                              stiffness: 200,
                              damping: 12,
                            }}
                            className={`relative inline-flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition-transform duration-300 ${
                              step.id === 1
                                ? 'bg-indigo-600'
                                : step.id === 2
                                ? 'bg-purple-600'
                                : step.id === 3
                                ? 'bg-blue-600'
                                : 'bg-green-600'
                            } text-white`}
                          >
                            <Icon className='h-6 w-6 relative z-10' />
                            <motion.div
                              className='absolute inset-0 rounded-full blur-sm opacity-50 z-0'
                              animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.5, 0.8, 0.5],
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                              style={{
                                backgroundColor:
                                  step.id === 1
                                    ? '#6366f1'
                                    : step.id === 2
                                    ? '#8b5cf6'
                                    : step.id === 3
                                    ? '#3b82f6'
                                    : '#10b981',
                              }}
                            />
                          </motion.span>

                          <h3 className='text-xl font-semibold text-[#030b1a]'>
                            {step.title}
                          </h3>
                        </div>
                        <h4
                          className={`text-sm font-medium mb-1 ${
                            step.id === 1
                              ? 'text-indigo-500'
                              : step.id === 2
                              ? 'text-purple-500'
                              : step.id === 3
                              ? 'text-blue-500'
                              : step.id === 4
                              ? 'text-green-500'
                              : ''
                          }`}
                        >
                          {step.week}
                        </h4>
                        <RevealText className='mb-4 text-base pb-2'>
                          {step.text}
                        </RevealText>
                        {step.bullets.map((text, index) => (
                          <motion.div
                            key={index}
                            className='relative mb-4 cursor-pointer group mt-2'
                            onClick={() =>
                              setActiveBullet(prev => ({
                                ...prev,
                                [step.id]:
                                  prev[step.id] === index ? null : index,
                              }))
                            }
                          >
                            <motion.div
                              className={`absolute top-1 w-3 h-3 rounded-full shadow-lg ${
                                step.id === 1
                                  ? 'bg-indigo-500'
                                  : step.id === 2
                                  ? 'bg-purple-500'
                                  : step.id === 3
                                  ? 'bg-blue-500'
                                  : 'bg-green-500'
                              } ${
                                isRight ? '-right-[0.6rem]' : '-left-[0.6rem]'
                              }`}
                              animate={{
                                y: [0, -1.5, 0],
                                opacity: [1, 0.6, 1],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: index * 0.3,
                              }}
                            />
                            <RevealText
                              className={`text-sm leading-snug ${
                                isRight ? 'mr-4' : 'ml-4'
                              }`}
                            >
                              {text}
                            </RevealText>

                            {activeBullet[step.id] === index && (
                              <motion.div
                                className={`absolute z-50 ${
                                  isRight ? 'right-8' : 'left-8'
                                } top-0 w-80 bg-gray-50 border border-gray-200 rounded-lg shadow-xl overflow-hidden`}
                                initial={{ opacity: 0, y: -6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                transition={{ duration: 0.25, ease: 'easeOut' }}
                              >
                                <div className='px-4 py-3 text-sm text-gray-700 leading-snug tracking-wide space-y-2'>
                                  <p className='font-semibold text-[var(--accent)]'>
                                    {text}
                                  </p>
                                  <p className='text-gray-600'>
                                    {detailedDescriptions[step.id][index]}
                                  </p>
                                </div>
                              </motion.div>
                            )}
                          </motion.div>
                        ))}

                        {/* View More Link */}

                        {(() => {
                          const sectionKey = step.title
                            .toLowerCase()
                            .split(' ')[1];
                          return (
                            <a
                              href={`#${sectionKey}`}
                              className='inline-block mt-4 text-sm text-blue-600 hover:underline'
                              onClick={e => {
                                e.preventDefault();
                                const target = document.getElementById(
                                  `${sectionKey}`
                                );
                                if (target instanceof HTMLElement) {
                                  target.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start',
                                  });
                                }
                              }}
                            >
                              View More →
                            </a>
                          );
                        })()}
                      </div>
                    </motion.div>

                    {/* Thin Primary Line Connector */}
                    <motion.svg
                      className={`hidden md:block absolute top-[55%] ${
                        isRight ? 'left-[32%]' : 'left-[38%]'
                      } w-[20rem] h-4 z-[-1] opacity-40`}
                      viewBox='0 0 100 10'
                      fill='none'
                    >
                      <motion.line
                        x1='0'
                        y1='5'
                        x2='100'
                        y2='5'
                        stroke='var(--accent)'
                        strokeWidth='1.5'
                      />
                    </motion.svg>

                    <motion.div
                      initial='hidden'
                      whileInView='visible'
                      viewport={{ once: true }}
                      className='w-full md:w-1/2 md:mt-[25%]'
                    >
                      <div className='relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
                        {loading && (
                          <div className='absolute inset-0 blur-sm animate-pulse bg-white/60 z-10 rounded-xl' />
                        )}
                        {renderMockUI(step.id)}
                      </div>
                    </motion.div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
      <motion.svg
        className='hidden md:block absolute right-[25%] top-[20%] h-[24rem] w-4 z-0 opacity-40'
        viewBox='0 0 10 100'
        fill='none'
      >
        <motion.line
          x1='5'
          y1='0'
          x2='5'
          y2='100'
          stroke='var(--accent)'
          strokeWidth='1.5'
        />
      </motion.svg>
      <motion.svg
        className='hidden md:block absolute left-[40%] top-[45%] h-[15rem] w-4 z-0 opacity-40'
        viewBox='0 0 10 100'
        fill='none'
      >
        <motion.line
          x1='5'
          y1='0'
          x2='5'
          y2='100'
          stroke='var(--accent)'
          strokeWidth='1.5'
        />
      </motion.svg>

      <motion.svg
        className='hidden md:block absolute right-[25%] top-[70%] h-[15rem] w-4 z-0 opacity-40'
        viewBox='0 0 10 100'
        fill='none'
      >
        <motion.line
          x1='5'
          y1='0'
          x2='5'
          y2='100'
          stroke='var(--accent)'
          strokeWidth='1.5'
        />
      </motion.svg>
    </MotionSection>
  );
};

export default HowWeWorkTimeline;
