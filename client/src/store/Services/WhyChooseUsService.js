import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const WhyChooseUsService = createApi({
    reducerPath : "whychooseus",
    baseQuery : fetchBaseQuery({
        baseUrl : "http://localhost:8000/api/"
    }),
    tagTypes : ['whychooseus'],
    endpoints : (builder) =>
    {
        return {
            getSingleWhyChooseUs : builder.query({
                query : (id) =>
                {
                    return {
                        method : "GET",
                        url : `whychooseus/${id}`
                    }
                },
                providesTags : ['whychooseus']
            }),
            getAllWhyChooseUs : builder.query({
                query : () =>
                {
                    return {
                        method : "GET",
                        url : "whychooseus"
                    }
                },
                providesTags : ['whychooseus']
            }),
            insertWhyChooseUs : builder.mutation({
                query : (data) =>
                {
                    return {
                        method : "POST",
                        url : "whychooseus",
                        body : data
                    }
                },
                invalidatesTags : ['whychooseus']
            }),
            updateWhyChooseUs : builder.mutation({
                query : ({data, id}) =>
                {
                    return {
                        method : "PUT",
                        url : `whychooseus/${id}`,
                        body : data
                    }
                }, invalidatesTags : ['whychooseus']
            }),
            deleteWhyChooseUs : builder.mutation({
                query : (id) =>
                {
                    return {
                        method : "DELETE",
                        url : `whychooseus/${id}`
                    }
                }, invalidatesTags : ['whychooseus']
            })
        }
    }
});

export const { useGetSingleWhyChooseUsQuery, useGetAllWhyChooseUsQuery, useInsertWhyChooseUsMutation, useUpdateWhyChooseUsMutation, useDeleteWhyChooseUsMutation} = WhyChooseUsService;
export default WhyChooseUsService;