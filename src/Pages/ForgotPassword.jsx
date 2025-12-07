import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    if (!email) {
      setError("Please enter your email address.");
      setLoading(false);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Check if user exists
      const savedUser = JSON.parse(localStorage.getItem("user"));
      
      if (!savedUser) {
        setError("No account found with this email address.");
        setLoading(false);
        return;
      }

      if (savedUser.email === email) {
        setSuccess(`Password reset instructions have been sent to ${email}`);
        setEmail("");
        
        // Auto-redirect after 5 seconds
        setTimeout(() => {
          navigate("/login");
        }, 5000);
      } else {
        setError("No account found with this email address.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
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
            <Link to="/login" className="text-decoration-none me-2">
              Login
            </Link>
            <span className="text-muted mx-2">|</span>
            <span className="ms-2 text-primary fw-semibold">Forgot Password</span>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card border-0 shadow-sm rounded-3">
            <div className="card-header bg-white border-0 pt-4 pb-3">
              <div className="text-center">
                <i className="bi bi-key-fill text-primary display-6 mb-3"></i>
                <h1 className="h4 text-center fw-bold text-dark mb-1">
                  FORGOT YOUR PASSWORD?
                </h1>
                <p className="text-center text-muted small mb-0">
                  Enter your email to reset your password
                </p>
              </div>
            </div>

            <div className="card-body px-4 px-md-5 py-4">
              <form onSubmit={handleSubmit} noValidate>
                {/* Instructions */}
                <div className="alert alert-info small mb-4">
                  <i className="bi bi-info-circle me-2"></i>
                  Enter the email address associated with your account and we'll send you instructions to reset your password.
                </div>

                {/* Email Field */}
                <div className="mb-4">
                  <label className="form-label small fw-semibold text-uppercase mb-2">
                    <i className="bi bi-envelope me-2"></i>
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control py-3"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading}
                  />
                  <small className="text-muted mt-1 d-block">
                    Enter the email you used when you created your account
                  </small>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="alert alert-danger small py-2 mb-4" role="alert">
                    <i className="bi bi-exclamation-circle me-2"></i>
                    {error}
                  </div>
                )}

                {/* Success Message */}
                {success && (
                  <div className="alert alert-success small py-2 mb-4" role="alert">
                    <i className="bi bi-check-circle me-2"></i>
                    {success}
                    <div className="mt-2">
                      <small>You will be redirected to login in 5 seconds...</small>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <div className="mb-4">
                  <button 
                    type="submit" 
                    className="btn btn-primary w-100 py-3 fw-bold text-uppercase"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        SENDING...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-send me-2"></i>
                        SEND RESET INSTRUCTIONS
                      </>
                    )}
                  </button>
                </div>

                {/* Back to Login */}
                <div className="text-center pt-3">
                  <p className="mb-0 small">
                    Remember your password?{" "}
                    <Link to="/login" className="text-primary fw-bold text-decoration-none">
                      Back to Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>

            {/* Card Footer */}
            <div className="card-footer bg-light border-0 py-3">
              <div className="text-center">
                <small className="text-muted">
                  <i className="bi bi-shield-check me-1"></i>
                  Your email is safe with us. We'll never share it with anyone.
                </small>
              </div>
            </div>
          </div>

          {/* Help Section */}
          <div className="card border-0 shadow-sm mt-4">
            <div className="card-body">
              <h6 className="fw-bold mb-3">
                <i className="bi bi-question-circle text-primary me-2"></i>
                Need Help?
              </h6>
              <ul className="list-unstyled small mb-0">
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Check your spam folder if you don't receive an email
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Make sure you're entering the email you used to register
                </li>
                <li className="mb-0">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Still having issues? Contact support at support@parapharmacy.tn
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}