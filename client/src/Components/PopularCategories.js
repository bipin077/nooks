import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { useGetAllCategoriesQuery } from '../store/Services/CategoryService';

// import required modules
import { Pagination } from "swiper";

const PopularCategories = () => {

    const {data=[], isFetching} = useGetAllCategoriesQuery();

    // console.log(data);
    return (
        <section className="section-category">
            <div className="container">
                <div className="section-title wow animate__animated animate__fadeIn" data-wow-delay="0">
                    <h3 className="">Popular Categories</h3>
                    <p>A highly efficient slip-ring scanner for today's diagnostic requirements.</p>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="category-slider arrow-center position-relative">
                            <div className="slider-arrow slider-arrow-two carousel-category-arrow"
                                id="carousel-category-arrows">
                            </div>
                            <div className="carousel-category carousel-arrow-center" id="carousel-category">

                                <Swiper slidesPerView={6} spaceBetween={10} className="mySwiper"
                                >
                                    { !isFetching && data.category.map((category) =>
                                        <SwiperSlide  key={category._id}>
                                            <div className="category-grid wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                                <div className="category-img-col">
                                                    <div className="category-img category-img-zoom">
                                                        <a href="view-product.html">
                                                        <img src={ `/upload/category/${category.image}`} alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="category-content">
                                                    <h4><a href="view-product.html">{category.title}</a></h4>
                                                </div>
                                            </div>
                                        </SwiperSlide>
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

export default PopularCategories