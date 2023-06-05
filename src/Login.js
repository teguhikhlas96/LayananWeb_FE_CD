import React, { useState } from 'react';

const formStyle = {
  width: '400px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  backgroundColor: '#fff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
};

const labelStyle = {
  fontWeight: 'bold',
  marginBottom: '5px',
};

const inputStyle = {
  padding: '8px',
  marginBottom: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const buttonStyle = {
  padding: '10px',
  backgroundColor: '#4caf50',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform further validation or authentication here
    console.log('Login Form Submitted!');
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div style={formStyle}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label style={labelStyle}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
