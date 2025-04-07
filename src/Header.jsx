import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTicketAlt } from 'react-icons/fa';


const HeaderComponent = () => {
  return (
    <header className="header text-white py-5" style={{
        width: '100%',
        alignSelf: 'stretch',
        background: 'linear-gradient(135deg, #1f005c, #5b0060, #870160, #ac255e, #ca485c, #e16b5c, #f39060, #ffb56b)',
      }}>
      <div className="container-fluid d-flex align-items-center">
      <FaTicketAlt style={{ fontSize: '2em' }} className="me-3" />
        <h1 className="mb-0">TicketHub Checkout</h1>
      </div>
    </header>
  );
}

export default HeaderComponent;
