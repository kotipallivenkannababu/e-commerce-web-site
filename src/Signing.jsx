import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, loginUser, logoutUser } from './store';
import './Signing.css';

function Signing() {
  const dispatch = useDispatch();
  const { user, registeredUsers } = useSelector((state) => state.user);

  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    gender: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setForm({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      gender: '',
    });
    setMessage('');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const matchedUser = registeredUsers.find(
      (u) => u.email === form.email && u.password === form.password
    );
    if (matchedUser) {
      dispatch(loginUser(matchedUser));
      alert('✅ Login successful!');
    } else {
      alert('❌ Invalid email or password.');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword, phone, gender } = form;
    if (password !== confirmPassword) {
      alert('❌ Passwords do not match.');
      return;
    }
    const userExists = registeredUsers.some((u) => u.email === email);
    if (userExists) {
      alert('❌ User already registered.');
      return;
    }
    dispatch(registerUser({ name, email, password, phone, gender }));
    alert('✅ Registered successfully! Please login.');
    setIsLogin(true);
    resetForm();
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    resetForm();
    setIsLogin(true);
  };

  return (
    <div className="container">
      <h2 className="title">
        {user ? 'Welcome to MyShop, ' + user.name : isLogin ? 'Sign In to' : 'Sign Up for'}{' '}
        <span style={{ color: '#3498db' }}>MyShop</span>
      </h2>

      {!user && (
        <form onSubmit={isLogin ? handleLogin : handleRegister} className="form">
          {!isLogin && (
            <>
              <input
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="input"
                required
              />
              <input
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="input"
                required
              />
              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                className="input"
                required
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </>
          )}
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="input"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="input"
            required
          />
          {!isLogin && (
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="input"
              required
            />
          )}
          <button type="submit" className="button">
            {isLogin ? 'Sign In' : 'Register'}
          </button>
          {message && (
            <p className={message.includes('✅') ? 'success' : 'error'}>{message}</p>
          )}
          <p>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <span
              className="toggle-link"
              onClick={() => {
                setIsLogin(!isLogin);
                setMessage('');
              }}
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </span>
          </p>
        </form>
      )}

      {user && (
        <div className="logout-container">
          <button className="logout-button" onClick={handleLogout}>
            🔓 Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Signing;
