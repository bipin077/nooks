import React, {useState, useEffect} from 'react';
import {useUpdateFeviconMutation, useGetProfileDataQuery} from "../../store/Services/ProfileServices";
import { useNavigate } from 'react-router-dom';

const Fevicon = () => {

    const {data:profiles=[]} = useGetProfileDataQuery();
    const [updateSiteFevicon, response] = useUpdateFeviconMutation();

    const navigate = useNavigate();
    const [fevicon, setFevicon] = useState("");

    const updateFevicon = () =>
    {
        const fd = new FormData();
        fd.append("fevicon", fevicon);
        updateSiteFevicon({data : fd, id : profiles.profile._id});
    }

    useEffect(()=>
    {
        if(response.isSuccess)
        {
            alert("Fevicon Updated Successfully");
            navigate('/admin/settings');
        }
        
    },[response.isSuccess])

    return (
        <>
            <div className='col-sm-4 mt-4'>
                <div className="card" style={{ "textAlign": "center" }}>
                    <div className="card-img-top text-center" style={{ "marginTop": "30px", "fontSize": "50px" }}>
                        <img src="/upload/fevicon.png" style={{ "width": "20%" }} className="rounded"  />
                    </div>
                    <div className="card-body">
                        <input type="file" name="fevicon" onChange={(e)=>setFevicon(e.target.files[0])} />
                        <button className="btn btn-primary mt-3" onClick={updateFevicon}>Update Fevicon</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Fevicon;