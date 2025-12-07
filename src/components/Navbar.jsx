import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);

  // Check login status on load
  useEffect(() => {
    const isLogged = localStorage.getItem("loggedIn") === "true";
    setLoggedIn(isLogged);
  }, []);

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    setLoggedIn(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100 px-3">
      <NavLink to="/" className="navbar-brand d-flex align-items-center">
        Parapharmacy Plus
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#menu"
        aria-controls="menu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="menu">
        <ul className="navbar-nav ms-auto">
          {/* Home */}
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                "nav-link " + (isActive ? "text-white fw-bold" : "")
              }
            >
              Home
            </NavLink>
          </li>

          {/* Catalogue */}
          <li className="nav-item">
            <NavLink
              to="/catalogue"
              className={({ isActive }) =>
                "nav-link " + (isActive ? "text-white fw-bold" : "")
              }
            >
              Catalogue
            </NavLink>
          </li>

          {/* About */}
          <li className="nav-item">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                "nav-link " + (isActive ? "text-white fw-bold" : "")
              }
            >
              About
            </NavLink>
          </li>

          {/* Contact */}
          <li className="nav-item">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                "nav-link " + (isActive ? "text-white fw-bold" : "")
              }
            >
              Contact
            </NavLink>
          </li>

          {/* 🔐 Login / My Account */}
          {!loggedIn ? (
            <li className="nav-item">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  "nav-link " + (isActive ? "text-white fw-bold" : "")
                }
              >
                Login
              </NavLink>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <NavLink
                  to="/account"
                  className={({ isActive }) =>
                    "nav-link " + (isActive ? "text-white fw-bold" : "")
                  }
                >
                  My Account
                </NavLink>
              </li>

              <li className="nav-item">
                <button
                  onClick={handleLogout}
                  className="btn btn-danger ms-2"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;