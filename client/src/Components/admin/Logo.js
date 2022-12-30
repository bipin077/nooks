import React, {useState, useEffect} from 'react';
import {useUpdateLogoMutation, useGetProfileDataQuery} from "../../store/Services/ProfileServices";
import { useNavigate } from 'react-router-dom';

const Logo = () => {

    const {data:profiles=[]} = useGetProfileDataQuery();
    const [updateSiteLogo, response] = useUpdateLogoMutation();

    const navigate = useNavigate();
    const [logo, setLogo] = useState("");

    const updateLogo = () =>
    {
        const fd = new FormData();
        fd.append("logo", logo);
        updateSiteLogo({data : fd, id : profiles.profile._id});
    }

    useEffect(()=>
    {
        if(response.isSuccess)
        {
            alert("Logo Updated Successfully");
            navigate('/admin/settings');
        }
        
    },[response.isSuccess])

    return (
        <>
            <div className='col-sm-4 mt-4'>
                <div className="card" style={{ "textAlign": "center" }}>
                    <div className="card-img-top text-center" style={{ "marginTop": "30px", "fontSize": "50px" }}>
                        <img src="/upload/logo.png" style={{ "width": "70%" }} className="rounded"  />
                    </div>
                    <div className="card-body">
                        <input type="file" name="logo" onChange={(e)=>setLogo(e.target.files[0])} />
                        <button className="btn btn-primary mt-3" onClick={updateLogo}>Update Logo</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Logo;