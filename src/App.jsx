import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css'; // Navigation bar styles

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
import { useSelector } from 'react-redux';

// React Icons
import { FaStore} from 'react-icons/fa';
import PageNotFound from './PageNotFound';

function App() {
  let cartObject = useSelector(globalState => globalState.cart);
  let totalCartCount = cartObject.reduce((totalSum, item) => totalSum + item.quantity, 0);

  return (
    <BrowserRouter>
      <nav className="navbar">
        {/* Logo */}
        <div className="logo-container">
          <FaStore className="logo-icon" />
          <span className="logo-name">MyStore</span>
        </div>

        {/* Navigation Links with Icons */}
        <div className="nav-links">
          <Link to="/" className="nav-link">🏠Home</Link>
          <Link to="/veg" className="nav-link"> 🥕Veg</Link>
          <Link to="/nonveg" className="nav-link">🍗Non-Veg</Link>
          <Link to="/milk" className="nav-link"> 🥛Milk</Link>
          <Link to="/chocolate" className="nav-link">🍫Chocolate</Link>
          <Link to="/signing" className="nav-link">🔐Sign In</Link>
          <Link to="/cart" className="nav-link"> 🛒Cart <h4 style={{color:'red'}}>{totalCartCount}</h4></Link>
          <Link to="/orders" className="nav-link">📦Orders</Link>
          <Link to="/aboutus" className="nav-link">ℹ️About Us</Link>
          <Link to="/contactus" className="nav-link">📞Contact Us</Link>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/nonveg" element={<NonVeg />} />
        <Route path="/milk" element={<Milk />} />
        <Route path="/chocolate" element={<Chocolate />} />
        <Route path="/signing" element={<Signing />} />
        <Route path="/cart" element={<CartComponent />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
