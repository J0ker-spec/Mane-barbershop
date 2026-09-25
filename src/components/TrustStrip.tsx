import { CalendarDays, Check, Scissors, Sparkles } from 'lucide-react'

const benefits = [
  { label: 'EXPERT BARBERS', detail: 'Skilled professionals who care.', icon: Scissors },
  { label: 'PREMIUM PRODUCTS', detail: 'Professional grooming products.', icon: Sparkles },
  { label: 'EASY BOOKING', detail: 'Book online in seconds.', icon: CalendarDays },
  { label: 'HYGIENE FIRST', detail: 'Clean, prepared stations.', icon: Check },
]

export function TrustStrip() {
  return (
    <section className="trust-strip">
      {benefits.map(({ label, detail, icon: Icon }) => (
        <div key={label}><Icon /><strong>{label}</strong><span>{detail}</span></div>
      ))}
    </section>
  )
}