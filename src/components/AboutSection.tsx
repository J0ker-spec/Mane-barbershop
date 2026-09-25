import { ArrowRight } from 'lucide-react'

export function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-copy">
        <p className="eyebrow eyebrow-light">OUR PHILOSOPHY</p>
        <h2>Your style.<br /><em>Our precision.</em></h2>
        <p>A premium grooming experience built around precision, comfort, and confidence. We believe the best cut is the one that feels unmistakably yours.</p>
        <a className="light-link" href="#contact">Our story <ArrowRight size={15} /></a>
        <span className="signature">Mane</span>
      </div>
      <div className="about-image">
        <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1400&q=85" alt="Warm, refined interior of the Mane barbershop" />
        <span>EST. 2018 / NEW YORK</span>
      </div>
    </section>
  )
}