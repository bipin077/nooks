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
import CartScreen from './Screens/CartScreen';
import CheckoutScreen from './Screens/CheckoutScreen';
import SearchScreen from './Screens/SearchScreen';
import LoginScreen from './Screens/Admin/LoginScreen';
import Login from "./Screens/Login";
import Register from './Screens/Register';

import PublicRoute from "./PublicRoutes";
import PrivateRoute from "./PrivateRoute";
import AllOrders from './Screens/Admin/AllOrders';
import OrderDetail from './Screens/Admin/OrderDetail';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/:id' element={<ShopCategory />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/checkout" element={<CheckoutScreen />} />
          <Route path="/search/:query" element={<SearchScreen />} />
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />

          <Route path='/admin'>
              <Route path='login' element={<PublicRoute><LoginScreen /></PublicRoute>} />  
              <Route path='dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
              <Route path='banners' element={<PrivateRoute><AllBanners /></PrivateRoute>} />
              <Route path='addBanner' element={<PrivateRoute><AddBanners /></PrivateRoute>} />
              <Route path='editBanner/:id' element={<PrivateRoute><EditBanners /></PrivateRoute>} />
              <Route path='categories' element={<PrivateRoute><AllCategories /></PrivateRoute>} />
              <Route path='addCategory' element={<PrivateRoute><AddCategory /></PrivateRoute>} />
              <Route path='editCategory/:id' element={<PrivateRoute><EditCategory /></PrivateRoute>} />
              <Route path='products' element={<PrivateRoute><AllProducts /></PrivateRoute>} />
              <Route path='addProduct' element={<PrivateRoute><AddProduct /></PrivateRoute>} />
              <Route path='editProduct/:id' element={<PrivateRoute><EditProduct /></PrivateRoute>} />
              <Route path='whychooseus' element={<PrivateRoute><AllWhyChooseUs /></PrivateRoute>} />
              <Route path='addWhyChooseUs' element={<PrivateRoute><AddWhyChooseUs /></PrivateRoute>} />
              <Route path='editWhyChooseUs/:id' element={<PrivateRoute><EditWhyChooseUs /></PrivateRoute>} />
              <Route path='orders' element={<PrivateRoute><AllOrders /></PrivateRoute>} />
              <Route path='orderDetail/:id' element={<PrivateRoute><OrderDetail /></PrivateRoute>} />
              <Route path='settings' element={<PrivateRoute><Settings /></PrivateRoute>} />
          </Route>
        </Routes>
        
    </BrowserRouter>
  )
}

export default App;