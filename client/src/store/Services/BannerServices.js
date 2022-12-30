import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const BannerServices = createApi({
    reducerPath : "banners",
    baseQuery : fetchBaseQuery({
        baseUrl : 'http://localhost:8000/api/'
    }),
    tagTypes : ["banners"],
    endpoints : (builder) =>
    {
        return {
            getAllBanners : builder.query({
                query : () => {
                    return {
                        url : "banners",
                        method : "GET"
                    }
                },
                providesTags : ['banners']
            }),
            addBanner : builder.mutation({
                query : (data) =>
                {
                    return {
                        url : "banners",
                        method : "POST",
                        body : data
                    }
                },
                invalidatesTags : ['banners']
            }),
            deleteBanner : builder.mutation({
                query : (data) =>
                {
                    return {
                        url : `banners/${data}`,
                        method : "DELETE",
                    }
                },
                invalidatesTags : ['banners']
            }),
            getSingleBanner : builder.query({
                query: (data) =>
                {
                    return {
                        url : `banners/${data}`,
                        method : "GET"
                    }
                },
                providesTags : ["banners"]
            }),
            updateBanner : builder.mutation({
                query : ({data, id}) =>
                {
                    return {
                        url : `banners/${id}`,
                        method : "PUT",
                        body : data
                    }
                },
                invalidatesTags : ['banners']
            }),
            countBanners : builder.query({
                query : () =>
                {
                    return {
                        url : "bannersCount",
                        method : "GET"
                    }
                },
                providesTags : ['banners']
            })
        }
    }
});

export const { useCountBannersQuery ,useGetAllBannersQuery, useAddBannerMutation, useDeleteBannerMutation, useGetSingleBannerQuery, useUpdateBannerMutation} = BannerServices;
export default BannerServices;