import { motion } from 'framer-motion'

const PARTNERS = [
  {
    title: 'Google Cloud Premier Partner',
    description:
      'Top 3% of partners in North America — recognized for delivery, expertise, and customer outcomes.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path
          d="M7 18a4 4 0 010-8 5 5 0 019.9-1.1A4.5 4.5 0 1117 18H7z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Platform Engineering Institute',
    description:
      'Official PEI partner shaping the playbooks for IDPs, golden paths, and developer experience.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path d="M4 8h16M4 12h16M4 16h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 6v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Select Tier AWS Partner',
    description:
      'Validated AWS expertise with deep focus on FinServ regulatory and security baselines.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path
          d="M12 3l7 4v5c0 4.4-2.9 8.5-7 9-4.1-.5-7-4.6-7-9V7l7-4z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

const TECH_STACK = [
  'Kubernetes',
  'Backstage',
  'Terraform',
  'ArgoCD',
  'Harness',
  'GitHub Actions',
  'Crossplane',
  'Istio',
  'Vault',
  'Prometheus',
  'OpenTelemetry',
  'Dagger',
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export default function Partnerships() {
  return (
    <section
      id="partnerships"
      className="relative border-t border-white/5 bg-[#0a0a0a] py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-25" aria-hidden="true" />

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
            Partnerships
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            We&apos;ve got the credentials that count.
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-6 md:grid-cols-3"
        >
          {PARTNERS.map((partner) => (
            <motion.article
              key={partner.title}
              variants={cardVariant}
              className="glass-card rounded-2xl p-6 sm:p-7"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                {partner.icon}
              </div>
              <h3 className="text-lg font-bold leading-snug text-white">{partner.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#8b9cb3]">
                {partner.description}
              </p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-16 sm:mt-20"
        >
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Technology ecosystem
          </p>

          <div className="overflow-hidden rounded-2xl border border-white/10">
            <div className="grid grid-cols-2 divide-x divide-y divide-white/10 sm:grid-cols-4">
              {TECH_STACK.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="flex items-center justify-center px-4 py-5 text-center text-sm font-medium text-[#8b9cb3] transition-colors hover:bg-white/[0.03] hover:text-white sm:py-6 sm:text-base"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
