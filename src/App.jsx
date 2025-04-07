import { useForm } from "react-hook-form";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import concertImage from './assets/concert.jpg';

export default function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Submitted Data:", data);
    try {
      const response = await axios.post(
        "https://nscc-w0468992-tickethub-b4ahhzcthmajgwf9.canadacentral-01.azurewebsites.net/api/TicketPurchases",
        {
          ...data,
          quantity: parseInt(data.quantity),
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("Success:", response.data);
      alert("Ticket Purchase Successful!");
      reset(); // Clears the form
      // TODO: Navigate to a success page if needed
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="container my-5 p-5 rounded-4">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-10">
          <div className="card flex-row shadow-lg border-0 overflow-hidden" style={{ borderRadius: '20px' }}>
            <div className="col-md-6 d-none d-md-block" style={{ backgroundColor: '#000' }}>
              <img
                src={concertImage}
                alt="Concert"
                className="img-fluid h-100 w-100 object-fit-cover"
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div className="col-md-6 p-4">
              <h2 className="fw-bold text-center mb-3" style={{ color: '#6c3483' }}>Payment Details</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label className="form-label">Quantity</label>
                    <input
                      type="number"
                      defaultValue={1}
                      className={`form-control ${errors.quantity ? 'is-invalid' : ''}`}
                      min="1"
                      {...register("quantity", {
                        required: "Quantity is required",
                        min: {
                          value: 1,
                          message: "Quantity must be at least 1",
                        },
                      })}
                    />
                    {errors.quantity && (
                      <span className="text-danger">{errors.quantity.message}</span>
                    )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="form-control"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && <span className="text-danger">{errors.name.message}</span>}
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="form-control"
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && <span className="text-danger">{errors.email.message}</span>}
                </div>

                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="phone number"
                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^\d{10}$/,
                        message: "Phone number must be exactly 10 digits",
                      },
                    })}
                  />
                  {errors.phone && <span className="text-danger">{errors.phone.message}</span>}
                </div>

                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    placeholder="Enter your address"
                    className="form-control"
                    {...register("address", { required: "Address is required" })}
                  />
                  {errors.phone && <span className="text-danger">{errors.address.message}</span>}
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">City</label>
                    <input
                      type="text"
                      placeholder="City"
                      className="form-control"
                      {...register("city", { required: "City is required" })}
                    />
                    {errors.city && <span className="text-danger">{errors.city.message}</span>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Province/State</label>
                    <input
                      type="text"
                      placeholder="Province/State"
                      className="form-control"
                      {...register("province", { required: "Province/State is required" })}
                    />
                    {errors.province && <span className="text-danger">{errors.province.message}</span>}
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Postal Code</label>
                    <input
                      type="text"
                      placeholder="PostalCode"
                      className="form-control"
                      {...register("postalCode", { required: "postal code is required" })}
                    />
                    {errors.country && <span className="text-danger">{errors.country.message}</span>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Country</label>
                    <input
                      type="text"
                      placeholder="Country"
                      className="form-control"
                      {...register("country", { required: "country is required" })}
                    />
                    {errors.country && <span className="text-danger">{errors.country.message}</span>}
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Credit Card Number</label>
                  <input
                    type="text"
                    placeholder="Enter your card number"
                    className="form-control"
                    {...register("creditCard", {
                      required: "Please enter a valid card number",
                      pattern: /^\d{16}$/,
                    })}
                  />
                  {errors.creditCard && <span className="text-danger">{errors.creditCard.message}</span>}
                </div>

                <div className="mb-3">
                  <label className="form-label">Expiry Date (MM/YY)</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("expiry", {
                      required: true,
                      pattern: /^(0[1-9]|1[0-2])\/\d{2}$/,
                    })}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Security Code</label>
                  <input
                    type="text"
                    placeholder="Enter your security code"
                    className={`form-control ${errors.securityCode ? 'is-invalid' : ''}`}
                    maxLength={4}
                    {...register("securityCode", {
                      required: "Security code is required",
                      maxLength: {
                        value: 4,
                        message: "Security code cannot be more than 4 digits",
                      },
                    })}
                  />
                  {errors.SecurityCode && <span className="text-danger">{errors.SecurityCode.message}</span>}
                </div>

                <button
                  type="submit"
                  className="btn w-100 mt-3 text-white"
                  style={{
                    background: 'linear-gradient(to right, #8e44ad, #1abc9c)',
                    border: 'none',
                    borderRadius: '25px'
                  }}
                >
                  CheckOut
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
