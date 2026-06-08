import { ArrowRight, Building2, Users, Globe, HeartPulse } from 'lucide-react'

const audiences = [
  {
    icon: HeartPulse,
    title: 'Hospitals & Clinics',
    desc: 'Volume procurement programs, clinical training, in-service education, and MDR-compliant documentation packages for hospital procurement committees.',
    points: [
      'Dedicated clinical account managers',
      'Volume pricing from 10+ units',
      'Staff training & certification programs',
      'Full MDR technical documentation',
    ],
    cta: 'Hospital Partnership Program',
    accent: 'bg-blue-50 border-blue-100 hover:border-blue-200',
    iconColor: 'text-blue-600 bg-blue-100',
    ctaStyle: 'border-blue-200 text-blue-700 hover:bg-blue-50',
  },
  {
    icon: Building2,
    title: 'Rehabilitation Centers',
    desc: 'Specialised rehabilitation configurations designed for complex positioning needs. Clinical advisory support from FARATECH physiotherapy consultants.',
    points: [
      'Complex positioning consultation',
      'Outcome documentation tools',
      'Paediatric specialist support',
      'Long-term loan scheme available',
    ],
    cta: 'Rehab Center Solutions',
    accent: 'bg-emerald-50 border-emerald-100 hover:border-emerald-200',
    iconColor: 'text-emerald-600 bg-emerald-100',
    ctaStyle: 'border-emerald-200 text-emerald-700 hover:bg-emerald-50',
  },
  {
    icon: Globe,
    title: 'Distributors & Partners',
    desc: 'Join FARATECH\'s global distribution network. Exclusive territory agreements, partner portal access, product training, and co-marketing support.',
    points: [
      'Exclusive territory agreements',
      'Dealer portal & ordering system',
      'Co-marketing & trade show support',
      'Factory training programs',
    ],
    cta: 'Become a Partner',
    accent: 'bg-[var(--brand-navy)]/5 border-[var(--brand-navy)]/10 hover:border-[var(--brand-navy)]/20',
    iconColor: 'text-[var(--brand-navy)] bg-[var(--brand-navy)]/10',
    ctaStyle: 'border-[var(--brand-navy)]/20 text-[var(--brand-navy)] hover:bg-[var(--brand-navy)]/5',
  },
  {
    icon: Users,
    title: 'Individual Users',
    desc: 'Your wheelchair, configured precisely for your body, your life, and your goals. Work with a FARATECH-certified therapist to find your perfect configuration.',
    points: [
      'Free clinical assessment service',
      '5-year comprehensive warranty',
      'Global service network',
      'Upgrade & trade-in programme',
    ],
    cta: 'Book a Free Assessment',
    accent: 'bg-[var(--brand-red)]/5 border-[var(--brand-red)]/10 hover:border-[var(--brand-red)]/30',
    iconColor: 'text-[var(--brand-red)] bg-[var(--brand-red)]/10',
    ctaStyle: 'border-[var(--brand-red)]/20 text-[var(--brand-red)] hover:bg-[var(--brand-red)]/5',
  },
]

export function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[var(--brand-red)]" />
            <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground font-medium">
              Our Solutions
            </span>
            <div className="w-8 h-px bg-[var(--brand-red)]" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--brand-navy)] mb-6 text-balance">
            Built for Every Partner
            <br />
            in the Care Chain.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Whether you are a hospital system, rehabilitation specialist, distribution partner, or
            someone who uses a wheelchair every day — FARATECH has a dedicated solution pathway for you.
          </p>
        </div>

        {/* Solutions grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className={`rounded-2xl border p-8 transition-all duration-300 group ${audience.accent}`}
            >
              <div className="flex items-start gap-5 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${audience.iconColor}`}>
                  <audience.icon size={22} />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[var(--brand-navy)] mb-1">
                    {audience.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{audience.desc}</p>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {audience.points.map((point) => (
                  <li key={point} className="flex items-center gap-2.5 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-red)] flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`inline-flex items-center gap-2 text-sm font-semibold border px-5 py-2.5 rounded-md transition-all group-hover:gap-3 ${audience.ctaStyle}`}
              >
                {audience.cta}
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* Global distribution callout */}
        <div className="mt-12 bg-[var(--brand-navy)] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
          <div>
            <p className="text-xs tracking-widest uppercase text-[var(--brand-red)] mb-3 font-medium">
              Global Network
            </p>
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-2">
              Service in 60+ Countries
            </h3>
            <p className="text-white/60 max-w-lg text-sm leading-relaxed">
              With authorised service centers and distribution partners across Europe, North America,
              Asia Pacific, and the Middle East, FARATECH support is always close.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4 flex-shrink-0">
            <div className="flex gap-6 text-center">
              {[
                { v: '60+', l: 'Countries' },
                { v: '200+', l: 'Service Centers' },
                { v: '24h', l: 'Response SLA' },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-heading text-2xl font-bold text-[var(--brand-red)]">{s.v}</div>
                  <div className="text-xs text-white/50">{s.l}</div>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[var(--brand-red)] hover:bg-[var(--brand-red-dark)] text-white font-semibold px-6 py-3 rounded-md transition-all"
            >
              Find Your Local Partner
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
