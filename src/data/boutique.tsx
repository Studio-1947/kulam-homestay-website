import { Package, Sparkles, Gift, ShoppingBag } from 'lucide-react';

export interface BoutiqueHighlight {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const boutiqueHighlights: BoutiqueHighlight[] = [
  {
    id: 'handwoven-textiles',
    icon: <Package className="w-6 h-6" />,
    title: 'Handwoven Textiles',
    description: 'Preserving age-old patterns crafted by the women of Mirik village.',
  },
  {
    id: 'organic-spices',
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Organic Spices',
    description: 'Small-batch, sun-dried spices sourced from local hill-side farmers.',
  },
  {
    id: 'mirik-pottery',
    icon: <Gift className="w-6 h-6" />,
    title: 'Mirik Pottery',
    description: 'Traditional clay vessels hand-shaped by village work masters.',
  },
  {
    id: 'natural-essentials',
    icon: <ShoppingBag className="w-6 h-6" />,
    title: 'Natural Essentials',
    description: 'Soaps and oils infused with wild-harvested herbs from our forests.',
  },
];