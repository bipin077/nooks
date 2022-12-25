import React from 'react';

import Banners from '../Components/Banners';
import PopularCategories from '../Components/PopularCategories';
import FeaturedProducts from '../Components/FeaturedProducts';
import TrendingProducts from '../Components/TrendingProducts';
import BookConsultation from '../Components/BookConsultation';
import ClientWrapper from './ClientWrapper';

const HomeScreen = () => {
  return (
    <ClientWrapper>
      <main className="main">
          <Banners />
          <BookConsultation />
          <PopularCategories />
          <FeaturedProducts />
          <TrendingProducts />
      </main>
    </ClientWrapper>
  )
}

export default HomeScreen;