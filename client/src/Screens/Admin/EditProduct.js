import React, {useState, useEffect} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Wrapper from './Wrapper';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { useGetAllCategoriesQuery } from '../../store/Services/CategoryService';
import { useGetSingleProductQuery, useUpdateProductMutation } from "../../store/Services/ProductServices";

const EditProduct = () => {

    const {id} = useParams();
    const {data:productData=[]} = useGetSingleProductQuery(id);
    //console.log(productData);

    const navigate = useNavigate();
    const {data:categoryData=[], isFetching} = useGetAllCategoriesQuery();

    const [updateProduct, response] = useUpdateProductMutation();
    console.log(response);

    const [description, setDescription] = useState('');
    const [specification, setSpecification] = useState('');

    const [image, setImage] = useState("");
    const [state, setState] = useState({
        category : "",
        name : "",
        mrp : 0,
        price : 0,
        sku : "",
        is_trending : false,
        is_featured : false,
        position : 0,
        status : false
    });

    useEffect(()=>
    {
        if(productData.msg == 'success')
        {
            setState({category : productData.product.category, name : productData.product.name, mrp : productData.product.mrp, price : productData.product.price, sku : productData.product.sku, is_trending :  productData.product.is_trending, is_featured : productData.product.is_featured, position : productData.product.position, status : productData.product.status});
            setImage(productData.product.image);
            setDescription(productData.product.description);
            setSpecification(productData.product.specification);
        }
    },[productData.msg])

    const inputHandler = (e) =>
    {
        setState({...state, [e.target.name] : e.target.value});
    }

    const formSubmitHandler = (e) =>
    {
        e.preventDefault();
        const fd = new FormData();
        fd.append("image", image);
        fd.append("category", state.category);
        fd.append("name", state.name);
        fd.append("mrp", state.mrp);
        fd.append("price", state.price);
        fd.append("sku", state.sku);
        fd.append("description", description);
        fd.append("specification", specification);
        fd.append("is_trending", state.is_trending);
        fd.append("is_featured", state.is_featured);
        fd.append("position", state.position);
        fd.append("status", state.status);
        updateProduct({data : fd, id});
    }

    useEffect(()=>
    {
        if(response.isSuccess)
        {
            alert("Product Updated Successfully");
            navigate('/admin/products');
        }
        
    },[response.isSuccess])

    return (
        <Wrapper>
            <div className="container mt-3 mb-3">
                <h2>Edit Product</h2>
                <Link to="/admin/products"><button className='m-2 px-2 bg-success text-light'>All Products</button></Link>
                <form onSubmit={ formSubmitHandler }>
                    <div className="mb-3 mt-3">
                        <label htmlFor="category" className="form-label">Select Category</label>
                        <select name="category" className="form-control form-control-sm" value={state.category} onChange={inputHandler}>
                            <option>Select Category</option>
                            { !isFetching && categoryData.category.map((category, index) =>
                                <option key={index} value={category.title}>{category.title}</option>
                            )}
                        </select>
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="name" className="form-label">Enter Product Name</label>
                        <input type="text" className="form-control form-control-sm" placeholder="Enter Product Name" name="name" onChange={inputHandler} value={state.name} />
                    </div>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <div className="mb-3 mt-3">
                                <label htmlFor="email" className="form-label">Enter Product Price</label>
                                <input type="number" className="form-control form-control-sm" placeholder="Enter Product Price" name="price" onChange={inputHandler} value={state.price} />
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div className="mb-3 mt-3">
                                <label htmlFor="email" className="form-label">Enter MRP</label>
                                <input type="number" className="form-control form-control-sm" placeholder="Enter Product MRP" name="mrp" onChange={inputHandler} value={state.mrp} />
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="email" className="form-label">Enter Specification</label>
                        <ReactQuill theme="snow" placeholder='Enter Specification' value={specification} onChange={setSpecification} />
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="email" className="form-label">Enter Description</label>
                        <ReactQuill theme="snow" placeholder='Enter Description' value={description} onChange={setDescription} />
                    </div>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <div className="mb-3 mt-3">
                                <label htmlFor="email" className="form-label">Enter Product Code [ SKU ]</label>
                                <input type="text" className="form-control form-control-sm" placeholder="Enter Product Code [ SKU ]" name="sku" onChange={inputHandler} value={state.sku} />
                            </div>
                        </div>
                        <div className='col-sm-3'>
                            <div className="mb-3 mt-3">
                                <label htmlFor="email" className="form-label">Is Tranding</label>
                                <select name="is_trending" className="form-control form-control-sm" onChange={inputHandler} value={state.is_trending}>
                                    <option>Is Tranding</option>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-sm-3'>
                            <div className="mb-3 mt-3">
                                <label htmlFor="email" className="form-label">Is Featured</label>
                                <select name="is_featured" className="form-control form-control-sm" onChange={inputHandler} value={state.is_featured}>
                                    <option>Is Featured</option>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div className="mb-3 mt-3">
                                <label htmlFor="email" className="form-label">Position</label>
                                <input type="number" className="form-control form-control-sm" placeholder="0-9" name="position" onChange={inputHandler} value={state.position} />
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div className="mb-3 mt-3">
                                <label htmlFor="email" className="form-label">Status</label>
                                <select name="status" className="form-control form-control-sm" onChange={inputHandler} value={state.status}>
                                    <option value="true">Active</option>
                                    <option value="false">Inactive</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="pwd" className="form-label">Product Image</label>
                        <input type="file" className="form-control form-control-sm" name="image"  onChange={(e)=>setImage(e.target.files[0])} />
                        <p>Image dimention must be 292 × 284 px and jpg format</p>
                        { productData.product ? <img src={ `/upload/products/${productData.product.image}` } style={{"width" : "10%"}} className="rounded-pill"  /> : '' }
                    </div>
                    <button type="submit" className="btn btn-success">Click Here To Submit</button>
                </form>
            </div>
        </Wrapper>
    )
}

export default EditProduct;