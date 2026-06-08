'use client'

import Link from 'next/link'
import { ArrowRight, ExternalLink, Play, Share2 } from 'lucide-react'

const footerNav = [
  {
    heading: 'Products',
    links: [
      { label: 'ActivePro Series', href: '#products' },
      { label: 'PowerDrive Series', href: '#products' },
      { label: 'CliniFlex Series', href: '#products' },
      { label: 'Paediatric', href: '#products' },
      { label: 'Accessories', href: '#products' },
    ],
  },
  {
    heading: 'Engineering',
    links: [
      { label: 'Materials & R&D', href: '#engineering' },
      { label: 'Manufacturing', href: '#engineering' },
      { label: 'Certifications', href: '#engineering' },
      { label: 'Quality Standards', href: '#engineering' },
      { label: 'Innovation Lab', href: '#engineering' },
    ],
  },
  {
    heading: 'Solutions',
    links: [
      { label: 'Hospitals & Clinics', href: '#solutions' },
      { label: 'Rehabilitation Centers', href: '#solutions' },
      { label: 'Distribution Partners', href: '#solutions' },
      { label: 'Individual Users', href: '#solutions' },
      { label: 'Find a Distributor', href: '#contact' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About FARATECH', href: '#about' },
      { label: 'Leadership Team', href: '#about' },
      { label: 'Careers', href: '#about' },
      { label: 'Press & Media', href: '#about' },
      { label: 'Sustainability', href: '#about' },
    ],
  },
]

const certBadges = [
  'ISO 13485',
  'CE Mark',
  'FDA Cleared',
  'TÜV Rheinland',
  'MDR 2017/745',
]

export function Footer() {
  return (
    <footer id="about" className="bg-[var(--brand-navy)] text-white">
      {/* Newsletter / distributor strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-lg font-bold mb-1">
              Stay informed on FARATECH innovations.
            </h3>
            <p className="text-sm text-white/50">
              Clinical updates, new product launches, and industry insights.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex gap-2 w-full md:w-auto"
          >
            <input
              type="email"
              required
              placeholder="your@institution.com"
              className="bg-white/10 border border-white/20 rounded-md px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all w-64 flex-1 md:flex-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-[var(--brand-red)] hover:bg-[var(--brand-red-dark)] text-white font-semibold text-sm px-5 py-2.5 rounded-md transition-all flex-shrink-0"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          {/* Brand column */}
          <div className="col-span-2">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white/10 border border-white/20 flex items-center justify-center rounded-sm">
                <span className="text-white font-bold text-xs font-heading">F</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-bold text-white text-lg tracking-widest uppercase">
                  FARATECH
                </span>
                <span className="text-[9px] text-white/40 tracking-[0.2em] uppercase">
                  Mobility Systems
                </span>
              </div>
            </Link>

            <p className="text-sm text-white/50 leading-relaxed mb-6 max-w-xs">
              Engineering premium wheelchair systems trusted by healthcare institutions
              and individuals across 60+ countries since 1989.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-2 mb-6">
              {certBadges.map((badge) => (
                <span
                  key={badge}
                  className="text-[10px] font-semibold px-2.5 py-1 border border-white/15 rounded text-white/50 tracking-wide"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { Icon: ExternalLink, label: 'LinkedIn' },
                { Icon: Play, label: 'YouTube' },
                { Icon: Share2, label: 'X / Twitter' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 border border-white/15 rounded-md flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {footerNav.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-5">
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} FARATECH GmbH. All rights reserved. Registered in Stuttgart, Germany.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Imprint', 'Accessibility'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-white/30 hover:text-white/60 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
