import React from 'react';
import { Link } from 'react-router-dom';

const Wrapper = ({ children }) => {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-2 bg-light' style={{ "maxHeight" : "100%"}}>
          <Link className="navbar-brand bg-light mt-5 ms-2" to="#" style={{ "borderBottom" : "1px solid red" }}>
            <img src="/img/logo.png" alt="Avatar Logo" style={{ "padding" : "10px 10px", "marginTop" : "20px"}} className="rounded-pill" /> 
          </Link>
            <ul className="nav flex-column" style={{ "marginTop" : "30px"}}>
              <li className="nav-item p-1 bg-success  mt-1">
                <Link className="nav-link text-light" to="/admin/dashboard"> <i class="fas fa-dashboard mr-10"></i> Dashboard</Link>
              </li>
              <li className="nav-item p-1 bg-success mt-1">
                <Link className="nav-link text-light" to="/admin/banners"><i class="fas fa-image mr-10"></i> Manage Banners</Link>
              </li>
              <li className="nav-item p-1 bg-success mt-1">
                <Link className="nav-link text-light" to="/admin/whychooseus"><i class="fas fa-image mr-10"></i> Why Choose Us</Link>
              </li>
              <li className="nav-item p-1 bg-success mt-1">
                <Link className="nav-link text-light" to="/admin/categories"><i class="fas fa-shopping-bag mr-10"></i> Manage Category</Link>
              </li>
              <li className="nav-item p-1 bg-success mt-1">
                <Link className="nav-link text-light" to="/admin/categories"><i class="fas fa-shopping-bag mr-10"></i> Manage Subcategory</Link>
              </li>
              <li className="nav-item p-1 bg-success mt-1">
                <Link className="nav-link text-light" to="/admin/products"><i class="fas fa-shopping-cart mr-10"></i> Manage Products</Link>
              </li>
              <li className="nav-item p-1 bg-success mt-1">
                <Link className="nav-link text-light" to="/admin/products"><i class="fas fa-shopping-bag mr-10"></i> Manage Orders</Link>
              </li>
              <li className="nav-item p-1 bg-success mt-1">
                <Link className="nav-link text-light" to="/admin/settings"> <i class="fas fa-cogs mr-10"></i> Website Details</Link>
              </li>
              <li className="nav-item p-1 bg-success mt-1">
                <Link className="nav-link text-light" to="#"><i class="fas fa-sign-out mr-10"></i> Logout</Link>
              </li>
            </ul>
          </div>
          <div className='col-sm-10'>
            <nav className="navbar navbar-expand-sm bg-success navbar-dark" style={{ "width" : "100%"}}>
                <div className="container-fluid">
                  <Link className="navbar-brand" to="#">
                    <img src="/img/user/user-01.jpg"  width="15%" alt="Avatar Logo" className="rounded-pill" /> 
                  </Link>
                </div>
              </nav>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Wrapper;