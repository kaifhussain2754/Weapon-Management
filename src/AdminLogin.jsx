import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (username === 'admin' && password === 'admin123') {
      console.log('Login successful');
      setError('');
      // Here you can redirect or set a flag for successful login
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-dark">
      <div className="card text-white bg-dark" style={{ maxWidth: '500px', width: '100%' }}>
        <h2 className="card-header text-center">Admin Login</h2>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username" className="text-light">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={{ backgroundColor: '#343a40', color: 'white', borderRadius: '10px', border: '2px solid #ccc', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', padding: '8px' }}
              />
            </div>
            <div className="form-group mt-5">
              <label htmlFor="password" className="text-light">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ backgroundColor: '#343a40', color: 'white', borderRadius: '10px', border: '2px solid #ccc', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', padding: '8px' }}
              />
            </div>
            <div className="text-center"> {/* Centering the button */}
              <button type="submit" className="btn btn-primary mt-5" style={{width: "40%"}}> {/* Removed btn-block */}
                Login
              </button>
            </div>
            {error && <p className="text-danger mt-3">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
