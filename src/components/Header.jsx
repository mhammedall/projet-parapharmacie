function Header() {
  // Fallback text in case image doesn't load
  const handleImageError = (e) => {
    console.warn("Logo image failed to load, showing text fallback");
    e.target.style.display = 'none';
    // Show text fallback
    const fallbackElement = document.querySelector('.logo-fallback');
    if (fallbackElement) {
      fallbackElement.style.display = 'block';
    }
  };

  return (
    <header className="bg-primary text-white py-3 w-100">
      <div className="container d-flex align-items-center justify-content-center">
        {/* Logo Image */}
        <div className="d-flex align-items-center position-relative">
          <img
            src="/assets/Logo.png"
            alt="Parapharmacy Plus Logo"
            style={{ 
              height: "70px", 
              objectFit: "contain",
              maxWidth: "100%"
            }}
            className="me-0"
            onError={handleImageError}
          />
          
          {/* Text Fallback - Hidden by default, shown if image fails */}
          <div 
            className="logo-fallback text-center ms-3" 
            style={{ display: 'none' }}
          >
            <h1 className="h2 mb-0 fw-bold" style={{ lineHeight: '1.1' }}>
              PARAPHARMACY
            </h1>
            <h2 className="h4 mb-0 fw-bold" style={{ lineHeight: '1.1' }}>
              PLUS
            </h2>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;