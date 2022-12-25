import React from 'react';
import "../Styles/Header.css";

import {Link} from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="mobile-view">
                    <span>Grand opening, <strong>up to 15%</strong> off all items. Only <strong>3 days</strong> left</span>
                </div>
                <div className="header-top d-none d-lg-block">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-xl-6 col-lg-6">
                                <div className="header-details">
                                    <ul>
                                        <li>
                                            <h6>We provides <span>Covid-19</span> medical accessories</h6>
                                        </li>
                                        <li><h6>Need Help?</h6></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <div className="header-left">
                                    <ul>
                                        <li><Link className="popup-toggle"><i className="feather-user"></i>Login / Register</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-middle d-none d-lg-block">
                    <div className="container">
                        <div className="header-col">
                            <div className="logo header-logo">
                                <Link to="/" className="d-none d-lg-block"><img src="/img/logo.png" alt="logo" /></Link>
                                <Link to="/" className="d-lg-none d-sm-block"><img src="/img/logo-01.png" alt="logo" /></Link>
                            </div>
                            <div className="header-right">
                                <div className="header-search">
                                    <form action="">
                                        <input type="text" placeholder="Search for medicines, health products and more" />
                                        <input type="submit" name="form-submit" className="submit-btn popup-toggle3" />
                                    </form>
                                </div>
                                <div className="header-details">
                                    <div className="header-inner">
                                        <Link to="/shop">
                                            <label className="file-uploaded ml-15 me-2">
                                                Explore Latest Products
                                            </label>
                                        </Link>
                                        <div className="header-inner-icon ">
                                            <Link className="small-cart-icon" to="">
                                                <i className="feather-heart"></i>
                                                <span className="pro-count blue">0</span>
                                            </Link>
                                            <div className="cart-dropdown-wrap">
                                                <ul>
                                                    <li>
                                                        <div className="shopping-cart-img">
                                                            <Link to="/"><img src="/img/shop/cart-img-02.jpg" alt="" /></Link>
                                                        </div>
                                                        <div className="shopping-cart-title">
                                                            <h4><Link to="/">Liver Detox Pills </Link></h4>
                                                            <h4>(x 10)</h4>
                                                        </div>
                                                        <div className="shopping-cart-value">
                                                            <h2>$15.00</h2>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="shopping-cart-img">
                                                            <Link to="/"><img src="/img/shop/cart-img-03.jpg" alt="" /></Link>
                                                        </div>
                                                        <div className="shopping-cart-title">
                                                            <h4><Link to="/">Heat Meter </Link></h4>
                                                            <h4>(x 10)</h4>
                                                        </div>
                                                        <div className="shopping-cart-value">
                                                            <h2>$18.00</h2>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="shopping-cart-footer">
                                                    <div className="shopping-cart-total">
                                                        <h4>Total <span>$3000.00</span></h4>
                                                    </div>
                                                    <div className="shopping-cart-btn">
                                                        <Link to="/cart" className="outline">View cart</Link>
                                                        <Link to="/checkout">Checkout</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="header-inner-icon ">
                                            <Link className="small-cart-icon me-3" to="">
                                                <i className="feather-shopping-bag"></i>
                                                <span className="pro-count blue">1</span>
                                            </Link>
                                            <Link to="/cart" className="me-3">
                                                <span className="lable d-block mt-0">Cart</span>
                                                <span className="cart-amout d-block ">$0.00</span>
                                            </Link>
                                            <div className="cart-dropdown-wrap">
                                                <ul>
                                                    <li>
                                                        <div className="shopping-cart-img">
                                                            <Link to="/"><img src="/img/shop/cart-img-01.jpg" alt="" /></Link>
                                                        </div>
                                                        <div className="shopping-cart-title">
                                                            <h4><Link to="/">Antiseptic Spray</Link></h4>
                                                            <h4>(x 10)</h4>
                                                        </div>
                                                        <div className="shopping-cart-value">
                                                            <h2>$32.00</h2>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="shopping-cart-img">
                                                            <Link to="/"><img src="/img/shop/cart-img-02.jpg" alt="" /></Link>
                                                        </div>
                                                        <div className="shopping-cart-title">
                                                            <h4><Link to="/">Liver Detox Pills </Link></h4>
                                                            <h4>(x 10)</h4>
                                                        </div>
                                                        <div className="shopping-cart-value">
                                                            <h2>$32.00</h2>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="shopping-cart-img">
                                                            <Link to="/"><img src="/img/shop/cart-img-03.jpg" alt="" /></Link>
                                                        </div>
                                                        <div className="shopping-cart-title">
                                                            <h4><Link to="/">Heat Meter </Link></h4>
                                                            <h4>(x 10)</h4>
                                                        </div>
                                                        <div className="shopping-cart-value">
                                                            <h2>$32.00</h2>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="shopping-cart-footer">
                                                    <div className="shopping-cart-total">
                                                        <h4>Total <span>$4000.00</span></h4>
                                                    </div>
                                                    <div className="shopping-cart-btn">
                                                        <Link to="/cart" className="outline">View cart</Link>
                                                        <Link to="/checkout">Checkout</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom sticky-bar">
                    <div className="container">
                        <div className="header-col">
                            <div className="logo header-logo d-block d-lg-none">
                                <Link to="/" className="d-none d-lg-block"><img src="/img/logo.png" alt="logo" /></Link>
                                <Link to="/" className="d-sm-block"><img src="/img/logo-01.png" alt="logo" /></Link>
                            </div>
                            <div className="header-nav d-none d-lg-flex">
                                <div className="main-menu d-none d-lg-block">
                                    <nav>
                                        <ul>
                                            <li>
                                                <Link className="active" to="#">All Medicines <i className="fi-rs-angle-down"></i></Link>
                                                <ul className="has-submenu">
                                                    <li><Link to="/">COVID Medicines</Link></li>
                                                    <li><Link to="/">Ayrvedic Medicines</Link></li>
                                                    <li><Link to="/">Health Equipments</Link></li>
                                                    <li><Link to="/">Personal Care</Link></li>
                                                    <li><Link to="/">Fitness Suppliments</Link></li>
                                                    <li><Link to="/">Childcare</Link></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="#">COVID Medicines <i className="fi-rs-angle-down"></i></Link>
                                                <ul className="has-submenu">
                                                    <li><Link to="/">Stimulants</Link></li>
                                                    <li><Link to="/">Opoids</Link></li>
                                                    <li><Link to="/">Antibiotics</Link></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="#">Ayrvedic Medicines <i className="fi-rs-angle-down"></i></Link>
                                                <ul className="has-submenu">
                                                    <li><Link to="/">Calcitonin</Link></li>
                                                    <li><Link to="/">Echinocandins</Link></li>
                                                    <li><Link to="/">Handicraft</Link></li>
                                                    <li><Link to="/">Suppositories</Link></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="#">Health Equipments <i className="fi-rs-angle-down"></i></Link>
                                                <ul className="has-submenu">
                                                    <li><Link to="/">Medical Supplies</Link></li>
                                                    <li><Link to="/">Pulse Oximeters</Link></li>
                                                    <li><Link to="/">Examination Gloves</Link></li>
                                                    <li><Link to="/">Baby Care</Link></li>
                                                    <li><Link to="/">Respiratory</Link></li>
                                                    <li><Link to="/">Medical Equipment</Link></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="#">Personal Care <i className="fi-rs-angle-down"></i></Link>
                                                <ul className="has-submenu">
                                                    <li><Link to="/"> Digital Glucose Meter</Link></li>
                                                    <li><Link to="/">Digital Thermometer</Link></li>
                                                    <li><Link to="/">Cotton Mask</Link></li>
                                                    <li><Link to="/">Kids Thermometer</Link></li>
                                                    <li><Link to="/">Face Mask</Link></li>
                                                    <li><Link to="/">Digital Meter</Link></li>
                                                </ul>
                                            </li>
                                            <li className="position-static">
                                                <Link to="#">Mega Menu <i className="fi-rs-angle-down"></i></Link>
                                                <ul className="mega-menu">
                                                    <li className="sub-mega-menu sub-mega-menu-two">
                                                        <div className="menu-banner-wrap">
                                                            <div className="menu-banner-content">
                                                                <p>WEEKEND DISCOUNT 20%</p>
                                                                <h4>Blood Pressure</h4>
                                                                <h3>Monitor Upper Arm</h3>
                                                                <div className="menu-banner-price">
                                                                    <span className="new-price">Save to 20%</span>
                                                                </div>
                                                                <div className="menu-banner-btn">
                                                                    <Link to="/cart">Shop All</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="sub-mega-menu sub-mega-menu-one">
                                                        <Link className="menu-title" to="#">Shop Layouts</Link>
                                                        <ul className="dropdown">
                                                            <li><Link to="/">Shop Grid</Link></li>
                                                            <li><Link to="/">Shop List</Link></li>
                                                            <li><Link to="/">Shop Left Sidebar</Link></li>
                                                            <li><Link to="/">Shop Right Sidebar</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="sub-mega-menu sub-mega-menu-one">
                                                        <Link className="menu-title" to="#">Product Layouts</Link>
                                                        <ul>
                                                            <li><Link to="/">View Product</Link></li>
                                                            <li><Link to="/">Product Left Sidebar</Link></li>
                                                            <li><Link to="/">Product Right Sidebar</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="sub-mega-menu sub-mega-menu-one">
                                                        <Link className="menu-title" to="#">Product Type</Link>
                                                        <ul>
                                                            <li><Link to="/">Store Listing</Link></li>
                                                            <li><Link to="/">Store Single</Link></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="#">Pages <i className="fi-rs-angle-down"></i></Link>
                                                <ul className="has-submenu">
                                                    <li><Link to="/account">My Account</Link></li>
                                                    <li><Link to="/profile">Profile</Link></li>
                                                    <li><Link to="/orders">Orders</Link></li>
                                                    <li><Link to="/address-book">Address Book </Link></li>
                                                    <li><Link to="/wishlist">Wishlist</Link></li>
                                                    <li><Link to="/vendor">Vendor</Link></li>
                                                    <li><Link to="/cart">Cart</Link></li>
                                                    <li><Link to="/checkout">Checkout</Link></li>
                                                    <li><Link to="/error-404">Error404</Link></li>
                                                    <li><Link to="/error-500">Error500</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="header-inner-icon d-block d-lg-none">
                                <div className="bar-icon">
                                    <span className="bar-icon-one"></span>
                                    <span className="bar-icon-two"></span>
                                    <span className="bar-icon-three"></span>
                                </div>
                            </div>
                            <div className="header-details d-block d-lg-none">
                                <div className="header-inner">
                                    <div className="header-inner-icon">
                                        <Link className="small-cart-icon " to="">
                                            <i className="feather-heart"></i>
                                            <span className="pro-count blue">0</span>
                                        </Link>
                                        <div className="cart-dropdown-wrap cart-dropdown-two">
                                            <ul>
                                                <li>
                                                    <div className="shopping-cart-img">
                                                        <Link to="/"><img src="/img/shop/cart-img-02.jpg" alt="" /></Link>
                                                    </div>
                                                    <div className="shopping-cart-title">
                                                        <h4><Link to="/">Liver Detox Pills </Link></h4>
                                                        <h4>(x 10)</h4>
                                                    </div>
                                                    <div className="shopping-cart-value">
                                                        <h2>$15.00</h2>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="shopping-cart-img">
                                                        <Link to="/"><img src="/img/shop/cart-img-03.jpg" alt="" /></Link>
                                                    </div>
                                                    <div className="shopping-cart-title">
                                                        <h4><Link to="/">Heat Meter </Link></h4>
                                                        <h4>(x 10)</h4>
                                                    </div>
                                                    <div className="shopping-cart-value">
                                                        <h2>$18.00</h2>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="shopping-cart-footer">
                                                <div className="shopping-cart-total">
                                                    <h4>Total <span>$3000.00</span></h4>
                                                </div>
                                                <div className="shopping-cart-btn">
                                                    <Link to="/cart">View cart</Link>
                                                    <Link to="/checkout">Checkout</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="header-inner-icon">
                                        <Link className="small-cart-icon " to="">
                                            <i className="feather-shopping-bag"></i>
                                            <span className="pro-count blue">1</span>
                                        </Link>
                                        <div className="cart-dropdown-wrap cart-dropdown-two">
                                            <ul>
                                                <li>
                                                    <div className="shopping-cart-img">
                                                        <Link to="/"><img src="/img/shop/cart-img-01.jpg" alt="" /></Link>
                                                    </div>
                                                    <div className="shopping-cart-title">
                                                        <h4><Link to="/">Antiseptic Spray</Link></h4>
                                                        <h4>(x 10)</h4>
                                                    </div>
                                                    <div className="shopping-cart-value">
                                                        <h2>$32.00</h2>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="shopping-cart-img">
                                                        <Link to="/"><img src="/img/shop/cart-img-02.jpg" alt="" /></Link>
                                                    </div>
                                                    <div className="shopping-cart-title">
                                                        <h4><Link to="/">Liver Detox Pills </Link></h4>
                                                        <h4>(x 10)</h4>
                                                    </div>
                                                    <div className="shopping-cart-value">
                                                        <h2>$32.00</h2>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="shopping-cart-img">
                                                        <Link to="/"><img src="/img/shop/cart-img-03.jpg" alt="" /></Link>
                                                    </div>
                                                    <div className="shopping-cart-title">
                                                        <h4><Link to="/">Heat Meter </Link></h4>
                                                        <h4>(x 10)</h4>
                                                    </div>
                                                    <div className="shopping-cart-value">
                                                        <h2>$32.00</h2>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="shopping-cart-footer">
                                                <div className="shopping-cart-total">
                                                    <h4>Total <span>$383.00</span></h4>
                                                </div>
                                                <div className="shopping-cart-btn">
                                                    <Link to="/cart">View cart</Link>
                                                    <Link to="checkout">Checkout</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;