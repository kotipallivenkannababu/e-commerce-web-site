import React from 'react';
import './AboutUs.css';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLeaf,
  FaCheese,
  FaFish,
  FaShoppingCart,
  FaBreadSlice,
  FaTruck,
} from 'react-icons/fa';

function AboutUs() {
  const categories = [
    { icon: <FaLeaf />, title: 'Fresh Vegetables' },
    { icon: <FaCheese />, title: 'Milk Products' },
    { icon: <FaFish />, title: 'Meat & Seafood' },
    { icon: <FaShoppingCart />, title: 'Chocolates ' },
    { icon: <FaBreadSlice />, title: 'Bakery & Beverages' },
    { icon: <FaTruck />, title: 'Fast Delivery' },
  ];

  return (
    <div className="aboutus-wrapper">
      <section className="aboutus-hero">
        <h1>About <span className="highlight">NaniStore</span></h1>
        <p>
          At NaniStore, we are redefining the way you shop for groceries by offering freshness,
          quality, and convenience all in one place. With a wide range of categories from
          farm-fresh produce to premium chocolates, we ensure only the best reaches your table.
        </p>
      </section>

      <section className="aboutus-founder">
        <h2>Meet Our Founder</h2>
        <p>
          <strong>Ratan Sir</strong>, the visionary behind myStore, started this platform with a mission to transform
          the traditional grocery experience into something smarter, faster, and more reliable.
        </p>
        <ul>
          <li>🚀 15+ years of experience in food logistics and supply chain innovation</li>
          <li>🌿 Passionate about supporting local farmers and sustainable sourcing</li>
          <li>💡 Believes in tech-driven solutions to everyday problems</li>
          <li>👨‍👩‍👧‍👦 Built myStore with a customer-first mindset and a focus on quality service</li>
        </ul>
      </section>

      <section className="categories">
        <h2 className="categories-title">Our Product Categories</h2>
        <div className="categories-grid">
          {categories.map((item, index) => (
            <div key={index} className="category-card">
              <div className="category-icon">{item.icon}</div>
              <h3 className="category-title">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="aboutus-values">
        <h2>Our Mission</h2>
        <p>
          To deliver high-quality groceries and essentials at affordable prices,
          while supporting local communities and promoting healthy lifestyles.
        </p>

        <h2>Why Choose NaniStore?</h2>
        <ul>
          <li>✅ Handpicked, fresh, and quality-assured products</li>
          <li>✅ Transparent pricing with no hidden costs</li>
          <li>✅ Fast delivery and easy returns</li>
          <li>✅ Tech-enabled tracking and personalized shopping</li>
          <li>✅ Dedicated to eco-friendly packaging and sustainability</li>
        </ul>
      </section>

      <section className="aboutus-social">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
        </div>
      </section>

      <footer className="aboutus-footer">
        <p>© 2025 NaniStore. Inspired by excellence. Built by vision.</p>
      </footer>
    </div>
  );
}

export default AboutUs;
