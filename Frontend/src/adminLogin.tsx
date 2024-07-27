// src/Pages/AdminPanelLogin.tsx
import React, { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPanelLogin: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin123') {
      navigate('/admin/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f8ff',
  };

  const inputStyle = {
    margin: '10px 0',
    padding: '10px',
    borderRadius: '5px',
    border: '2px solid #008080',
    width: '250px',
    outline: 'none',
  };

  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#008080',
    color: 'white',
    cursor: 'pointer',
  };

  const headingStyle = {
    color: '#008080',
    fontFamily: 'Arial, sans-serif',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Admin Panel Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={handleUsernameChange}
        style={inputStyle}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
        style={inputStyle}
      />
      <button onClick={handleLogin} style={buttonStyle}>Login</button>
    </div>
  );
};

export default AdminPanelLogin;
