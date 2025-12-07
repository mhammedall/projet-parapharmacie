import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const { email, password, confirmPassword } = formData;

    if (!email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    // Check if user exists
    const existingUser = localStorage.getItem("user");
    if (existingUser) {
      const parsedUser = JSON.parse(existingUser);
      if (parsedUser.email === email) {
        setError("An account with this email already exists.");
        return;
      }
    }

    // Save user
    const user = {
      email,
      password,
      createdAt: new Date().toISOString()
    };

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("loggedIn", "true");
    
    // Redirect to home
    navigate("/");
  };

  return (
    <div className="container py-5">
      {/* Top Navigation */}
      <div className="mb-4">
        <div className="d-flex justify-content-between align-items-center py-2">
          <div className="text-muted small">
            <i className="bi bi-geo-alt me-1"></i>
            ONLINE PARAPHARMACY
          </div>
          <div className="d-flex align-items-center">
            <Link to="/" className="text-decoration-none me-2">
              <i className="bi bi-house me-1"></i>
              Home
            </Link>
            <span className="text-muted mx-2">|</span>
            <span className="ms-2 text-primary fw-semibold">Register</span>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card border-0 shadow-sm rounded-3">
            <div className="card-header bg-white border-0 pt-4 pb-3">
              <h1 className="h4 text-center fw-bold text-dark mb-1">
                I DON'T HAVE AN ACCOUNT, REGISTER
              </h1>
              <p className="text-center text-muted small mb-0">
                Create your parapharmacy account
              </p>
            </div>

            <div className="card-body px-4 px-md-5 py-4">
              <form onSubmit={handleSubmit} noValidate>
                {/* Email */}
                <div className="mb-4">
                  <label className="form-label small fw-semibold text-uppercase mb-2">
                    Enter your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control py-3"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Password */}
                <div className="mb-4">
                  <label className="form-label small fw-semibold text-uppercase mb-2">
                    Enter your password
                  </label>
                    <input
                      type="password"
                      name="password"
                      className="form-control py-3"
                      placeholder="At least 6 characters"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                </div>

                {/* Confirm Password */}
                <div className="mb-4">
                  <label className="form-label small fw-semibold text-uppercase mb-2">
                    Re-enter your password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-control py-3"
                    placeholder="Re-enter your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <div className="alert alert-danger small py-2 mb-4" role="alert">
                    <i className="bi bi-exclamation-circle me-2"></i>
                    {error}
                  </div>
                )}

                {/* Create Account Button */}
                <div className="mb-4">
                  <button type="submit" className="btn btn-success w-100 py-3 fw-bold text-uppercase">
                    CREATE ACCOUNT
                  </button>
                </div>

                {/* Divider */}
                <div className="position-relative text-center my-4">
                  <hr />
                  <span className="bg-white px-3 text-muted position-absolute top-50 start-50 translate-middle small">
                    OR
                  </span>
                </div>

                {/* Facebook Button */}
                <div className="mb-4">
                  <button type="button" className="btn btn-outline-primary w-100 py-3">
                    <i className="bi bi-facebook me-2"></i>
                    Login with Facebook
                  </button>
                </div>

                {/* Login Link */}
                <div className="text-center pt-3">
                  <p className="mb-0 small">
                    Already have an account?{" "}
                    <Link to="/login" className="text-primary fw-bold text-decoration-none">
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="card border-0 shadow-sm mt-4">
            <div className="card-body">
              <h6 className="fw-bold mb-3">
                <i className="bi bi-award text-primary me-2"></i>
                Benefits of Creating an Account
              </h6>
              <ul className="list-unstyled small mb-0">
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Faster checkout with saved information
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Track your order history
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Access to exclusive offers and promotions
                </li>
                <li className="mb-0">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Save products to your wishlist
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}