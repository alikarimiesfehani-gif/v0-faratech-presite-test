'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'FARATECH wheelchairs have fundamentally changed the rehabilitation outcomes for our complex spinal cord injury patients. The clinical precision of the CliniFlex positioning system is unmatched by anything else on the market.',
    author: 'Prof. Dr. Andreas Müller',
    role: 'Head of Neurological Rehabilitation',
    institution: 'Charité Universitätsmedizin Berlin',
    country: 'Germany',
    category: 'Clinical',
    stars: 5,
  },
  {
    quote:
      'As a Paralympic athlete, I demand the absolute best from my equipment. The ActivePro X1 Ti is 400g lighter than my previous chair and has measurably improved my race times. FARATECH engineers actually listen to athletes.',
    author: 'Sarah van der Berg',
    role: 'Paralympic T53 Competitor',
    institution: 'Netherlands Paralympic Team',
    country: 'Netherlands',
    category: 'Sport',
    stars: 5,
  },
  {
    quote:
      'We have equipped over 200 of our rehabilitation beds with FARATECH systems. The service level, clinical documentation support, and product reliability have been exceptional. Our procurement team would not consider alternatives.',
    author: 'James Thornton',
    role: 'Head of Procurement',
    institution: 'Royal National Orthopaedic Hospital',
    country: 'United Kingdom',
    category: 'Hospital',
    stars: 5,
  },
  {
    quote:
      'After trying every major brand over 12 years of using a wheelchair, FARATECH is simply in a different league. The quality of the materials, the fit and finish, the way it was configured specifically for my body — it changed my daily life.',
    author: 'Marco Rossi',
    role: 'Independent User, C5-C6 SCI',
    institution: 'Milan, Italy',
    country: 'Italy',
    category: 'User',
    stars: 5,
  },
  {
    quote:
      'As a major distributor across Southeast Asia, we evaluated eight manufacturers before partnering with FARATECH. Their product quality, clinical training support, and global service infrastructure are unmatched at this price tier.',
    author: 'Dr. Lim Wei Chen',
    role: 'Managing Director',
    institution: 'Asia Pacific Mobility Solutions',
    country: 'Singapore',
    category: 'Distributor',
    stars: 5,
  },
]

const categoryColors: Record<string, string> = {
  Clinical: 'bg-blue-50 text-blue-700',
  Sport: 'bg-orange-50 text-orange-700',
  Hospital: 'bg-emerald-50 text-emerald-700',
  User: 'bg-purple-50 text-purple-700',
  Distributor: 'bg-yellow-50 text-yellow-700',
}

export function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive((a) => (a + 1) % testimonials.length)

  const t = testimonials[active]

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[var(--brand-red)]" />
              <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground font-medium">
                Global Trust
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--brand-navy)] text-balance">
              Voices That Matter.
            </h2>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-10 h-10 flex items-center justify-center border border-border rounded-full hover:bg-[var(--brand-navy)] hover:text-white hover:border-[var(--brand-navy)] transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="text-sm text-muted-foreground">
              {active + 1} / {testimonials.length}
            </span>
            <button
              onClick={next}
              className="w-10 h-10 flex items-center justify-center border border-border rounded-full hover:bg-[var(--brand-navy)] hover:text-white hover:border-[var(--brand-navy)] transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Main testimonial */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 bg-white border border-border rounded-2xl p-8 md:p-12 relative">
            {/* Quote mark */}
            <div className="absolute top-8 right-8 opacity-5">
              <Quote size={80} className="text-[var(--brand-navy)] fill-current" />
            </div>

            {/* Category */}
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[t.category]} mb-6 inline-block`}>
              {t.category}
            </span>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: t.stars }).map((_, i) => (
                <span key={i} className="text-[var(--brand-red)] text-lg">★</span>
              ))}
            </div>

            {/* Quote text */}
            <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 font-medium">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[var(--brand-navy)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="font-heading font-bold text-[var(--brand-navy)] text-lg">
                  {t.author.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                </span>
              </div>
              <div>
                <div className="font-semibold text-[var(--brand-navy)]">{t.author}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
                <div className="text-xs text-[var(--brand-red)] font-medium mt-0.5">
                  {t.institution}
                </div>
              </div>
            </div>
          </div>

          {/* Lifestyle image */}
          <div className="relative rounded-2xl overflow-hidden min-h-64">
            <Image
              src="/images/user-lifestyle.png"
              alt="FARATECH wheelchair user"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-navy)]/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white text-sm font-semibold leading-snug">
                &ldquo;Engineering that restores independence.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial dots + mini cards */}
        <div className="flex flex-wrap gap-3 justify-center">
          {testimonials.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-medium transition-all ${
                i === active
                  ? 'bg-[var(--brand-navy)] text-white border-[var(--brand-navy)]'
                  : 'border-border text-muted-foreground hover:border-[var(--brand-navy)]/40'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${i === active ? 'bg-[var(--brand-red)]' : 'bg-muted-foreground/30'}`} />
              {item.category}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
