import React from 'react';

import ClientWrapper from './ClientWrapper';


const Shop = () => {
    return (
        <ClientWrapper>
        <div className="breadcrumb-group">
        <div className="container">
            <div className="page-header breadcrumb-wrap">
                <div className="breadcrumb">
                    <ul>
                        <li><a href="index.html" rel="nofollow"><i className="fas fa-home mr-10"></i>Home</a></li>
                        <li>Products</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>


    <main className="main">
        <div className="page-content">
            <div className="container mb-30">
                <div className="row">
                    <div className="col-lg-3 primary-sidebar sticky-sidebar">

                        <div className="sidebar-widget price_range range mb-25">
                            <h5 className="section-title style-1 mb-20">Categories</h5>
                            <div className="list-group">
                                <div className="dashboard-menu">
                                    <ul className="nav flex-column" id="accordionExample">
                                        <li className="nav-item" id="dashboard-one">
                                            <a className="nav-link accordion-button collapsed" href="#"
                                                data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                aria-expanded="false" aria-controls="collapseOne">Diagnosis <i
                                                    className="feather-plus "></i></a>
                                            <div id="collapseOne" className="accordion-collapse collapse"
                                                aria-labelledby="dashboard-one" data-bs-parent="#accordionExample">
                                                <ul className="dashboard-sub-link">
                                                    <li><a href="/">Biopsy Tools</a></li>
                                                    <li><a href="/">Endoscopes</a></li>
                                                    <li><a href="/">Monitoring</a></li>
                                                    <li><a href="/">Otoscopes</a></li>
                                                    <li><a href="/">Oxygen Concentrators</a></li>
                                                    <li><a href="/">Tables And Assistants</a></li>
                                                    <li><a href="/">Thermometer</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item" id="dashboard-two">
                                            <a className="nav-link  accordion-button collapsed" href="#"
                                                data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                aria-expanded="true" aria-controls="collapseTwo">
                                                My Stuff <i className="feather-plus "></i></a>
                                            <div id="collapseTwo" className="accordion-collapse collapse "
                                                aria-labelledby="dashboard-two" data-bs-parent="#accordionExample">
                                                <ul className="dashboard-sub-link">
                                                    <li><a href="/">Biopsy Tools</a></li>
                                                    <li><a href="/">Endoscopes</a></li>
                                                    <li><a href="/">Monitoring</a></li>
                                                    <li><a href="/">Otoscopes</a></li>
                                                    <li><a href="/">Oxygen Concentrators</a></li>
                                                    <li><a href="/">Tables And Assistants</a></li>
                                                    <li><a href="/">Thermometer</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item" id="dashboard-three">
                                            <a className="nav-link  accordion-button collapsed" href="#"
                                                data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                aria-expanded="true" aria-controls="collapseTwo">
                                                Equipment <i className="feather-plus "></i></a>
                                            <div id="collapseThree" className="accordion-collapse collapse "
                                                aria-labelledby="dashboard-three" data-bs-parent="#accordionExample">
                                                <ul className="dashboard-sub-link">
                                                    <li><a href="/">Biopsy Tools</a></li>
                                                    <li><a href="/">Endoscopes</a></li>
                                                    <li><a href="/">Monitoring</a></li>
                                                    <li><a href="/">Otoscopes</a></li>
                                                    <li><a href="/">Oxygen Concentrators</a></li>
                                                    <li><a href="/">Tables And Assistants</a></li>
                                                    <li><a href="/">Thermometer</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item" id="dashboard-four">
                                            <a className="nav-link  accordion-button collapsed" href="#"
                                                data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                aria-expanded="true" aria-controls="collapseTwo">
                                                Higiene <i className="feather-plus "></i></a>
                                            <div id="collapseFour" className="accordion-collapse collapse "
                                                aria-labelledby="dashboard-four" data-bs-parent="#accordionExample">
                                                <ul className="dashboard-sub-link">
                                                    <li><a href="/">Biopsy Tools</a></li>
                                                    <li><a href="/">Endoscopes</a></li>
                                                    <li><a href="/">Monitoring</a></li>
                                                    <li><a href="/">Otoscopes</a></li>
                                                    <li><a href="/">Oxygen Concentrators</a></li>
                                                    <li><a href="/">Tables And Assistants</a></li>
                                                    <li><a href="/">Thermometer</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item" id="dashboard-five">
                                            <a className="nav-link  accordion-button collapsed" href="#"
                                                data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                                aria-expanded="true" aria-controls="collapseTwo">
                                                Laboratory <i className="feather-plus "></i></a>
                                            <div id="collapseFive" className="accordion-collapse collapse "
                                                aria-labelledby="dashboard-five" data-bs-parent="#accordionExample">
                                                <ul className="dashboard-sub-link">
                                                    <li><a href="/">Biopsy Tools</a></li>
                                                    <li><a href="/">Endoscopes</a></li>
                                                    <li><a href="/">Monitoring</a></li>
                                                    <li><a href="/">Otoscopes</a></li>
                                                    <li><a href="/">Oxygen Concentrators</a></li>
                                                    <li><a href="/">Tables And Assistants</a></li>
                                                    <li><a href="/">Thermometer</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item" id="dashboard-six">
                                            <a className="nav-link  accordion-button collapsed" href="#"
                                                data-bs-toggle="collapse" data-bs-target="#collapseSix"
                                                aria-expanded="true" aria-controls="collapseTwo">
                                                Tools <i className="feather-plus "></i></a>
                                            <div id="collapseSix" className="accordion-collapse collapse "
                                                aria-labelledby="dashboard-six" data-bs-parent="#accordionExample">
                                                <ul className="dashboard-sub-link">
                                                    <li><a href="/">Biopsy Tools</a></li>
                                                    <li><a href="/">Endoscopes</a></li>
                                                    <li><a href="/">Monitoring</a></li>
                                                    <li><a href="/">Otoscopes</a></li>
                                                    <li><a href="/">Oxygen Concentrators</a></li>
                                                    <li><a href="/">Tables And Assistants</a></li>
                                                    <li><a href="/">Thermometer</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item" id="dashboard-seven">
                                            <a className="nav-link  accordion-button collapsed" href="#"
                                                data-bs-toggle="collapse" data-bs-target="#collapseSeven"
                                                aria-expanded="true" aria-controls="collapseTwo">
                                                Wound Care <i className="feather-plus "></i></a>
                                            <div id="collapseSeven" className="accordion-collapse collapse "
                                                aria-labelledby="dashboard-seven" data-bs-parent="#accordionExample">
                                                <ul className="dashboard-sub-link">
                                                    <li><a href="/">Biopsy Tools</a></li>
                                                    <li><a href="/">Endoscopes</a></li>
                                                    <li><a href="/">Monitoring</a></li>
                                                    <li><a href="/">Otoscopes</a></li>
                                                    <li><a href="/">Oxygen Concentrators</a></li>
                                                    <li><a href="/">Tables And Assistants</a></li>
                                                    <li><a href="/">Thermometer</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className="sidebar-widget price_range range mb-25">
                            <h5 className="section-title style-1 mb-20">Filter by price</h5>
                            <div className="price-filter">
                                <div className="price-filter-inner">
                                    <div id="slider-range" className="mb-20"></div>
                                    <div className="d-flex justify-content-between">
                                        <div className="caption">Price:
                                            <span id="slider-range-value1"></span> —
                                            <span id="slider-range-value2"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="product-left-sidebar.html" className="btn fillter-btn">Fillter</a>
                        </div>

                    </div>
                    <div className="col-lg-9 ">
                        <div className="product-filter-group left-filter-bar">
                            <div className="row">
                                <div className="col-xl-7 col-lg-6">
                                    <div className="filter-list">
                                        <ul>
                                            <li className="border-0"><i className="fi-rs-apps"></i></li>
                                            <li>Showing 1–8 of 62 results</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-6">
                                    <div className="select-filter-group">
                                        <div className="sort-by-filter">
                                            <label>Sort By :</label>
                                            <select className="form-select">
                                                <option>Latest</option>
                                                <option>Lastweek</option>
                                                <option>Lastmonth</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row product-grid">

                            <div className="col-xl-4 col-md-4 col-12 col-sm-6">

                                <div className="product-card wow animate__animated animate__fadeIn mb-25"
                                    data-wow-delay=".1s">
                                    <div className="product-img-col">
                                        <div className="product-img product-img-zoom">
                                            <a href="view-product.html">
                                                <img src="/img/shop/product-12.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="product-badge">
                                            <span className="best">-10%</span>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="sold-group mb-15">
                                            <p>Sold By <span> Global Store</span></p>
                                        </div>
                                        <h2><a href="view-product.html">Digital Stethoscope</a></h2>
                                        <div className="product-card-bottom ">
                                            <div className="rating d-inline-block">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star filled"></i>
                                                <span className="ml-5"> (3.5)</span>
                                            </div>
                                        </div>
                                        <div className="product-card-bottom ">
                                            <div className="product-price">
                                                <span>$ 350.00</span>
                                                <span className="old-price">$ 450.00</span>
                                            </div>
                                        </div>
                                        <div className="add-feature">
                                            <a href="cart.html" className="btn btn-primary"><i
                                                    className="feather-shopping-bag me-1"></i>Add</a>
                                            <div className="product-details-inner">
                                                <a href="view-product.html" className="product-btn"><i
                                                        className="fi-rs-eye"></i></a>
                                                <a aria-label="Quick view" className="product-btn" data-bs-toggle="modal"
                                                    data-bs-target="#quickViewModal"><i className="fi-rs-search"></i></a>
                                                <a aria-label="Add To Wishlist" className="product-btn"
                                                    href="wishlist.html"><i className="fi-rs-heart"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div className="col-xl-4 col-md-4 col-12 col-sm-6">

                                <div className="product-card wow animate__animated animate__fadeIn mb-25"
                                    data-wow-delay=".1s">
                                    <div className="product-img-col">
                                        <div className="product-img product-img-zoom">
                                            <a href="view-product.html">
                                                <img src="/img/shop/product-13.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="product-badge">
                                            <span className="best">-10%</span>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="sold-group mb-15">
                                            <p>Sold By <span> Global Store</span></p>
                                        </div>
                                        <h2><a href="view-product.html">Cosmetic Containers</a></h2>
                                        <div className="product-card-bottom ">
                                            <div className="rating d-inline-block">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star filled"></i>
                                                <span className="ml-5"> (3.5)</span>
                                            </div>
                                        </div>
                                        <div className="product-card-bottom ">
                                            <div className="product-price">
                                                <span>$ 350.00</span>
                                                <span className="old-price">$ 450.00</span>
                                            </div>
                                        </div>
                                        <div className="add-feature">
                                            <a href="cart.html" className="btn btn-primary"><i
                                                    className="feather-shopping-bag me-1"></i>Add</a>
                                            <div className="product-details-inner">
                                                <a href="view-product.html" className="product-btn"><i
                                                        className="fi-rs-eye"></i></a>
                                                <a aria-label="Quick view" className="product-btn" data-bs-toggle="modal"
                                                    data-bs-target="#quickViewModal"><i className="fi-rs-search"></i></a>
                                                <a aria-label="Add To Wishlist" className="product-btn"
                                                    href="wishlist.html"><i className="fi-rs-heart"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div className="col-xl-4 col-md-4 col-12 col-sm-6">

                                <div className="product-card wow animate__animated animate__fadeIn mb-25"
                                    data-wow-delay=".1s">
                                    <div className="product-img-col">
                                        <div className="product-img product-img-zoom">
                                            <a href="view-product.html">
                                                <img src="/img/shop/product-10.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="product-badge">
                                            <span className="best">-10%</span>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="sold-group mb-15">
                                            <p>Sold By <span> Global Store</span></p>
                                        </div>
                                        <h2><a href="view-product.html">Blue Hand Gloves</a></h2>
                                        <div className="product-card-bottom ">
                                            <div className="rating d-inline-block">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star filled"></i>
                                                <span className="ml-5"> (3.5)</span>
                                            </div>
                                        </div>
                                        <div className="product-card-bottom ">
                                            <div className="product-price">
                                                <span>$ 350.00</span>
                                                <span className="old-price">$ 450.00</span>
                                            </div>
                                        </div>
                                        <div className="add-feature">
                                            <a href="cart.html" className="btn btn-primary"><i
                                                    className="feather-shopping-bag me-1"></i>Add</a>
                                            <div className="product-details-inner">
                                                <a href="view-product.html" className="product-btn"><i
                                                        className="fi-rs-eye"></i></a>
                                                <a aria-label="Quick view" className="product-btn" data-bs-toggle="modal"
                                                    data-bs-target="#quickViewModal"><i className="fi-rs-search"></i></a>
                                                <a aria-label="Add To Wishlist" className="product-btn"
                                                    href="wishlist.html"><i className="fi-rs-heart"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div className="col-xl-4 col-md-4 col-12 col-sm-6">

                                <div className="product-card wow animate__animated animate__fadeIn mb-25"
                                    data-wow-delay=".1s">
                                    <div className="product-img-col">
                                        <div className="product-img product-img-zoom">
                                            <a href="view-product.html">
                                                <img src="/img/shop/trend-product-02.png" alt="" />
                                            </a>
                                        </div>
                                        <div className="product-badge">
                                            <span className="best">-10%</span>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="sold-group mb-15">
                                            <p>Sold By <span> Global Store</span></p>
                                        </div>
                                        <h2><a href="view-product.html">Cetaphil Sun Kids Liposomal...</a></h2>
                                        <div className="product-card-bottom ">
                                            <div className="rating d-inline-block">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star filled"></i>
                                                <span className="ml-5"> (3.5)</span>
                                            </div>
                                        </div>
                                        <div className="product-card-bottom ">
                                            <div className="product-price">
                                                <span>$ 350.00</span>
                                                <span className="old-price">$ 450.00</span>
                                            </div>
                                        </div>
                                        <div className="add-feature">
                                            <a href="cart.html" className="btn btn-primary"><i
                                                    className="feather-shopping-bag me-1"></i>Add</a>
                                            <div className="product-details-inner">
                                                <a href="view-product.html" className="product-btn"><i
                                                        className="fi-rs-eye"></i></a>
                                                <a aria-label="Quick view" className="product-btn" data-bs-toggle="modal"
                                                    data-bs-target="#quickViewModal"><i className="fi-rs-search"></i></a>
                                                <a aria-label="Add To Wishlist" className="product-btn"
                                                    href="wishlist.html"><i className="fi-rs-heart"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div className="col-xl-4 col-md-4 col-12 col-sm-6">

                                <div className="product-card wow animate__animated animate__fadeIn mb-25"
                                    data-wow-delay=".1s">
                                    <div className="product-img-col">
                                        <div className="product-img product-img-zoom">
                                            <a href="view-product.html">
                                                <img src="/img/shop/trend-product-03.png" alt="" />
                                            </a>
                                        </div>
                                        <div className="product-badge">
                                            <span className="best">-10%</span>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="sold-group mb-15">
                                            <p>Sold By <span> Global Store</span></p>
                                        </div>
                                        <h2><a href="view-product.html"> TruRadix Curcumin Oral Str...</a></h2>
                                        <div className="product-card-bottom ">
                                            <div className="rating d-inline-block">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star filled"></i>
                                                <span className="ml-5"> (3.5)</span>
                                            </div>
                                        </div>
                                        <div className="product-card-bottom ">
                                            <div className="product-price">
                                                <span>$ 350.00</span>
                                                <span className="old-price">$ 450.00</span>
                                            </div>
                                        </div>
                                        <div className="add-feature">
                                            <a href="cart.html" className="btn btn-primary"><i
                                                    className="feather-shopping-bag me-1"></i>Add</a>
                                            <div className="product-details-inner">
                                                <a href="view-product.html" className="product-btn"><i
                                                        className="fi-rs-eye"></i></a>
                                                <a aria-label="Quick view" className="product-btn" data-bs-toggle="modal"
                                                    data-bs-target="#quickViewModal"><i className="fi-rs-search"></i></a>
                                                <a aria-label="Add To Wishlist" className="product-btn"
                                                    href="wishlist.html"><i className="fi-rs-heart"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div className="col-xl-4 col-md-4 col-12 col-sm-6">

                                <div className="product-card wow animate__animated animate__fadeIn mb-25"
                                    data-wow-delay=".1s">
                                    <div className="product-img-col">
                                        <div className="product-img product-img-zoom">
                                            <a href="view-product.html">
                                                <img src="/img/shop/trend-product-04.png" alt="" />
                                            </a>
                                        </div>
                                        <div className="product-badge">
                                            <span className="best">-10%</span>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="sold-group mb-15">
                                            <p>Sold By <span> Global Store</span></p>
                                        </div>
                                        <h2><a href="view-product.html">Goodlife Nutrition Immuni...</a></h2>
                                        <div className="product-card-bottom ">
                                            <div className="rating d-inline-block">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star filled"></i>
                                                <span className="ml-5"> (3.5)</span>
                                            </div>
                                        </div>
                                        <div className="product-card-bottom ">
                                            <div className="product-price">
                                                <span>$ 350.00</span>
                                                <span className="old-price">$ 450.00</span>
                                            </div>
                                        </div>
                                        <div className="add-feature">
                                            <a href="cart.html" className="btn btn-primary"><i
                                                    className="feather-shopping-bag me-1"></i>Add</a>
                                            <div className="product-details-inner">
                                                <a href="view-product.html" className="product-btn"><i
                                                        className="fi-rs-eye"></i></a>
                                                <a aria-label="Quick view" className="product-btn" data-bs-toggle="modal"
                                                    data-bs-target="#quickViewModal"><i className="fi-rs-search"></i></a>
                                                <a aria-label="Add To Wishlist" className="product-btn"
                                                    href="wishlist.html"><i className="fi-rs-heart"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div className="col-xl-4 col-md-4 col-12 col-sm-6">

                                <div className="product-card wow animate__animated animate__fadeIn mb-25"
                                    data-wow-delay=".1s">
                                    <div className="product-img-col">
                                        <div className="product-img product-img-zoom">
                                            <a href="view-product.html">
                                                <img src="/img/shop/trend-product-06.png" alt="" />
                                            </a>
                                        </div>
                                        <div className="product-badge">
                                            <span className="best">-10%</span>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="sold-group mb-15">
                                            <p>Sold By <span> Global Store</span></p>
                                        </div>
                                        <h2><a href="view-product.html">Natural Elixir For Perfect Skin</a></h2>
                                        <div className="product-card-bottom ">
                                            <div className="rating d-inline-block">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star filled"></i>
                                                <span className="ml-5"> (3.5)</span>
                                            </div>
                                        </div>
                                        <div className="product-card-bottom ">
                                            <div className="product-price">
                                                <span>$ 350.00</span>
                                                <span className="old-price">$ 450.00</span>
                                            </div>
                                        </div>
                                        <div className="add-feature">
                                            <a href="cart.html" className="btn btn-primary"><i
                                                    className="feather-shopping-bag me-1"></i>Add</a>
                                            <div className="product-details-inner">
                                                <a href="view-product.html" className="product-btn"><i
                                                        className="fi-rs-eye"></i></a>
                                                <a aria-label="Quick view" className="product-btn" data-bs-toggle="modal"
                                                    data-bs-target="#quickViewModal"><i className="fi-rs-search"></i></a>
                                                <a aria-label="Add To Wishlist" className="product-btn"
                                                    href="wishlist.html"><i className="fi-rs-heart"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div className="col-xl-4 col-md-4 col-12 col-sm-6">

                                <div className="product-card wow animate__animated animate__fadeIn mb-25"
                                    data-wow-delay=".1s">
                                    <div className="product-img-col">
                                        <div className="product-img product-img-zoom">
                                            <a href="view-product.html">
                                                <img src="/img/shop/trend-product-07.png" alt="" />
                                            </a>
                                        </div>
                                        <div className="product-badge">
                                            <span className="best">-10%</span>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="sold-group mb-15">
                                            <p>Sold By <span> Global Store</span></p>
                                        </div>
                                        <h2><a href="view-product.html">Alvedon® Film-coated tablet...</a></h2>
                                        <div className="product-card-bottom ">
                                            <div className="rating d-inline-block">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star filled"></i>
                                                <span className="ml-5"> (3.5)</span>
                                            </div>
                                        </div>
                                        <div className="product-card-bottom ">
                                            <div className="product-price">
                                                <span>$ 350.00</span>
                                                <span className="old-price">$ 450.00</span>
                                            </div>
                                        </div>
                                        <div className="add-feature">
                                            <a href="cart.html" className="btn btn-primary"><i
                                                    className="feather-shopping-bag me-1"></i>Add</a>
                                            <div className="product-details-inner">
                                                <a href="view-product.html" className="product-btn"><i
                                                        className="fi-rs-eye"></i></a>
                                                <a aria-label="Quick view" className="product-btn" data-bs-toggle="modal"
                                                    data-bs-target="#quickViewModal"><i className="fi-rs-search"></i></a>
                                                <a aria-label="Add To Wishlist" className="product-btn"
                                                    href="wishlist.html"><i className="fi-rs-heart"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div className="col-xl-4 col-md-4 col-12 col-sm-6">

                                <div className="product-card wow animate__animated animate__fadeIn mb-25"
                                    data-wow-delay=".1s">
                                    <div className="product-img-col">
                                        <div className="product-img product-img-zoom">
                                            <a href="view-product.html">
                                                <img src="/img/shop/trend-product-08.png" alt="" />
                                            </a>
                                        </div>
                                        <div className="product-badge">
                                            <span className="best">-10%</span>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="sold-group mb-15">
                                            <p>Sold By <span> Global Store</span></p>
                                        </div>
                                        <h2><a href="view-product.html">Amoxicillin 500mg Capsule</a></h2>
                                        <div className="product-card-bottom ">
                                            <div className="rating d-inline-block">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star filled"></i>
                                                <span className="ml-5"> (3.5)</span>
                                            </div>
                                        </div>
                                        <div className="product-card-bottom ">
                                            <div className="product-price">
                                                <span>$ 350.00</span>
                                                <span className="old-price">$ 450.00</span>
                                            </div>
                                        </div>
                                        <div className="add-feature">
                                            <a href="cart.html" className="btn btn-primary"><i
                                                    className="feather-shopping-bag me-1"></i>Add</a>
                                            <div className="product-details-inner">
                                                <a href="view-product.html" className="product-btn"><i
                                                        className="fi-rs-eye"></i></a>
                                                <a aria-label="Quick view" className="product-btn" data-bs-toggle="modal"
                                                    data-bs-target="#quickViewModal"><i className="fi-rs-search"></i></a>
                                                <a aria-label="Add To Wishlist" className="product-btn"
                                                    href="wishlist.html"><i className="fi-rs-heart"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="pagination-area">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-start">
                                    <li className="page-item">
                                        <a className="page-link" href="#"><i className="fi-rs-angle-left"></i></a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item active"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">10</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#"><i className="fi-rs-angle-right"></i></a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </main>
        </ClientWrapper>
    )
}

export default Shop;