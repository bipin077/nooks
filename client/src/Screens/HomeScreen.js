import React from 'react';
import {Helmet} from "react-helmet";
import Banners from '../Components/Banners';
import PopularCategories from '../Components/PopularCategories';
import FeaturedProducts from '../Components/FeaturedProducts';
import TrendingProducts from '../Components/TrendingProducts';
import BookConsultation from '../Components/BookConsultation';
import ClientWrapper from './ClientWrapper';

const HomeScreen = () => {
  return (
    <ClientWrapper>
      <Helmet>
          <meta charSet="utf-8" />
          <title> Nooks </title>
      </Helmet>
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