import React, {useState} from 'react'
import ClientWrapper from './ClientWrapper';
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';

const Register = () => {


    const [state, setState] = useState({
        name : "",
        phone : "",
        email : "",
        password : ""
    }); 

    const inputHandler = (e) =>
    {
        setState({...state, [e.target.name] : e.target.value});
    }

    const formSubmitHandler = (e) =>
    {
        e.preventdefault();
    }

    return (
        <ClientWrapper>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Register | Nooks</title>
            </Helmet>
            <div className='comtainer'>
                <div className='row'>
                    <div className='col-sm-6 offset-3'>
                        <div className="sidebar-layout">
                            <div className="sidebar-body">
                                <div className="login-group register-login">
                                    <h5>Register</h5>
                                    <form onSubmit={formSubmitHandler}>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Full Name" name="name" value={state.name} onChange={inputHandler} />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Enter your email address" name="email" value={state.email} onChange={inputHandler} />
                                        </div>
                                        <div className="form-group">
                                            <input type="number" className="form-control" placeholder="Enter Mobile Number" name="phone" value={state.phone} onChange={inputHandler} />
                                        </div>
                                        <div className="form-group">
                                            <div className="pass-group">
                                                <input type="password" className="form-control pass-input" placeholder=" password" name="password" value={state.password} onChange={inputHandler} />
                                            </div>
                                        </div>
                                        <div className="d-grid login-pharmacy mb-25">
                                            <button className="btn btn-primary btn-start" type="submit">Sign Up</button>
                                        </div>
                                        <div className="create-account">
                                            <p>Have an account already? <Link to="/login" className="popup-toggle">Login</Link></p>
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

export default Register;