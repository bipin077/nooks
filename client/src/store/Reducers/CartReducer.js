import {createSlice} from "@reduxjs/toolkit";

const CartReducer = createSlice({
    name : "CartReducer",
    initialState : {
        cart : [],
        totalItems : 0,
        totalPrice : 0
    },
    reducers : {
        addToCart : (state, action) =>
        {
            const postion=state.cart.findIndex(it=>it.id===action.payload.id);
            const newItems=[...state.cart];
            if(postion!==-1)
            {
                newItems[postion]=action.payload;
                // state.totalItems=state.totalItems+1;
                // state.cart[postion].quantity = state.cart[postion].quantity + action.payload.quantity;
                state.totalPrice=parseInt(state.totalPrice)+(parseInt(action.payload.price) * parseInt(action.payload.quantity));
                state.cart = newItems;
            }
            else{
                state.totalItems=state.totalItems+1;
                state.totalPrice=parseInt(state.totalPrice)+(parseInt(action.payload.price) * parseInt(action.payload.quantity));
                newItems.push(action.payload);
                state.cart = newItems;
            }
            
        },
        removeCartItems : (state, action) =>
        {
            const newItems = state.cart.filter((it)=>it.id != action.payload.id);
            state.totalItems=state.totalItems - 1;
            state.totalPrice=parseInt(state.totalPrice) - (parseInt(action.payload.price) * parseInt(action.payload.quantity));
            state.cart = newItems;
        },
        incrementCartQuantity : (state, action) =>
        {
            const postion=state.cart.findIndex(it=>it.id===action.payload.id);
            state.cart[postion].quantity = state.cart[postion].quantity + 1;
            state.totalPrice = state.totalPrice + action.payload.price;
        }
        ,
        decrementCartQuantity : (state, action) =>
        {
            const postion=state.cart.findIndex(it=>it.id===action.payload.id);
            if(state.cart[postion].quantity > 1)
            {
                state.cart[postion].quantity = state.cart[postion].quantity - 1;
                state.totalPrice = state.totalPrice - action.payload.price;
            }
            else
            {
                state.cart[postion].quantity = 1;
            }
            
        },
        emptyCartData : (state, action) =>
        {
            state.cart = [];
            state.totalItems = 0;
            state.totalPrice = 0;
        }
    }
})

export const {addToCart, removeCartItems, incrementCartQuantity, decrementCartQuantity, emptyCartData} = CartReducer.actions;
export default CartReducer.reducer;