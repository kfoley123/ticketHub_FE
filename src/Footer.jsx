import { FaTicketAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
          <FaTicketAlt style={{ fontSize: '2em' }} />
            <h5>TicketHub</h5>
            <p>Your go-to platform for discovering and purchasing concert tickets with ease.</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#" className="text-white text-decoration-none">Events</a></li>
              <li><a href="#" className="text-white text-decoration-none">Support</a></li>
              <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <p>Email: support@tickethub.com<br />Phone: +1 (555) 123-4567</p>
          </div>
        </div>
        <hr className="border-light" />
        <div className="text-center">
          <small>&copy; TicketHub {year}. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
