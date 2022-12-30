import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const ContactServices = createApi({
    reducerPath : "contacts",
    baseQuery : fetchBaseQuery({
        baseUrl: "http://localhost:8000/api/"
    }),
    tagTypes : ["contacts"],
    endpoints : (builder) =>
    {
        return {
            getContactDetails : builder.query({
                query : () =>
                {
                    return {
                        method : "GET",
                        url : "contact"
                    }
                }, providesTags : ["contacts"]
            }),
            addContactDetail : builder.mutation({
                query : (data) =>
                {
                    return {
                        method : "post",
                        url : "contact",
                        body : data
                    }
                },
                invalidatesTags : ["contacts"]
            }),
            updateContactDetails : builder.mutation({
                query : ({data, id}) =>
                {
                    return {
                        method : "PUT",
                        url : `contact/${id}`,
                        body : data
                    }
                },
                invalidatesTags : ['contacts']
            }),
            updateSocialLinks : builder.mutation({
                query : ({data, id}) =>
                {
                    return {
                        method : "PUT",
                        url : `socialLinks/${id}`,
                        body : data
                    }
                },
                invalidatesTags : ['contacts']
            })
        }
    }
})


export const {useUpdateSocialLinksMutation ,useGetContactDetailsQuery, useAddContactDetailMutation, useUpdateContactDetailsMutation} = ContactServices;
export default ContactServices;