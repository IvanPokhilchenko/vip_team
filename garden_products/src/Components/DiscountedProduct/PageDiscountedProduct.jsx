import React, { useState, useEffect } from 'react'
import DiscountedProduct from './DiscountedProduct';
import './PageDiscountedProduct.css';

function PageDiscountedProduct() {
  const [discountedProducts, setDiscountedProducts] = useState([]);

  useEffect(() => {
    fetchDiscountedProducts();
  }, []);

  const fetchDiscountedProducts = async () => {
    try {
      const response = await fetch('http://localhost:3333/products/all');
      const data = await response.json();
      // Фильтруем продукты, у которых есть скидка
      const discounted = data.filter(product => product.discont_price);
      setDiscountedProducts(discounted);
    } catch (error) {
      console.error('Ошибка при загрузке продуктов:', error);
    }
  };


  return (
    <div>
    <h2 className='discounted-h2'>Discounted items</h2>
    <div className="products-list">
      {discountedProducts.map(product => (
        <DiscountedProduct key={product.id} product={product} />
      ))}
    </div>
  </div>
  );
}

export default PageDiscountedProduct