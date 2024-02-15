import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './AllProducts.css';
import ProductFilter from '../ProductsByCategory/ProductFilter';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState('default');
  const [filterByDiscount, setFilterByDiscount] = useState(false);
  const [filterByPriceRange, setFilterByPriceRange] = useState({ min: 0, max: 1000 });

  useEffect(() => {
    fetchProducts();
  }, [sortBy, filterByDiscount, filterByPriceRange]);


 
    const fetchProducts = async () => {
  try {
    const response = await axios.get('http://localhost:3333/products/all');
    const data = await response.data;

    let sortedProducts = [...data];
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
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

  return (
    <div className='cont-all-products'>
      <div  className='container-all-products'>
          <p className='allpr-text' onClick={() => window.location.href = 'http://localhost:3000/'}
          >Main page</p>
          <div className="line"></div>
          <p className='allpr-texts' onClick={() => window.location.href = 'http://localhost:3333/categories/all'}
          >Categories</p>
      </div>
      <div><p className='allproducts-text'>All products</p>
      <ProductFilter
          sortBy={sortBy}
          setSortBy={setSortBy}
          filterByDiscount={filterByDiscount}
          setFilterByDiscount={setFilterByDiscount}
          filterByPriceRange={filterByPriceRange}
          setFilterByPriceRange={setFilterByPriceRange}
        />
      </div>
      <div className='products-list'>
        {products.map((product) => (
          <div className='product-item' key={product.id}>

        
             <Link to={`/products/${product.id}`} >
              {product.name}
             <div className='product-image'>
                <img src={`http://localhost:3333${product.image}`} alt={product.title} />
            
                {product.discont_price && (
                  <span className='discount-percent'>
                    {`-${Math.round((1 - (product.discont_price / product.price)) * 100)}% `}
                  </span>
                )}
              </div>

              <div className='product-details'>
           <h3 className='product-title'>{product.title}</h3>
           <div className='price-container'>
               {product.discont_price && (
           <p className='discount-price'>${product.discont_price}</p>
               )}
           <p className={product.discont_price ? 'original-price discounted' : 'original-price'}>
               ${product.price}
    </p>
  </div>
</div>

          </Link> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
