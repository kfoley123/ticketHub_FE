import react from 'react';
import { FaTicketAlt } from 'react-icons/fa';

const Success = () => {
    return (
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="text-center bg-light p-5 rounded shadow" style={{ maxWidth: '500px' }}>
          <FaTicketAlt className="text-success mb-4" size={60} />
          <h1 className="text-success mb-3">Purchase Successful!</h1>
          <p className="text-secondary">Your ticket has been booked! Check your email for confirmation.</p>
        </div>
    </div>
    );
  };
  
  export default Success;