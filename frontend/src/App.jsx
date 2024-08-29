import React from "react";
import { Button } from "./components/ui/button";
import Navbar from "./components/core/navbar/navbar";
import Footer from "./components/core/footer/footer";
import Slider from "./components/core/masterCarousel/slider";

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <Footer />
    </>
  );
}

export default App;
