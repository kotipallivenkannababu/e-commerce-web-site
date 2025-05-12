import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Veg.css';
import { AddToCart } from './store';

function Veg() {
  const dispatch = useDispatch();
  const vegProducts = useSelector(state => state.products.veg);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = vegProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(vegProducts.length / productsPerPage);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Veg Products</h1>
      <ol className="veg-list">
        {currentProducts.map((product, index) => (
          <li key={index} className="veg-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
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

export default Veg;
