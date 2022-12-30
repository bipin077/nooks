import React from 'react';

import ClientWrapper from './ClientWrapper';
import { Link, useParams } from 'react-router-dom';

import { useSearchProductQuery } from "../store/Services/ProductServices";
import {Helmet} from "react-helmet";
import {addToCart} from "../store/Reducers/CartReducer";
import {useSelecter, useDispatch} from "react-redux";

const SearchScreen = () => {
    const {query} = useParams();
    const { data = [], isFetching } = useSearchProductQuery(query);

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
                <title>{query} | Nooks</title>
            </Helmet>
            <div className="breadcrumb-group">
                <div className="container">
                    <div className="page-header breadcrumb-wrap">
                        <div className="breadcrumb">
                            <ul>
                                <li><a href="index.html" rel="nofollow"><i className="fas fa-home mr-10"></i>Home</a></li>
                                <li>Shop Grid</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <main className="main">
                <div className="page-content">
                    <div className="container mb-30">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="product-filter-group">
                                    <div className="row">
                                        <div className="col-xl-5 col-lg-4">
                                            <div className="show-result">
                                                <p>Showing results for query : { query }</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row product-grid">

                                {!isFetching && data.product.map((product, index) =>
                                    product.status ?
                                        <div className="col-xl-3 col-md-3 col-12 col-sm-6">
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

export default SearchScreen;