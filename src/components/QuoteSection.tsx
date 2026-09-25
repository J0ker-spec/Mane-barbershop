import { ArrowRight } from 'lucide-react'

type QuoteSectionProps = { onBook: () => void }

export function QuoteSection({ onBook }: QuoteSectionProps) {
  return <section className="quote-section"><div><p className="eyebrow eyebrow-light">THE MANE EXPERIENCE</p><h2>Leave sharper.<br /><em>Live bolder.</em></h2><p>Good grooming is not about changing who you are. It is about making the best version unmistakably visible.</p><button className="button button-light" onClick={onBook}>Book your appointment <ArrowRight size={16} /></button></div></section>
}