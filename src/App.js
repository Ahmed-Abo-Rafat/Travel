
import React from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Products from "./Components/Pages/Products";
import Services from "./Components/Pages/Services";
import SignUp from "./Components/Pages/SignUp";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/service" element={<Services />} />
        <Route path="/product" element={<Products />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
