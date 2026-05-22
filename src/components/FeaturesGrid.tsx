import { motion } from 'framer-motion'

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <rect x="3" y="7" width="18" height="12" rx="2" stroke="#fbbf24" strokeWidth="1.5" />
        <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" stroke="#fbbf24" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Talented developers stuck in red tape',
    description:
      'Ticket queues, provisioning delays, and approvals turn a one-day task into a three-week slog.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path
          d="M12 3l1.5 4.5H18l-3.5 2.5 1.5 4.5L12 12l-4 2.5 1.5-4.5L6 7.5h4.5L12 3z"
          stroke="#60a5fa"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Fragmented tooling = brittle deployments',
    description:
      'Firefighting, compliance gridlock, and a different runbook for every team. Releases feel like a gamble.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <circle cx="6" cy="6" r="2.5" stroke="#c084fc" strokeWidth="1.5" />
        <circle cx="18" cy="18" r="2.5" stroke="#c084fc" strokeWidth="1.5" />
        <path d="M8.5 7.5l7 7M15.5 7.5l-7 7" stroke="#c084fc" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'No golden paths = reinventing the wheel',
    description:
      'Every project starts from scratch. Knowledge lives in heads, not platforms, and never gets reused.',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariant = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export default function FeaturesGrid() {
  return (
    <section
      id="solutions"
      className="relative border-t border-white/5 bg-[#0a0a0a] py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            <span className="h-px w-6 bg-gradient-to-r from-transparent to-cyan-400" />
            The Problem
            <span className="h-px w-6 bg-gradient-to-l from-transparent to-cyan-400" />
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Inconsistent deployments turn shipping code into a struggle.
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid gap-6 sm:mt-16 md:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map((feature) => (
            <motion.article
              key={feature.title}
              variants={cardVariant}
              className="glass-card group rounded-2xl p-6 sm:p-7"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold leading-snug text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#8b9cb3]">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
