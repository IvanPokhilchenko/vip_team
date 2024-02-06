import React from 'react';

function ProductFilter({ sortBy, setSortBy, filterByDiscount, setFilterByDiscount, filterByPriceRange, setFilterByPriceRange }) {

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleDiscountFilterChange = (e) => {
    setFilterByDiscount(e.target.checked);
  };

  const handlePriceRangeChange = (e) => {
    const { name, value } = e.target;
    setFilterByPriceRange(prevRange => ({ ...prevRange, [name]: value }));
  };

  return (
    <div className="product-filter">
      <label>Sort By:</label>
      <select value={sortBy} onChange={handleSortChange}>
        <option value="default">Default</option>
        <option value="newest">Newest</option>
        <option value="price-high-low">Price: High to Low</option>
        <option value="price-low-high">Price: Low to High</option>
      </select>

      <div>
        <label>Filter By Discount:</label>
        <input type="checkbox" checked={filterByDiscount} onChange={handleDiscountFilterChange} />
      </div>

      <div>
        <label>Filter By Price Range:</label>
        <input type="number" name="min" value={filterByPriceRange.min} onChange={handlePriceRangeChange} />
        <input type="number" name="max" value={filterByPriceRange.max} onChange={handlePriceRangeChange} />
      </div>
    </div>
  );
}

export default ProductFilter;
