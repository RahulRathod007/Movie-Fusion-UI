import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './LandingPage.css'; // Custom styling

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page d-flex align-items-center justify-content-center">
      <div className="text-center text-white">
        <p className="display-4 fw-bold">Welcome to MovieFusion</p>
        <p className="lead mb-4">Discover, rate, and get personalized movie recommendations.</p>
        <div>
          <button className="btn btn-primary me-3" onClick={() => navigate('/login')}>Login</button>
          <button className="btn btn-outline-light" onClick={() => navigate('/register')}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
