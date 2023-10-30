import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import productReducer from '../store/ProductSlice';
import compareReducer from './CompareSlice';

const store = configureStore(
    {
        reducer:{
            cart: cartReducer,  
            products : productReducer,   
            compare : compareReducer,     
        }
    }
)

export default store;