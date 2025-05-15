import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css'; // Navigation bar styles

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Home from './Home';
import Veg from './Veg';
import NonVeg from './NonVeg';
import Milk from './Milk';
import Chocolate from './Chocolate';
import Signing from './Signing';
import Orders from './Orders';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import CartComponent from './CartComponent';
import PageNotFound from './PageNotFound';
import SignupForm from './SignUp';
import { logoutUser } from './store';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartObject = useSelector(globalState => globalState.cart);
  const totalCartCount = cartObject.reduce((totalSum, item) => totalSum + item.quantity, 0);

  const isAuthenticated = useSelector((state) => state.users.isAuthenticated);
  const currentUser = useSelector((state) => state.users.currentUser);
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <nav className="navbar">
        {/* Hamburger icon for mobile */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Logo */}
        <div className="logo-container">
          <span className="logo-name">🛍️MyStore</span>
        </div>

        {/* Navigation links */}
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>🏠Home</Link>
          <Link to="/veg" className="nav-link" onClick={() => setMenuOpen(false)}>🥕Veg</Link>
          <Link to="/nonveg" className="nav-link" onClick={() => setMenuOpen(false)}>🍗Non-Veg</Link>
          <Link to="/milk" className="nav-link" onClick={() => setMenuOpen(false)}>🥛Milk</Link>
          <Link to="/chocolate" className="nav-link" onClick={() => setMenuOpen(false)}>🍫Chocolate</Link>
          <Link to="/cart" className="nav-link" onClick={() => setMenuOpen(false)}>
            🛒Cart <span style={{ color: 'red' }}>{totalCartCount}</span>
          </Link>
          <Link to="/orders" className="nav-link" onClick={() => setMenuOpen(false)}>📦Orders</Link>
          <Link to="/aboutus" className="nav-link" onClick={() => setMenuOpen(false)}>ℹ️About Us</Link>
          <Link to="/contactus" className="nav-link" onClick={() => setMenuOpen(false)}>📞Contact Us</Link>

          {/* SignIn or Logout */}
          {isAuthenticated ? (
            <>
              <span className="nav-link">👋 {currentUser.username}</span>
              <button className="nav-link logout-btn" onClick={() => dispatch(logoutUser())}>
                🚪Logout
              </button>
            </>
          ) : (
            <Link to="/signing" className="nav-link" onClick={() => setMenuOpen(false)}>
              🔐Sign In
            </Link>
          )}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/nonveg" element={<NonVeg />} />
        <Route path="/milk" element={<Milk />} />
        <Route path="/chocolate" element={<Chocolate />} />
        <Route path="/signing" element={<Signing />} />
        <Route path="/cart" element={<CartComponent />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
