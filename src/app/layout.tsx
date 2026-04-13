import type { Metadata } from "next";
import { Playfair_Display, Inter } from 'next/font/google';
import "../index.css";

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Kulam Homestay | A Boutique Retreat",
  description: "Experience authentic village life at Kulam Homestay. Embrace slow living, rich culture, and the gentle rhythm of nature in Kerala.",
  openGraph: {
    title: "Kulam Homestay | A Boutique Retreat",
    description: "Experience authentic village life at Kulam Homestay. Embrace slow living, rich culture, and the gentle rhythm of nature in Kerala.",
    url: "https://www.kulamhomestay.in/",
    siteName: "Kulam Homestay",
    images: [
      {
        url: "https://yoursite.com/kk.png",
        width: 1200,
        height: 630,
        alt: "Kulam Homestay - A Boutique Retreat in Kerala",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased text-text-primary bg-background`}>
        {children}
      </body>
    </html>
  );
}