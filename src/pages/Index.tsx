
import { useState, useEffect } from 'react';
import { ShoppingCart, Search, User, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [cartItems, setCartItems] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  // Sample product data
  const featuredProducts = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.5,
      reviews: 1284,
      image: "/placeholder.svg",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.3,
      reviews: 892,
      image: "/placeholder.svg",
      badge: "Deal"
    },
    {
      id: 3,
      name: "4K Wireless Security Camera",
      price: 149.99,
      originalPrice: 179.99,
      rating: 4.7,
      reviews: 2156,
      image: "/placeholder.svg",
      badge: "Choice"
    },
    {
      id: 4,
      name: "Portable Power Bank 20000mAh",
      price: 39.99,
      originalPrice: 59.99,
      rating: 4.4,
      reviews: 756,
      image: "/placeholder.svg",
      badge: "New"
    },
    {
      id: 5,
      name: "Mechanical Gaming Keyboard",
      price: 129.99,
      originalPrice: 149.99,
      rating: 4.6,
      reviews: 1643,
      image: "/placeholder.svg",
      badge: "Limited"
    },
    {
      id: 6,
      name: "Wireless Phone Charger Stand",
      price: 24.99,
      originalPrice: 34.99,
      rating: 4.2,
      reviews: 428,
      image: "/placeholder.svg",
      badge: "Deal"
    }
  ];

  const categories = [
    "Electronics", "Clothing", "Home & Garden", "Sports", "Books", "Beauty", "Automotive", "Toys"
  ];

  const addToCart = (productId: number) => {
    setCartItems(cartItems + 1);
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
        <span className="text-sm text-gray-600 ml-1">({rating})</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600">ShopHub</h1>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full"
                />
              </div>
            </div>

            {/* Right Navigation */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <User className="w-5 h-5 mr-2" />
                Sign In
              </Button>
              <Button variant="ghost" size="sm">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="w-5 h-5" />
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartItems}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Categories Nav */}
        <div className="bg-gray-100 border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-8 py-3 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 whitespace-nowrap transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Discover Amazing Products
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Shop millions of products with fast, free delivery
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Shop Now
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Featured Products</h3>
          <p className="text-gray-600">Discover our best-selling and highly-rated items</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-4">
                <div className="relative mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg bg-gray-200"
                  />
                  <Badge className="absolute top-2 left-2 bg-red-500">
                    {product.badge}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>

                <h4 className="font-medium text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h4>

                <div className="mb-2">
                  {renderStars(product.rating)}
                  <span className="text-sm text-gray-500 ml-2">
                    ({product.reviews.toLocaleString()})
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg font-bold text-gray-900">
                    ${product.price}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                  <Badge variant="secondary" className="text-xs">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% off
                  </Badge>
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <Button
                  onClick={() => addToCart(product.id)}
                  className="w-full"
                  size="sm"
                >
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Deals Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Today's Lightning Deals</h3>
            <p className="text-xl mb-8 text-orange-100">
              Limited time offers - grab them before they're gone!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <h4 className="text-xl font-bold mb-2">Electronics</h4>
                <p className="text-orange-100 mb-4">Up to 50% off</p>
                <Button variant="secondary" size="sm">
                  Shop Electronics
                </Button>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <h4 className="text-xl font-bold mb-2">Fashion</h4>
                <p className="text-orange-100 mb-4">Up to 40% off</p>
                <Button variant="secondary" size="sm">
                  Shop Fashion
                </Button>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <h4 className="text-xl font-bold mb-2">Home & Garden</h4>
                <p className="text-orange-100 mb-4">Up to 35% off</p>
                <Button variant="secondary" size="sm">
                  Shop Home
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-lg font-bold mb-4">ShopHub</h5>
              <p className="text-gray-400">
                Your one-stop destination for quality products at unbeatable prices.
              </p>
            </div>
            <div>
              <h6 className="font-medium mb-4">Customer Service</h6>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Return Policy</a></li>
                <li><a href="#" className="hover:text-white">Shipping Info</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium mb-4">About</h6>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
                <li><a href="#" className="hover:text-white">Investors</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium mb-4">Connect</h6>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Newsletter</a></li>
                <li><a href="#" className="hover:text-white">Social Media</a></li>
                <li><a href="#" className="hover:text-white">Mobile App</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ShopHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
