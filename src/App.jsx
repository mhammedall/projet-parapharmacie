import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./Pages/Login";
import Register from "./Pages/register";
import Home from "./Pages/Home";
<<<<<<< HEAD
import Catalogue from "./Pages/Catalogue";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
<<<<<<< HEAD
import ProductDetails from "./Pages/ProductDetails";
=======
import ForgotPassword from "./Pages/ForgotPassword"; // Add this import
>>>>>>> lina2

=======
import { CartProvider } from './components/CartContext';
import Notification from './components/Notification';
import Cart from './Pages/Cart';
>>>>>>> yosser4
function App() {
  return (
<<<<<<< HEAD
    <CartProvider>
      <Router>
        <div className="d-flex flex-column min-vh-100 bg-light w-100">
          
          {/* Global UI */}
          <Notification />
          <Header />
          <Navbar />

<<<<<<< HEAD
        {/* ✅ Le main remplit l'écran et a un background clair */}
        <main className="flex-grow-1 w-100 m-0 bg-light">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
=======
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <Navbar />
        
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
>>>>>>> lina2
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Add this line */}
          </Routes>
        </main>
<<<<<<< HEAD
=======
          {/* Main Routes */}
          <main className="flex-grow-1 w-100 m-0 bg-light">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalogue" element={<Catalogue />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
>>>>>>> yosser4

              {/* Cart route you need */}
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </CartProvider>
=======
        
        <Footer />
      </div>
    </Router>
>>>>>>> lina2
  );
}

export default App;