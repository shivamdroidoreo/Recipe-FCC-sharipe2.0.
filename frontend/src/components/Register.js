// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Register() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check if passwords match
//     if (password !== confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:4000/api/users/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await response.json();

//       if (data.success) {
//         navigate('/login'); // Redirect to login page after successful registration
//       } else {
//         setError(data.message || 'Registration failed');
//       }
//     } catch (err) {
//       console.error("Error registering:", err);
//       setError("An error occurred during registration");
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h1>Register</h1>
//       {error && <p className="text-danger">{error}</p>}
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
//         <div className="mb-3">
//           <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
//           <input 
//             type="password" 
//             className="form-control" 
//             id="confirmPassword" 
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required 
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">Register</button>
//       </form>
//     </div>
//   );
// }

// export default Register;
    

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'; // Import the new style file

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (data.success) {
        // Redirect to home page after successful registration
        navigate('/');
      } else if (data.message === 'User already exists') {
        setError('User already exists. Please log in.');
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (err) {
      console.error("Error registering:", err);
      setError("An error occurred during registration");
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      {error && <p className="message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />
        <input 
          type="password" 
          placeholder="Confirm Password" 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required 
        />
        <button type="submit" className="stylish-button">Sign Up</button>
      </form>
      <p className="link" onClick={() => navigate('/login')}>Already have an account? Login</p>
    </div>
  );
}

export default Register;
