import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Chocolate.css'; // Ensure this file exists and is styled properly
import { AddToCart } from './store'; // ✅ Import AddToCart action

function Chocolate() {
  const dispatch = useDispatch(); // Initialize useDispatch

  // Access chocolate products from Redux store
  const chocolateProducts = useSelector(globalState => globalState.products.chocolate);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = chocolateProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(chocolateProducts.length / productsPerPage);

  return (
    <div className="chocolate-container">
      <h1 style={{ textAlign: 'center' }}>Chocolate Products</h1>
      <ol className="chocolate-list">
        {/* Displaying only the current page products */}
        {currentProducts.map((product, index) => (
          <li key={index} className="chocolate-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            {/* <p>{product.description}</p> */}
            <button onClick={() => dispatch(AddToCart(product))}>Add to Cart</button>
          </li>
        ))}
      </ol>

      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>

        {/* Dynamic pagination buttons */}
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

export default Chocolate;
