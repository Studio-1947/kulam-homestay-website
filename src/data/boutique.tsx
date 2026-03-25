import Image from 'next/image';

export interface BoutiqueHighlight {
  id: string;
  image: string;
  title: string;
  description: string;
}

export const boutiqueHighlights: BoutiqueHighlight[] = [
  {
    id: 'garden-fresh-tea',
    image: '/product1.jpg',
    title: 'Garden Fresh Tea',
    description: 'Freshly plucked leaves from our private tea garden, offering an authentic Mirik tea-tasting experience.',
  },
  {
    id: 'pure-hill-honey',
    image: '/natural.png',
    title: 'Pure Hill Honey',
    description: '100% natural, wild-harvested honey from the forests of Mirik, rich in flavor and nutrients.',
  },
  {
    id: 'organic-turmeric',
    image: '/spices.png',
    title: 'Organic Turmeric',
    description: 'Locally grown, sun-dried, and hand-ground turmeric from our own village farms.',
  },
  {
    id: 'local-lifestyle',
    image: '/textiles.png',
    title: 'Local Hill Products',
    description: 'Experience authentic hill life with our curated selection of seasonal local products.',
  },
];