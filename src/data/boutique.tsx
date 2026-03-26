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
    image: '/tea.png',
    title: 'Garden Fresh Tea',
    description: 'Freshly plucked leaves from our private tea garden, offering an authentic Mirik tea-tasting experience.',
  },
  {
    id: 'pure-hill-honey',
    image: '/honey.png',
    title: 'Pure Hill Honey',
    description: '100% natural, wild-harvested honey from the forests of Mirik, rich in flavor and nutrients.',
  },
  {
    id: 'organic-turmeric',
    image: '/turmeric.png',
    title: 'Organic Turmeric',
    description: 'Locally grown, sun-dried, and hand-ground turmeric from our own village farms.',
  },
  {
    id: 'bay-leaves',
    image: '/bayleaves.png',
    title: 'Bay Leaves',
    description: 'Hand-picked dried bay leaves from our local farms, perfect for authentic Himalayan cuisine.',
  },
];