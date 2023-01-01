import React, {useState, useEffect} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Wrapper from './Wrapper';

import {useAddCategoryMutation} from "../../store/Services/CategoryService";

const AddCategory = () => {

    const navigate = useNavigate();
    const [insertCategory, response] = useAddCategoryMutation();

    const [state, setState] = useState(
        {
            title : "",
            position : 0,
            status : true
        }
    );

    const [image, setImage] = useState("");

    const inputHandler = (e) =>
    {
        setState({...state, [e.target.name] : e.target.value});
    }

    const formSubmitHandler = (e) =>
    {
        e.preventDefault();
        let fd = new FormData();
        fd.append("image", image);
        fd.append("title", state.title);
        fd.append("position", state.position);
        fd.append("status", state.status);
        insertCategory(fd);
    }

    useEffect(()=>
    {
        if(response.isSuccess)
        {
            alert("Category Inserted Successfully");
            navigate('/admin/categories');
        }
        
    },[response.isSuccess])

    return (
        <Wrapper>
            <div className="container mt-3">
                <h2>Add New Category</h2>
                <Link to="/admin/categories"><button className='m-2 px-2 bg-success text-light'>All Categories</button></Link>
                <form onSubmit={formSubmitHandler}>
                    <div className="mb-3 mt-3">
                        <label htmlFor="email" className="form-label">Enter Category Name</label>
                        <input type="text" className="form-control form-control-sm" placeholder="Enter Category Name" name="title"  value={state.title} onChange={inputHandler} />
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="email" className="form-label">Position</label>
                        <input type="number" className="form-control form-control-sm" placeholder="0-9" name="position"  value={state.position} onChange={inputHandler} />
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="email" className="form-label">Status</label>
                        <select name="status" className="form-control form-control-sm" value={state.status} onChange={inputHandler}>
                            <option value="true">Active</option>
                            <option value="false">Inactive</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pwd" className="form-label">Image</label>
                        <input type="file" className="form-control form-control-sm" name="image" onChange={(e)=>setImage(e.target.files[0])} />
                        <p>Image dimention must be 163 × 163 px and jpg format</p>
                    </div>
                    <button type="submit" className="btn btn-success">Click Here To Submit</button>
                </form>
            </div>
        </Wrapper>
    )
}

export default AddCategory;