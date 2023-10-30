import { createSlice } from "@reduxjs/toolkit";

var newCart = [];
var flag = true;

function Exception (state, action) {
    newCart = JSON.parse(window.localStorage.getItem("cartPayload"));
    newCart = newCart.filter((item) => item.id !== action.payload);
    window.localStorage.setItem("cartPayload", JSON.stringify(newCart));
    state.cartArray = [];
    state.cartArray.push(...newCart);
}

const CartSlice = 

createSlice( 
    {
 
  name: "cart",
  initialState: {
    wishlist: [],
    cartArray: JSON.parse(window.localStorage.getItem("cartPayload")) 
      ? JSON.parse(window.localStorage.getItem("cartPayload"))
      : [],
    // cartArray: []
  },
  reducers: {
    addToWishList: (state, action) => {
      state.wishlist.push(action.payload);
    },
    removefromWishList: (state, action) => {
      console.log("removed");
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
    },
    addToCart: (state, action) => {
      console.log(action.payload);
      newCart = JSON.parse(window.localStorage.getItem("cartPayload")) ?
        JSON.parse(window.localStorage.getItem("cartPayload"))
        : [];
      newCart &&
        newCart.forEach((cart) => {
          if (cart.id === action.payload.id) {
            cart.quantity = cart.quantity + 1;
            flag = false;
          }
        });
      if (flag) {
        newCart.push({ ...action.payload, quantity: 1 });
      }
      flag = true;
      window.localStorage.setItem("cartPayload", JSON.stringify(newCart));

      console.log(newCart);
      state.cartArray = [];
      state.cartArray.push(...newCart);
      // state.cartArray = state.cartArray.push(action.payload)
    },
    removefromCart: (state, action) => {
    //   newCart = JSON.parse(window.localStorage.getItem("cartPayload"));
    //   newCart = newCart.filter((item) => item.id !== action.payload);
    //   window.localStorage.setItem("cartPayload", JSON.stringify(newCart));
    //   state.cartArray = [];
    //   state.cartArray.push(...newCart);
         Exception(state, action);
    },
    reducefromCart: (state, action) => {
      newCart = JSON.parse(window.localStorage.getItem("cartPayload"));
      newCart.map((item) => {
        if(item.id === action.payload) {
            item.quantity = item.quantity -1;
            if (item.quantity === 0) {
             Exception(state, action);
               
                        }
        }
        return item;
      })
      window.localStorage.setItem("cartPayload",JSON.stringify(newCart) )
      state.cartArray = [];
      state.cartArray.push(...newCart)
    }
  },
});

export const { addToWishList, removefromWishList, addToCart, removefromCart ,reducefromCart} =
  CartSlice.actions;
export default CartSlice.reducer;
