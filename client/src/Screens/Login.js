import React, {useEffect, useState} from 'react';
import ClientWrapper from './ClientWrapper';
import {Helmet} from "react-helmet";

import {useLoginUserMutation} from "../store/Services/AuthServices";
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [state, setState] = useState({
        email : "",
        password : ""
    });

    const navigate = useNavigate();


    const [loginUser, response] = useLoginUserMutation();
    console.log(response);

    const inputHandler = (e) =>
    {
        setState({...state, [e.target.name]:e.target.value});
    }

    const submitForm = () =>
    {
        loginUser(state);
        console.log(state);
    }


    useEffect(()=>{
        if(response.isSuccess)
        {
            localStorage.setItem("token", response.data.token)
            if(response.data.user.is_admin)
            {
                navigate("/admin/dashboard");
            }
            else
            {
                navigate("/");
            }
        }
    },[response.isSuccess])

    return (
        <ClientWrapper>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login | Nooks</title>
            </Helmet>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6 offset-3'>
                        <div className="sidebar-layout">
                            <div className="sidebar-body">
                                <div className="login-group">
                                    <h5 className='text-center'>Log In</h5>
                                    <form onSubmit={(e)=>e.preventDefault()}>
                                        { response.error && response.error.data.error.map((error)=>
                                            <div class="alert alert-danger" role="alert">
                                                { error.error}
                                            </div>
                                            )}
                                        <div className="form-group">
                                            <input type="email" name="email" className="form-control" autoComplete="username" value={state.email} onChange={inputHandler} placeholder="Enter your email address" />
                                        </div>
                                        <div className="form-group">
                                                <input type="password" name="password" className="form-control pass-input" autoComplete="current-password" value={state.password} onChange={inputHandler} placeholder="Enter your password" />
                                        </div>
                                        <div className="d-grid login-pharmacy mb-25">
                                            <button onClick={submitForm} className="btn btn-primary btn-start">Log In</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </ClientWrapper>
    )
}

export default Login;