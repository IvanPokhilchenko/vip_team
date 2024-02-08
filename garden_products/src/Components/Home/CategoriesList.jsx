import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CategoriesList.css';

function CategoriesList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:3333/categories/all');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Ошибка при загрузке категорий:', error);
    }
  };

  return (
    <div className='cont'>
      <div  className='container'>
        <p className='categories-text'>Categories</p>
        <div className='line'></div>
        <span className='all-text' >All categories</span>
      </div>
      <span className='all-texts' >All categories</span>
      <ul className='categories-list'>
        {categories.slice(0, 4).map(category => (
          <li key={category.id}>
            <Link to={`/categories/${category.id}`}>
              <img src={`http://localhost:3333${category.image}`} alt={category.title} className='category-images' />
              <span className='text'>{category.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoriesList;