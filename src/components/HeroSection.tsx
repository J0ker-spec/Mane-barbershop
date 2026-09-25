import { ArrowRight, Star } from 'lucide-react'

type HeroSectionProps = {
  onBook: () => void
}

export function HeroSection({ onBook }: HeroSectionProps) {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">LOOK GOOD. FEEL CONFIDENT.</p>
        <h1>
          More than
          <br />
          <em>a haircut.</em>
        </h1>
        <p className="hero-lede">Precision cuts, clean fades, and elevated grooming for the modern man.</p>
        <div className="hero-actions">
          <button className="button button-dark" onClick={onBook}>
            Book your appointment <ArrowRight size={16} />
          </button>
          <a className="text-link" href="#services">
            View services <ArrowRight size={15} />
          </a>
        </div>
        <div className="proof">
          <div className="stars">
            {Array.from({ length: 5 }, (_, index) => <Star key={index} size={14} fill="currentColor" />)}
          </div>
          <span>4.9 rating / 1k+ happy clients</span>
        </div>
      </div>
      <div className="hero-image">
        <img src="https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=1400&q=90" alt="Barber giving a precision haircut in a warm, modern shop" />
        <div className="image-caption"><span>01</span><span>THE MANE STANDARD</span></div>
      </div>
    </section>
  )
}