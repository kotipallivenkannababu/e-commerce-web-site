import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const products = useSelector((state) => state.products);

  // Interleave products across categories
  const interleaveProducts = (productObj) => {
    const categories = ['veg', 'nonVeg', 'milk', 'chocolate'];
    const arrays = categories.map(cat => productObj[cat] || []);
    const maxLength = Math.max(...arrays.map(arr => arr.length));

    const interleaved = [];
    for (let i = 0; i < maxLength; i++) {
      for (let j = 0; j < arrays.length; j++) {
        if (arrays[j][i]) {
          interleaved.push(arrays[j][i]);
        }
      }
    }
    return interleaved;
  };

  return (
    <div className="container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="main-heading">
          Welcome to <span className="highlight">myStore</span>
        </h1>
        <p className="sub-text">
          Your trusted destination for groceries, essentials, and everyday products at the best prices!
        </p>
      </div>

      {/* Features */}
      <div className="features-container">
        <div className="feature-card">
          <h3>🚚 Fast Delivery</h3>
          <p>Same-day delivery available in major cities.</p>
        </div>
        <div className="feature-card">
          <h3>🛒 Huge Selection</h3>
          <p>Thousands of products across multiple categories.</p>
        </div>
        <div className="feature-card">
          <h3>💳 Secure Payments</h3>
          <p>Multiple payment options with SSL encryption.</p>
        </div>
      </div>

      {/* Category Navigation */}
      <h2 className="categories-heading">Shop by Category</h2>
      <div className="categories-container">
        <div className="category-card">
          <Link to="/Veg">
            <img src="/images/vegetables.jpg" alt="Vegetables" className="category-image" />
            <h3>Vegetable</h3>
          </Link>
        </div>
        <div className="category-card">
          <Link to="/NonVeg">
            <img src="/images/nonveg.jpg" alt="Non-Veg" className="category-image" />
            <h3>Non-Veg</h3>
          </Link>
        </div>
        <div className="category-card">
          <Link to="/Milk">
            <img src="/images/milkproducts.jpg" alt="Milk" className="category-image" />
            <h3>Milk</h3>
          </Link>
        </div>
        <div className="category-card">
          <Link to="/Chocolate">
            <img src="/images/chocolates.jpg" alt="Chocolate" className="category-image" />
            <h3>Chocolates</h3>
          </Link>
        </div>
      </div>

      {/* Interleaved Products */}
      <h2 className="categories-heading">All Products</h2>
      <div className="products-grid">
        {interleaveProducts(products).map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Scrollable Special Offers */}
      <h2 className="scroll-heading">Special Offers</h2>
      <div className="scroll-image-container">
        <img src="/vegimages/onion.jpg" alt="Offer 1" className="scroll-image" />
        <img src="/nonVegimages/fishfry.jpg" alt="Offer 2" className="scroll-image" />
        <img src="/chocolate/ferrero.jpg" alt="Offer 3" className="scroll-image" />
        <img src="/milk/butter.jpg" alt="Offer 4" className="scroll-image" />
        <img src="/nonVegimages/chicken65.jpg" alt="Offer 5" className="scroll-image" />
        <img src="/chocolate/kitkat.jpg" alt="Offer 6" className="scroll-image" />
        <img src="/milk/icecream.jpg" alt="Offer 7" className="scroll-image" />
        <img src="/milk/icecream.jpg" alt="Offer 7" className="scroll-image" />
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} <strong>myStore</strong>. All rights reserved.</p>
          <p>
            <a href="/terms" className="footer-link">Terms of Service</a> | 
            <a href="/privacy" className="footer-link"> Privacy Policy</a>
          </p>
          <p>Designed & Developed by Kotipalli Venkanna Babu</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
