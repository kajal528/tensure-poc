import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const STEPS = [
  {
    id: '01',
    day: 'Day 30',
    title: 'Design your platform blueprint',
    bullets: [
      'Architecture & tooling decisions',
      'Compliance & security mapping',
      'Roadmap with success metrics',
    ],
  },
  {
    id: '02',
    day: 'Day 60',
    title: 'Build your MVP developer platform',
    bullets: [
      'Golden paths in production',
      'CI/CD baseline live',
      'Self-service environments',
    ],
  },
  {
    id: '03',
    day: 'Day 90',
    title: 'Onboard your first team',
    bullets: [
      'Pilot team shipping daily',
      'DORA metrics tracked',
      'Adoption playbook handed off',
    ],
  },
] as const

export default function GettingStarted() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % STEPS.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const progress = active / (STEPS.length - 1)

  return (
    <section className="relative border-t border-white/5 bg-[#0a0a0a] py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-25" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl sm:mb-20"
        >
          <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            <span className="h-px w-6 bg-gradient-to-r from-cyan-400 to-transparent" />
            Getting Started
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Here&apos;s what we&apos;ll get done in 90 days.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative mb-10 hidden sm:mb-14 md:block">
          <div className="absolute left-0 right-0 top-[2.75rem] h-px bg-white/10" aria-hidden="true" />
          <motion.div
            className="absolute left-0 top-[2.75rem] h-px origin-left bg-gradient-to-r from-cyan-400 to-blue-500"
            initial={false}
            animate={{ scaleX: progress }}
            style={{ width: '100%' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="relative grid grid-cols-3">
            {STEPS.map((step, index) => (
              <button
                key={step.id}
                type="button"
                onClick={() => setActive(index)}
                className="group flex flex-col items-center text-center"
              >
                <motion.span
                  animate={{
                    opacity: active === index ? 1 : 0.5,
                    y: active === index ? 0 : 2,
                  }}
                  className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-400"
                >
                  {step.day}
                </motion.span>
                <motion.span
                  layout
                  className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 font-mono text-sm font-bold transition-colors ${
                    active === index
                      ? 'border-cyan-400 bg-cyan-400/20 text-white shadow-[0_0_20px_rgba(34,211,238,0.35)]'
                      : 'border-white/20 bg-[#0f1117] text-[#8b9cb3] group-hover:border-white/40'
                  }`}
                >
                  {active === index && (
                    <motion.span
                      layoutId="timeline-ring"
                      className="absolute inset-0 rounded-full border-2 border-cyan-400"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {step.id}
                </motion.span>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile timeline pills */}
        <div className="mb-8 flex gap-2 md:hidden">
          {STEPS.map((step, index) => (
            <button
              key={step.id}
              type="button"
              onClick={() => setActive(index)}
              className={`flex-1 rounded-full px-3 py-2 text-center text-xs font-semibold transition-colors ${
                active === index
                  ? 'bg-cyan-400/20 text-cyan-400'
                  : 'bg-white/5 text-[#8b9cb3]'
              }`}
            >
              {step.day}
            </button>
          ))}
        </div>

        {/* Step cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <motion.article
              key={step.id}
              layout
              onClick={() => setActive(index)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              animate={{
                opacity: active === index ? 1 : 0.55,
                scale: active === index ? 1 : 0.98,
                y: active === index ? 0 : 4,
              }}
              className={`cursor-pointer rounded-2xl border p-6 transition-colors sm:p-7 ${
                active === index
                  ? 'border-cyan-400/40 bg-[#0f1117] shadow-lg shadow-cyan-500/10'
                  : 'border-white/10 bg-[#0f1117]/60 hover:border-white/20'
              }`}
            >
              <span className="mb-3 inline-block font-mono text-sm text-cyan-400 md:hidden">
                {step.id} · {step.day}
              </span>
              <h3 className="text-lg font-bold leading-snug text-white">{step.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {step.bullets.map((bullet, i) => (
                  <motion.li
                    key={bullet}
                    animate={{ opacity: active === index ? 1 : 0.7 }}
                    transition={{ delay: active === index ? i * 0.05 : 0 }}
                    className="flex items-start gap-2 text-sm text-[#8b9cb3]"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                    {bullet}
                  </motion.li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#5891E5] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#4a7fd4] sm:text-base"
          >
            Talk to Our Team
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
