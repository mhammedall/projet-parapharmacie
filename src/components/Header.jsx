function Header() {
  return (
    <header className="bg-primary text-white py-3 w-100">
      <div className="container d-flex align-items-center justify-content-center">
        {/* Logo - using public folder path */}
        <img
          src="/assets/Logo.png" // ← using public folder path
          alt="Parapharmacy Plus Logo"
          style={{ height: "50px" }}
          className="me-3"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        <h1 className="h3 mb-0">PARAPHARMACY PLUS</h1>
      </div>
    </header>
  );
}

export default Header;