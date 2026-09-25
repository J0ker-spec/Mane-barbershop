import { gallery } from '../data'

type GallerySectionProps = { onBook: () => void }

export function GallerySection({ onBook }: GallerySectionProps) {
  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-heading"><div><p className="eyebrow">THE WORK</p><h2>Crafted for<br /><em>your confidence.</em></h2></div><p>Classic technique. Modern style.<br />A closer look at the Mane standard.</p></div>
      <div className="gallery-grid">
        {gallery.map((item) => <a className={`gallery-item ${item.tall ? 'tall' : ''} ${item.wide ? 'wide' : ''}`} href="#booking" key={item.title} onClick={onBook}><img src={item.image} alt={item.title} /><div><span>{item.category}</span><strong>{item.title}</strong></div></a>)}
      </div>
    </section>
  )
}