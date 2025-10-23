import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Pastor from "./components/Pastors";
import Belief from "./components/Belief";
import YouthMinistry from "./components/YouthMinistry";
import Outreach from "./components/Outreach";
import Contact from "./components/Contact"

function App() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Pastor />
              <Belief />
              <Contact/>
              <Footer />
            </>
          }
        />

        {/* Youth Ministry Page */}
        <Route
          path="/youth"
          element={
            <>
          <div className="flex flex-col items-center justify-center min-h-screen text-center">
  <div className="pt-16">
    <YouthMinistry />
  </div>
  <div className="mt-12">
  </div>
</div>

          
            </>
          }
        />

                <Route
          path="/outreach"
          element={
            <>
          <div className="flex flex-col items-center justify-center min-h-screen text-center">
  <div className="pt-16">
    <Outreach />
  </div>
  <div className="mt-12">
  </div>
</div>

          
            </>
          }
        />
        
      </Routes>
    </div>
  );
}

export default App;
