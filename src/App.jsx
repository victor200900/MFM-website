import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Pastor from "./components/Pastors";
import Belief from "./components/Belief";

function App() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />
      {/* Pastors Section */}
      <Pastor />
      {/* Belief Section */}
      <Belief />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
