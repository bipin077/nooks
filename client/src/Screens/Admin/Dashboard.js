import React from 'react'
import Wrapper from './Wrapper';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <Wrapper>
            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-sm-4'>
                        <div className="card" style={{ "textAlign" : "center"}}>
                            <div className="card-img-top text-center" style={{ "marginTop" : "30px", "fontSize" : "50px"}}>
                                <i class="fas fa-image mr-10"></i>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title text-danger">3+</h4>
                                <p className="card-text">Total Banners</p>
                                <Link to="/admin/banners" className="btn btn-primary">View All Banners</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className="card" style={{ "textAlign" : "center"}}>
                            <div className="card-img-top text-center" style={{ "marginTop" : "30px", "fontSize" : "50px"}}>
                                <i class="fas fa-cogs mr-10"></i>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title text-danger">3+</h4>
                                <p className="card-text">Total Categories</p>
                                <Link to="/admin/categories" className="btn btn-primary">View All Categories</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className="card" style={{ "textAlign" : "center"}}>
                            <div className="card-img-top text-center" style={{ "marginTop" : "30px", "fontSize" : "50px"}}>
                                <i class="fas fa-shopping-bag mr-10"></i>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title text-danger">20+</h4>
                                <p className="card-text">Total Products</p>
                                <Link to="/admin/products" className="btn btn-primary">View All Products</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Dashboard;