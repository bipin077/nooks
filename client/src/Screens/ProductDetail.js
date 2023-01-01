import React, { useEffect, useState } from 'react';
import ClientWrapper from './ClientWrapper';
import {Helmet} from "react-helmet";
import { useParams, useLocation } from 'react-router-dom';
import {useDispatch} from "react-redux";
import { useGetSingleProductQuery } from "../store/Services/ProductServices";
import { addToCart } from '../store/Reducers/CartReducer';
import htmlToFormattedText from "html-to-formatted-text";

const ProductDetail = () => {
    const dispatch = useDispatch();

    const { id } = useParams();
    const [productData, setProductData] = useState({
        id : '',
        category : '',
        name : '',
        image : '',
        mrp: '',
        price : '',
        sku : '',
        quantity : 1
    });

    
    const incrementQuantity = () =>
    {
        setProductData({ ...productData, quantity : productData.quantity + 1 });
    }

    const decrementQuantity = () =>
    {
        if(productData.quantity>1)
        {
            setProductData({ ...productData, quantity : productData.quantity - 1 });  
        }
        else
        {
            setProductData({ ...productData, quantity : 1 });
        }
    }


    const { data = [], isFetching } = useGetSingleProductQuery(id);

    const addToCartProduct = () =>
    {
        // setProductData({...productData, quantity : quantity});
        dispatch(addToCart(productData));
        alert("Product Added To Cart");
    }

    const desc = htmlToFormattedText();

    useEffect(() =>{

        if(!isFetching)
        {
            setProductData({...productData, id : data.product._id, category : data.product.category, name : data.product.name, image : data.product.image, mrp : data.product.mrp, price : data.product.price, sku : data.product.sku});
        }
    },[data.msg])

      useScrollToTop();

    return (
        <ClientWrapper>
            <Helmet>
                <meta charSet="utf-8" />
                {!isFetching ? <title>{data.product.name} | Nooks</title> : "" }
            </Helmet>

            {!isFetching ? <>
                <div className="breadcrumb-group">
                    <div className="container">
                        <div className="page-header breadcrumb-wrap">
                            <div className="breadcrumb">
                                <ul>
                                    <li><a href="index.html" rel="nofollow"><i className="fas fa-home mr-10"></i>Home</a></li>
                                    <li>Product</li>
                                    <li>{data.product.name}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <main className="main">
                    <div className="page-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 m-auto">
                                    <div className="product-detail accordion-detail">
                                        <div className="row mb-50">
                                            <div className="col-md-5 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                                                <div className="detail-gallery">

                                                    <div className="position-relative">
                                                        <div className="product-image-slider">
                                                            <figure className="border-radius-10">
                                                                <img src={ `/upload/products/${data.product.image}`} alt="product image" />
                                                            </figure>
                                                        </div>
                                                        <span className="zoom-icon"><i className="feather-search"></i></span>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-md-7 col-sm-12 col-xs-12">
                                                <div className="detail-info">
                                                    <h5 className="title-detail">{data.product.name}</h5>
                                                    <div className="clearfix product-price-cover">
                                                        <div className="product-price primary-color float-left">
                                                            <span className="current-price">$ {data.product.price}</span>
                                                            <span className="old-price">$ {data.product.mrp}</span>
                                                        </div>
                                                    </div>
                                                    <ul className="pro-code">
                                                        <li>SKU ID : <span className="text-black">{data.product.sku}</span></li>
                                                        <li>Category : <span className="text-black">{data.product.category}</span></li>
                                                    </ul>
                                                    <div>
                                                    { htmlToFormattedText(data.product.specification) }
                                                    </div>
                                                    <div className="product-extra-link2 ">
                                                        <h5>Quantity</h5>
                                                        <div className="quntity-group  d-flex">
                                                            <div className="detail-extralink">
                                                                <div className="detail-qty border radius">
                                                                    <a onClick={decrementQuantity} className="qty-down"><i className="fi-rs-minus-small"></i></a>
                                                                    <span className="qty-val">{productData.quantity}</span>
                                                                    <a onClick={incrementQuantity} className="qty-up"><i className="fi-rs-plus-small"></i></a>
                                                                </div>
                                                            </div>
                                                            <button className="button button-add-to-cart me-3" onClick={addToCartProduct}><i
                                                                className="fi-rs-shopping-cart"></i> Add to cart</button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <div className="tab-style3">
                                                <div className="view-detail-tab">
                                                    <div className="tab-content shop_info_tab entry-main-content">
                                                        
                                                        <div className="tab-pane about-items fade show active" id="Description">
                                                            <h5>Product Description</h5>
                                                            <div className="">
                                                                {htmlToFormattedText(data.product.description)}
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
                    </div>
                </main>
            </>
                : ""}

        </ClientWrapper>
    )
}


const useScrollToTop = () => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo({ top: 0 });
     // scroll to the top of the browser window when changing route
     // the window object is a normal DOM object and is safe to use in React.
    }, [location]);
  };

export default ProductDetail;