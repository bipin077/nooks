import React from 'react';
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

const PubliceRoute = ({children}) => {

  const {token} = useSelector((state) => state.auth);
    return token ? <Navigate to="/admin/dashboard" /> : children;
}

export default PubliceRoute;