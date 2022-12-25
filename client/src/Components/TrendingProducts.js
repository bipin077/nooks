import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import {useGetAllProductsQuery} from "../store/Services/ProductServices";

const TrendingProducts = () => {

    const {data=[], isFetching} = useGetAllProductsQuery();
    // console.log(data);

    return (
        <section className="trending-products">
            <div className="container">
                <div className="section-title wow animate__animated animate__fadeIn" data-wow-delay="0">
                    <h3>Trending Products</h3>
                    <p>A highly efficient slip-ring scanner for today's diagnostic requirements.</p>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="feature-product-slider arrow-center position-relative">
                            <div className="slider-arrow slider-arrow-two carousel-4-columns-arrow"
                                id="carousel-5-columns-arrows"></div>
                            <div className="carousel-4-columns carousel-arrow-center" id="carousel-5-columns">

                                <Swiper slidesPerView={4} spaceBetween={10} className="mySwiper"
                                >
                                {!isFetching && data.product.map((product)=>
                                    product.is_featured ? 
                                       <>
                                            <SwiperSlide>
                                                <div className="product-card wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                                    <div className="product-img-col">
                                                        <div className="product-img product-img-zoom">
                                                            <a href="view-product.html">
                                                            <img src={ `/upload/products/${product.image}`} alt="" />
                                                            </a>
                                                        </div>
                                                        <div className="product-badge">
                                                        <span className="best">{Math.ceil((product.mrp - product.price)/product.mrp * 100)}% Off</span>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <h2><a href="view-product.html">{product.name}</a></h2>
                                                        <div className="product-card-bottom ">
                                                            <div className="product-price">
                                                                <span>$ {product.price}</span>
                                                                <span className="old-price">$ {product.mrp}</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-feature">
                                                            <a href="cart.html" className="btn btn-primary"><i className="feather-shopping-bag me-1"></i>Add To Cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </>  : "" 
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

export default TrendingProducts