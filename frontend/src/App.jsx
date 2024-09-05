import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/core/navbar/navbar";
import Footer from "./components/core/footer/footer";
import Slider from "./components/core/masterCarousel/slider";
import Home from "./components/core/home/home";
import About from "./components/core/about/about";
import Categories from "./components/core/Categories/categories";
import Contact from "./components/core/Contact/contact";
import Account from "./components/core/Account/account";
import SignUp from "./components/core/SignUp/signup";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/account" element={<Account />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
