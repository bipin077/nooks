import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Wrapper from './Wrapper';
import { format } from 'date-fns'

import { useGetSingleOrderQuery } from "../../store/Services/OrdersService";

const OrderDetail = () => {
    const {id} = useParams();
    const { data = [], isFetching } = useGetSingleOrderQuery(id);
    console.log(data);

    let grandTotal = 0;

    // const products = JSON.parse(data.order.products);
    // console.log(products);

    const [products, setProducts] = useState([]);

    useEffect(()=>
    {
        if(data.msg == 'success')
        {
            setProducts(JSON.parse(data.order.products))
        }
        
    },[data?.msg])

    console.log(products);

    return (
        <Wrapper>
            <div className="container mt-3">
                <h2>View Orders</h2>
                { data?.order ? 
                    <main className="main pages">
                        <div className="page-content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 m-auto">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="card mb-0">
                                                    <div className="invoice-header pb-0">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="invoice-logo">
                                                                    <img src="/upload/logo.png" className="img-fluid" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="invoice-thumb">
                                                                    <h4>INVOICE</h4>
                                                                    <p>{ data.order._id}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-body pb-0">
                                                        <div className="invoice-details">
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="invoice-item">
                                                                        <h4>{ data.order.name}</h4>
                                                                        <p className="mb-0">Phone : {data.order.phone}</p>
                                                                        <p className="mb-0">Email : {data.order.email}</p>
                                                                        <p className="mb-0">Country : {data.order.country}, State : {data.order.state}, City : {data.order.city}</p>
                                                                        <p className="mb-0">Pincode : {data.order.pincode}</p>
                                                                        <p className="mb-0">Address : {data.order.address}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="invoice-item invoice-item-right">
                                                                        <p>Invoice Date: { format(new Date(data.order.createdAt), 'dd-MMM-yyyy HH:ii') }</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="invoice-inner-table">
                                                            <div className="table-responsive">
                                                                <table className="table m-0">
                                                                    <thead>
                                                                        <tr className="table-head-border">
                                                                            <th>S.No.</th>
                                                                            <th> Image</th>
                                                                            <th>Product Name</th>
                                                                            <th>Price</th>
                                                                            <th>Qty</th>
                                                                            <th>Total</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                       {
                                                                            products.map((p, index)=>
                                                                            <tr>
                                                                                <td width="1%">{index+1}</td>
                                                                                <td width="10%"><img src={ `/upload/products/${p.image}` } style={{"width" : "70%"}} className="rounded"  /></td>
                                                                                <td width="30%"><span>{p.name}</span></td>
                                                                                <td width="10%">$ {p.price}</td>
                                                                                <td width="10%">{p.quantity}</td>
                                                                                <td width="10%">$ {p.price*p.quantity}</td>
                                                                                { grandTotal = grandTotal + (p.price*p.quantity) }
                                                                            </tr>
                                                                            
                                                                            )
                                                                       }
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="invoice-other-info">
                                                                    <p>Payment Method : cash on delivery</p>
                                                                    <p>Payment Status : ordered</p>
                                                                    <p>Order Note : {data.order.order_note}</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="card shop-cart-card">
                                                                    <div className="card-body">
                                                                        <div className="shop-cart-info">
                                                                            <p>Total <span>$ { grandTotal }</span></p>
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
                            </div>
                        </div>
                    </main> 
                : "" }

            </div>
        </Wrapper>
    )
}

export default OrderDetail;