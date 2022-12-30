import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const ProfileServices = createApi({
    reducerPath : "profile",
    baseQuery : fetchBaseQuery({
        baseUrl : "http://localhost:8000/api/"
    }),
    tagTypes : ['profile'],
    endpoints : (builder) =>
    {
        return {
            updateLogo : builder.mutation({
                query : ({data, id}) =>
                {
                    return {
                        url : `updateLogo/${id}`,
                        method : "PUT",
                        body : data
                    }
                },
                invalidatesTags : ["profile"]
            }),
            updateFevicon : builder.mutation({
                query : ({data, id}) =>
                {
                    return {
                        url : `updateFevicon/${id}`,
                        method : "PUT",
                        body : data
                    }
                },
                invalidatesTags : ["profile"]
            }),
            updateDetails : builder.mutation({
                query : ({data, id}) =>
                {
                    return {
                        url : `updatedetails/${id}`,
                        method : "PUT",
                        body : data
                    }
                },
                invalidatesTags : ["profile"]
            }),
            getProfileData : builder.query({
                query : () =>
                {
                    return {
                        url : "profile",
                        method : "GET"
                    }
                },
                providesTags : ["profile"]
            })
        }
    }
})

export const { useUpdateDetailsMutation, useGetProfileDataQuery ,useUpdateLogoMutation, useUpdateFeviconMutation} = ProfileServices;
export default ProfileServices;
