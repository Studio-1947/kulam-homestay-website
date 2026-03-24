import Image from 'next/image';

export interface BoutiqueHighlight {
  id: string;
  image: string;
  title: string;
  description: string;
}

export const boutiqueHighlights: BoutiqueHighlight[] = [
  {
    id: 'handwoven-textiles',
    image: '/textiles.png',
    title: 'Handwoven Textiles',
    description: 'Preserving age-old patterns crafted by the women of Mirik village.',
  },
  {
    id: 'organic-spices',
    image: '/spices.png',
    title: 'Organic Spices',
    description: 'Small-batch, sun-dried spices sourced from local hill-side farmers.',
  },
  {
    id: 'mirik-pottery',
    image: '/pottery.png',
    title: 'Mirik Pottery',
    description: 'Traditional clay vessels hand-shaped by village work masters.',
  },
  {
    id: 'natural-essentials',
    image: '/natural.png',
    title: 'Natural Essentials',
    description: 'Soaps and oils infused with wild-harvested herbs from our forests.',
  },
];