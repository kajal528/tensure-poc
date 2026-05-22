import { motion } from 'framer-motion'

const CARDS = [
  {
    title: 'FinServ fluency in every build',
    description:
      'We speak SOX, PCI, and regulator. Compliance is engineered in, not bolted on after the fact.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path
          d="M9 3h6l1 3h3a1 1 0 011 1v13a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h3l1-3z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Value delivered in weeks, not quarters',
    description:
      'Working MVPs in 8 weeks. We compound momentum instead of selling a 12-month transformation deck.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path
          d="M13 2L4 14h7l-1 8 10-14H11l2-6z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Co-created for real adoption',
    description:
      "We build alongside your team so the platform doesn't outlive us. Engineers own it on day one.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M14 20c0-2.2 1.3-4 3-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'We measure what matters',
    description:
      'DORA metrics, developer experience scores, lead time — every initiative tied to outcomes you can defend.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path d="M4 20V10M10 20V4M16 20v-6M22 20H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export default function WhyChoose() {
  return (
    <section className="relative border-t border-white/5 bg-[#0a0a0a] py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-25" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28"
          >
            <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              <span className="h-px w-6 bg-gradient-to-r from-cyan-400 to-transparent" />
              Why Teams Choose Tensure
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Built for adoption, not installation.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#8b9cb3] sm:text-lg">
              Big integrators leave you with a binder. Boutique firms leave you with a prototype.
              We leave you with a platform your engineers actually use.
            </p>
          </motion.div>

          {/* Right column — 2×2 grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid gap-4 sm:grid-cols-2 sm:gap-5"
          >
            {CARDS.map((card) => (
              <motion.article
                key={card.title}
                variants={cardVariant}
                className="glass-card rounded-2xl p-6 sm:p-7"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold leading-snug text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#8b9cb3]">{card.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
