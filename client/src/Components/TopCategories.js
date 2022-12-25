import React from 'react'

const TopCategories = () => {
    return (
        <section className="digital-shop">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-md-6 d-flex ">
                        <div className="digital-group  wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                            <div className="pharmacy-equipments">
                                <div className="digital-pharmacy">
                                    <h5>Digital Meter<br /> <span>Thermometer</span></h5>
                                    <h2>$149.00</h2>
                                    <span>$159.00</span>
                                    <h4><a href="view-product.html">Shop Now <i
                                        className="feather-arrow-right ml-5"></i></a></h4>
                                </div>
                                <div className="digital-shop-img">
                                    <a href="view-product.html">
                                        <img className="default-img" src="/img/shop/shop-01.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 d-flex">
                        <div className="digital-group  wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                            <div className="pharmacy-equipments">
                                <div className="digital-pharmacy">
                                    <h5>Gun Covid -19<br /> <span>Thermometer</span></h5>
                                    <h2>$119.00</h2>
                                    <span>$129.00</span>
                                    <h4><a href="view-product.html">Shop Now <i
                                        className="feather-arrow-right ml-5"></i></a></h4>
                                </div>
                                <div className="digital-shop-img">
                                    <a href="view-product.html">
                                        <img className="default-img" src="/img/shop/shop-02.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 d-flex">
                        <div className="digital-group  wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                            <div className="pharmacy-equipments">
                                <div className="digital-pharmacy">
                                    <h5>Pulse<br /> <span>Oximeter</span></h5>
                                    <h2>$119.00</h2>
                                    <span>$129.00</span>
                                    <h4><a href="view-product.html">Shop Now <i
                                        className="feather-arrow-right ml-5"></i></a></h4>
                                </div>
                                <div className="digital-shop-img">
                                    <a href="view-product.html">
                                        <img className="default-img" src="/img/shop/shop-03.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopCategories