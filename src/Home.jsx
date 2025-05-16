import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const products = useSelector((state) => state.products);

  const categories = [
    { name: 'Vegetables', key: 'veg', image: '/images/vegetables.jpg' },
    { name: 'Non-Veg', key: 'nonVeg', image: '/images/nonveg.jpg' },
    { name: 'Milk Products', key: 'milk', image: '/images/milkproducts.jpg' },
    { name: 'Chocolates', key: 'chocolate', image: '/images/chocolates.jpg' }
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="main-heading">
          Welcome to <span className="highlight">NaniStore</span>
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
          <h3>💯 Quality Products</h3>
          <p>Only the best brands and freshest items.</p>
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

      {/* Category Cards */}
      
      <section className="category-section">
      <h2 className="categories-heading">Shop by Category</h2>
      <div className="categories-container">
        <div className="category-card">
          <Link to="/Veg">
            <img src="/images/vegetables.jpg" alt="Vegetables" className="category-image" />
            <h3>Vegetables</h3>
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
    </section>

      {/* Marquee Special Offers */}
      <div className="image-scroll-section">
        <h2 className="scroll-header">🔥 Trending Offers</h2>
        <div className="image-scroll-wrapper">
          <div className="scroll-track">
            {[...Array(2)].map((_, repeatIndex) => (
              <>
                <img src="/vegimages/onion.jpg" alt="Offer 1" className="scroll-image" key={`onion-${repeatIndex}`} />
                <img src="/nonVegimages/fishfry.jpg" alt="Offer 2" className="scroll-image" key={`fish-${repeatIndex}`} />
                <img src="/chocolate/ferrero.jpg" alt="Offer 3" className="scroll-image" key={`ferrero-${repeatIndex}`} />
                <img src="/milk/butter.jpg" alt="Offer 4" className="scroll-image" key={`butter-${repeatIndex}`} />
                <img src="/nonVegimages/chicken65.jpg" alt="Offer 5" className="scroll-image" key={`chicken-${repeatIndex}`} />
                <img src="/chocolate/kitkat.jpg" alt="Offer 6" className="scroll-image" key={`kitkat-${repeatIndex}`} />
                <img src="/milk/icecream.jpg" alt="Offer 7" className="scroll-image" key={`icecream-${repeatIndex}`} />
                <img src="/milk/badammilk.jpg" alt="Offer 8" className="scroll-image" key={`milk-${repeatIndex}`} />
                <img src="/vegimages/potato.jpg" alt="Offer 9" className="scroll-image" key={`potato-${repeatIndex}`} />
                <img src="/nonVegimages/chickentikka.jpg" alt="Offer 10" className="scroll-image" key={`eggs-${repeatIndex}`} />
              </>
            ))}
          </div>
        </div>
      </div>

      {/* Product Previews */}
      {categories.map((category) => (
        <div key={category.key} className="category-section">
          <div className="category-header">
            <h2 className="category-title" style={{ color: "red" }}>{category.name}</h2>
          </div>
          <div className="product-grid">
            {products[category.key]?.slice(0, 10).map((item, index) => (
              <div key={index} className="product-card">
                <img src={item.image} alt={item.name} className="product-image" />
                <h4 className="product-name">{item.name}</h4>
                <p className="product-description">{item.description}</p>
              </div>
            ))}
          </div>

        </div>
      ))}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} <strong>NaniStore</strong>. All rights reserved.</p>
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
