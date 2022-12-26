import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

// import styles
import "./Styles/bootstrap.min.css";
import "./Styles/style.css";
import "./Styles/feather.css";
import "./Styles/animate.min.css";
import "./Styles/uicons-regular-straight.css";

import HomeScreen from './Screens/HomeScreen';

import Dashboard from "./Screens/Admin/Dashboard";
import AllBanners from './Screens/Admin/AllBanners';
import AllProducts from './Screens/Admin/AllProducts';
import AllCategories from './Screens/Admin/AllCategories';
import AddBanners from './Screens/Admin/AddBanner';
import AddCategory from './Screens/Admin/AddCategory';
import AddProduct from './Screens/Admin/AddProduct';
import EditBanners from './Screens/Admin/EditBanner';
import EditCategory from './Screens/Admin/EditCategory';
import EditProduct from './Screens/Admin/EditProduct';
import Settings from './Screens/Admin/Settings';
import Shop from './Screens/Shop';
import AllWhyChooseUs from './Screens/Admin/AllWhyChooseUs';
import AddWhyChooseUs from './Screens/Admin/AddWhyChooseUs';
import EditWhyChooseUs from './Screens/Admin/EditWhyChooseUs';
import ProductDetail from './Screens/ProductDetail';
import ShopCategory from './Screens/ShopCategory';


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/:id' element={<ShopCategory />} />
          <Route path="/product/:id" element={<ProductDetail />} />

          <Route path='/admin'>
              <Route path='dashboard' element={<Dashboard />} />
              <Route path='banners' element={<AllBanners />} />
              <Route path='addBanner' element={<AddBanners />} />
              <Route path='editBanner/:id' element={<EditBanners />} />
              <Route path='categories' element={<AllCategories />} />
              <Route path='addCategory' element={<AddCategory />} />
              <Route path='editCategory/:id' element={<EditCategory />} />
              <Route path='products' element={<AllProducts />} />
              <Route path='addProduct' element={<AddProduct />} />
              <Route path='editProduct/:id' element={<EditProduct />} />
              <Route path='whychooseus' element={<AllWhyChooseUs />} />
              <Route path='addWhyChooseUs' element={<AddWhyChooseUs />} />
              <Route path='editWhyChooseUs/:id' element={<EditWhyChooseUs />} />
              <Route path='settings' element={<Settings />} />
          </Route>
        </Routes>
        
    </BrowserRouter>
  )
}

export default App;