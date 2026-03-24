import { Heart, Users, Leaf, Book } from 'lucide-react';

export interface CultureHighlight {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const cultureHighlights: CultureHighlight[] = [
  {
    id: 'warm-hospitality',
    icon: <Heart className="w-6 h-6" />,
    title: 'Warm Hospitality',
    description: 'Experience genuine care that makes you feel like family from the moment you arrive.',
  },
  {
    id: 'community-living',
    icon: <Users className="w-6 h-6" />,
    title: 'Community Living',
    description: 'Engage with local traditions and create meaningful connections with the village.',
  },
  {
    id: 'sustainable-heart',
    icon: <Leaf className="w-6 h-6" />,
    title: 'Sustainable Heart',
    description: 'We honor nature through organic farming, rainwater harvesting, and eco-living.',
  },
  {
    id: 'ancient-wisdom',
    icon: <Book className="w-6 h-6" />,
    title: 'Ancient Wisdom',
    description: 'Learn traditional cooking and time-honored crafts passed down through generations.',
  },
];