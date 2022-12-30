import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Wrapper from './Wrapper';
import { format } from 'date-fns'

import {useGetAllOrdersQuery} from "../../store/Services/OrdersService";

const AllOrders = () => {
  const {data=[], isFetching} = useGetAllOrdersQuery();

  return (
    <Wrapper>
      <div className="container mt-3">
        <h2>Manage Orders</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Date</th>
              <th>Status</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
          {!isFetching && data.orders.map((order, index)=>
            <tr key={index}>
                <td>{index+1}</td>
                <td>{order.name}</td>
                <td>{order.phone}</td>
                <td>{order.email}</td>
                <td>{ format(new Date(order.createdAt), 'dd-MMM-yyyy HH:ii') }</td>
                <td>
                  <select name="order-status">
                    <option>Processing</option>
                    <option>Dispatch</option>
                    <option>Shipped</option>
                    <option>Delivered</option>
                  </select>
                </td>
                <td><Link to={`/admin/orderDetail/${order._id}`}><i className="fas fa-eye mr-10"></i></Link></td>
            </tr>
            )}

            { data.orders && data.orders.length < 1 ? <tr><td colSpan={8} className="text-center"> No Record Found </td></tr> : ''}
          </tbody>
        </table>
      </div>
    </Wrapper>
  )
}

export default AllOrders;