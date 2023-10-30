import { createContext } from "react";
import { useEffect, useContext } from "react";
import { useReducer } from "react";
import reducer from "../reducers/FilterReducer";
import { AppContext } from "./productcontext";

const FilterContext = createContext();
const initialState = {
    filteredProds: [],
    allProds: [],
    sortingVal: 'ratings',
}

const FilterContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {products} = useContext(AppContext)

    useEffect(()=> {
        dispatch({type: 'LOAD_FILTER_PRODUCTS', payload: products})
    }, [products])

    useEffect(()=> {
        dispatch({type: 'SORTING_PRODUCTS', payload: state.filteredProds})
    }, [state.sortingVal])

    const sorting = (val) => {
        dispatch({ type: 'GET_SORT_VALUE', payload: val})
    }

    const filterByBrand = (valArr) => {
        dispatch({type: 'FILTER_BY_BRAND', payload: valArr})
    }


    return <FilterContext.Provider value = {{...state, sorting, filterByBrand}}>
        {children}
    </FilterContext.Provider >
}

export {FilterContext, FilterContextProvider};