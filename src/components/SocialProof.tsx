import { motion } from 'framer-motion'

const TRUSTED_LOGOS = [
  'First',
  'Topstep',
  'Pindrop',
  'Synchrony',
  'Mailchimp',
  'Intuit',
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.9 },
  },
}

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
}

export default function SocialProof() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="mt-14 lg:mt-16"
    >
      <motion.p
        variants={item}
        className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#5a6a7f]"
      >
        Trusted by engineering leaders
      </motion.p>
      <ul className="flex flex-wrap items-center gap-x-8 gap-y-4 sm:gap-x-10">
        {TRUSTED_LOGOS.map((name) => (
          <motion.li key={name} variants={item}>
            <span
              className="text-base font-semibold tracking-tight text-[#4a5568] grayscale transition-all duration-300 hover:grayscale-0 hover:text-[#9ca3af] sm:text-lg"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {name}
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}
