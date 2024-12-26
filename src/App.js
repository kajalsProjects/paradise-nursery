import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AboutUs from "./AboutUs";
import ProductGridwall from "./ProductGridwall";
import Cart from "./Cart";
import { useState, useEffect } from "react";

function App() {
  const [plants, setplants] = useState([]);

  useEffect(() => {
    fetch("plants.json")
      .then((response) => response.json())
      .then((data) => {
        setplants(data);
        console.log("App js Data --> ", data);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/products" element={<ProductGridwall plants={plants} />} />
        <Route path="/cartpage" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
