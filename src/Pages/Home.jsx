function Home() {
  // Use public folder paths instead of imports
  const categories = [
    { 
      img: "/assets/skincare.avif", 
      title: "Skincare" 
    },
    { 
      img: "/assets/nutrition.png", 
      title: "Nutrition" 
    },
    { 
      img: "/assets/hygiene.jpg", 
      title: "Hygiene" 
    },
    { 
      img: "/assets/baby care.jpg", 
      title: "Baby Care" 
    },
  ];

  return (
    <div className="container py-5">
      {/* HERO SECTION */}
      <section className="text-center mb-5">
        <h2 className="display-4 fw-bold text-primary mb-3">
          Welcome to Parapharmacy Plus
        </h2>
        <p className="lead">
          Your one-stop app for wellness, beauty, and health products. Browse,
          explore, and purchase products easily from the comfort of your home.
        </p>
      </section>

      {/* FEATURES SECTION */}
      <section className="mb-5">
        <h3 className="text-center mb-4 fw-bold text-secondary">
          ✨ Key Features
        </h3>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow-sm h-100 text-center p-3">
              <div className="card-body">
                <h5 className="card-title fw-bold">Wide Catalogue</h5>
                <p className="card-text">
                  Browse a variety of products across skincare, hygiene,
                  nutrition, and baby care categories.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm h-100 text-center p-3">
              <div className="card-body">
                <h5 className="card-title fw-bold">Smart Search</h5>
                <p className="card-text">
                  Find products quickly using our intelligent search bar and
                  filters.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm h-100 text-center p-3">
              <div className="card-body">
                <h5 className="card-title fw-bold">Secure Checkout</h5>
                <p className="card-text">
                  Add items to your cart and checkout safely with a smooth
                  payment process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section>
        <h3 className="text-center mb-4 fw-bold text-secondary">
          🛒 Popular Categories
        </h3>

        <div className="row g-4">
          {categories.map((category, index) => (
            <div className="col-6 col-md-3" key={index}>
              <div className="card h-100 shadow-sm">
                <div
                  style={{
                    height: "200px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={category.img}
                    alt={category.title}
                    className="card-img-top"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f8f9fa'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='14' fill='%236c757d'%3E" + category.title + "%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>

                <div className="card-body text-center">
                  <h5 className="card-title">{category.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;