import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Veg.css';
import { AddToCart } from './store';

function Veg() {
  const dispatch = useDispatch();
  const vegProducts = useSelector(state => state.products.veg);

  const [selectedRanges, setSelectedRanges] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  // Price range options
  const priceRanges = [
    { value: 'RS 1 to RS 50', min: 1, max: 50 },
    { value: 'RS 51 to RS 100', min: 51, max: 100 },
    { value: 'RS 101 to RS 200', min: 101, max: 200 },
    { value: 'RS 201 to RS 500', min: 201, max: 500 },
    { value: 'More than RS 500', min: 501, max: Infinity }
  ];

  // Get active ranges selected
  const activeRanges = priceRanges.filter(range =>
    selectedRanges.includes(range.value)
  );

  // Filter products by selected price ranges
  const filteredProducts = selectedRanges.length === 0
    ? vegProducts
    : vegProducts.filter(product =>
        activeRanges.some(range =>
          product.price >= range.min && product.price <= range.max
        )
      );

  // Pagination on filtered products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Handle price range checkbox change
  const handleCheckboxChange = (rangeValue) => {
    if (selectedRanges.includes(rangeValue)) {
      setSelectedRanges(selectedRanges.filter(r => r !== rangeValue));
    } else {
      setSelectedRanges([...selectedRanges, rangeValue]);
    }
    setCurrentPage(1); // Reset to page 1 when filter changes
  };

  // Prepare product list JSX outside of return
  const vegListItems = currentProducts.map((product, index) => (
    <li key={index} className="veg-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button onClick={() => dispatch(AddToCart(product))}>Add to Cart</button>
    </li>
  ));

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Veg Products</h1>

      {/* Price Filter */}
      <div className="price-filter" style={{ marginBottom: '20px', textAlign: 'center' }}>
        {priceRanges.map(range => (
          <label key={range.value} style={{ marginRight: '15px' }}>
            <input
              type="checkbox"
              checked={selectedRanges.includes(range.value)}
              onChange={() => handleCheckboxChange(range.value)}
            />
            {/* <input 
            type='range' 
            /> */}
            {range.value}
          </label>
        ))}
        <button onClick={()=>setSelectedRanges([])}>
          Clear All Filters
        </button>
      </div>

      {/* Product List */}
      <ol className="veg-list">
        {vegListItems}
      </ol>

      {/* Pagination */}
      <div className="pagination">
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={currentPage === index + 1 ? 'active-page' : ''}
          >
            {index + 1}
          </button>
        ))}

        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Veg;
