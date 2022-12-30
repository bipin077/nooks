import {configureStore} from "@reduxjs/toolkit";
import BannerServices from "./Services/BannerServices";
import CategoryService from "./Services/CategoryService";
import ProductServices from "./Services/ProductServices";
import WhyChooseUsService from "./Services/WhyChooseUsService";
import ContactServices from "./Services/ContactServices";
import CartReducer from "./Reducers/CartReducer";
import AuthServices from "./Services/AuthServices";
import AuthReducer from "./Reducers/AuthReducer";
import OrdersService from "./Services/OrdersService";
import ProfileServices from "./Services/ProfileServices";

const Store = configureStore({
    reducer : {
        [BannerServices.reducerPath] : BannerServices.reducer,
        [CategoryService.reducerPath] : CategoryService.reducer,
        [ProductServices.reducerPath] : ProductServices.reducer,
        [WhyChooseUsService.reducerPath] : WhyChooseUsService.reducer,
        [ContactServices.reducerPath] : ContactServices.reducer,
        [AuthServices.reducerPath] : AuthServices.reducer,
        [OrdersService.reducerPath] : OrdersService.reducer,
        [ProfileServices.reducerPath] : ProfileServices.reducer,
        "CartReducer" : CartReducer,
        "auth" : AuthReducer
    },
    middleware : (getDefaultMiddleware)=> getDefaultMiddleware().concat([BannerServices.middleware, CategoryService.middleware, ProductServices.middleware, WhyChooseUsService.middleware, ContactServices.middleware, AuthServices.middleware, OrdersService.middleware, ProfileServices.middleware])
})

export default Store;