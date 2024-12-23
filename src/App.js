import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AboutUs from "./AboutUs";
import ProductGridwall from "./ProductGridwall";
import Cart from "./Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/products" element={<ProductGridwall />} />
        <Route path="/cartpage" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
