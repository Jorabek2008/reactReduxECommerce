import React, { createContext, useReducer, useState } from "react"
import Home from "./page/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from './page/About';
import Contact from './page/Contact';
import Products from "./page/Products";
import Login from './page/Login';
import Register from "./page/Register";
import ProductInfo from "./page/ProductInfo";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./index.css"
import Cart from "./page/Cart";
import Page404 from "./Page404";
import { useDispatch, useSelector } from "react-redux";



function App() {
 
  const {loading} = useSelector(state => state.productReducer)

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/product/:id" element={<ProductInfo />} />
          <Route path="/cart" element={loading ? <Cart /> : <Login />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
