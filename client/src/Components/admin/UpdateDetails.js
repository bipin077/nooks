import React, {useState, useEffect} from 'react';
import {useUpdateDetailsMutation, useGetProfileDataQuery} from "../../store/Services/ProfileServices";
import { useNavigate } from 'react-router-dom';
import { set } from 'mongoose';

const UpdateDetails = () => {

    const {data:profiles=[], } = useGetProfileDataQuery();
    const [updateSiteDetails, response] = useUpdateDetailsMutation();

    const navigate = useNavigate();
    const [details, setDetails] = useState("");

    const updateDetails = () =>
    {
        const detailsData = {
            "details" : details
        }
        updateSiteDetails({data : detailsData, id : profiles.profile._id});
    }

    useEffect(()=>
    {
        if(response.isSuccess)
        {
            alert("Site Details Updated Successfully");
            navigate('/admin/settings');
        }
        
    },[response.isSuccess])

    useEffect(()=>
    {
        if(profiles.msg == 'Success')
        {
            setDetails(profiles.profile.details);
        }
    },[profiles.msg])


    return (
        <>
            <div className='col-sm-4 mt-4'>
                <div className="card" style={{ "textAlign": "center" }}>
                    <div className="card-body">
                        <textarea name="details" className="form-control" style={{ "height" : "150px"}} value={details} onChange={(e)=>setDetails(e.target.value)}></textarea>
                        <button className="btn btn-primary mt-3" onClick={updateDetails}>Update Details</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateDetails;