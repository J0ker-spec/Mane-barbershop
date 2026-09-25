import { ArrowRight, Menu, X } from 'lucide-react'
import { business } from '../data'

type SiteHeaderProps = {
  menuOpen: boolean
  onMenuToggle: () => void
  onCloseMenu: () => void
  onBook: () => void
}

export function SiteHeader({ menuOpen, onMenuToggle, onCloseMenu, onBook }: SiteHeaderProps) {
  const links = ['about', 'services', 'gallery', 'contact']

  return (
    <header className="nav">
      <a className="wordmark" href="#top" aria-label={`${business.name} home`}>
        <span>MANE</span>
        <small>BARBERSHOP</small>
      </a>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        {links.map((link) => (
          <a key={link} href={`#${link}`} onClick={onCloseMenu}>
            {link}
          </a>
        ))}
      </nav>
      <button className="nav-book" onClick={onBook}>
        BOOK NOW <ArrowRight size={15} />
      </button>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={onMenuToggle}>
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
  )
}