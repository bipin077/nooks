import React from 'react'

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
                                    <a href="index.html" className="mb-15"><img src="/img/logo.png" alt="logo" /></a>
                                    <p>Integer posuere orci sit amet feugiat pellent que. Suspendisse vel tempor justo, sit
                                        amet posuere orci dapibus auctor.Integer posuere orci sit amet.</p>
                                    <a href="index.html"><img src="/img/payment.png" alt="logo" /></a>
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
                                    <p><i className="fas fa-envelope"></i> <a
                                        href="https://nookx.dreamguystech.com/cdn-cgi/l/email-protection"
                                        className="__cf_email__"
                                        data-cfemail="e18499808c918d84a191808980938c808298cf828e8c">[email&#160;protected]</a>
                                    </p>
                                </li>
                                <li>
                                    <p><i className="fas fa-map-marker-alt"></i> London</p>
                                </li>
                            </ul>
                            <ul className="footer-social-icon">
                                <li><a href="/" target="_blank"><i className="fab fa-facebook"></i></a></li>
                                <li><a href="/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                                <li><a href="/" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="/" target="_blank"><i className="fab fa-twitter"></i></a></li>
                            </ul>
                        </div>
                        <div className="footer-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                            <h4 className="footer-title">Usefull Links</h4>
                            <ul className="footer-list mb-sm-5 mb-md-0">
                                <li><a href="/">Product Recall</a></li>
                                <li><a href="/">Gift Vouchers</a></li>
                                <li><a href="/">Returns & Exchange</a></li>
                                <li><a href="/">Shipping Options</a></li>
                                <li><a href="/">Help & FAQs</a></li>
                            </ul>
                        </div>
                        <div className="footer-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                            <h4 className="footer-title">Quick Links</h4>
                            <ul className="footer-list mb-sm-5 mb-md-0">
                                <li><a href="/">About Us </a></li>
                                <li><a href="product-left-sidebar.html">Shop Products</a></li>
                                <li><a href="cart.html">My Cart</a></li>
                                <li><a href="checkout.html">Checkout</a></li>
                                <li><a href="/">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className="footer-bottom wow animate__animated animate__fadeInUp" data-wow-delay="0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-5">
                            <p className="font-sm mb-0">Copyright © 2022 Bestpharmacy All rights reserved.</p>
                        </div>
                        <div className="col-lg-6 col-md-7">
                            <ul className="footer-list mb-sm-5 mb-md-0">
                                <li><a href="orders.html">My Orders</a></li>
                                <li><a href="/">Help</a></li>
                                <li><a href="/">Site Map</a></li>
                                <li><a href="/">About</a></li>
                                <li><a href="/">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer