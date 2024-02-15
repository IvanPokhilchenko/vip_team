import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch(); 


  useEffect(() => {
    fetchProduct(productId);

  }, [productId]);

  const fetchProduct = async (productId) => {
    try {
      const response = await axios.get(`http://localhost:3333/products/${productId}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  const handleQuantityChange = (amount) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const addToCart = () => {
    if (product) {
      const cartItem = { ...product, quantity: quantity};
     
      dispatch({ type: 'ADD_TO_CART', payload: cartItem });
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className='container-all-products'>
        <Link to="/">Main page</Link>
        <div className="line"></div>
        <Link to="/categories">Categories</Link>
        <div className="line"></div>
        <Link to={"/categories/:categoryId"}>Tools and equipment</Link>
        <div className="line"></div>
        <Link to={`/products/:productId`}>Secateurs</Link>
      </div>
      {product.map((product) => (
      <div className='container-pr-detail' key={product.id}>
        <img className='' src={ "http://localhost:3333" + product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p> ${product.price}</p>
        <p>Description: {product.description}</p>
        <div>
          <button onClick={() => handleQuantityChange(-1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantityChange(1)}>+</button>
        </div>
        <button className='btn' onClick={addToCart}>Add to Cart</button>
      </div>
      ))}
    </div>
  );
};

export default ProductDetailPage;
