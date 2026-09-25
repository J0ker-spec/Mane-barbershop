import { Scissors } from 'lucide-react'
import { business } from '../data'

export function AnnouncementBar() {
  return (
    <div className="announcement">
      <Scissors size={13} />
      {business.announcement}
      <span>-</span>
      <a href="#booking">BOOK YOUR SLOT</a>
    </div>
  )
}