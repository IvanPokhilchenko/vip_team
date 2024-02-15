import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ProductDetailPage.css';




const ProductDetailPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Получение подробной информации о продукте на основе идентификатора продукта из параметров URL
    fetchProduct(productId);
  }, [productId]);


  const fetchProduct = async (productId) => {
    try {
      const response = await axios.get(`http://localhost:3333/products/all/${productId}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleQuantityChange = (amount) => {
    // Настройте количество на основе заданной суммы
    const newQuantity = quantity + amount;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const addToCart = () => {
    // реализовать функциональность для добавления товара в корзину
    console.log(`Added ${quantity} ${product.name}(s) to cart.`);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div >
      <div  className='container-all-products'>
          <p className='allpr-text' onClick={() => window.location.href = 'http://localhost:3000/'}
          >Main page</p>
          <div className="line"></div>
          <p className='allpr-text' onClick={() => window.location.href = 'http://localhost:3333/categories/all'}
          >Categories</p>
          <div className="line"></div>
          <p className='allpr-text' onClick={() => window.location.href = 'http://localhost:3333/сategories/:categoryId'}
          >Tools and equipment</p>
          <div className="line"></div>
          <p className='allpr-text-1' onClick={() => window.location.href = 'http://localhost:3333/products/:productId'}
          >Secateurs</p>
       </div> 
       
    <div className='container-pr-detail'>
      <img className='' src={product.imageUrl} alt={product.name} />
      <h2>{product.name}</h2>
      <p> ${product.price}</p>
      <p>Description: {product.description}</p>
      <div>
        <button onClick={() => handleQuantityChange(-1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => handleQuantityChange(1)}>+</button>
      </div>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
    </div>
  );
};

export default ProductDetailPage;
