import { Star, TreePine, Home, Utensils, Sun, Moon } from 'lucide-react';

export interface SpecialFeature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const specialFeatures: SpecialFeature[] = [
  { id: 'nature', icon: <TreePine size={18} />, title: 'Pristine Nature', description: 'Lush Mirik hills.' },
  { id: 'soul', icon: <Home size={18} />, title: 'Authentic Soul', description: 'Traditional builds.' },
  { id: 'food', icon: <Utensils size={18} />, title: 'Farm-to-Table', description: 'Organic local meals.' },
  { id: 'luxury', icon: <Sun size={18} />, title: 'Quiet Luxury', description: 'True digital detox.' },
  { id: 'wellness', icon: <Moon size={18} />, title: 'Find Your Center', description: 'Yoga & Meditation.' },
  { id: 'care', icon: <Star size={18} />, title: 'Intimate Care', description: 'Limited guest families.' },
];