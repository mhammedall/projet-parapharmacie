import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Catalogue from "./Pages/Catalogue";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100 bg-light w-100">
        <Header />
        <Navbar />

        {/* ✅ Le main remplit l'écran et a un background clair */}
        <main className="flex-grow-1 w-100 m-0 bg-light">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
