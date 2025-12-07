import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./Pages/Login";
import Register from "./Pages/register";
import Home from "./Pages/Home";
import ForgotPassword from "./Pages/ForgotPassword"; // Add this import

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <Navbar />
        
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Add this line */}
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;