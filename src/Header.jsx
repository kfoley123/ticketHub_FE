import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTicketAlt, FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const HeaderComponent = () => {
  return (
    <header
      className="header text-white p-5"
      style={{
        width: '100%',
        alignSelf: 'stretch',
        background: 'linear-gradient(135deg, #1f005c, #5b0060, #870160, #ac255e, #ca485c, #e16b5c, #f39060, #ffb56b)',
      }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link to="/" className="d-flex align-items-center text-white text-decoration-none">
          <FaTicketAlt style={{ fontSize: '2em' }} className="me-3" />
          <h1 className="mb-0">TicketHub</h1>
        </Link>
        <div className="d-flex align-items-center">
          <Link to="/#" className="text-white text-decoration-none me-4">
            <FaShoppingCart style={{ fontSize: '1.5em' }} />
          </Link>
          <Link to="/#" className="text-white text-decoration-none">
            <FaUserCircle style={{ fontSize: '1.5em' }} />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
