import React, { useState } from 'react';

function Signing() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    if (email === 'venky' && password === 'Nani@1509') {
      setMessage('✅ Login successful!');
    } else {
      setMessage('❌ Invalid username or password.');
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Sign In to <span style={{ color: '#3498db' }}>MyShop</span></h2>
      <form onSubmit={handleSignIn} style={formStyle}>
        <input
          type="text"
          placeholder="Username"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Sign In</button>
        {message && <p style={message.includes('✅') ? successText : errorText}>{message}</p>}
      </form>
    </div>
  );
}

const containerStyle = {
  padding: '60px 20px',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f2f2f2',
  minHeight: '100vh',
  textAlign: 'center',
};

const titleStyle = {
  fontSize: '32px',
  marginBottom: '20px',
  color: '#2c3e50',
};

const formStyle = {
  maxWidth: '400px',
  margin: '0 auto',
  backgroundColor: '#fff',
  padding: '30px',
  borderRadius: '8px',
  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  margin: '10px 0',
  borderRadius: '5px',
  border: '1px solid #ccc',
  fontSize: '16px',
};

const buttonStyle = {
  width: '100%',
  padding: '12px',
  backgroundColor: '#3498db',
  color: 'white',
  fontSize: '16px',
  fontWeight: 'bold',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const successText = {
  color: 'green',
  marginTop: '15px',
};

const errorText = {
  color: 'red',
  marginTop: '15px',
};

export default Signing;
