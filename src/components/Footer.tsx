const FOOTER_LINKS = {
  Solutions: [
    { label: 'Platform Engineering', href: '#' },
    { label: 'Kubernetes', href: '#' },
    { label: 'GitOps', href: '#' },
    { label: 'AI-Ready Cloud', href: '#' },
  ],
  Resources: [
    { label: 'Blog', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'Playbooks', href: '#' },
    { label: 'Newsletter', href: '#' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Partners', href: '#partnerships' },
    { label: 'Press', href: '#' },
  ],
  Connect: [
    { label: 'Contact', href: '#contact' },
    { label: 'LinkedIn', href: '#' },
    { label: 'YouTube', href: '#' },
    { label: 'Speak to Sales', href: '#contact' },
  ],
} as const

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-2.5">
              <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] ring-1 ring-cyan-500/30">
                <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#00f0ff]" />
              </span>
              <img
                src="/tensure-logo.png"
                alt="Tensure"
                className="h-5 w-auto"
              />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#8b9cb3]">
              Platform engineering for FinServ & FinTech teams that need to ship
              faster without breaking regulators.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#8b9cb3] transition-colors hover:border-white/20 hover:text-white"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.127 0 2.067 2.067 0 01-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#8b9cb3] transition-colors hover:border-white/20 hover:text-white"
                aria-label="YouTube"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5a6a7f]">
                {title}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#c5d0de] transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-sm text-[#5a6a7f]">
            © 2026 Tensure. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-[#5a6a7f] transition-colors hover:text-[#8b9cb3]"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-[#5a6a7f] transition-colors hover:text-[#8b9cb3]"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
