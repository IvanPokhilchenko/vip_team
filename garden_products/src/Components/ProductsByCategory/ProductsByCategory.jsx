import React, { useState, useEffect } from 'react';
import './ProductsByCategory.css';
import { Link } from "react-router-dom";
import ProductFilter from './ProductFilter';

function ProductsByCategory({ categoryId }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('default');
  const [filterByDiscount, setFilterByDiscount] = useState(false);
  const [filterByPriceRange, setFilterByPriceRange] = useState({ min: 0, max: 1000 });


  useEffect(() => {
    fetchProducts(categoryId);
  }, [categoryId, sortBy, filterByDiscount, filterByPriceRange]);

  const fetchProducts = async (categoryId) => {
    try {
      const response = await fetch(
        `http://localhost:3333/categories/${categoryId}`
      );
      const data = await response.json();

      let sortedProducts = [...data.data];
      if (filterByDiscount) {
        sortedProducts = sortedProducts.filter(product => product.discont_price);
      }
      sortedProducts = sortedProducts.filter(product => product.price >= filterByPriceRange.min && product.price <= filterByPriceRange.max);
  
      // Apply sorting
      if (sortBy === 'newest') {
        sortedProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      } else if (sortBy === 'price-high-low') {
        sortedProducts.sort((a, b) => b.price - a.price);
      } else if (sortBy === 'price-low-high') {
        sortedProducts.sort((a, b) => a.price - b.price);
      }
      
      setProducts(sortedProducts);      

      // setProducts(data.data);
      
      setLoading(false);
    } catch (error) {
      console.error("Ошибка при загрузке товаров:", error);
    }
  };

  return (
    <div>
      <p className='tools-h2'>Tools and equipment</p>
       {/* Вставляем компонент ProductFilter */}
       <ProductFilter
        sortBy={sortBy}
        setSortBy={setSortBy}
        filterByDiscount={filterByDiscount}
        setFilterByDiscount={setFilterByDiscount}
        filterByPriceRange={filterByPriceRange}
        setFilterByPriceRange={setFilterByPriceRange}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="products-list">
            {products &&
              products.map((product) => (
                <Link to={`/products/${product.id}`}>
                <div key={product.id} className="product-item">
                  <div className="product-image">
                    <img
                      src={"http://localhost:3333" + product.image}
                      alt={product.title}
                    />
                    {product.discont_price && (
                      <span className="discount-percent">
                        {`-${Math.round(
                          (1 - product.discont_price / product.price) * 100
                        )}% `}
                      </span>
                    )}
                  </div>
                  <div className="product-details">
                    <h3 className="product-title">{product.title}</h3>
                    <div className="price-container">
                      {product.discont_price && (
                        <p className="discount-price">
                          ${product.discont_price}
                        </p>
                      )}
                      <p
                        className={
                          product.discont_price
                            ? "original-price discounted"
                            : "original-price"
                        }
                      >
                        ${product.price}
                      </p>
                    </div>
                  </div>
                </div>
                </Link>
              ))}
          </div>
        </div>
       )}
    </div>
  );
}

export default ProductsByCategory;


 