import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-forest-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-2">Kulam Homestay</h3>
            <p className="text-beige-200 italic text-sm mb-4">
              A short story of slow living
            </p>
            <p className="text-beige-300 text-sm leading-relaxed">
              Your peaceful retreat in the heart of nature, where every moment
              is an invitation to slow down and reconnect.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-beige-100">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-beige-300 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('culture')}
                  className="text-beige-300 hover:text-white transition-colors"
                >
                  Our Culture
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('boutique')}
                  className="text-beige-300 hover:text-white transition-colors"
                >
                  Boutique Shop
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('special')}
                  className="text-beige-300 hover:text-white transition-colors"
                >
                  Why We're Special
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-beige-100">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-beige-400 flex-shrink-0 mt-1" />
                <span className="text-beige-300 text-sm">
                  Village Road, Near Kulam Lake
                  <br />
                  Kerala, India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-beige-400 flex-shrink-0" />
                <span className="text-beige-300 text-sm">
                  +91 XXXXX XXXXX
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-beige-400 flex-shrink-0" />
                <span className="text-beige-300 text-sm">
                  stay@kulamhomestay.com
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-beige-100">
              Follow Us
            </h4>
            <p className="text-beige-300 text-sm mb-4">
              Join our community and stay updated with stories from the village.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-forest-800 rounded-full flex items-center justify-center hover:bg-forest-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-forest-800 rounded-full flex items-center justify-center hover:bg-forest-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-forest-800 rounded-full flex items-center justify-center hover:bg-forest-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-forest-700 mt-12 pt-8 text-center">
          <p className="text-beige-300 text-sm">
            &copy; {new Date().getFullYear()} Kulam Homestay. All rights reserved.
            Crafted with love and care.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
