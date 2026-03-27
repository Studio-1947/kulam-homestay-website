export interface NavLink {
  id: string;
  label: string;
  subtitle: string;
  href?: string;
}

export const navLinks: NavLink[] = [
  { id: 'home', label: 'Home', subtitle: 'Welcome' },
  { id: 'culture', label: 'Our Culture', subtitle: 'Tradition & Ethos' },
  { id: 'rooms', label: 'Our Rooms', subtitle: 'View the rooms' },
  { id: 'boutique', label: 'Local Boutique Shop', subtitle: 'Handcrafted goods' },
  { id: 'contact', label: 'Contact', subtitle: 'Get in touch', href: 'https://wa.me/918250026001' },
];