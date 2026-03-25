export interface Room {
  id: string;
  title: string;
  type: string;
  view: string;
  amenities: string;
  description: string;
  image: string;
}

export const rooms: Room[] = [
  {
    id: 'tea-garden-view',
    title: 'Tea Garden View Room',
    type: 'Boutique Room',
    view: 'Tea Garden & Valley View',
    amenities: 'Cozy Double Bed • Tea Station • Fresh Linens',
    description: 'Wake up to the serene sight of our private tea garden. This room offers a peaceful atmosphere where you can watch the morning mist roll over the tea bushes and enjoy the fresh mountain air.',
    image: '/room1.jpg',
  },
  {
    id: 'pine-forest-retreat',
    title: 'Pine Forest Retreat',
    type: 'Cozy Room',
    view: 'Pine Forest & Hills',
    amenities: 'Queen Bed • Reading Nook • Forest View Windows',
    description: 'Nestled near the lush pine forests of Mirik, this room provides a cool, crisp environment. Perfect for those seeking calm and an authentic connection with nature.',
    image: '/room2.jpg',
  },
  {
    id: 'valley-panorama',
    title: 'Valley Panorama Suite',
    type: 'Premium Suite',
    view: '270° Mountain & Valley View',
    amenities: 'King Bed • Large Windows • Private Sitting Area',
    description: 'Our most spacious room, featuring expansive windows that frame the rolling hills. Enjoy the sunset over the valley from the comfort of your room, reflecting the true beauty of hill life.',
    image: '/room3.jpg',
  },
  {
    id: 'authentic-hill-stay',
    title: 'Authentic Hill Stay',
    type: 'Standard Room',
    view: 'Village & Garden View',
    amenities: 'Comfortable Bed • Traditional Decor • Warm Hospitality',
    description: 'A cozy retreat that makes you feel like family. Experience the warmth of local mountain living with simple, clean interiors and easy access to our tea garden and dining area.',
    image: '/room4.jpg',
  },
];