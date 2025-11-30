import skincareImg from "../assets/skincare.avif";
import nutritionImg from "../assets/nutrition.png";
import hygieneImg from "../assets/hygiene.jpg";
import babycareImg from "../assets/baby care.jpg";
import { useCart } from '../components/CartContext';
function Home() {
    const { cart, addToCart } = useCart(); // access cart context
  const handleAddTest = () => {
    addToCart({ id: 1, name: "Test Product", price: 10 });
  };
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
      {/* CATEGORIES SECTION */}
      <section>
        <h3 className="text-center mb-4 fw-bold text-secondary">
          🛒 Popular Categories
        </h3>

        <div className="row g-4">
          {[
            { img: skincareImg, title: "Skincare" },
            { img: nutritionImg, title: "Nutrition" },
            { img: hygieneImg, title: "Hygiene" },
            { img: babycareImg, title: "Baby Care" },
          ].map((category, index) => (
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
