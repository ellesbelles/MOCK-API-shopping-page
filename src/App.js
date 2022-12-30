import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import './App.css';
import Home from "./Home";
import CreateProduct from "./CreateProduct";
import UpdateProduct from "./UpdateProduct";

export const ProductContext = createContext();
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/products")
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setProducts(data);
    })
  }, [])
  return (
    <ProductContext.Provider value={{products, setProducts}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/update" element={<UpdateProduct />} />
        </Routes>
      </BrowserRouter>
    </ProductContext.Provider>
  );
}

export default App;
