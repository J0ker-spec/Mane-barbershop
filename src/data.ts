export const business = {
  name: 'Mane Barbershop',
  shortName: 'Mane',
  tagline: 'Precision grooming for the modern man.',
  announcement: 'BOOK ONLINE & GET 10% OFF YOUR FIRST VISIT',
  phone: '+1 (212) 555-0148',
  email: 'hello@manebarbershop.com',
  address: '123 Barber Street, New York, NY 10001',
  hours: 'Mon - Sun / 9:00 AM - 8:00 PM',
  instagram: '@mane.barbershop',
}

export type Service = {
  id: string
  name: string
  description: string
  duration: string
  price: number
  category: string
  image: string
}

export const services: Service[] = [
  {
    id: 'signature',
    name: 'Signature Haircut',
    description: 'A tailored cut finished with styling.',
    duration: '45 min',
    price: 35,
    category: 'Haircuts',
    image: 'https://imgs.search.brave.com/3FmLhrib-HFFSPMF5H7XaUZtwl5wWJ_Yn457TzG4wwM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bWVuc2hhaXJzdHls/ZXN0b2RheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDgvQ3VybHktSGFp/ci1Nb2hhd2std2l0/aC1Mb3ctU2tpbi1G/YWRlLWFuZC1CZWFy/ZC5qcGc',
  },
  {
    id: 'fade',
    name: 'Skin Fade',
    description: 'Clean, close and blended to perfection.',
    duration: '60 min',
    price: 40,
    category: 'Haircuts',
    image: 'https://imgs.search.brave.com/zqOOZYDndJX4946c4gn2Y3vx36FUo1VnAeONcxzW3sY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzAw/MjkvMDg2OC80Mzk3/L2ZpbGVzL3NraW4t/ZmFkZS1jdXJseS1o/YWlyLW1lbi5wbmc_/dj0xNzU3NjczNjk0',
  },
  {
    id: 'beard',
    name: 'Beard Trim',
    description: 'Shape, line-up and hot towel finish.',
    duration: '30 min',
    price: 20,
    category: 'Beard',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'combo',
    name: 'Hair & Beard',
    description: 'The complete Mane grooming ritual.',
    duration: '75 min',
    price: 50,
    category: 'Grooming',
    image: 'https://imgs.search.brave.com/8ub9uyf1efrfw5INsvJj9YgNs1Imx-KcTYu1igdurPw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzY5LzY4LzE3/LzM2MF9GXzQ2OTY4/MTc0NF9GWld0NkxL/WExvQ1U0WFZ2OENq/eDZaRm13TmxOTG03/eC5qcGc',
  },
  {
    id: 'shave',
    name: 'Hot Towel Shave',
    description: 'Classic straight razor, reimagined.',
    duration: '40 min',
    price: 30,
    category: 'Shave',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'kids',
    name: 'Kids Cut',
    description: 'Patient, precise cuts for little ones.',
    duration: '40 min',
    price: 25,
    category: 'Kids',
    image: 'https://images.unsplash.com/photo-1621647322203-1d31d6c86c12?auto=format&fit=crop&w=900&q=85',
  },
]

export const gallery = [
  {
    title: 'The signature fade',
    category: 'Fades',
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0d0a7c2a?auto=format&fit=crop&w=1200&q=85',
    tall: true,
  },
  {
    title: 'Craft over trend',
    category: 'Haircuts',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'A clean finish',
    category: 'Beard',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Inside Mane',
    category: 'Shop',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=85',
    wide: true,
  },
]