import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const CategoryService = createApi({
    reducerPath : "categories",
    baseQuery : fetchBaseQuery({
        baseUrl : "http://localhost:8000/api/"
    }),
    tagTypes : ['categories'],
    endpoints : (builder) =>
    {
        return {
            getAllCategories : builder.query({
                query : () =>
                {
                    return {
                        url : "categories",
                        method : "GET"
                    }
                },
                providesTags : ["categories"]
            }),
            addCategory : builder.mutation({
                query : (data) =>
                {
                    return {
                        url : "categories",
                        method : "POST",
                        body : data
                    }
                },
                invalidatesTags : ["categories"]
            }),
            deleteCategory : builder.mutation({
                query : (data) =>{
                    return {
                        url : `categories/${data}`,
                        method : "DELETE"
                    }
                },
                invalidatesTags : ["categories"]
            }),
            getSingleCategory : builder.query({
                query : (data) =>
                {
                    return {
                        url : `categories/${data}`,
                        method : "GET"
                    }
                },
                providesTags : ["categories"]
            }),
            updateCategory : builder.mutation({
                query : ({data, id}) =>
                {
                    return {
                        url : `categories/${id}`,
                        method : "PUT",
                        body : data
                    }
                },
                invalidatesTags : ["categories"]
            })
        }
    }
});

export const {useGetAllCategoriesQuery, useAddCategoryMutation, useDeleteCategoryMutation, useGetSingleCategoryQuery, useUpdateCategoryMutation} = CategoryService;
export default CategoryService;