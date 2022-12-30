import {createSlice} from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

const token = localStorage.getItem("token");
const verifyToken = () =>
{
    if(token)
    {
        const decodeToken = jwtDecode(token);
        const expiredIn = new Date(decodeToken.exp * 1000);
        if(new Date() > expiredIn)
        {
            return null;
        }
        else
        {
            return token;
        }
    }
    else
    {
        return null;
    }
}

const AuthReducer = createSlice({
    name : "auth",
    initialState : {
        token : verifyToken()
    },
    reducers : {
        setToken : (state, action) =>
        {
            state.token = action.payload;
        },
        removeToken : (state, action) =>
        {
            localStorage.removeItem("token");
            state.token = null;
        }
    }
});

export const {setToken, removeToken} = AuthReducer.actions;
export default AuthReducer.reducer;