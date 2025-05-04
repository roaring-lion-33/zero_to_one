'use client';

import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import MotionSection from '../motion/MotionSection';
import RevealText from '../motion/RevealText';
import CaseStudyBadge from './CaseStudyBadge';
import {
  ClipboardList,
  ShieldCheck,
  TrendingUp,
  Briefcase,
  Home,
  Check,
  Shield,
  DollarSign,
  UploadCloud,
  RefreshCcw,
  Zap,
} from 'lucide-react';

const cards = [
  {
    icon: ClipboardList,
    title: 'Inspection SaaS',
    description:
      'Launched → Acquired by a major industry player within 14 months.',
    testimonial: {
      type: 'tweet',
      name: 'Rafael Mendoza',
      handle: '@rafaelm',
      role: 'Founder, Inspectly',
      avatar: 'https://i.pravatar.cc/60?img=21',
      text: 'The UI was slick, responsive, and deeply functional. The acquisition team literally referenced how polished it looked.',
    },
    badge: {
      label: 'Acquired',
      color: 'bg-green-100 text-green-800',
      icon: Check,
      tooltip: 'Exited via acquisition',
    },
    screenshots: [
      'https://images.unsplash.com/photo-1581090700227-4c4e1f44fc6c',
      'https://images.unsplash.com/photo-1588776814546-d40257c1bbd6',
    ],
    tags: ['SaaS', 'Mobile-first', 'Analytics'],
    timeline: [
      '✅ MVP in 6 weeks',
      '👥 500 active users',
      '🏷️ Acquired within 14 months',
    ],
  },
  {
    icon: Home,
    title: 'Real Estate Contract Platform',
    description:
      'Streamlined document workflows and e-signatures for agents and brokers.',
    testimonial: {
      type: 'regular',
      name: 'Dani Romero',
      role: 'CEO, HomebaseHQ',
      avatar: 'https://i.pravatar.cc/60?img=47',
      text: 'Our agents love it. We’ve never had this much positive feedback from a rollout.',
    },
    badge: {
      label: 'Launched',
      color: 'bg-indigo-100 text-indigo-800',
      icon: UploadCloud,
      tooltip: 'Built + shipped in production',
    },
    screenshots: [
      'https://images.unsplash.com/photo-1599423300746-b62533397364',
      'https://images.unsplash.com/photo-1599423300746-c94d5c3564b9',
    ],
    tags: ['PropTech', 'eSignatures', 'Workflow Automation'],
    timeline: [
      '📝 Contracts digitized',
      '📦 Launched in 45 days',
      '🔁 Ongoing feature sprints',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Funded Fintech',
    description:
      'Investor-ready MVP in 30 days, helped close $1.2M seed round.',
    testimonial: {
      type: 'tweet',
      name: 'Jason Yu',
      handle: '@jasonfintech',
      role: 'Co-founder, StackFlow',
      avatar: 'https://i.pravatar.cc/60?img=12',
      text: 'We landed our seed round with this build. The polish and performance spoke louder than our deck.',
    },
    badge: {
      label: 'Funded',
      color: 'bg-yellow-100 text-yellow-800',
      icon: DollarSign,
      tooltip: 'Led directly to seed round',
    },
    screenshots: [
      'https://images.unsplash.com/photo-1611974789856-8f6b0efb7078',
      'https://images.unsplash.com/photo-1647427026064-e1a9a0f01f1b',
    ],
    tags: ['Fintech', 'MVP', 'Investor Demo'],
    timeline: [
      '🚀 MVP in 30 days',
      '💰 $1.2M seed closed',
      '👥 Onboarded first 100 users',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'HIPAA-Compliant Health App',
    description:
      'Secure patient intake and reporting tool for specialty clinics — launched in under 8 weeks.',
    testimonial: {
      type: 'regular',
      name: 'Mira Stein',
      role: 'CTO, ClarityWell',
      avatar: 'https://i.pravatar.cc/60?img=39',
      text: 'I’ve built healthtech products for 10+ years. This was the fastest, most aligned team I’ve worked with.',
    },
    badge: {
      label: 'HIPAA',
      color: 'bg-blue-100 text-blue-800',
      icon: Shield,
      tooltip: 'Meets healthcare data compliance',
    },
    screenshots: [
      'https://images.unsplash.com/photo-1588774064964-688ad16e958d',
      'https://images.unsplash.com/photo-1588776814546-ec7e1c1c1c1c',
    ],
    tags: ['Healthtech', 'HIPAA', 'Security'],
    timeline: [
      '🔐 HIPAA standards met',
      '📋 Intake forms live',
      '⚙️ Production in 8 weeks',
    ],
  },
  {
    icon: Briefcase,
    title: 'Freelancer CRM',
    description:
      'End-to-end client tracking, payments, and project workflow for independent designers.',
    testimonial: {
      type: 'tweet',
      name: 'Chloe Reyes',
      handle: '@chloedesigns',
      role: 'Founder, SoloSuite',
      avatar: 'https://i.pravatar.cc/60?img=9',
      text: 'It’s my daily HQ now. I never thought “simple and powerful” could exist until this build.',
    },
    badge: {
      label: 'Bootstrapped',
      color: 'bg-gray-100 text-[#030b1a]',
      icon: Zap,
      tooltip: 'Launched with no external funding',
    },
    screenshots: [
      'https://images.unsplash.com/photo-1612832020834-518abfefb9d4',
      'https://images.unsplash.com/photo-1611175694983-d3a7ba80c9d2',
    ],
    tags: ['CRM', 'Bootstrapped', 'Designers'],
    timeline: [
      '🧾 Payment flow tested',
      '📈 Launched to beta group',
      '💬 User feedback integrated',
    ],
  },
  {
    icon: ClipboardList,
    title: 'Regulatory Compliance Tracker',
    description:
      'Helped a B2B SaaS platform modernize their compliance reporting — full rebuild in 60 days.',
    testimonial: {
      type: 'regular',
      name: 'Amit Khurana',
      role: 'Product Manager, AuditMate',
      avatar: 'https://i.pravatar.cc/60?img=28',
      text: 'Our legacy tech was slowing us down. Now we’re ahead of roadmap and our customers noticed.',
    },
    badge: {
      label: 'Rebuilt',
      color: 'bg-purple-100 text-purple-800',
      icon: RefreshCcw,
      tooltip: 'Modernized legacy tooling',
    },
    screenshots: [
      'https://images.unsplash.com/photo-1591696205602-2f950c417cb9',
      'https://images.unsplash.com/photo-1555949963-aa79dcee981f',
    ],
    tags: ['SaaS', 'Compliance', 'Audit'],
    timeline: [
      '🛠 Rebuilt from scratch',
      '📊 Reporting live',
      '📦 Rollout complete',
    ],
  },
];

const PatchworkCaseStudyGrid: FC = () => {
  const [selectedCase, setSelectedCase] = useState<(typeof cards)[0] | null>(
    null
  );
  return (
    <MotionSection
      id='case-studies'
      className='relative px-4 py-16 bg-white sm:px-6 sm:py-20'
    >
      {/* Header */}
      <motion.div
        className='text-center max-w-4xl mx-auto mb-28'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className='text-sm uppercase tracking-wider text-blue-600 mb-2 font-medium'>
          Proof is in the feedback
        </p>
        <h2 className='text-4xl sm:text-5xl font-extrabold mb-4'>
          Case Studies
        </h2>
        <RevealText className='text-lg sm:text-xl text-gray-600 max-w-xl mx-auto tracking-wide'>
          From inspection platforms and healthcare tools to investor-backed
          fintech — we build what scales.
        </RevealText>
      </motion.div>

      <motion.div className='grid grid-cols-1 sm:grid-cols-6 sm:auto-rows-[minmax(140px,_1fr)] gap-4 w-full max-w-6xl mx-auto tracking-wide'>
        {cards.map(
          ({ title, description, icon: Icon, badge, testimonial }, i) => (
            <motion.div
              key={`card-${i}`}
              className={`relative group z-20 flex flex-col items-start p-4 rounded-xl bg-gray-50 shadow-md ring-1 ring-gray-200 hover:shadow-lg transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]
            ${
              i % 6 === 0
                ? 'sm:col-span-3 sm:row-span-2'
                : i % 6 === 1
                ? 'sm:col-span-3'
                : i % 6 === 2
                ? 'sm:col-span-2 sm:row-span-2'
                : i % 6 === 3
                ? 'sm:col-span-4'
                : i % 6 === 4
                ? 'sm:col-span-2'
                : 'sm:col-span-3'
            }`}
            >
              <div className='absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-neutral-500 rounded-xl' />

              {badge && (
                <CaseStudyBadge
                  label={badge.label}
                  icon={badge.icon}
                  color={badge.color}
                  tooltip={badge.tooltip}
                  delay={i * 0.08}
                />
              )}

              <div className='mb-2 text-[#030b1a]'>
                <Icon className='h-5 w-5 sm:h-6 sm:w-6' />
              </div>
              <h3 className='mb-1 text-sm font-semibold sm:text-base text-[#030b1a]'>
                {title}
              </h3>
              <RevealText className='text-xs text-gray-700 leading-snug text-left sm:text-sm'>
                {description}
              </RevealText>

              {testimonial && (
                <div
                  className={`mt-3 w-full relative z-10 rounded-lg border border-gray-200 bg-white shadow-sm px-4 py-3 transition-all duration-300 ${
                    testimonial.type === 'tweet'
                      ? 'hover:bg-gray-50 border-l-4 border-blue-500'
                      : ''
                  }`}
                >
                  {testimonial.type === 'tweet' ? (
                    <>
                      <div className='flex items-center gap-3 mb-2'>
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className='w-9 h-9 rounded-full object-cover'
                        />
                        <div className='leading-tight'>
                          <p className='text-sm font-semibold text-gray-900'>
                            {testimonial.name}
                          </p>
                          <p className='text-xs text-gray-500'>
                            <span className='text-blue-600'>
                              {testimonial.handle}
                            </span>{' '}
                            <span className='text-gray-400'>•</span>{' '}
                            {testimonial.role}
                          </p>
                        </div>
                        <svg
                          aria-hidden='true'
                          viewBox='0 0 24 24'
                          fill='currentColor'
                          className='ml-auto w-4 h-4 text-blue-500'
                        >
                          <path d='M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.38c-.84.5-1.77.87-2.76 1.06A4.26 4.26 0 0015.5 4c-2.37 0-4.3 1.93-4.3 4.3 0 .34.04.67.11.98-3.57-.18-6.74-1.89-8.86-4.5-.37.63-.59 1.37-.59 2.15 0 1.48.75 2.78 1.9 3.54a4.25 4.25 0 01-1.94-.54v.05c0 2.07 1.48 3.8 3.45 4.2-.36.1-.73.15-1.12.15-.27 0-.54-.03-.8-.07.54 1.7 2.1 2.94 3.95 2.97A8.56 8.56 0 013 18.57a12.07 12.07 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2l-.01-.56A8.73 8.73 0 0024 4.59a8.51 8.51 0 01-2.54.7z' />
                        </svg>
                      </div>
                      <RevealText className='text-sm text-gray-800 leading-snug'>
                        {testimonial.text}
                      </RevealText>
                      <div className='mt-3 flex items-center gap-3 text-gray-400 text-xs font-medium'>
                        <span>💬 Reply</span>
                        <span>🔁 Repost</span>
                        <span>❤️ Like</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className='flex items-center gap-3 mb-2'>
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className='w-9 h-9 rounded-full object-cover'
                        />
                        <div className='leading-tight'>
                          <p className='text-sm font-semibold text-gray-900'>
                            {testimonial.name}
                          </p>
                          <p className='text-xs text-gray-500'>
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <p className='text-sm mt-1 text-gray-700 leading-snug italic'>
                        “{testimonial.text}”
                      </p>
                    </>
                  )}
                  <button
                    onClick={() => setSelectedCase(cards[i])}
                    className='mt-3 text-xs text-blue-600 hover:underline font-medium'
                  >
                    Learn more →
                  </button>
                </div>
              )}
            </motion.div>
          )
        )}
      </motion.div>

      {selectedCase && (
        <motion.div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 tracking-wide'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedCase(null)}
        >
          <motion.div
            className='bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-w-3xl w-full relative overflow-y-auto max-h-[90vh] text-[#030b1a]'
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 22 }}
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCase(null)}
              className='absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-lg'
            >
              ✕
            </button>

            {/* Header */}
            <div className='flex items-center gap-4 mb-4'>
              <div className='p-3 rounded-full bg-blue-600 text-white shrink-0'>
                <selectedCase.icon className='h-6 w-6' />
              </div>
              <div className='flex-1'>
                <h3 className='text-2xl font-bold leading-tight'>
                  {selectedCase.title}
                </h3>
                <p className='text-sm text-gray-500'>
                  {selectedCase.description}
                </p>
              </div>
              {selectedCase.badge && (
                <div
                  className={`text-xs px-3 py-1 rounded-full font-medium shadow-sm ${selectedCase.badge.color}`}
                >
                  {selectedCase.badge.label}
                </div>
              )}
            </div>

            <hr className='my-4 border-gray-200' />

            {/* Tags */}
            {selectedCase.tags?.length > 0 && (
              <div className='mb-6'>
                <p className='text-xs font-semibold text-gray-500 mb-1'>Tags</p>
                <div className='flex flex-wrap gap-2'>
                  {selectedCase.tags.map(tag => (
                    <span
                      key={tag}
                      className='text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Timeline */}
            {selectedCase.timeline?.length > 0 && (
              <div className='mb-6'>
                <p className='text-xs font-semibold text-gray-500 mb-1'>
                  Timeline
                </p>
                <ul className='list-disc ml-5 text-sm text-gray-700 space-y-1'>
                  {selectedCase.timeline.map((event, i) => (
                    <li key={i}>{event}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Screenshots */}
            {selectedCase.screenshots?.length > 0 ? (
              <div className='mb-6'>
                <p className='text-xs font-semibold text-gray-500 mb-1'>
                  Screenshots
                </p>
                <div className='grid grid-cols-2 gap-3'>
                  {selectedCase.screenshots.map((src, i) => (
                    <div
                      key={i}
                      className='rounded-md border border-gray-200 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center h-40 sm:h-48 text-xs text-gray-400 font-medium italic'
                    >
                      <span>Placeholder {i + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {/* Testimonial */}
            {selectedCase.testimonial && (
              <div className='bg-gray-50 p-5 rounded-xl border border-gray-100 text-sm shadow-inner'>
                <p className='text-sm font-medium text-gray-700 mb-2'>
                  Client says:
                </p>
                <blockquote className='italic text-gray-800 border-l-2 border-blue-300 pl-4'>
                  “{selectedCase.testimonial.text}”
                </blockquote>
                <div className='mt-3 text-xs text-gray-500'>
                  — {selectedCase.testimonial.name},{' '}
                  {selectedCase.testimonial.role}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </MotionSection>
  );
};

export default PatchworkCaseStudyGrid;
