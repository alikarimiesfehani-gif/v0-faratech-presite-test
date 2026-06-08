import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const pillars = [
  {
    number: '01',
    title: 'Aerospace-Grade Materials',
    body: 'We source T700 and T800 carbon fiber, 7075-T6 aerospace aluminum, and grade-5 titanium — the same materials found in Formula 1 and aerospace applications. Every material specification is documented and traceable.',
    stat: { value: '7.8 kg', label: 'Minimum frame weight' },
  },
  {
    number: '02',
    title: 'Clinical Co-Development',
    body: 'Our R&D center operates in direct partnership with eight leading European rehabilitation clinics. Every product family is validated against real patient outcomes before entering production.',
    stat: { value: '8', label: 'Partner clinics' },
  },
  {
    number: '03',
    title: 'ISO 13485 Production',
    body: 'Our 18,000 m² facility in Stuttgart maintains the highest level of medical device manufacturing certification. Every component is inspected, logged, and traceable from raw material to delivery.',
    stat: { value: '100%', label: 'Component traceability' },
  },
  {
    number: '04',
    title: 'Exceed, Not Just Meet',
    body: 'All FARATECH wheelchairs are tested to twice the minimum requirements of EN 12183, EN 12184, and ISO 7176. Our internal testing protocols exceed regulatory requirements by up to 200%.',
    stat: { value: '200%', label: 'Testing standard' },
  },
]

const certList = [
  { name: 'ISO 13485:2016', desc: 'Medical Device Quality Management' },
  { name: 'CE Mark', desc: 'European Conformity — MDR 2017/745' },
  { name: 'FDA 510(k)', desc: 'U.S. Market Clearance' },
  { name: 'TÜV Rheinland', desc: 'Third-Party Verified Quality' },
  { name: 'EN 12183', desc: 'Manual Wheelchair Standard' },
  { name: 'EN 12184', desc: 'Powered Wheelchair Standard' },
]

export function Engineering() {
  return (
    <section id="engineering" className="py-24 bg-[var(--brand-navy)] text-white relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 engineering-grid opacity-20" />

      {/* Red accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[var(--brand-red)]/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[var(--brand-red)]" />
              <span className="text-xs tracking-[0.25em] uppercase text-white/50 font-medium">
                Engineering Philosophy
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white text-balance">
              Built to standards
              <br />
              no regulation demands.
            </h2>
          </div>
          <p className="text-white/60 leading-relaxed text-lg">
            At FARATECH, compliance is the minimum — not the goal. We engineer to a higher standard
            because the people who depend on our products deserve nothing less.
          </p>
        </div>

        {/* Manufacturing image */}
        <div className="relative rounded-2xl overflow-hidden mb-20 aspect-video md:aspect-[21/8]">
          <Image
            src="/images/manufacturing.png"
            alt="FARATECH Stuttgart manufacturing facility — ISO 13485 certified"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-navy)]/90 to-[var(--brand-navy)]/20" />

          {/* Overlay content */}
          <div className="absolute inset-0 flex items-center px-10 md:px-16">
            <div className="max-w-lg">
              <p className="text-xs tracking-widest uppercase text-[var(--brand-red)] mb-3 font-medium">
                Stuttgart, Germany
              </p>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
                18,000 m² of Precision Manufacturing
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Our Stuttgart facility houses state-of-the-art CNC machining, robotic welding cells,
                and a dedicated cleanroom assembly environment. Over 340 engineers and technicians
                craft every wheelchair to exacting tolerances.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white border border-white/30 hover:bg-white/10 px-5 py-2.5 rounded-md transition-all"
              >
                Book a Factory Tour
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Stats overlay */}
          <div className="absolute bottom-6 right-6 md:right-10 flex gap-6">
            {[
              { value: '340+', label: 'Engineers' },
              { value: '18K m²', label: 'Facility' },
              { value: '2.4M+', label: 'Units Produced' },
            ].map((s) => (
              <div key={s.label} className="text-right">
                <div className="font-heading text-2xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-white/50">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Four engineering pillars */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="border border-white/10 hover:border-white/20 rounded-xl p-8 transition-all hover:bg-white/5 group"
            >
              <div className="flex items-start justify-between mb-5">
                <span className="font-heading text-5xl font-bold text-white/10 group-hover:text-[var(--brand-red)]/20 transition-colors select-none">
                  {pillar.number}
                </span>
                <div className="text-right">
                  <div className="font-heading text-2xl font-bold text-[var(--brand-red)]">
                    {pillar.stat.value}
                  </div>
                  <div className="text-xs text-white/40">{pillar.stat.label}</div>
                </div>
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">{pillar.title}</h3>
              <p className="text-white/60 leading-relaxed text-sm">{pillar.body}</p>
            </div>
          ))}
        </div>

        {/* Certifications grid */}
        <div className="border-t border-white/10 pt-16">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-px bg-[var(--brand-red)]" />
            <span className="text-xs tracking-[0.25em] uppercase text-white/50 font-medium">
              Certifications & Compliance
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certList.map((cert) => (
              <div
                key={cert.name}
                className="border border-white/10 rounded-lg p-4 text-center hover:border-[var(--brand-red)]/40 transition-all group"
              >
                <div className="font-heading font-bold text-white group-hover:text-[var(--brand-red)] transition-colors text-sm mb-1">
                  {cert.name}
                </div>
                <div className="text-[10px] text-white/40 leading-tight">{cert.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
