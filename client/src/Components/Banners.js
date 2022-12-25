import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import {useGetAllBannersQuery} from "../store/Services/BannerServices";

const Banners = () => {
    const {data=[], isFetching} = useGetAllBannersQuery();
    return (
        <section className="banner-section position-relative">
            <div className="container">
                <div className="banner-slider">
                    <div className="banner-slider-one pagination-square align-pagination-square">
                        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                            { !isFetching && data.banners.map((banner) =>
                                <SwiperSlide key={banner._id}>
                                    <div className="banner-slider-single banner-animation-col">
                                        <div className="row align-items-center">
                                            <div className="col-md-6 col-lg-6">
                                                <div className="banner-content">
                                                    <h1 className="banner-title mb-25"> {banner.title_one} <span>{banner.title_two}</span> </h1>
                                                    <p>{banner.subtitle}</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6">
                                                <div className="single-banner-slider">
                                                    <img src={ `/upload/banners/${banner.image}`} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banners;