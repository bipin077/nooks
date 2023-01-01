import React, {useState, useEffect} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Wrapper from './Wrapper';

import {useAddBannerMutation} from "../../store/Services/BannerServices";

const AddBanners = () => {

    const navigate = useNavigate();
    const [insertBanner, response] = useAddBannerMutation();
    const [state, setState] = useState(
        {
            title_one : "",
            title_two : "",
            subtitle : "",
            position : 0,
            status : true
        }
    );

    const [image, setImage] = useState('');

    const inputHandler = (e) =>
    {
        setState({...state, [e.target.name] : e.target.value});
    }

    const formSubmitHandler = (e) =>
    {
        e.preventDefault();
        let fd = new FormData();
        fd.append("image", image);
        fd.append("title_one", state.title_one);
        fd.append("title_two", state.title_two);
        fd.append("subtitle", state.subtitle);
        fd.append("position", state.position);
        fd.append("status", state.status);
        insertBanner(fd);
    }

    useEffect(()=>
    {
        if(response.isSuccess)
        {
            alert("Banner Inserted Successfully");
            navigate('/admin/banners');
        }
        
    },[response.isSuccess])
    return (
        <Wrapper>
            <div className="container mt-3">
                <h2>Add New Banner</h2>
                <Link to="/admin/banners"><button className='m-2 px-2 bg-success text-light'>All Banners</button></Link>
                <form onSubmit={formSubmitHandler}>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <div className="mb-3 mt-3">
                                <label htmlFor="email" className="form-label">Enter Title One</label>
                                <input type="text" className="form-control form-control-sm" placeholder="Enter Title One" name="title_one" value={state.title_one} onChange={inputHandler} />
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div className="mb-3 mt-3">
                                <label htmlFor="email" className="form-label">Enter Title Two</label>
                                <input type="text" className="form-control form-control-sm" placeholder="Enter Title One" name="title_two"  value={state.title_two} onChange={inputHandler} />
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="email" className="form-label">Enter Subtitle</label>
                        <input type="text" className="form-control form-control-sm" placeholder="Enter Subtitle" name="subtitle"  value={state.subtitle} onChange={inputHandler} />
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
                        <label htmlFor="pwd" className="form-label">Banner Image</label>
                        <input type="file" className="form-control form-control-sm"  id="pwd" name="image" onChange={(e)=>setImage(e.target.files[0])} />
                        <p>Image dimention must be 544 × 476 px and jpg format</p>
                    </div>
                    <button type="submit" className="btn btn-success">Click Here To Submit</button>
                </form>
            </div>
        </Wrapper>
    )
}

export default AddBanners;