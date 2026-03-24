export interface NavLink {
  id: string;
  label: string;
  subtitle: string;
}

export const navLinks: NavLink[] = [
  { id: 'home', label: 'Home', subtitle: 'Return to start' },
  { id: 'culture', label: 'Our Story', subtitle: 'Tradition & Ethos' },
  { id: 'rooms', label: 'Sanctuaries', subtitle: 'View the rooms' },
  { id: 'boutique', label: 'Boutique', subtitle: 'Curated goods' },
  { id: 'special', label: 'Book Stay', subtitle: 'Reserve your time' },
];