import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Pastors from "./components/Pastors";
import Belief from "./components/Belief";
import YouthMinistry from "./components/YouthMinistry";
import Outreach from "./components/Outreach";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-purple-900 text-gray-800">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Pastors />
                <Belief />
                <Contact />
              </>
            }
          />

          {/* Youth Ministry Page */}
          <Route
            path="/youth"
            element={
              <section className="pt-24 pb-16">
                <div className="container mx-auto px-6">
                  <YouthMinistry />
                </div>
              </section>
            }
          />

          {/* Outreach Page */}
          <Route
            path="/outreach"
            element={
              <section className="pt-24 pb-16">
                <div className="container mx-auto px-6">
                  <Outreach />
                </div>
              </section>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
