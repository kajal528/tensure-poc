import { motion } from 'framer-motion'

const MARQUEE_LOGOS = [
  'Mailchimp',
  'Intuit',
  'Northwestern Mutual',
  'Bread Financial',
  'Ally',
  'Fiserv',
  'Stripe',
  'Block',
  'First',
  'Topstep',
  'Pindrop',
  'Synchrony',
]

function LogoItem({ name }: { name: string }) {
  return (
    <span
      className="mx-8 shrink-0 text-lg font-semibold tracking-tight text-[#4a5568] grayscale transition-all duration-300 hover:grayscale-0 hover:text-white sm:mx-10 sm:text-xl"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {name}
    </span>
  )
}

export default function LogoMarquee() {
  const duplicated = [...MARQUEE_LOGOS, ...MARQUEE_LOGOS]

  return (
    <div className="relative z-20 border-t border-white/5 bg-[#0a0a0a]">
      <div className="relative overflow-hidden py-5 sm:py-6">
        {/* Edge fades */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0a0a0a] to-transparent sm:w-24"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent sm:w-24"
          aria-hidden="true"
        />

        <motion.div
          className="animate-marquee flex w-max items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          {duplicated.map((name, i) => (
            <LogoItem key={`${name}-${i}`} name={name} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}
