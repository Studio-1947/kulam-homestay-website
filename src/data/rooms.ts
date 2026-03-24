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
    id: 'forest-canopy-suite',
    title: 'Forest Canopy Suite',
    type: 'Luxury Suite',
    view: '360° Forest View',
    amenities: 'King Bed • Private Balcony • Open-to-sky Shower',
    description: 'Perched high among the ancient trees, this suite offers a true immersion into the canopy. Featuring hand-carved teak furniture and large wrap-around windows, it provides an intimate connection with nature without compromising on modern luxury.',
    image: '/room1.jpg',
  },
  {
    id: 'riverside-cottage',
    title: 'Riverside Cottage',
    type: 'Standalone Cottage',
    view: 'Direct River Access',
    amenities: 'Queen Bed • Wood Fireplace • Private Veranda',
    description: 'A charming stone-walled retreat located just steps from the riverbank. The interiors feature rustic décor and a cozy fireplace, perfect for cooler evenings. Listen to the rhythmic flow of water from your private wooden deck.',
    image: '/room2.jpg',
  },
  {
    id: 'garden-retreat',
    title: 'Garden Retreat Room',
    type: 'Premium Room',
    view: 'Organic Garden View',
    amenities: 'Queen Bed • Reading Nook • Rain Shower',
    description: 'Opening directly onto our organic herb garden, this room is a sanctuary of light and air. Designed with minimalist aesthetics and traditional Kerala textiles, it offers a peaceful space for deep rest and reflection.',
    image: '/room3.jpg',
  },
  {
    id: 'hilltop-panorama',
    title: 'Hilltop Panorama Villa',
    type: 'Grand Villa',
    view: '270° Valley View',
    amenities: '2 King Bedrooms • Private Plunge Pool • Lounge Area',
    description: 'Our most expansive sanctuary, situated at the highest point of the estate. This villa features two master bedrooms, a spacious living area, and an infinity plunge pool that blends into the horizon of the Western Ghats.',
    image: '/room4.jpg',
  },
];