import { ArrowRight, Clock3, MapPin } from 'lucide-react'
import { business } from '../data'

type ContactSectionProps = { onBook: () => void }

export function ContactSection({ onBook }: ContactSectionProps) {
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(business.address)}&output=embed`

  return (
    <section className="contact-strip" id="contact">
      <div>
        <p className="eyebrow">COME BY</p>
        <h2>Make time<br /><em>for yourself.</em></h2>
      </div>
      <div className="contact-details">
        <p><MapPin size={16} /> {business.address}</p>
        <p><Clock3 size={16} /> {business.hours}</p>
        <a href={`tel:${business.phone}`}><ArrowRight size={16} /> {business.phone}</a>
      </div>
      <div className="contact-map">
        <iframe src={mapUrl} title={`Map showing ${business.name}`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        <span><MapPin size={13} /> FIND US IN NEW YORK</span>
      </div>
      <button className="button button-dark" onClick={onBook}>Book now <ArrowRight size={16} /></button>
    </section>
  )
}