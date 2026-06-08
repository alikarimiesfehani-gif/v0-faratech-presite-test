'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  {
    value: 35,
    suffix: '+',
    label: 'Years of Innovation',
    desc: 'Founded in Stuttgart, 1989',
  },
  {
    value: 2400000,
    suffix: '+',
    label: 'Wheelchairs Delivered',
    desc: 'Worldwide since founding',
    format: '2.4M',
  },
  {
    value: 60,
    suffix: '+',
    label: 'Countries Served',
    desc: 'Global distribution network',
  },
  {
    value: 1200,
    suffix: '+',
    label: 'Healthcare Partners',
    desc: 'Hospitals & rehab centers',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Partner Satisfaction',
    desc: '2024 Global Survey Results',
  },
  {
    value: 340,
    suffix: '+',
    label: 'Engineering Staff',
    desc: 'R&D, production & service',
  },
]

const trustedBy = [
  'Charité Berlin',
  'Mayo Clinic',
  'NHS England',
  'Kessler Institute',
  'REHAB Basel',
  'Hôpital Lariboisière',
  'IRCCS Santa Lucia',
  'AKH Vienna',
]

function useCounter(target: number, duration = 2000, trigger: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!trigger) return
    const start = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(target * eased))
      if (progress >= 1) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, trigger])

  return count
}

function StatCard({
  stat,
  triggered,
  index,
}: {
  stat: (typeof stats)[0]
  triggered: boolean
  index: number
}) {
  const count = useCounter(stat.value, 2000 + index * 100, triggered)

  const displayValue = stat.format
    ? stat.format
    : stat.value >= 1000000
    ? `${(count / 1000000).toFixed(1)}M`
    : count.toLocaleString()

  return (
    <div className="text-center group">
      <div className="font-heading text-5xl md:text-6xl font-bold text-[var(--brand-navy)] mb-2 transition-colors group-hover:text-[var(--brand-red)]">
        {triggered ? displayValue : '0'}
        {stat.suffix}
      </div>
      <div className="font-semibold text-foreground text-sm mb-1">{stat.label}</div>
      <div className="text-xs text-muted-foreground">{stat.desc}</div>
    </div>
  )
}

export function Stats() {
  const [triggered, setTriggered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center justify-center gap-3 mb-16">
          <div className="h-px w-16 bg-[var(--brand-red)]" />
          <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground font-medium">
            FARATECH by the Numbers
          </span>
          <div className="h-px w-16 bg-[var(--brand-red)]" />
        </div>

        {/* Stats grid */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} triggered={triggered} index={i} />
          ))}
        </div>

        {/* Trusted by */}
        <div className="border-t border-border pt-16">
          <p className="text-center text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8 font-medium">
            Trusted by Leading Healthcare Institutions
          </p>
          <div className="overflow-hidden">
            <div className="flex animate-ticker whitespace-nowrap">
              {[...trustedBy, ...trustedBy].map((name, i) => (
                <div
                  key={i}
                  className="inline-flex items-center mx-10 flex-shrink-0"
                >
                  <span className="text-sm font-semibold text-[var(--brand-navy)]/40 hover:text-[var(--brand-navy)] transition-colors whitespace-nowrap">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
