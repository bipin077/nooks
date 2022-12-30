import React from 'react';
import { Link } from 'react-router-dom';

import {useGetContactDetailsQuery} from "../store/Services/ContactServices";
import {useGetAllCategoriesQuery} from "../store/Services/CategoryService";
import {useGetProfileDataQuery} from "../store/Services/ProfileServices";

const Footer = () => {

    const {data=[], isFetching} = useGetContactDetailsQuery();
    const {data:categoryData = []} = useGetAllCategoriesQuery();
    const {data:profileData = []} = useGetProfileDataQuery();


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
                                    { profileData?.profile ? <p>{ profileData.profile.details}</p> : "" }
                                    <Link to="/"><img src="/img/payment.png" alt="logo" /></Link>
                                </div>
                            </div>
                        </div>
                        { !isFetching ? 
                            
                        <div className="footer-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                            <h4 className="footer-title">Contact Info</h4>
                            <ul className="contact-info">
                                <li>
                                    { data?.contact?.phone1 ? <p><i className="fas fa-phone-alt"></i> {data.contact.phone1} </p> : "" }
                                    { data?.contact?.phone2 ? <p><i className="fas fa-phone-alt"></i> {data.contact.phone2} </p> : "" }
                                </li>
                                <li>
                                    { data?.contact?.email1 ? <p><i className="fas fa-envelope"></i> <Link to="" className="__cf_email__">{data.contact.email1}</Link></p> : "" }
                                    { data?.contact?.email2 ? <p><i className="fas fa-envelope"></i> <Link to="" className="__cf_email__">{data.contact.email2}</Link></p> : "" }
                                </li>
                                <li>
                                    <p><i className="fas fa-map-marker-alt"></i> {data.contact.address}</p>
                                </li>
                            </ul>
                            <ul className="footer-social-icon">
                                { data?.contact?.facebook ? <li><Link to={data.contact.facebook} target="_blank"><i className="fab fa-facebook"></i></Link></li> : "" }
                                {data?.contact?.linkedin ? <li><Link to={data.contact.linkedin} target="_blank"><i className="fab fa-linkedin"></i></Link></li> : "" }
                                {data?.contact?.instagram ? <li><Link to={data.contact.instagram} target="_blank"><i className="fab fa-instagram"></i></Link></li> : "" }
                                {data?.contact?.twitter ?  <li><Link to={data.contact.twitter} target="_blank"><i className="fab fa-twitter"></i></Link></li> : "" }
                                {data?.contact?.whatsapp ?  <li><Link to={data.contact.whatsapp} target="_blank"><i className="fab fa-whatsapp"></i></Link></li> : "" }
                                {data?.contact?.youtube ?  <li><Link to={data.contact.youtube} target="_blank"><i className="fab fa-youtube"></i></Link></li> : "" }
                            </ul>
                        </div> : "" }
                        <div className="footer-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                            <h4 className="footer-title">Popular Categories</h4>
                            <ul className="footer-list mb-sm-5 mb-md-0">
                            {
                                categoryData?.category && categoryData.category.map((cat)=>
                                    <li><Link to={ `/shop/${cat._id}` }>{cat.title}</Link></li>
                                )
                            }
                            </ul>
                        </div>
                        <div className="footer-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                            <h4 className="footer-title">Quick Links</h4>
                            <ul className="footer-list mb-sm-5 mb-md-0">
                                <li><Link to="/about">About Us </Link></li>
                                <li><Link to="/shop">Products</Link></li>
                                <li><Link to="/cart">My Cart</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
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