export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  images?: string[];
  description: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  features?: string[];
}

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    originalPrice: 99.99,
    discount: 20,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
    images: [
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=400"
    ],
    description: "Premium wireless headphones with noise cancellation and 30-hour battery life.",
    category: "electronics",
    rating: 4.5,
    reviews: 234,
    inStock: true,
    features: ["Noise Cancellation", "30-hour Battery", "Bluetooth 5.0", "Fast Charging"]
  },
  {
    id: 2,
    name: "Smart Watch Series 7",
    price: 299.99,
    originalPrice: 399.99,
    discount: 25,
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Advanced smartwatch with health monitoring and fitness tracking.",
    category: "electronics",
    rating: 4.8,
    reviews: 156,
    inStock: true,
    features: ["Heart Rate Monitor", "GPS", "Water Resistant", "7-day Battery"]
  },
  {
    id: 3,
    name: "Vintage Leather Jacket",
    price: 129.99,
    originalPrice: 179.99,
    discount: 28,
    image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Classic vintage leather jacket perfect for any season.",
    category: "fashion",
    rating: 4.3,
    reviews: 89,
    inStock: true,
    features: ["Genuine Leather", "Classic Fit", "Multiple Colors", "Premium Quality"]
  },
  {
    id: 4,
    name: "Yoga Mat Premium",
    price: 39.99,
    originalPrice: 59.99,
    discount: 33,
    image: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "High-quality yoga mat with excellent grip and cushioning.",
    category: "sports",
    rating: 4.6,
    reviews: 312,
    inStock: true,
    features: ["Non-slip Surface", "Eco-friendly", "6mm Thickness", "Carrying Strap"]
  },
  {
    id: 5,
    name: "Coffee Maker Deluxe",
    price: 89.99,
    originalPrice: 119.99,
    discount: 25,
    image: "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Professional-grade coffee maker for the perfect brew every time.",
    category: "home",
    rating: 4.4,
    reviews: 198,
    inStock: true,
    features: ["Programmable Timer", "Auto Shut-off", "12-cup Capacity", "Stainless Steel"]
  },
  {
    id: 6,
    name: "Bestseller Novel Collection",
    price: 19.99,
    originalPrice: 29.99,
    discount: 33,
    image: "https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Collection of top-rated novels from acclaimed authors.",
    category: "books",
    rating: 4.7,
    reviews: 267,
    inStock: true,
    features: ["Hardcover", "Set of 3 Books", "Award Winners", "Gift Ready"]
  },
  {
    id: 7,
    name: "Skincare Essentials Kit",
    price: 49.99,
    originalPrice: 79.99,
    discount: 38,
    image: "https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Complete skincare routine with natural ingredients.",
    category: "beauty",
    rating: 4.5,
    reviews: 143,
    inStock: true,
    features: ["Natural Ingredients", "All Skin Types", "Cruelty-free", "Dermatologist Tested"]
  },
  {
    id: 8,
    name: "Wireless Gaming Mouse",
    price: 59.99,
    originalPrice: 79.99,
    discount: 25,
    image: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "High-precision gaming mouse with customizable RGB lighting.",
    category: "electronics",
    rating: 4.6,
    reviews: 421,
    inStock: true,
    features: ["RGB Lighting", "12000 DPI", "Wireless", "Programmable Buttons"]
  }
];