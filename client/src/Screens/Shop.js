import React from 'react';
import ClientWrapper from './ClientWrapper';
import { Link } from 'react-router-dom';
import { useGetAllProductsQuery } from "../store/Services/ProductServices";
import {useGetAllCategoriesQuery} from "../store/Services/CategoryService";
import {addToCart} from "../store/Reducers/CartReducer";
import {useSelecter, useDispatch} from "react-redux";
import {Helmet} from "react-helmet";

const Shop = () => {
    const { data = [], isFetching } = useGetAllProductsQuery();
    const {data:categories=[], isFetching:categoriesAvialable} = useGetAllCategoriesQuery();

    const dispatch = useDispatch();

    const addToCartProduct = (product) =>
    {
        const productData = {
            id : product._id,
            category : product.category,
            name : product.name,
            image : product.image,
            mrp: product.mrp,
            price : product.price,
            sku : product.sku,
            quantity : 1
        }
        
        dispatch(addToCart(productData));
        console.log(productData);
        alert("Product Added To Cart");
    }

    return (
        <ClientWrapper>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Products | Nooks</title>
            </Helmet>
            <div className="breadcrumb-group">
                <div className="container">
                    <div className="page-header breadcrumb-wrap">
                        <div className="breadcrumb">
                            <ul>
                                <li><Link to="/" rel="nofollow"><i className="fas fa-home mr-10"></i>Home</Link></li>
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
                                                { !categoriesAvialable && categories.category.map((category, index)=>
                                                    <li key={index} className="nav-item" id="dashboard-one"><Link className="nav-link" to={ `/shop/${category._id}` }> <i className="feather-arrow-right "></i> { category.title }  </Link></li>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 ">
                                <div className="product-filter-group left-filter-bar">
                                    <div className="row">
                                        <div className="col-xl-7 col-lg-6">
                                            <div className="filter-list">
                                                <ul>
                                                    <li className="border-0"><i className="fi-rs-apps"></i></li>
                                                    <li>Showing total 62 results</li>
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

                                    {!isFetching && data.product.map((product, index) =>
                                        product.status ?
                                            <div className="col-xl-4 col-md-4 col-12 col-sm-6">
                                                <div className="product-card wow animate__animated animate__fadeIn mb-25" data-wow-delay=".1s">
                                                    <div className="product-img-col">
                                                        <div className="product-img product-img-zoom">
                                                            <Link to={`/product/${product._id}`}>
                                                                <img src={`/upload/products/${product.image}`} alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="product-badge">
                                                            <span className="best">{Math.ceil((product.mrp - product.price) / product.mrp * 100)}% Off</span>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <h2><Link to={`/product/${product._id}`}>{product.name}</Link></h2>
                                                        <div className="product-card-bottom ">
                                                            <div className="product-price">
                                                                <span>$ {product.price}</span>
                                                                <span className="old-price">$ {product.mrp}</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-feature">
                                                            <button onClick={()=>addToCartProduct(product)} className="btn btn-primary"><i className="feather-shopping-bag me-1"></i>Add To Cart</button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                    : "")}
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