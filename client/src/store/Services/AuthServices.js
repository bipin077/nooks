import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const AuthServices = createApi({
    reducerPath : "authentication",
    baseQuery : fetchBaseQuery({
        baseUrl : "http://localhost:8000/api/"
    }),
    tagTypes : ["authentication"],
    endpoints : (builder) =>
    {
        return {
            registerUser :  builder.mutation({
                query : (data) =>
                {
                    return {
                        method : "POST",
                        url : "register",
                        body : data
                    }
                },
                invalidatesTags : ["authentication"]
            }),
            loginUser :  builder.mutation({
                query : (data) =>
                {
                    return {
                        method : "POST",
                        url : "login",
                        body : data
                    }
                },
                invalidatesTags : ["authentication"]
            })
        }
    }
})

export const {useLoginUserMutation, useRegisterUserMutation} = AuthServices;
export default AuthServices;