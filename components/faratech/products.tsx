'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Weight, Zap, Shield, Award } from 'lucide-react'

const products = [
  {
    id: 'active',
    series: 'ActivePro Series',
    tagline: 'Ultralight Manual',
    headline: 'Performance Without Compromise',
    description:
      'Engineered for active lifestyle users who demand the very best. T700 aerospace carbon fiber construction delivers exceptional rigidity at just 7.8 kg. Custom-configured to each individual\'s biomechanics.',
    image: '/images/product-active.png',
    badge: 'Best Seller',
    badgeColor: 'bg-[var(--brand-red)] text-white',
    specs: [
      { icon: Weight, label: 'From 7.8 kg', desc: 'Frame weight' },
      { icon: Shield, label: 'T700 Carbon', desc: 'Fiber grade' },
      { icon: Award, label: 'ISO 7176', desc: 'Certified' },
    ],
    models: ['ActivePro X1', 'ActivePro X1 Ti', 'ActivePro Sport'],
    accent: 'var(--brand-red)',
  },
  {
    id: 'power',
    series: 'PowerDrive Series',
    tagline: 'Intelligent Powered Mobility',
    headline: 'Smart Technology, Infinite Freedom',
    description:
      'Adaptive drive control with AI-assisted terrain recognition. 40 km range on a single charge. Modular seating systems integrate with clinical positioning protocols for complex rehabilitation needs.',
    image: '/images/product-power.png',
    badge: 'New 2025',
    badgeColor: 'bg-[var(--brand-navy)] text-white',
    specs: [
      { icon: Zap, label: '40 km Range', desc: 'Per charge' },
      { icon: Shield, label: 'IP44 Rated', desc: 'All-weather' },
      { icon: Award, label: 'CE + FDA', desc: 'Certified' },
    ],
    models: ['PowerDrive P3', 'PowerDrive P3+', 'PowerDrive Rehab'],
    accent: 'var(--brand-navy)',
  },
  {
    id: 'rehab',
    series: 'CliniFlex Series',
    tagline: 'Clinical Positioning',
    headline: 'Clinical Excellence at Every Setting',
    description:
      'Developed in partnership with leading European rehabilitation clinics. Infinite micro-adjustment capability enables precise positioning for the most complex clinical needs. Trusted in 400+ hospitals.',
    image: '/images/product-rehab.png',
    badge: 'Clinical',
    badgeColor: 'bg-emerald-600 text-white',
    specs: [
      { icon: Shield, label: '360° Adjust', desc: 'Positioning' },
      { icon: Award, label: 'MDR 2017', desc: 'Compliant' },
      { icon: Weight, label: '400+ Clinics', desc: 'Trusted by' },
    ],
    models: ['CliniFlex C1', 'CliniFlex C2 Pro', 'CliniFlex Paed'],
    accent: '#059669',
  },
]

export function Products() {
  const [activeTab, setActiveTab] = useState(0)
  const product = products[activeTab]

  return (
    <section id="products" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[var(--brand-red)]" />
              <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground font-medium">
                Product Portfolio
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--brand-navy)] text-balance">
              Three Series.
              <br />
              One Standard of Excellence.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm leading-relaxed md:text-right">
            Every FARATECH wheelchair is engineered to exacting standards and individually
            configured for the user&apos;s specific requirements.
          </p>
        </div>

        {/* Product tabs */}
        <div className="flex gap-2 mb-12 bg-muted/50 p-1.5 rounded-lg w-fit">
          {products.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-md text-sm font-semibold transition-all ${
                activeTab === i
                  ? 'bg-white text-[var(--brand-navy)] shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {p.series.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Product detail */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative bg-muted/30 rounded-2xl overflow-hidden aspect-square flex items-center justify-center group">
            {/* Background pattern */}
            <div className="absolute inset-0 engineering-grid opacity-40" />

            {/* Badge */}
            <div className={`absolute top-6 left-6 text-xs font-bold px-3 py-1.5 rounded-full z-10 ${product.badgeColor}`}>
              {product.badge}
            </div>

            <Image
              src={product.image}
              alt={`${product.series} wheelchair`}
              width={500}
              height={500}
              className="object-contain w-4/5 h-4/5 transition-transform duration-700 group-hover:scale-105"
            />

            {/* Spec overlay bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-border p-4">
              <div className="flex justify-around">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="flex items-center gap-2">
                    <spec.icon size={14} className="text-[var(--brand-red)]" />
                    <div>
                      <div className="text-xs font-bold text-[var(--brand-navy)]">{spec.label}</div>
                      <div className="text-[10px] text-muted-foreground">{spec.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                  style={{ color: product.accent, background: `${product.accent}15` }}
                >
                  {product.tagline}
                </span>
              </div>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-[var(--brand-navy)] mb-4">
                {product.headline}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {product.description}
              </p>
            </div>

            {/* Model variants */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
                Available Models
              </p>
              <div className="flex flex-wrap gap-2">
                {product.models.map((model) => (
                  <span
                    key={model}
                    className="text-sm font-medium px-4 py-2 border border-border rounded-md text-foreground hover:border-[var(--brand-navy)] hover:bg-[var(--brand-navy)]/5 transition-colors cursor-pointer"
                  >
                    {model}
                  </span>
                ))}
              </div>
            </div>

            {/* What makes it special */}
            <div className="bg-muted/40 rounded-xl p-5 border border-border">
              <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
                Engineering Highlights
              </p>
              <ul className="space-y-2">
                {[
                  'Individually configured to user biomechanics',
                  'Tested to exceed EN/ISO standards by 200%',
                  '5-year frame warranty — industry leading',
                  'Global service network in 60+ countries',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-red)] mt-1.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-[var(--brand-navy)] hover:bg-[var(--brand-navy-light)] text-white font-semibold px-6 py-3.5 rounded-md transition-all"
              >
                Configure & Quote
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-border hover:border-[var(--brand-navy)] text-foreground font-medium px-6 py-3.5 rounded-md transition-all hover:bg-muted"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </div>

        {/* Product grid preview — other series */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="grid md:grid-cols-3 gap-6">
            {products
              .filter((_, i) => i !== activeTab)
              .map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActiveTab(products.indexOf(p))}
                  className="group text-left bg-muted/30 hover:bg-white border border-border hover:border-[var(--brand-navy)]/20 rounded-xl p-6 transition-all hover:shadow-lg"
                >
                  <div className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-4 ${p.badgeColor}`}>
                    {p.tagline}
                  </div>
                  <h4 className="font-heading font-bold text-[var(--brand-navy)] text-lg mb-2">
                    {p.series}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">{p.headline}</p>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-red)] group-hover:gap-3 transition-all">
                    Explore Series
                    <ArrowRight size={14} />
                  </div>
                </button>
              ))}
            {products.filter((_, i) => i !== activeTab).length < 2 && (
              <div className="bg-muted/20 border border-border rounded-xl p-6 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-sm font-semibold text-[var(--brand-navy)] mb-1">Paediatric Series</p>
                  <p className="text-xs text-muted-foreground">Coming 2025</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
