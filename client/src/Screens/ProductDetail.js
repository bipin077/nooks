import React from 'react';
import ClientWrapper from './ClientWrapper';

import { useParams } from 'react-router-dom';

import { useGetSingleProductQuery } from "../store/Services/ProductServices";


const ProductDetail = () => {

    const { id } = useParams();

    const { data = [], isFetching } = useGetSingleProductQuery(id);
    console.log(data);

    return (
        <ClientWrapper>

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
                                                        {data.product.specification}
                                                    </div>
                                                    <div className="product-extra-link2 ">
                                                        <h5>Quantity</h5>
                                                        <div className="quntity-group  d-flex">
                                                            <div className="detail-extralink">
                                                                <div className="detail-qty border radius">
                                                                    <a href="#" className="qty-down"><i
                                                                        className="fi-rs-minus-small"></i></a>
                                                                    <span className="qty-val">1</span>
                                                                    <a href="#" className="qty-up"><i className="fi-rs-plus-small"></i></a>
                                                                </div>
                                                            </div>
                                                            <a href="cart.html" className="button button-add-to-cart me-3"><i
                                                                className="fi-rs-shopping-cart"></i> Add to cart</a>
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
                                                                {data.product.description}
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

export default ProductDetail;