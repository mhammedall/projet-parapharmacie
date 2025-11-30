import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100 px-3">
      {/* Brand with logo */}
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
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;