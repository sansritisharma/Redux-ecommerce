import "./Reset.css";
import "./App.scss";
import Footer from '../src/organism/footer/Footer';
import Header from '../src/organism/header/Header';
import Cart from './pages/cart/Cart.jsx';
import Home from '../src/pages/Home';
import Headphones from '../src/pages/Headphones';
import Speakers from '../src/pages/Speakers';
import Laptop from '../src/pages/Laptop';
import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
    return (  
        <Router>
          <Header />
          <Routes>
            <Route path='/cart' element={<Cart/>} />
            <Route path ='/' element={<Home />} />
            <Route path ='/laptop' element={<Laptop />} />
            <Route path ='/headphones' element={<Headphones />} />
            <Route path ='/speakers' element={<Speakers />} />
          </Routes>
          <Footer />
        </Router>
    )
}

export default App;
