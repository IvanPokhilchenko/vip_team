import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./fonts/font.css";
import "./reset.css";
import "./App.css";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
import PageProductsByCategory from "./Components/ProductsByCategory/PageProductsByCategory";
import PageDiscountedProduct from "./Components/DiscountedProduct/PageDiscountedProduct";
import CategoryPage from "./Components/CategoryPage";
import AllProducts from "./Components/all_products/AllProducts";

import BasketPage from "./Components/Basket/BasketPage";

import ProductDetailPage from "./Components/product_page/ProductDetailPage";
import Custom404Page from "./Components/Custom404Page";
import { useDispatch } from 'react-redux';
import { Header } from "./Components/Header/Header";



function App() {
  const dispatch = useDispatch(); 

  const addToCartHandler = (product) => {
    
    const existingProduct = cartItems.find((item) => item.id === product.id);

  if (existingProduct) {
    // Если товар уже существует в корзине, увеличьте количество
    const updatedCartItems = cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );

    setCartItems(updatedCartItems);
    dispatch({ type: 'UPDATE_QUANTITY', payload: updatedCartItems });

  } else {
    // Если товар не существует в корзине, добавьте его с количеством 1
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } });

  }
  };
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });
  
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  
    // Удаление товара из LocalStorage при удалении из корзины
    const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const updatedStoredItems = storedItems.filter((item) => item.id !== itemId);
    localStorage.setItem('cartItems', JSON.stringify(updatedStoredItems));
  };

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories/" element={<CategoryPage />} />
          <Route path="/categories/:categoryId" element={<PageProductsByCategory />} />
          <Route path="/discounted" element={<PageDiscountedProduct />} />
          <Route path="/products" element={<AllProducts addToCart={addToCartHandler}/>} />
          <Route path="/cart" element={<BasketPage removeFromCart={removeFromCart}/> } />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="*" element={<Custom404Page />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    );
  }

export default App;
