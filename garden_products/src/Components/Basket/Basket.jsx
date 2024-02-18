import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Basket.css';

const Basket = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();



  const calculateTotal = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  //   let  totalPrice = items.reduce((total, item) => {
  //     if(item.discont_price){
  //         return  total + (item.count * item.discont_price)
  //     }else {
  //         return total + (item.count * item.price)
  //     }
  // }, 0) 
  //   return  (Math.round(totalPrice * 100)/100).toFixed(2)
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  };

  const updateQuantity = (itemId, newQuantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { itemId, quantity: newQuantity } });
  };

  const continueShopping = () => {
    window.location.href = '/products';
  };
  if (!items || items.length === 0) {
    return (
      <div className="shopping-cart-empty">
         <div className='shop'>
          <h2 className='shopping-c'>Shopping cart</h2>
          <div className='lines'></div>
          <span  className="all-text">Back to the store</span>
        </div>
        <p className='looks'>Looks like you have no items in your basket currently.</p>
        <button className='continue-btn' onClick={continueShopping}>Continue Shopping</button>
      </div>
    );
  }

  console.log(items);

  return (
    <>
    <div className='shop-order'>
          <h2 className='shopping-c'>Shopping cart</h2>
          <div className='lines'></div>
          <span  className="all-text">Back to the store</span>
      </div>
    <div className="shopping-cart">
      <div className="cart-items">
        {items.map((item, index) => (
          <div className="cart-item" key={index}>
            <div className="item-details">
              <img src={item.image} alt={item.title} />
              <div className="item-info">
                <p>{item.title}</p>
                <div className="quantity">
                  <button className='counter' onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <p className='number'>{item.quantity}</p>
                  <button className='counter' onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
              </div>
            </div>
            <div className="item-price">
              {item.discountedPrice ? <p>${item.discountedPrice}</p> : <p>${item.price}</p>}
              {item.discountedPrice && <p className="original-price">${item.price}</p>}
              <button className='remove' onClick={() => removeFromCart(item.id)}>&times;</button>
            </div>
          </div>
        ))}
      </div>
      <div className="order-details">
        <div className='inform'>
        <h3 className='order-h3'>Order details</h3>
        <p>{items.length} items</p>
        <p>Total: ${calculateTotal()}</p>
        </div>
        <div className="user-details">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Phone number" />
          <input type="email" placeholder="Email" />
          <button className='order'>Order</button>
        </div>
      </div>
      </div>
    </>
  );
};

export default Basket;
