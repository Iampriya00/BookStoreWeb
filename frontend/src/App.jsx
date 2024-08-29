import React from "react";
import Navbar from "./components/core/navbar/Navbar";
import Footer from "./components/core/footer/Footer";
import Slider from "./components/core/masterCarousel/Slider";
import Home from "./components/core/home/Home";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Slider />
      <Footer />
    </>
  );
}

export default App;
