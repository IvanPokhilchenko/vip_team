import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Basket.css';

const Basket = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();



  const calculateTotal = () => {
    return items.reduce((total, item) => {
      if (item.discont_price) {
        // Если есть дисконтная цена, суммируем ее
        return total + (item.discont_price * item.quantity);
      } else {
        // Иначе суммируем обычную цену
        return total + (item.price * item.quantity);
      }
    }, 0);
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      // Если количество меньше или равно нулю, удаляем товар из корзины
      removeFromCart(itemId);
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { itemId, quantity: newQuantity } });
    }  
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
        {items.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="item-details">
              <img src={"http://localhost:3333" + item.image} alt={item.title} />
              <div className="item-info">
                <div className='item-title'>
                <p>{item.title}</p>
                </div>
                <div className="quantity">
                  <button className='counter' onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <p className='number'>{item.quantity}</p>
                  <button className='counter' onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  <div className="item-price">
              {item.discont_price && (
            <p className="dis-price">
              ${item.discont_price}
            </p>
          )}
          <p className={item.discont_price ? "orig-price discounted" : "orig-price" }>
            ${item.price}
          </p>
              <button className='remove' onClick={() => removeFromCart(item.id)}>&times;</button>
            </div>
                </div>
                
              </div>
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
