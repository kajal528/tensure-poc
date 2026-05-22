import { motion } from 'framer-motion'

export default function CtaSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/5 bg-[#0a0a0a] py-28 sm:py-36"
    >
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(59, 130, 246, 0.12) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      {/* TENSURE watermark */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
        aria-hidden="true"
      >
        <span className="select-none font-sans text-[clamp(6rem,18vw,14rem)] font-extrabold uppercase tracking-tighter text-white/[0.04]">
          Tensure
        </span>
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]"
        >
          Smooth shipping is a few steps away.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#8b9cb3] sm:text-lg"
        >
          Let&apos;s see how we can help your team move faster — from developer platforms
          to cloud infrastructure and AI solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10"
        >
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#5891E5] to-[#4a7fd4] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:brightness-110 sm:text-base"
          >
            Tell Us About Your Project
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
