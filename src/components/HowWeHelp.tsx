import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const TABS = [
  {
    id: '01',
    label: 'Get developers unstuck',
    title: 'Get developers unstuck',
    description:
      'We replace ticket-driven workflows with self-service developer platforms — your engineers ship without waiting on ops.',
    bullets: [
      'Self-service environments in minutes',
      'Standardized golden paths',
      'Embedded compliance guardrails',
    ],
  },
  {
    id: '02',
    label: 'Build momentum in weeks',
    title: 'Build momentum in weeks',
    description:
      'Working MVPs in 8 weeks — we compound momentum instead of selling a 12-month transformation deck.',
    bullets: [
      'Golden paths in production',
      'CI/CD baseline live',
      'Self-service environments',
    ],
  },
  {
    id: '03',
    label: 'Release with confidence',
    title: 'Release with confidence',
    description:
      'Every release tied to outcomes you can defend — DORA metrics, developer experience, and compliance built in.',
    bullets: [
      'Embedded compliance guardrails',
      'DORA metrics tracked',
      'Audit-ready release trails',
    ],
  },
] as const

function StaticTerminalPanel({ activeId }: { activeId: string }) {
  return (
    <div className="border-b border-white/10 p-4 sm:p-5 lg:border-b-0 lg:border-r lg:p-6">
      {/* Inner frame with grid — matches reference */}
      <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0d1117] sm:min-h-[380px] lg:min-h-[420px]">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" aria-hidden="true" />

        {/* Large background number — centered, clipped, behind terminal */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={activeId}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 select-none font-sans text-[12rem] font-bold leading-none tracking-tighter text-[#1a3050] sm:text-[14rem] md:text-[16rem] lg:text-[18rem]"
              aria-hidden="true"
            >
              {activeId}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Static terminal — anchored bottom-center */}
        <div className="relative z-10 flex h-full min-h-[320px] items-end justify-center px-4 pb-8 pt-16 sm:min-h-[380px] sm:px-6 sm:pb-10 lg:min-h-[420px]">
          <div className="w-full max-w-[300px] rounded-xl border border-white/[0.08] bg-[#080c10] shadow-2xl">
            <div className="flex items-center gap-1.5 px-4 py-2.5">
              <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
              <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
              <span className="h-2 w-2 rounded-full bg-[#28c840]" />
            </div>
            <div className="space-y-2 px-4 pb-4 font-mono text-[13px] leading-relaxed">
              <p className="text-[#b4bcc8]">
                <span className="text-[#5b9fd4]">$</span> tensure platform deploy --env prod
              </p>
              <p className="text-[#4ade80]">✓ all guardrails passed</p>
              <p className="text-[#7a9bb8]">→ shipping release 24.10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HowWeHelp() {
  const [active, setActive] = useState(0)
  const tab = TABS[active]

  return (
    <section className="relative border-t border-white/5 bg-[#0a0a0a] py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl sm:mb-16"
        >
          <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            <span className="h-px w-6 bg-gradient-to-r from-cyan-400 to-transparent" />
            How We Help
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Turn your infrastructure into a competitive advantage.
          </h2>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-14">
          <nav className="relative flex flex-row gap-2 lg:flex-col lg:gap-0">
            <div
              className="absolute left-0 hidden w-px bg-white/10 lg:block lg:inset-y-0"
              aria-hidden="true"
            />
            {TABS.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(index)}
                className={`relative flex flex-1 items-center gap-3 rounded-lg px-4 py-4 text-left transition-colors lg:flex-none lg:rounded-none lg:py-5 lg:pl-6 ${
                  active === index
                    ? 'text-white lg:bg-white/[0.02]'
                    : 'text-[#5a6a7f] hover:text-[#8b9cb3]'
                }`}
              >
                {active === index && (
                  <motion.span
                    layoutId="tab-indicator"
                    className="absolute left-0 top-2 bottom-2 hidden w-0.5 rounded-full bg-cyan-400 lg:block"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {active === index && (
                  <motion.span
                    layoutId="tab-indicator-mobile"
                    className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-cyan-400 lg:hidden"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span
                  className={`font-mono text-sm ${active === index ? 'text-cyan-400' : ''}`}
                >
                  {item.id}
                </span>
                <span className="text-sm font-medium sm:text-base">{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0f1117]/80 backdrop-blur-sm">
            <div className="grid lg:grid-cols-2">
              {/* Left: static terminal + animated bg number */}
              <StaticTerminalPanel activeId={tab.id} />

              {/* Right: only text changes per tab */}
              <div className="flex flex-col justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col justify-center p-6 sm:p-8 lg:p-10"
                  >
                    <h3 className="text-xl font-bold text-white sm:text-2xl">{tab.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-[#8b9cb3] sm:text-base">
                      {tab.description}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {tab.bullets.map((bullet, i) => (
                        <motion.li
                          key={bullet}
                          initial={{ opacity: 0, x: 12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.08 + i * 0.06 }}
                          className="flex items-center gap-3 text-sm text-[#c5d0de]"
                        >
                          <span className="text-cyan-400">✓</span>
                          {bullet}
                        </motion.li>
                      ))}
                    </ul>
                    <a
                      href="#contact"
                      className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
                    >
                      Learn more
                      <span>→</span>
                    </a>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
