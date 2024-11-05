// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Send login request to backend
//     fetch('http://localhost:4000/api/users/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password }),
//       credentials: 'include',
//     })
//     .then(res => res.json())
//     .then(data => {
//       if (data.success) {
//         // Redirect to home page after successful login
//         navigate('/');
//       } else {
//         alert(data.message || 'Login failed');
//       }
//     })
//     .catch(error => {
//       console.error('Error logging in:', error);
//       alert('An error occurred during login');
//     });
//   };

//   return (
//     <div className="container mt-4">
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">Email address</label>
//           <input 
//             type="email" 
//             className="form-control" 
//             id="email" 
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required 
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">Password</label>
//           <input 
//             type="password" 
//             className="form-control" 
//             id="password" 
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required 
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;


// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './style.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:4000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
      credentials: 'include',
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        navigate('/'); // Redirect to home page after successful login
      } else {
        setMessage(data.message || 'Login failed');
      }
    })
    .catch(error => {
      console.error('Error logging in:', error);
      setMessage('An error occurred during login');
    });
  };

  return (
    <div className="auth-container">
      <h1>Login</h1>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>
        <button type="submit" className="stylish-button">Login</button>
      </form>
      <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
    </div>
  );
}

export default Login;
