import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//NEW COMMENT TO TRIGGER NEW WORK FLOW 

export default function App() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    quantity: 0,
    creditCard: "",
    expiry: "",
    securityCode: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "quantity" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // Add API call here 
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Checkout Form</h1>
      <form onSubmit={handleSubmit}>
        
        {/* Name */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Bob Ross"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="user@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        {/* Phone */}
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            placeholder="9025551224"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        {/* Quantity */}
        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">Quantity</label>
          <input
            type="number"
            className="form-control"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>
        {/* Credit Card */}
        <div className="mb-3">
          <label htmlFor="creditCard" className="form-label">Credit Card Number</label>
          <input
            type="text"
            className="form-control"
            id="creditCard"
            name="creditCard"
            placeholder="4242424242424242"
            value={formData.creditCard}
            onChange={handleChange}
            required
          />
        </div>
        {/* Expiry */}
        <div className="mb-3">
          <label htmlFor="expiry" className="form-label">Expiry Date (MM/YY)</label>
          <input
            type="text"
            className="form-control"
            id="expiry"
            name="expiry"
            placeholder="MM/YY"
            value={formData.expiry}
            onChange={handleChange}
            required
          />
        </div>
        {/* Security Code */}
        <div className="mb-3">
          <label htmlFor="securityCode" className="form-label">Security Code</label>
          <input
            type="text"
            className="form-control"
            id="securityCode"
            name="securityCode"
            placeholder="Enter security code"
            value={formData.securityCode}
            onChange={handleChange}
            required
          />
        </div>
        {/* Address */}
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            placeholder="Your address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        {/* City and Province */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="city" className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              id="city"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="province" className="form-label">Province/State</label>
            <input
              type="text"
              className="form-control"
              id="province"
              name="province"
              placeholder="Province/State"
              value={formData.province}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        {/* Postal Code and Country */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="postalCode" className="form-label">Postal Code</label>
            <input
              type="text"
              className="form-control"
              id="postalCode"
              name="postalCode"
              placeholder="Postal Code"
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="country" className="form-label">Country</label>
            <input
              type="text"
              className="form-control"
              id="country"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit Order</button>
      </form>
    </div>
  );
}
