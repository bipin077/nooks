import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const ProductServices = createApi({
    reducerPath : "products",
    baseQuery : fetchBaseQuery({
        baseUrl : "http://localhost:8000/api/"
    }),
    tagTypes : ['products'],
    endpoints : (builder) =>    {
        return {
            getAllProducts : builder.query({
                query : () =>
                {
                    return {
                        method : "GET",
                        url : "products"
                    }
                },
                providesTags : ['products']
            }),
            insertProduct : builder.mutation({
                query : (data) =>
                {
                    return {
                        method : "POST",
                        url : "products",
                        body : data
                    }
                },
                invalidatesTags : ['products']
            }),
            deleteProduct : builder.mutation({
                query : (data) =>
                {
                    return {
                        method : "DELETE",
                        url : `products/${data}`
                    }
                },
                invalidatesTags : ['products']
            }),
            getSingleProduct : builder.query({
                query : (data) =>
                {
                    return {
                        method : "GET",
                        url : `products/${data}`,
                    }
                },
                providesTags : ['products']
            }),
            updateProduct : builder.mutation({
                query : ({data, id}) =>
                {
                    return {
                        method : "PUT",
                        url : `products/${id}`,
                        body : data
                    }
                },
                invalidatesTags : ['products']
            })
        }
    }
});

export const {useGetAllProductsQuery, useInsertProductMutation, useDeleteProductMutation, useGetSingleProductQuery, useUpdateProductMutation} = ProductServices;
export default ProductServices;