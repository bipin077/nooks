import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <section className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="footer-about font-md mb-md-3 mb-lg-3 mb-xl-0 wow animate__animated animate__fadeInUp"
                                data-wow-delay="0">
                                <div className="logo mb-30">
                                    <Link to="/" className="mb-15"><img src="/upload/logo.png" alt="logo" /></Link>
                                    <p>Integer posuere orci sit amet feugiat pellent que. Suspendisse vel tempor justo, sit
                                        amet posuere orci dapibus auctor.Integer posuere orci sit amet.</p>
                                    <Link to="/"><img src="/img/payment.png" alt="logo" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="footer-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                            <h4 className="footer-title">Contact Info</h4>
                            <ul className="contact-info">
                                <li>
                                    <p><i className="fas fa-phone-alt"></i> +3 (523) 555 123 8745</p>
                                </li>
                                <li>
                                    <p><i className="fas fa-envelope"></i> <Link
                                        to=""
                                        className="__cf_email__">abc@gmail.com</Link>
                                    </p>
                                </li>
                                <li>
                                    <p><i className="fas fa-map-marker-alt"></i> London</p>
                                </li>
                            </ul>
                            <ul className="footer-social-icon">
                                <li><Link to="/" target="_blank"><i className="fab fa-facebook"></i></Link></li>
                                <li><Link to="/" target="_blank"><i className="fab fa-linkedin"></i></Link></li>
                                <li><Link to="/" target="_blank"><i className="fab fa-instagram"></i></Link></li>
                                <li><Link to="/" target="_blank"><i className="fab fa-twitter"></i></Link></li>
                            </ul>
                        </div>
                        <div className="footer-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                            <h4 className="footer-title">Usefull Links</h4>
                            <ul className="footer-list mb-sm-5 mb-md-0">
                                <li><Link to="/">Product Recall</Link></li>
                                <li><Link to="/">Gift Vouchers</Link></li>
                                <li><Link to="/">Returns & Exchange</Link></li>
                                <li><Link to="/">Shipping Options</Link></li>
                                <li><Link to="/">Help & FAQs</Link></li>
                            </ul>
                        </div>
                        <div className="footer-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                            <h4 className="footer-title">Quick Links</h4>
                            <ul className="footer-list mb-sm-5 mb-md-0">
                                <li><Link to="/">About Us </Link></li>
                                <li><Link to="product-left-sidebar.html">Shop Products</Link></li>
                                <li><Link to="cart.html">My Cart</Link></li>
                                <li><Link to="checkout.html">Checkout</Link></li>
                                <li><Link to="/">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className="footer-bottom wow animate__animated animate__fadeInUp" data-wow-delay="0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 text-center">
                            <p className="font-sm mb-0">Copyright © 2022 Bestpharmacy All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer