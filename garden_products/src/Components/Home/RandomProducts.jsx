import React, { useState, useEffect } from 'react';
import './RandomProducts.css';

function RandomProducts() {
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    fetchRandomProducts();
  }, []);

  const fetchRandomProducts = async () => {
    try {
      const response = await fetch('http://localhost:3333/products/all');
      const data = await response.json();
      const randomProducts = data.sort(() => 0.5 - Math.random()).slice(0, 4);
      setRandomProducts(randomProducts);
    } catch (error) {
      console.error('Ошибка при загрузке случайных товаров:', error);
    }
  };

  

  return (
      <div className='random-products-container'>
        <div className='container'>
          <h2 className='categories-text'>Sale</h2>
          <div className='line'></div>
          <span className='all-text' >All sales</span>
        </div>
  
        <div className='products-list'>
          {/* Объединяем товары из сервера и локальные образцы товаров и отображаем их */}
          {[...randomProducts].map(product => (
            <div key={product.id} className='product-item'>
              <div className='product-image'>
                {/* Отображаем изображение товара */}
                <img src={"http://localhost:3333" + product.image} alt={product.title} />
                {/* В данном случае можно добавить информацию о скидке */}
                {product.discont_price && (
                  <span className='discount-percent'>
                    {`-${Math.round((1 - (product.discont_price / product.price)) * 100)}% `}
                  </span>
                )}
              </div>
              <div className='product-details'>
  <h3 className='product-title'>{product.title}</h3>
  <div className='price-container'>
    {/* Отображаем цену со скидкой, если она есть */}
    {product.discont_price && (
      <p className='discount-price'>${product.discont_price}</p>
    )}
    {/* Отображаем оригинальную цену товара */}
    <p className={product.discont_price ? 'original-price discounted' : 'original-price'}>
      ${product.price}
    </p>
  </div>
</div>
            </div>
          ))}
        </div>
      </div>
  //   <div className='random-products-container'>
  //       <div className='container'>
  //       <h2 className='categories-text'>Sale</h2>
  //       <div className='line'></div>
  //       <span className='all-text' >All sales</span>
  //     </div>

  //     <div className='products-list'>
  //       {randomProducts.map(product => (
  //         <div key={product.id} className='product-item'>
  //           <div className='product-image'>
  //             <img src={"http://localhost:3333" + product.image} alt={product.title} />
  //             <span className='discount-percent'>
  //             </span>
  //           </div>
  //           <div className='product-details'>
  //             <h3 className='product-title'>{product.title}</h3>
  //             <p className='discount-price'>{product.discount_price}</p>
  //             <p className='original-price'>{product.price}</p>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  // </div>
  )
}


export default RandomProducts
