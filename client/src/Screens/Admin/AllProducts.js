import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Wrapper from './Wrapper';

import {useGetAllProductsQuery, useDeleteProductMutation} from "../../store/Services/ProductServices";

const AllProducts = () => {
  const {data=[], isFetching} = useGetAllProductsQuery();

  const [removeProduct, response] = useDeleteProductMutation();
  console.log(response);

  const deleteProduct = (id) =>
  {
      removeProduct(id);
  }

  useEffect(()=>
  {
      if(response.isSuccess)
      {
          alert("Product Deleted Successfully");
      }
      
  },[response.isSuccess])

  return (
    <Wrapper>
      <div className="container mt-3">
        <h2>Manage Products</h2>
        <Link to="/admin/addProduct"><button className='m-2 px-2 bg-success text-light'>Add New Product</button></Link>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Image</th>
              <th>Category</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {!isFetching && data.product.map((product, index)=>
            <tr key={index}>
              <td>{index+1}</td>
              <td width="10%"><img src={ `/upload/products/${product.image}` } style={{"width" : "70%"}} className="rounded"  /></td>
              <td>{product.category}</td>
              <td>{product.name}</td>
              <td>$ {product.price}</td>
              <td>{ product.status ? "Active" : "Inactive" }</td>
              <td><Link to={ `/admin/editProduct/${product._id}`}><i className="fas fa-edit mr-10"></i></Link></td>
              <td><i className="fas fa-trash mr-10" onClick={()=>deleteProduct(product._id)}></i></td>
            </tr>
            )}

            { data.product && data.product.length < 1 ? <tr><td colSpan={8} className="text-center"> No Record Found </td></tr> : ''}
          </tbody>
        </table>
      </div>
    </Wrapper>
  )
}

export default AllProducts;