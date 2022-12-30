import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddCategoryMutation } from '../../store/Services/CategoryService';

import {useGetContactDetailsQuery, useUpdateSocialLinksMutation} from "../../store/Services/ContactServices";

const SocialLinks = () => {

    const {data=[], isFetching} = useGetContactDetailsQuery();
    console.log(data);

    const [updateSocialLinks, response ] = useUpdateSocialLinksMutation();
    console.log(response);

    const navigate =useNavigate();

    const [state, setState] = useState({
        facebook : "",
        instagram : "",
        twitter : "",
        linkedin : "",
        whatsapp : "",
        youtube : ""
    }); 

    const inputHandler = (e) =>
    {
        setState({...state, [e.target.name] : e.target.value});
    }

    const formSubmitHandler = (e) =>
    {
        e.preventDefault();

        updateSocialLinks({data : state, id : data.contact._id});
        
    }

    useEffect(()=>{

        if(data.msg == 'success'){
            setState({facebook : data.contact.facebook, instagram : data.contact.instagram, twitter : data.contact.twitter, whatsapp : data.contact.whatsapp, youtube : data.contact.youtube, linkedin : data.contact.linkedin});
        }
    }, [data?.msg])

    useEffect(()=>
    {
        if(response.isSuccess)
        {
            alert("Social Links Updated Successfully");
            navigate('/admin/settings');
        }
        
    },[response.isSuccess])

    return (
        <div className="card">
            <div className="card-body">
                <form onSubmit={formSubmitHandler}>
                    <h4>Social Links</h4>
                    <div className="mb-3 mt-3">
                        <label htmlFor="facebook" className="form-label">Facebook:</label>
                        <input type="text" className="form-control" placeholder="Facebook" name="facebook" value={state.facebook} onChange={inputHandler} />
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="instagram" className="form-label">Instagram:</label>
                        <input type="text" className="form-control" placeholder="Instagram" name="instagram" value={state.instagram} onChange={inputHandler} />
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="twitter" className="form-label">Twitter:</label>
                        <input type="text" className="form-control" placeholder="Twitter" name="twitter" value={state.twitter} onChange={inputHandler} />
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="linkedin" className="form-label">Linkedin:</label>
                        <input type="text" className="form-control" placeholder="Linkedin" name="linkedin" value={state.linkedin} onChange={inputHandler} />
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="whatsapp" className="form-label">Whatsapp:</label>
                        <input type="text" className="form-control" placeholder="Whatsapp" name="whatsapp" value={state.whatsapp} onChange={inputHandler} />
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="youtube" className="form-label">Youtube:</label>
                        <input type="text" className="form-control" placeholder="Youtube" name="youtube" value={state.youtube} onChange={inputHandler} />
                    </div>

                    <button type="submit" className="btn btn-primary">Click Here To Update</button>
                </form>
            </div>
        </div>
    )
}

export default SocialLinks;