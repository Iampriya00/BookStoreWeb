import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/core/navbar/Navbar";
import Footer from "./components/core/footer/Footer";
import Slider from "./components/core/masterCarousel/Slider";
import Home from "./components/core/home/Home";
import About from "./components/core/about/About";
import Service from "./components/core/Service/service";
import Contact from "./components/core/Contact/contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/slider" element={<Slider />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
