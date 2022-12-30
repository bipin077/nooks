import React, { useState, useEffect } from 'react'
import ClientWrapper from './ClientWrapper';
import { Link, useNavigate } from 'react-router-dom';
import {Helmet} from "react-helmet";
import { useSelector, useDispatch } from 'react-redux';
import {emptyCartData} from "../store/Reducers/CartReducer";


import {useAddNewOrderMutation} from "../store/Services/OrdersService";


const CheckoutScreen = () => {

    const [state, setState] = useState({
        name: "",
        phone: "",
        email: "",
        country: "",
        state: "",
        city: "",
        address: "",
        pincode: "",
        order_note: "",
        payment_method: "Online",
        payment_status : "pending"
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [addNewOrder, response] = useAddNewOrderMutation();
    console.log(response);

    const inputHandler = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    const cartProducts = useSelector(state => state.CartReducer);
    const products = JSON.stringify(cartProducts.cart);

    const formSubmitHandler = (e) =>
    {
        const productData = {
            "name" : state.name,
            "phone" : state.phone,
            "email" : state.email,
            "country" : state.country,
            "state" : state.state,
            "city" : state.city,
            "address" : state.address,
            "pincode" : state.pincode,
            "order_note" : state.order_note,
            "payment_method" : state.payment_method,
            "payment_status" : state.payment_status,
            "products" : products
        }

        addNewOrder(productData);
    }

    useEffect(()=>
    {
        if(response.isSuccess)
        {
            alert("Order Placed Successfully");
            dispatch(emptyCartData())
            navigate('/');
        }
        
    },[response.isSuccess])

    return (
        <ClientWrapper>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Checkout | Nooks</title>
            </Helmet>
            <div className="breadcrumb-group">
                <div className="container">
                    <div className="page-header breadcrumb-wrap">
                        <div className="breadcrumb">
                            <ul>
                                <li><Link to="/" rel="nofollow"><i className="fas fa-home mr-10"></i>Home</Link></li>
                                <li>Checkout</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <main className="main">
                <div className="container mb-80 mt-50">
                    <form onSubmit={(e)=>e.preventDefault()}>
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="row">
                                    <h4 className="mb-30">Billing Details</h4>
                                    <div className="billing-detail-blk">
                                        <div className="row">
                                            <div className="form-group col-lg-12">
                                                <label>Full Name <span className="text-danger">*</span></label>
                                                <input type="text" name="name" placeholder="Full Name" value={state.name} onChange={inputHandler} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-lg-6">
                                                <label>Email address <span className="text-danger">*</span></label>
                                                <input type="email" name="email" required="" placeholder="Email" value={state.email} onChange={inputHandler} />
                                            </div>
                                            <div className="form-group col-lg-6">
                                                <label>Phone <span className="text-danger">*</span></label>
                                                <input required="" type="text" name="phone" placeholder="Phone" value={state.phone} onChange={inputHandler} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-lg-12">
                                                <label>Street address <span className="text-danger">*</span></label>
                                                <input type="text" name="address" required="" placeholder="Address" value={state.address} onChange={inputHandler} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-lg-6">
                                                <label>Country / Region <span className="text-danger">*</span></label>
                                                <input type="text" name="country" required="" placeholder="Country / Region" value={state.country} onChange={inputHandler} />
                                            </div>
                                            <div className="form-group col-lg-6">
                                                <label>State <span className="text-danger">*</span></label>
                                                <input type="text" name="state" required="" placeholder="State" value={state.state} onChange={inputHandler} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-lg-6">
                                                <label>Town / City <span className="text-danger">*</span></label>
                                                <input required="" type="text" name="city" placeholder="Town / City" value={state.city} onChange={inputHandler} />
                                            </div>
                                            <div className="form-group col-lg-6">
                                                <label>Zip <span className="text-danger">*</span></label>
                                                <input required="" type="text" name="pincode" placeholder="ZIP " value={state.pincode} onChange={inputHandler} />
                                            </div>
                                        </div>
                                        <div className="form-group mb-30">
                                            <label>Order notes (optional)</label>
                                            <textarea rows="3" placeholder="Notes about your order, e.g. special notes for delivery." name="order_note" value={state.order_note} onChange={inputHandler}></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="cart-totals mb-50">
                                    <div className="d-flex align-items-end justify-content-between mb-20">
                                        <h4>Your Order</h4>
                                    </div>
                                    <div className="table-responsive order_table checkout">
                                        <table className="table no-border mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Product name </th>
                                                    <th>SubTotal</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    cartProducts.cart.length > 0 && cartProducts.cart.map((cart) =>

                                                        <tr>
                                                            <td className="check-cart-img">
                                                                <Link to="shop-list"><img src={`/upload/products/${cart.image}`} alt="#" style={{ "width": "50px", "height": "50px" }} /></Link>
                                                                <h6><Link to="shop-list" className="text-heading">{cart.name} <span>(x {cart.quantity})</span></Link></h6>
                                                            </td>
                                                            <td>
                                                                <h4 className="text-brand">${cart.price * cart.quantity}</h4>
                                                            </td>
                                                        </tr>

                                                    )
                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="total-checkout">
                                        <h3>Total <span>${cartProducts.totalPrice}</span></h3>
                                    </div>
                                </div>
                                <div className="payment">
                                    <h4 className="mb-20">Payment method</h4>
                                    <div className="payment_option">
                                        <div className="custome-radio">
                                            <input className="form-check-input" required="" type="radio" name="payment_option" value={state.payment_option} onChange={inputHandler} />
                                            <label className="form-check-label" htmlFor="exampleRadios4" data-bs-toggle="collapse" data-bs-target="#checkPayment">Cash on delivery</label>
                                        </div>
                                        <div className="custome-radio">
                                            <input className="form-check-input" required="" type="radio" name="payment_option" value={state.payment_option} onChange={inputHandler} />
                                            <label className="form-check-label" htmlFor="exampleRadios5" data-bs-toggle="collapse" data-bs-target="#paypal">Net Banking </label>
                                        </div>
                                    </div>
                                    <div className="terms-conditions-pay">
                                        <p>Your personal data will be used to process your order, support your experience throughout this website.</p>
                                    </div>
                                    <div className="check-pay">
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input className="form-check-input" type="checkbox" name="remember" /> I have read and
                                                agree to the website ?
                                            </label>
                                        </div>
                                    </div>
                                    <div className="place-orders">
                                        <button onClick={formSubmitHandler} className="btn btn-fill-out btn-block mt-30">Place Order</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </ClientWrapper >
    )
}

export default CheckoutScreen;