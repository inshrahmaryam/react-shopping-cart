// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './assets/pages/HomePage';
import Home from './assets/pages/Home';
import Cart from './assets/pages/Cart';
import ProductDetails from './assets/pages/ProductDetails';
import LoginSignup from './assets/LoginSignUp/LoginSignup'; 
import Details from './assets/pages/Details';
import ProtectedRoutes from './utils/ProtectedRoutes';
const BASE_URL='https://fakestoreapi.com/products';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LoginSignup" element={<LoginSignup />} />
   {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
  <Route element={ <ProtectedRoutes/> } >
   <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      
          <Route path="/product/:id"  element={  <Details /> }/> 
  </Route>    
       
      </Routes>
    </Router>
  );
}


export default App