import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Milk.css';
import { AddToCart } from './store';

function Milk() {
  const dispatch = useDispatch();

  const milkProducts = useSelector(state => state.products.milk);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = milkProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(milkProducts.length / productsPerPage);

  return (
    <div className="milk-container">
      <h1 style={{ textAlign: 'center' }}>Milk Products</h1>
      <ol className="milk-list">
        {currentProducts.map((product, index) => (
          <li key={index} className="milk-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            {/* <p>{product.description}</p> */}
            <button onClick={() => dispatch(AddToCart(product))}>Add to Cart</button>
          </li>
        ))}
      </ol>

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

export default Milk;
