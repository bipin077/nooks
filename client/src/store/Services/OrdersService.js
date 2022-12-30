import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const OrdersService = createApi({
    reducerPath : "orders",
    baseQuery : fetchBaseQuery({
        baseUrl : "http://localhost:8000/api/"
    }),
    tagTypes : ["orders"],
    endpoints : (builder) =>
    {
        return {
            addNewOrder : builder.mutation({
                query : (data) =>
                {
                    return {
                        url : 'orders',
                        method : "POST",
                        body : data
                    }
                }, invalidatesTags : ["orders"]
            }),
            getAllOrders : builder.query({
                query : () =>
                {
                    return {
                        url : "orders",
                        method : "GET"
                    }
                }, providesTags : ["orders"]
            }),
            getSingleOrder : builder.query({
                query : (id) =>
                {
                    return {
                        url : `orders/${id}`,
                        method : "GET"
                    }
                }, providesTags : ["orders"]
            })
        }
    }
})

export const {useAddNewOrderMutation, useGetAllOrdersQuery, useGetSingleOrderQuery} = OrdersService;
export default OrdersService;