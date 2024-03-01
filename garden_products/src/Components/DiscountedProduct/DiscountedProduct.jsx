import React from 'react';

function DiscountedProduct({ product }) {


  return (
    <div className="product-item"   >
      <div className="product-image">
        <img
          src={"http://localhost:3333" + product.image}
          alt={product.title}
        />
        <button className='add-to-cart-button image-button'>Add to Cart</button>
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
  );
}

export default DiscountedProduct;
