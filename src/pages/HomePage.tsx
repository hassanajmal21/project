import React from 'react';
import HeroBanner from '../components/HeroBanner';
import FeaturedProducts from '../components/FeaturedProducts';
import CategoryShowcase from '../components/CategoryShowcase';
import PromoBanner from '../components/PromoBanner';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroBanner />
      <CategoryShowcase />
      <FeaturedProducts />
      <PromoBanner />
    </div>
  );
};

export default HomePage;