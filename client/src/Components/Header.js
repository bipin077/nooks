import React, {useState} from 'react';
import "../Styles/Header.css";

import {Link, useNavigate} from "react-router-dom";

import {useGetAllCategoriesQuery} from "../store/Services/CategoryService";

import { useSelector } from 'react-redux';

const Header = () => {

    const navigate = useNavigate();
    const {data=[], isFetching} = useGetAllCategoriesQuery();

    const [search, setSearch] = useState("");

    const cartData = useSelector(state => state.CartReducer);

    const searchQueryData = (e) =>
    {
        navigate("/search/"+search);        
    }

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
                                        <li><i className="feather-user"></i><Link to="/login" className="popup-toggle">Login</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-middle">
                    <div className="container">
                        <div className="header-col">
                            <div className="logo header-logo">
                                <Link to="/"><img src="/upload/logo.png" alt="logo" /></Link>
                            </div>
                            <div className="header-right">
                                <div className="header-search">
                                    <form onSubmit={searchQueryData}>
                                        <input type="text" placeholder="Search for medicines, health products and more" value={search} onChange={(e)=>setSearch(e.target.value)} />
                                        <input type="submit" className="submit-btn popup-toggle3" />
                                    </form>
                                </div>
                                <div className="header-details">
                                    <div className="header-inner">
                                        <Link to="/shop">
                                            <label className="file-uploaded ml-15 me-2 d-none d-md-block">
                                                Explore Latest Products
                                            </label>
                                        </Link>
                                        <div className="header-inner-icon ">
                                            <Link className="small-cart-icon" to="">
                                                <i className="feather-heart"></i>
                                                <span className="pro-count blue">{cartData.totalItems}</span>
                                            </Link>
                                        </div>
                                        <div className="header-inner-icon d-block d-md-none">
                                                <i className="fa fa-bars"></i>
                                        </div>
                                        <div className="header-inner-icon ">
                                            <Link to="/cart" className="me-3">
                                                <span className="lable d-block mt-0">Cart</span>
                                                <span className="cart-amout d-block ">${cartData.totalPrice}</span>
                                            </Link>
                                            { cartData.cart.length > 0 ?
                                            <div className="cart-dropdown-wrap">
                                                <ul>
                                                { cartData.cart.map((item, index)=>
                                                        <li key={index}>
                                                            <div className="shopping-cart-img">
                                                                <Link to="/"><img src={ `/upload/products/${item.image}` } alt="" style={{ "width" : "50px", "height" : "50px" }} /></Link>
                                                            </div>
                                                            <div className="shopping-cart-title">
                                                                <h4><Link to="/">{item.name}</Link></h4>
                                                                <h4>(x {item.quantity})</h4>
                                                            </div>
                                                            <div className="shopping-cart-value">
                                                                <h2>${item.price}</h2>
                                                            </div>
                                                        </li>
                                                    )}
                                                </ul> 
                                                <div className="shopping-cart-footer">
                                                    <div className="shopping-cart-total">
                                                        <h4>Total <span>${cartData.totalPrice}</span></h4>
                                                    </div>
                                                    <div className="shopping-cart-btn">
                                                        
                                                        <Link to="/cart">Go To Cart</Link>
                                                    </div>
                                                </div> 
                                            </div>
                                            : "" }
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
                            <div className="header-nav d-lg-flex">
                                <div className="main-menu d-lg-block">
                                    <nav>
                                        <ul>
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to="/about">About Us</Link></li>
                                            { !isFetching && data.category.map((category, index)=>
                                                <li key={index}><Link to={ `/shop/${category._id}` }>{ category.title }</Link></li>
                                                
                                                )}
                                            <li><Link to="/contact">Contact Us</Link></li>
                                        </ul>
                                    </nav>
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