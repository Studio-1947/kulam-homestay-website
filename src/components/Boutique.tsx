import { ShoppingBag, Sparkles, Package, Gift } from 'lucide-react';

const Boutique = () => {
  const products = [
    {
      icon: <Package className="w-10 h-10" />,
      title: 'Handwoven Textiles',
      description: 'Beautiful traditional fabrics crafted by local artisans',
      image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: 'Organic Spices',
      description: 'Freshly ground spices from our organic farm',
      image: 'https://images.pexels.com/photos/4198751/pexels-photo-4198751.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: <Gift className="w-10 h-10" />,
      title: 'Pottery & Ceramics',
      description: 'Unique handmade pottery using traditional techniques',
      image: 'https://images.pexels.com/photos/1350560/pexels-photo-1350560.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: <ShoppingBag className="w-10 h-10" />,
      title: 'Natural Soaps',
      description: 'Handcrafted soaps with local herbs and essential oils',
      image: 'https://images.pexels.com/photos/4202388/pexels-photo-4202388.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section id="boutique" className="py-20 bg-gradient-to-br from-beige-50 to-beige-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-forest-900 mb-4">
            Local Boutique Shop
          </h2>
          <div className="w-24 h-1 bg-beige-600 mx-auto mb-6"></div>
          <p className="text-lg text-forest-700 max-w-3xl mx-auto leading-relaxed">
            Take a piece of Kulam home with you. Our boutique features authentic,
            handcrafted products made by talented local artisans using traditional
            methods passed down through generations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-forest-600 mb-3">{product.icon}</div>
                <h3 className="text-xl font-semibold text-forest-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-forest-700">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="max-w-4xl mx-auto text-center">
            <ShoppingBag className="w-16 h-16 text-beige-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-forest-900 mb-4">
              Support Local Artisans
            </h3>
            <p className="text-lg text-forest-700 leading-relaxed mb-6">
              Every purchase directly supports local families and helps preserve
              traditional crafts. We work with over 50 artisans from surrounding
              villages, ensuring fair trade and sustainable livelihoods.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-beige-50 rounded-lg p-6">
                <p className="text-3xl font-bold text-forest-800 mb-2">100%</p>
                <p className="text-forest-700">Handmade Products</p>
              </div>
              <div className="bg-beige-50 rounded-lg p-6">
                <p className="text-3xl font-bold text-forest-800 mb-2">50+</p>
                <p className="text-forest-700">Local Artisans</p>
              </div>
              <div className="bg-beige-50 rounded-lg p-6">
                <p className="text-3xl font-bold text-forest-800 mb-2">Fair</p>
                <p className="text-forest-700">Trade Practices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Boutique;
