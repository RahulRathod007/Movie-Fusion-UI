import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import loginBackground from '../assets/bg.jpeg'; // Import the image
function Register() {
  const [user, setUser] = useState({ user_name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await axios.post('http://localhost:8080/api/auth/register', user);
      alert('Registration successful!');
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <>
    <div style={{
      backgroundImage: `url(${loginBackground})`, // Use the imported image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <div
      className="container mt-5 d-flex justify-content-center align-items-center"
      style={{
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        className="card p-4 shadow-lg"
        style={{
          maxWidth: '400px',
          width: '100%',
          borderRadius: '10px',
          backgroundColor: 'rgba(71, 69, 69, 0.52)',
          padding: '1.5rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2
          className="text-center mb-4"
          style={{
            color: 'white',
            textAlign: 'center',
            marginBottom: '1rem',
          }}
        >
          Register
        </h2>
        <form onSubmit={handleRegister}>
          {error && (
            <div
              className="alert alert-danger"
              style={{
                color: '#721c24',
                backgroundColor: '#f8d7da',
                borderColor: '#f5c6cb',
                padding: '0.75rem 1.25rem',
                marginBottom: '1rem',
                borderRadius: '0.25rem',
              }}
            >
              {error}
            </div>
          )}
          <div className="mb-3" style={{ marginBottom: '1rem' }}>
            <input
              type="text"
              name="user_name"
              className="form-control"
              placeholder="Username"
              value={user.user_name}
              onChange={handleInputChange}
              style={{
                borderRadius: '5px',
                padding: '0.5rem',
                width: '100%',
                border: '1px solid #ced4da',
              }}
            />
          </div>
          <div className="mb-3" style={{ marginBottom: '1rem' }}>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              value={user.email}
              onChange={handleInputChange}
              style={{
                borderRadius: '5px',
                padding: '0.5rem',
                width: '100%',
                border: '1px solid #ced4da',
              }}
            />
          </div>
          <div className="mb-3" style={{ marginBottom: '1rem' }}>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              value={user.password}
              onChange={handleInputChange}
              style={{
                borderRadius: '5px',
                padding: '0.5rem',
                width: '100%',
                border: '1px solid #ced4da',
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-success w-100"
            style={{
              borderRadius: '5px',
              padding: '0.5rem',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Register
          </button>
          <p
            className="mt-3 text-center text-white"
            style={{
              marginTop: '1rem',
              textAlign: 'center',
              color: 'white',
            }}
          >
            Already have an account?{' '}
            <Link
              to="/"
              style={{
                color: '#28a745',
                textDecoration: 'none',
              }}
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
    </div>
  </>
  );
}

export default Register;
