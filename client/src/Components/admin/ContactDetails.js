import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddCategoryMutation } from '../../store/Services/CategoryService';

import {useGetContactDetailsQuery, useUpdateContactDetailsMutation} from "../../store/Services/ContactServices";

const ContactDetails = () => {

    const {data=[], isFetching} = useGetContactDetailsQuery();
    console.log(data);

    const [updateContact, response ] = useUpdateContactDetailsMutation();
    console.log(response);

    const navigate =useNavigate();

    const [state, setState] = useState({
        phone1 : "",
        phone2 : "",
        email1 : "",
        email2 : "",
        address : "",
        map : ""
    }); 

    const inputHandler = (e) =>
    {
        setState({...state, [e.target.name] : e.target.value});
    }

    const formSubmitHandler = (e) =>
    {
        e.preventDefault();

        updateContact({data : state, id : data.contact._id});
        
    }

    useEffect(()=>{

        if(data.msg == 'success'){
            setState({phone1 : data.contact.phone1, phone2 : data.contact.phone2, email1 : data.contact.email1, email2 : data.contact.email2, address : data.contact.address, map : data.contact.map});
        }
    }, [data?.msg])

    useEffect(()=>
    {
        if(response.isSuccess)
        {
            alert("Contact Details Updated Successfully");
            navigate('/admin/settings');
        }
        
    },[response.isSuccess])

    return (
        <div className="card">
            <div className="card-body">
            { data?.msg ? 
                <form onSubmit={formSubmitHandler}>
                    <h4>Contact Details</h4>
                    <div className="mb-3 mt-3">
                        <label htmlFor="phone1" className="form-label">Phone 1</label>
                        <input type="number" className="form-control" placeholder="Enter Phone " name="phone1" value={state.phone1} onChange={inputHandler} />
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="phone2" className="form-label">Phone 2</label>
                        <input type="number" className="form-control" placeholder="Enter Phone " name="phone2" value={state.phone2} onChange={inputHandler} />
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="email1" className="form-label">Email 1</label>
                        <input type="email" className="form-control" placeholder="Enter Email " name="email1" value={state.email1} onChange={inputHandler} />
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="email2" className="form-label">Email 2</label>
                        <input type="email" className="form-control" placeholder="Enter Email " name="email2" value={state.email2} onChange={inputHandler} />
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control" placeholder="Enter Address " name="address" value={state.address} onChange={inputHandler} />
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="map" className="form-label">Map</label>
                        <input type="text" className="form-control" placeholder="Enter Map Link " name="map" value={state.map} onChange={inputHandler} />
                    </div>

                    <button type="submit" className="btn btn-primary">Click Here To Update</button>
                </form> : '' }
            </div>
        </div>
    )
}

export default ContactDetails;