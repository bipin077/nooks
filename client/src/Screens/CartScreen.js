import React from 'react';
import ClientWrapper from './ClientWrapper';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

import { useSelector, useDispatch } from 'react-redux';

import { removeCartItems, incrementCartQuantity, decrementCartQuantity } from '../store/Reducers/CartReducer';





const CartScreen = () => {

    const cartProducts = useSelector(cart => cart.CartReducer);

    const dispatch = useDispatch();
    return (
        <ClientWrapper>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Cart | Nooks</title>
            </Helmet>
            <div className="breadcrumb-group">
                <div className="container">
                    <div className="page-header breadcrumb-wrap">
                        <div className="breadcrumb">
                            <ul>
                                <li><Link to="/" rel="nofollow"><i className="fas fa-home mr-10"></i>Home</Link></li>
                                <li>Shoping Cart</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <main className="main">
                <div className="page-content">
                {
                    cartProducts.cart.length > 0 ?
                        <div className="container">
                            <div className="section-title section-new-title wow animate__animated animate__fadeIn" data-wow-delay="0">
                                <h4>Shopping Cart</h4>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="table-responsive shopping-table">
                                        <table className="table">
                                            <thead>
                                                <tr className="table-head">
                                                    <th></th>
                                                    <th>Product Name</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                { cartProducts.cart.map((cart)=>
                                                    
                                                    <tr className="table-head">
                                                        <td><span onClick={()=>dispatch(removeCartItems(cart))} className="table-btn-close"><i className="feather-x-circle"></i></span></td>
                                                        <td className="cart-store">
                                                            <Link to="view-product"><img src={ `/upload/products/${cart.image}` } className="img-fluid" alt="" /></Link>
                                                            <div className="sold-group">
                                                                <Link to="/">{cart.name}</Link>
                                                            </div>
                                                        </td>
                                                        <td>$ {cart.price}</td>
                                                        <td>
                                                            <div className="product-extra-link2 ">
                                                                <div className="quntity-group  d-flex">
                                                                    <div className="detail-extralink">
                                                                        <div className="detail-qty border radius">
                                                                            <a onClick={()=>dispatch(decrementCartQuantity(cart))} className="qty-down"><i className="fi-rs-minus-small"></i></a>
                                                                            <span className="qty-val">{cart.quantity}</span>
                                                                            <a onClick={()=>dispatch(incrementCartQuantity(cart))} className="qty-up"><i className="fi-rs-plus-small"></i></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>${cart.price * cart.quantity} </td>
                                                    </tr>
                                                    
                                                    )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="shop-cart">
                                    <div className="row">
                                        <div className="col-lg-8 col-md-6">
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="shop-cart-info">
                                                        <p>Total <span className="total-brand">$ {cartProducts.totalPrice} </span></p>
                                                        <Link to="/checkout" className="btn checkout-btn w-100">Proceed to
                                                            checkout</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> : 
                        <div className='container'>
                            <div className='row'>
                                <div className='col-sm-6 offset-sm-3 text-center'>
                                    <img src="/img/empty-cart.png" style={{ "width" : "70%"}} />
                                    <h4 className='text-danger'>No Items In Your Cart !</h4>
                                </div>
                            </div>
                        </div>
                                
                    }
                </div>
            </main>

        </ClientWrapper>
    )
}

export default CartScreen