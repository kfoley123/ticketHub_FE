import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaTimesCircle } from 'react-icons/fa';

const Failure = () => {
  const location = useLocation();
  const error = location.state?.error || "An error occurred.";

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="text-center bg-light p-5 rounded shadow" style={{ maxWidth: '500px' }}>
        <FaTimesCircle className="text-danger mb-4" size={60} />
        <h1 className="text-danger mb-3">Purchase Failed</h1>
        <p className="text-secondary">{error}</p>
      </div>
    </div>
  );
};

export default Failure;