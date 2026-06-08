'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Globe, Phone } from 'lucide-react'

const navItems = [
  {
    label: 'Products',
    href: '#products',
    children: [
      { label: 'Active Series', desc: 'Ultralight manual wheelchairs', href: '#products' },
      { label: 'Power Series', desc: 'Intelligent powered mobility', href: '#products' },
      { label: 'Rehab Series', desc: 'Clinical positioning systems', href: '#products' },
      { label: 'Paediatric', desc: 'Growing with your child', href: '#products' },
    ],
  },
  {
    label: 'Engineering',
    href: '#engineering',
    children: [
      { label: 'Materials & R&D', desc: 'Carbon fiber & aerospace alloys', href: '#engineering' },
      { label: 'Manufacturing', desc: 'ISO 13485 precision production', href: '#engineering' },
      { label: 'Certifications', desc: 'CE, FDA, ISO standards', href: '#engineering' },
    ],
  },
  { label: 'Solutions', href: '#solutions' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Top bar */}
      <div className="bg-[var(--brand-navy)] text-white/70 text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
              ISO 13485 Certified Manufacturer
            </span>
            <span>CE · FDA · TÜV Approved</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+49800000000" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone size={11} />
              +49 800 000 0000
            </a>
            <button className="flex items-center gap-1 hover:text-white transition-colors">
              <Globe size={11} />
              EN
              <ChevronDown size={10} />
            </button>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border'
            : 'bg-white'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[var(--brand-navy)] flex items-center justify-center rounded-sm">
                <span className="text-white font-bold text-xs tracking-tight font-heading">F</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-bold text-[var(--brand-navy)] text-lg tracking-widest uppercase">
                  FARATECH
                </span>
                <span className="text-[9px] text-muted-foreground tracking-[0.2em] uppercase">
                  Mobility Systems
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-[var(--brand-navy)] transition-colors rounded-md hover:bg-muted"
                >
                  {item.label}
                  {item.children && <ChevronDown size={13} className={`transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
                </a>

                {/* Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-border rounded-lg shadow-xl p-2 z-50">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="flex flex-col px-3 py-2.5 rounded-md hover:bg-muted group transition-colors"
                      >
                        <span className="text-sm font-medium text-foreground group-hover:text-[var(--brand-navy)]">
                          {child.label}
                        </span>
                        <span className="text-xs text-muted-foreground mt-0.5">{child.desc}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors px-3 py-2"
            >
              Find Distributor
            </a>
            <a
              href="#contact"
              className="bg-[var(--brand-red)] hover:bg-[var(--brand-red-dark)] text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-all hover:shadow-md"
            >
              Request a Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-border px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-3 text-sm font-medium text-foreground hover:text-[var(--brand-navy)] hover:bg-muted rounded-md transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-border mt-4 flex flex-col gap-2">
              <a
                href="#contact"
                className="text-center bg-[var(--brand-navy)] text-white text-sm font-semibold px-5 py-3 rounded-md"
              >
                Request a Quote
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
