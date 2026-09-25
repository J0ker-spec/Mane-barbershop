import { ArrowRight, Clock3 } from 'lucide-react'
import { services, type Service } from '../data'

type ServicesSectionProps = { onBook: (service: Service) => void }

export function ServicesSection({ onBook }: ServicesSectionProps) {
  return (
    <section className="services-section" id="services">
      <div className="section-intro">
        <p className="eyebrow">THE MENU</p>
        <h2>Precision in<br /><em>every detail.</em></h2>
        <p>From timeless cuts to modern styles, every appointment is tailored to your look.</p>
        <a className="text-link" href="#services-list">View all services <ArrowRight size={15} /></a>
      </div>
      <div className="service-grid" id="services-list">
        {services.slice(0, 4).map((service, index) => (
          <article className="service-card" key={service.id}>
            <div className="service-image"><img src={service.image} alt={service.name} /><span>0{index + 1}</span></div>
            <div className="service-meta"><div><h3>{service.name}</h3><p>{service.description}</p></div><strong>${service.price}</strong></div>
            <div className="service-bottom"><span><Clock3 size={14} /> {service.duration}</span><button onClick={() => onBook(service)}>Book <ArrowRight size={14} /></button></div>
          </article>
        ))}
      </div>
    </section>
  )
}