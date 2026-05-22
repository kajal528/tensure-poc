import { motion } from 'framer-motion'
import HeroGraphic from './HeroGraphic'
import SocialProof from './SocialProof'

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-[4.75rem] sm:pt-[5.4rem]">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 grid-bg" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 90% 60% at 70% 40%, rgba(59, 130, 246, 0.12) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(0, 240, 255, 0.06) 0%, transparent 50%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-28 sm:px-6 sm:pb-32 lg:px-8 lg:pb-36">
        <div className="grid min-h-[calc(100vh-5rem)] items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left column */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col justify-center pt-[1.85rem] lg:pt-0"
          >
            <motion.p
              variants={fadeUp}
              className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400 sm:text-sm"
            >
              <span className="h-px w-6 bg-gradient-to-r from-cyan-400 to-transparent" />
              Platform Engineering for FinServ & FinTech
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-7xl"
            >
              <span className="block text-white">Stop waiting.</span>
              <span className="mt-1 block">
                Start{' '}
                <span className="text-gradient-shine">shipping.</span>
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-relaxed text-[#8b9cb3] sm:text-lg"
            >
              Tensure helps FinServ & FinTech engineering teams build internal
              developer platforms that accelerate delivery, reduce risk, and prove
              value in 90 days.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#5891E5] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#4a7fd4] sm:text-base"
              >
                Talk to Our Team
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            </motion.div>

            <SocialProof />
          </motion.div>

          {/* Right column — graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <HeroGraphic />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
