/*3 steps to create a context
    1- create context
    2- create a provider
    3- create a consumer
*/

import reducer from "../reducers/ProductReducer";
import { useReducer, useEffect} from "react";
import { createContext } from "react";

const AppContext = createContext();
const initialState = {
    products: []
}

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetchCardData();
      },[]); 

    const fetchCardData = () => {
        fetch("./data.json") 
          .then(function (res) { 
            return res.json(); 
          }) 
          .then(function (data) { 
            dispatch({type: 'SET_API_DATA', payload: data});
        }) 
          .catch(function (err) { 
            console.log(err, "error"); 
          }); 
      }
    
    return <AppContext.Provider value = {{...state}}>
        {children}
    </AppContext.Provider >
}

export {AppProvider, AppContext};