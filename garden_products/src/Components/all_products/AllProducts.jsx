import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './AllProducts.css';

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  
    axios.get('http://localhost:3333/products/all')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Ошибка при загрузке категорий:', error);
      });
  }, []);


  return (
    <div className='cont-all-products'>
      <div  className='container-all-products'>
          <p className='allpr-text' 
          >Main page</p>
          <p className='allpr-texts' 
          >Categories</p>
        <p className='allproducts-text'
          >All products</p>
      </div>
     
      <ul className='allpr-ul'>
        {products.map((product) => (
          <li className='allpr-li' key={product.id}>

             <Link to={`/allproducts/${products.id}`} state="category">
            <div className='img_wrapper'>
              <img
                src={`http://localhost:3333${product.image}`}
                alt={product.title}
              />
            </div> 

            <div className="all-product-details">
               <h3 className="all-product-title">{product.title}</h3>
               <div className="all-price-container">
                  {product.discont_price && (
            <p className="allp-discount-price">
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

          </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllProducts;
