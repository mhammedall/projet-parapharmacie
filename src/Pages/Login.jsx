//les imports
//pour gere l'etat
import { useState } from "react";
// usenavigate pour deriger a une autre page
//link to create a link between pages sans faire reload
import { Link, useNavigate } from "react-router-dom";
// fonction login
export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
//mettre a jour the changes 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  //quand on click login

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
//verifie si email and password are filled
    const { email, password } = formData;

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Check localStorage for user if the user has an account or needs to register first 
    const savedUser = JSON.parse(localStorage.getItem("user"));
    
    if (!savedUser) {
      setError("No account found. Please register first.");
      return;
    }
// chack if email and password are valid 
    if (email === savedUser.email && password === savedUser.password) {
      localStorage.setItem("loggedIn", "true");
      navigate("/");
    } else {
      setError("Invalid email or password.");
    }
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
            <span className="ms-2 text-primary fw-semibold">Login</span>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card border-0 shadow-sm rounded-3">
            <div className="card-header bg-white border-0 pt-4 pb-3">
              <h1 className="h4 text-center fw-bold text-dark mb-1">
                LOGIN TO YOUR ACCOUNT
              </h1>
              <p className="text-center text-muted small mb-0">
                Access your parapharmacy account
              </p>
            </div>
             {/*le formulaire*/}
            <div className="card-body px-4 px-md-5 py-4">
              <form onSubmit={handleSubmit}>
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
                    placeholder="Your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Forgot Password Link */}
                <div className="mb-4 text-end">
                  <Link to="/forgot-password" className="text-decoration-none small text-primary">
                    Forgot password?
                  </Link>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="alert alert-danger small py-2 mb-4" role="alert">
                    <i className="bi bi-exclamation-circle me-2"></i>
                    {error}
                  </div>
                )}

                {/* Login Button */}
                <div className="mb-4">
                  <button type="submit" className="btn btn-primary w-100 py-3 fw-bold text-uppercase">
                    LOGIN
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

                {/* Register Link */}
                <div className="text-center pt-3">
                  <p className="mb-0 small">
                    Not a member yet?{" "}
                   {/*lien vers register*/}
                    <Link to="/register" className="text-primary fw-bold text-decoration-none">
                      Create an account
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Security Features */}
          <div className="row mt-4 g-3">
            <div className="col-md-4">
              <div className="d-flex align-items-center justify-content-center p-3 border rounded">
                <i className="bi bi-shield-check text-primary fs-4 me-2"></i>
                <div>
                  <h6 className="mb-0 fw-bold small">Secure Payment</h6>
                  <small className="text-muted">SSL Encrypted</small>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex align-items-center justify-content-center p-3 border rounded">
                <i className="bi bi-truck text-primary fs-4 me-2"></i>
                <div>
                  <h6 className="mb-0 fw-bold small">Fast Delivery</h6>
                  <small className="text-muted">24-48h</small>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex align-items-center justify-content-center p-3 border rounded">
                <i className="bi bi-headset text-primary fs-4 me-2"></i>
                <div>
                  <h6 className="mb-0 fw-bold small">Support</h6>
                  <small className="text-muted">7/7</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}