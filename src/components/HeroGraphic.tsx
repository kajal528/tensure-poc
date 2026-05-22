import { motion } from 'framer-motion'

export default function HeroGraphic() {
  return (
    <div className="relative flex w-full items-center justify-center py-4">
      <motion.img
        src="/hero-graphic.png"
        alt="Platform engineering workflow"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="relative z-10 w-full max-w-md lg:max-w-lg"
        draggable={false}
      />
    </div>
  )
}
