import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Wrapper from './Wrapper';

import {useInsertWhyChooseUsMutation} from "../../store/Services/WhyChooseUsService";

const AddWhyChooseUs = () => {

    const navigate = useNavigate();
    const [insertWhyChooseUs, response] = useInsertWhyChooseUsMutation();
    // console.log(response);

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
        insertWhyChooseUs(fd);
    }

    useEffect(()=>
    {
        if(response.isSuccess)
        {
            alert("Why Choose Us Inserted Successfully");
            navigate('/admin/whychooseus');
        }
        
    },[response.isSuccess])

    return (
        <Wrapper>
            <div class="container mt-3">
                <h2>Add New Why Choose Us</h2>
                <Link to="/admin/whychooseus"><button className='m-2 px-2 bg-success text-light'>All Why Choose Us</button></Link>
                <form onSubmit={formSubmitHandler}>
                    <div className="mb-3 mt-3">
                        <label htmlFor="email" className="form-label">Enter Title</label>
                        <input type="text" className="form-control form-control-sm" placeholder="Enter Title" name="title"  value={state.title} onChange={inputHandler} />
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
                        <input type="file" className="form-control form-control-sm"  id="pwd" name="image" onChange={(e)=>setImage(e.target.files[0])} />
                        <p>Image dimention must be 60 × 61 px and jpg format</p>
                    </div>
                    <button type="submit" class="btn btn-success">Click Here To Submit</button>
                </form>
            </div>
        </Wrapper>
    )
}

export default AddWhyChooseUs;