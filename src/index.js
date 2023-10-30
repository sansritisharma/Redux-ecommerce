import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FilterContextProvider } from './context/filtercontext';
import { AppProvider } from './context/productcontext';
import store from './store/store';
import { Provider } from 'react-redux';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el); 

root.render(
    <Provider store={store}>
        <AppProvider>
            <FilterContextProvider>
                <App />
            </FilterContextProvider>
        </AppProvider>
    </Provider>
);