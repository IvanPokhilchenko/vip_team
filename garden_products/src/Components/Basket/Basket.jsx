import React from 'react';
import './Basket.css';

const Basket = ({ items, removeFromCart, updateQuantity }) => {
  const calculateTotal = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  const continueShopping = () => {
    window.location.href = '/products';
  };
  if (!items || items.length === 0) {
    return (
      <div className="shopping-cart-empty">
         <div className='shopping'>
          <h2 className='shopping-cart'>Shopping cart</h2>
          <div className='lines'></div>
          <span  className="all-text">Back to the store</span>
        </div>
        <p className='looks'>Looks like you have no items in your basket currently.</p>
        <button onClick={continueShopping}>Continue Shopping</button>
      </div>
    );
  }



  return (
    <div className="shopping-cart">
      <div className="cart-items">
        <h2>Shopping cart</h2>
        <hr />
        {items.map(item => (
          <div className="cart-item" key={item.id}>
            <div className="item-details">
              <img src={item.image} alt={item.title} />
              <div className="item-info">
                <p>{item.title}</p>
                <div className="quantity">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <input type="text" value={item.quantity} readOnly />
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
              </div>
            </div>
            <div className="item-price">
              {item.discountedPrice ? <p>${item.discountedPrice}</p> : <p>${item.price}</p>}
              {item.discountedPrice && <p className="original-price">${item.price}</p>}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="order-details">
        <h3>Order details</h3>
        <p>{items.length} items</p>
        <p>Total: ${calculateTotal()}</p>
        <div className="user-details">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Phone number" />
          <input type="email" placeholder="Email" />
          <button>Order</button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
