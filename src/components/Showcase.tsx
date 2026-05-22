import { motion } from 'framer-motion'

const BULLETS = [
  'Self-service environments in minutes',
  'Standardized golden paths for every team',
  'Embedded compliance guardrails',
  'DORA metrics tracked from day one',
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

export default function Showcase() {
  return (
    <section
      id="how-we-help"
      className="relative overflow-hidden bg-white py-24 text-[#0a0a0a] sm:py-32"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.p
              variants={fadeUp}
              className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600"
            >
              <span className="h-px w-6 bg-blue-600" />
              There&apos;s a Better Way
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
            >
              Give your developers a faster path to production.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg"
            >
              At Tensure we design, build, and scale platforms that standardize delivery
              and eliminate bottlenecks — so your engineers stop waiting and start shipping.
            </motion.p>

            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-8 space-y-3"
            >
              {BULLETS.map((item) => (
                <motion.li
                  key={item}
                  variants={fadeUp}
                  className="flex items-start gap-3 text-sm text-gray-700 sm:text-base"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp} className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#0a0a0a] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1a1a1a] sm:text-base"
              >
                Talk to Our Team
                <span>→</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full max-w-lg"
            >
              <img
                src="/showcase-infographic.png?v=2"
                alt="Developers, code, and market outcomes connected"
                className="w-full"
                draggable={false}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
