import {configureStore} from "@reduxjs/toolkit";
import BannerServices from "./Services/BannerServices";
import CategoryService from "./Services/CategoryService";
import ProductServices from "./Services/ProductServices";
import WhyChooseUsService from "./Services/WhyChooseUsService";

const Store = configureStore({
    reducer : {
        [BannerServices.reducerPath] : BannerServices.reducer,
        [CategoryService.reducerPath] : CategoryService.reducer,
        [ProductServices.reducerPath] : ProductServices.reducer,
        [WhyChooseUsService.reducerPath] : WhyChooseUsService.reducer
    },
    middleware : (getDefaultMiddleware)=> getDefaultMiddleware().concat([BannerServices.middleware, CategoryService.middleware, ProductServices.middleware, WhyChooseUsService.middleware])
})

export default Store;