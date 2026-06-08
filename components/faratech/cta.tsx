'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react'

const inquiryTypes = [
  'Product Information',
  'Request a Quote',
  'Distributor Partnership',
  'Clinical Consultation',
  'Service & Repair',
  'Factory Tour',
]

export function CTA() {
  const [submitted, setSubmitted] = useState(false)
  const [selected, setSelected] = useState('')
  const [form, setForm] = useState({
    name: '',
    email: '',
    organization: '',
    country: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[var(--brand-red)]" />
            <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground font-medium">
              Start the Conversation
            </span>
            <div className="w-8 h-px bg-[var(--brand-red)]" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--brand-navy)] mb-6 text-balance">
            Ready to Experience
            <br />
            FARATECH Engineering?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our clinical and commercial teams are ready to help — whether you need a single
            wheelchair or a hospital-wide procurement partnership.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="bg-[var(--brand-navy)] rounded-2xl p-8 text-white">
              <h3 className="font-heading text-lg font-bold mb-6">Get in Touch Directly</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Phone size={16} className="text-[var(--brand-red)] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-white/50 mb-1">International Sales</div>
                    <a href="tel:+4971100000" className="text-sm font-medium hover:text-[var(--brand-red)] transition-colors">
                      +49 711 000 00
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={16} className="text-[var(--brand-red)] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-white/50 mb-1">Clinical Inquiries</div>
                    <a href="mailto:clinical@faratech.com" className="text-sm font-medium hover:text-[var(--brand-red)] transition-colors">
                      clinical@faratech.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-[var(--brand-red)] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-white/50 mb-1">Headquarters</div>
                    <address className="text-sm font-medium not-italic leading-relaxed">
                      FARATECH GmbH<br />
                      Feuerbach, 70469 Stuttgart<br />
                      Germany
                    </address>
                  </div>
                </div>
              </div>
            </div>

            {/* Response time */}
            <div className="border border-border rounded-xl p-6 bg-white">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm font-semibold text-[var(--brand-navy)]">
                  Available for Inquiries
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our team responds to all inquiries within 24 business hours. Clinical and emergency
                service requests are prioritised.
              </p>
              <div className="mt-4 pt-4 border-t border-border flex gap-4 text-center">
                <div>
                  <div className="font-heading font-bold text-[var(--brand-navy)]">{'< 24h'}</div>
                  <div className="text-xs text-muted-foreground">Response time</div>
                </div>
                <div className="w-px bg-border" />
                <div>
                  <div className="font-heading font-bold text-[var(--brand-navy)]">9 Languages</div>
                  <div className="text-xs text-muted-foreground">Supported</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white border border-border rounded-2xl p-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={32} className="text-emerald-600" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[var(--brand-navy)] mb-3">
                  Message Received
                </h3>
                <p className="text-muted-foreground max-w-sm leading-relaxed">
                  Thank you for your inquiry. A FARATECH specialist will contact you within 24
                  business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-medium text-[var(--brand-red)] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-heading text-xl font-bold text-[var(--brand-navy)]">
                  Send us a Message
                </h3>

                {/* Inquiry type */}
                <div>
                  <label className="text-xs font-semibold tracking-widest uppercase text-muted-foreground block mb-3">
                    Inquiry Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {inquiryTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setSelected(type)}
                        className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-all ${
                          selected === type
                            ? 'bg-[var(--brand-navy)] text-white border-[var(--brand-navy)]'
                            : 'border-border text-muted-foreground hover:border-[var(--brand-navy)]/30'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest block mb-2">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-input rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-navy)]/20 focus:border-[var(--brand-navy)] transition-all"
                      placeholder="Dr. Anna Schmidt"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest block mb-2">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-input rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-navy)]/20 focus:border-[var(--brand-navy)] transition-all"
                      placeholder="anna@hospital.de"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest block mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      value={form.organization}
                      onChange={(e) => setForm({ ...form, organization: e.target.value })}
                      className="w-full border border-input rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-navy)]/20 focus:border-[var(--brand-navy)] transition-all"
                      placeholder="Charité Berlin"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest block mb-2">
                      Country
                    </label>
                    <select
                      value={form.country}
                      onChange={(e) => setForm({ ...form, country: e.target.value })}
                      className="w-full border border-input rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-navy)]/20 focus:border-[var(--brand-navy)] transition-all bg-white"
                    >
                      <option value="">Select Country</option>
                      <option>Germany</option>
                      <option>United Kingdom</option>
                      <option>United States</option>
                      <option>France</option>
                      <option>Netherlands</option>
                      <option>Switzerland</option>
                      <option>Austria</option>
                      <option>Australia</option>
                      <option>Singapore</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest block mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-input rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-navy)]/20 focus:border-[var(--brand-navy)] transition-all resize-none"
                    placeholder="Tell us about your requirements — number of units, patient needs, or partnership interest..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <p className="text-xs text-muted-foreground max-w-xs leading-relaxed">
                    By submitting, you agree to our Privacy Policy. We never share your data with
                    third parties.
                  </p>
                  <button
                    type="submit"
                    className="group flex-shrink-0 inline-flex items-center gap-2 bg-[var(--brand-red)] hover:bg-[var(--brand-red-dark)] text-white font-semibold px-8 py-3.5 rounded-md transition-all hover:shadow-lg"
                  >
                    Send Inquiry
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
