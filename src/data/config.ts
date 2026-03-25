export interface SiteConfig {
  name: string;
  tagline: string;
  email: string;
  phone: string;
  address: string;
  location: string;
  socialLinks: {
    instagram: string;
    facebook: string;
    youtube: string;
  };
  established: string;
}

export const siteConfig: SiteConfig = {
  name: 'Kulam Homestay',
  tagline: "A Peaceful Mountain Retreat in Mirik",
  email: 'stay@kulamhomestay.com',
  phone: '+91 XXXXX XXXXX',
  address: 'Mirik, Darjeeling, West Bengal',
  location: 'Mirik, West Bengal, India',
  socialLinks: {
    instagram: 'https://www.instagram.com/kulamhomestay2025/',
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com',
  },
  established: 'MMXXIV',
};