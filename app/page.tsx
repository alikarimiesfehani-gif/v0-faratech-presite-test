import { Navigation } from '@/components/faratech/navigation'
import { Hero } from '@/components/faratech/hero'
import { Stats } from '@/components/faratech/stats'
import { Products } from '@/components/faratech/products'
import { Engineering } from '@/components/faratech/engineering'
import { Solutions } from '@/components/faratech/solutions'
import { Testimonials } from '@/components/faratech/testimonials'
import { CTA } from '@/components/faratech/cta'
import { Footer } from '@/components/faratech/footer'

export default function Page() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <Products />
        <Engineering />
        <Solutions />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
