import { business } from '../data'

export function SiteFooter() {
  return <footer><div className="footer-brand"><a className="wordmark wordmark-light" href="#top"><span>MANE</span><small>BARBERSHOP</small></a><p>{business.tagline}<br />Classic technique. Modern style.</p></div><div className="footer-column"><strong>EXPLORE</strong><a href="#about">About</a><a href="#services">Services</a><a href="#gallery">Gallery</a></div><div className="footer-column"><strong>CONNECT</strong><a href="#contact">Contact</a><a href={`mailto:${business.email}`}>{business.email}</a><a href="#instagram">Instagram</a></div><div className="footer-note"><p>Built with intention<br />in New York City.</p><span>Copyright 2024 Mane Barbershop</span></div></footer>
}