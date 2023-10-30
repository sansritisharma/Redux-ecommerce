import { createSlice } from "@reduxjs/toolkit";

var compareArray = [];


const compareSlice = createSlice({
    name: 'compare',
    initialState: {
        compareData: localStorage.getItem('compare')? JSON.parse(localStorage.getItem('compare')) : [],
    },
    reducers : {
        setCompareItems : (state, action) => {
          compareArray = localStorage.getItem('compare')? JSON.parse(localStorage.getItem('compare')) : [];
          const index = compareArray && compareArray.findIndex((item) => item.id === action.payload.id);
          if ( index === -1 || index === null){
            compareArray.push({...action.payload})
          }else {
            alert('Added already')
          }
          localStorage.setItem('compare', JSON.stringify(compareArray));
          state.compareData = [];
          state.compareData.push(compareArray);
        },
    }


})

export const {setCompareItems} = compareSlice.actions;
export default compareSlice.reducer;