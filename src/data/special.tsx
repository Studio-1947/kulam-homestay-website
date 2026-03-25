import { Star, TreePine, Leaf, Utensils, Sun, Moon } from 'lucide-react';

export interface SpecialFeature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const specialFeatures: SpecialFeature[] = [
  { id: 'nature', icon: <TreePine size={18} />, title: 'Lush Forests', description: 'Pine-covered hills.' },
  { id: 'tea', icon: <Leaf size={18} />, title: 'Tea Garden', description: 'In-house plantation.' },
  { id: 'food', icon: <Utensils size={18} />, title: 'Local Meals', description: 'Authentic home cooking.' },
  { id: 'view', icon: <Sun size={18} />, title: 'Valley Views', description: 'Breathtaking sunsets.' },
  { id: 'peace', icon: <Moon size={18} />, title: 'Pure Calm', description: 'Away from city noise.' },
  { id: 'care', icon: <Star size={18} />, title: 'Warm Care', description: 'Family-like atmosphere.' },
];