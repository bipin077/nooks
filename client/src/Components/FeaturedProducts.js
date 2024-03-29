import React, {useState} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import {Link} from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import {useGetAllProductsQuery} from "../store/Services/ProductServices";

import {addToCart} from "../store/Reducers/CartReducer";
import {useSelecter, useDispatch} from "react-redux";

const FeaturedProducts = () => {

    const {data=[], isFetching} = useGetAllProductsQuery();
    // console.log(data);

    const dispatch = useDispatch();

    const addToCartProduct = (product) =>
    {
        const productData = {
            id : product._id,
            category : product.category,
            name : product.name,
            image : product.image,
            mrp: product.mrp,
            price : product.price,
            sku : product.sku,
            quantity : 1
        }
        
        dispatch(addToCart(productData));
        console.log(productData);
        alert("Product Added To Cart");
    }

    return (
        <section className="feature-products">
            <div className="container">
                <div className="section-title wow animate__animated animate__fadeIn" data-wow-delay="0">
                    <h3>Featured Products</h3>
                    <p>A highly efficient slip-ring scanner for today's diagnostic requirements.</p>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="feature-product-slider arrow-center position-relative">
                            <div className="slider-arrow slider-arrow-two carousel-4-columns-arrow"
                                id="carousel-4-columns-arrows"></div>
                            <div className="carousel-4-columns carousel-arrow-center" id="carousel-4-columns">

                                <Swiper slidesPerView={4} spaceBetween={10} className="mySwiper"
                                >
                                    {!isFetching && data.product.map((product, index)=>
                                         product.is_featured && product.status ? 
                                            
                                                <SwiperSlide key={index}>
                                                    <div className="product-card wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                                        <div className="product-img-col">
                                                            <div className="product-img product-img-zoom">
                                                                <Link to={ `/product/${product._id}` }>
                                                                    <img src={ `/upload/products/${product.image}`} alt="" />
                                                                </Link>
                                                            </div>
                                                            <div className="product-badge">
                                                                <span className="best">{Math.ceil((product.mrp - product.price)/product.mrp * 100)}% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h2><Link to={ `/product/${product._id}` }>{product.name}</Link></h2>
                                                            <div className="product-card-bottom ">
                                                                <div className="product-price">
                                                                    <span>$ {product.price}</span>
                                                                    <span className="old-price">$ {product.mrp}</span>
                                                                </div>
                                                            </div>
                                                            <div className="add-feature">
                                                                <button onClick={()=>addToCartProduct(product)} className="btn btn-primary"><i className="feather-shopping-bag me-1"></i>Add To Cart</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>  
                                             : "" 
                                    )}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedProducts