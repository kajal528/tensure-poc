import { motion } from 'framer-motion'

const ARTICLES = [
  {
    image: '/resources/resource-1.png',
    category: 'Blog Article',
    title: 'What golden paths actually look like inside a regulated bank',
    href: '#',
  },
  {
    image: '/resources/resource-2.png',
    category: 'Case Study',
    title: 'Cutting provisioning time from 14 days to 4 minutes at a top-10 issuer',
    href: '#',
  },
  {
    image: '/resources/resource-3.png',
    category: 'Blog Article',
    title: 'Backstage is not enough — what teams forget when they adopt an IDP',
    href: '#',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export default function Resources() {
  return (
    <section
      id="resources"
      className="relative border-t border-white/5 bg-[#0a0a0a] py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-25" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-2xl">
            <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              <span className="h-px w-6 bg-gradient-to-r from-cyan-400 to-transparent" />
              Resources
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Progress feels easy when knowledge is shared.
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
          >
            View more
            <span aria-hidden="true">›</span>
          </a>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-6 md:grid-cols-3"
        >
          {ARTICLES.map((article) => (
            <motion.a
              key={article.title}
              href={article.href}
              variants={cardVariant}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0f1117] transition-colors hover:border-white/20"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={article.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
                  {article.category}
                </span>
                <h3 className="mt-3 flex-1 text-base font-bold leading-snug text-white sm:text-lg">
                  {article.title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-cyan-400 transition-colors group-hover:text-cyan-300">
                  Read more
                  <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
