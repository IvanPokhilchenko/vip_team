import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./fonts/font.css";
import "./reset.css";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
import PageProductsByCategory from "./Components/ProductsByCategory/PageProductsByCategory";
import PageDiscountedProduct from "./Components/DiscountedProduct/PageDiscountedProduct";
import CategoryPage from './Components/CategoryPage';
import AllProducts from "./Components/all_products/AllProducts";

import BasketPage from "./Components/Basket/BasketPage";

import ProductDetailPage from "./Components/product_page/ProductDetailPage";



function App() {
  return (
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories/" element={<CategoryPage />} />
            <Route path="/categories/:categoryId" element={<PageProductsByCategory />} />
            <Route path="/discounted" element={<PageDiscountedProduct /> } />
            <Route path="/products" element={<AllProducts /> } />
            <Route path="/cart" element={<BasketPage /> } />
            <Route path="/products/:productId" element={<ProductDetailPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }



export default App;
