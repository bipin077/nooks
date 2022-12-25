import React, {useState, useEffect} from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Wrapper from './Wrapper';
import {useGetSingleWhyChooseUsQuery, useUpdateWhyChooseUsMutation} from "../../store/Services/WhyChooseUsService";

const EditWhyChooseUs = () => {

    const {id} = useParams();
    const {data=[], isFetching} = useGetSingleWhyChooseUsQuery(id);

    const [updateWhyChooseUs, response] = useUpdateWhyChooseUsMutation();
    console.log(response);

    const navigate = useNavigate();

    const [image, setImage] = useState("");
    const [state, setState] = useState(
        {
            title : "",
            image : "",
            position : 0,
            status : true
        }
    );

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

        updateWhyChooseUs({data : fd, id});
    }

    useEffect(()=>
    {
        if(data.msg == 'success')
        {
            setState({title : data.whychooseus.title, position : data.whychooseus.position, status : data.whychooseus.status});
            setImage(data.whychooseus.image);
        }
    },[data.msg])

    useEffect(()=>
    {
        if(response.isSuccess)
        {
            alert("Why Choose Us Updated Successfully");
            navigate('/admin/whychooseus');
        }
        
    },[response.isSuccess])

    return (
        <Wrapper>
            <div class="container mt-3">
                <h2>Edit Why Choose Us</h2>
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
                        <input type="file" className="form-control form-control-sm" name="image" onChange={(e)=>setImage(e.target.files[0])} />
                        <p>Image dimention must be 60 × 61 px and jpg format</p>
                        { data.whychooseus ? <img src={ `/upload/whychooseus/${data.whychooseus.image}` } style={{"width" : "10%"}} class="rounded-pill"  /> : '' }
                    </div>
                    <button type="submit" class="btn btn-success">Click Here To Submit</button>
                </form>
            </div>
        </Wrapper>
    )
}

export default EditWhyChooseUs;