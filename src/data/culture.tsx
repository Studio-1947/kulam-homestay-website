import { Heart, Users, Leaf, Book } from 'lucide-react';

export interface CultureHighlight {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const cultureHighlights: CultureHighlight[] = [
  {
    id: 'mountain-hospitality',
    icon: <Heart className="w-6 h-6" />,
    title: 'Warm Hospitality',
    description: 'Experience genuine care that makes you feel like family, where every guest is a part of our mountain home.',
  },
  {
    id: 'tea-garden-life',
    icon: <Users className="w-6 h-6" />,
    title: 'Tea Garden Life',
    description: 'Engage with the rhythms of our hillside tea garden, from plucking sessions to refreshing tea-tasting.',
  },
  {
    id: 'nature-connection',
    icon: <Leaf className="w-6 h-6" />,
    title: 'Peaceful Nature',
    description: 'Discover the calm of pine forests and the fresh air of Mirik, away from the noise of city life.',
  },
  {
    id: 'local-traditions',
    icon: <Book className="w-6 h-6" />,
    title: 'Local Lifestyle',
    description: 'Immerse yourself in authentic mountain traditions and enjoy delicious, home-cooked local meals.',
  },
];