import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState : {
        data: [],
    },
    reducers: {
        setProducts(state, action){
            state.data = action.payload
        },
    }
});



//Thunks
export function fetchProducts() {
    return function fetchProductThunk (dispatch, getState) {
        try {
            fetch("./data.json")
            .then((response) => response.json())
            .then((data) => {
                dispatch(setProducts(data));              
                return data;
            });
        }catch(err) {
            console.log('error');
        }
    }
}

// Storing cart items in Session Storage



export const {setProducts} = productSlice.actions;
export default productSlice.reducer;