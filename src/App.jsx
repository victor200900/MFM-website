import React from "react";
import { Routes, Route, Link } from "react-router-dom";
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
    <div className="flex flex-col min-h-screen bg-purple-900 text-gray-100 font-[Poppins] m-0 p-0 overflow-x-hidden">
      {/* Navbar (always visible) */}
      <Navbar />

      {/* Main content */}
      <main className="flex-grow m-0 p-0">
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <div className="m-0 p-0">
                <Hero />
                <About />
                <Pastors />
                <Belief />
                <Contact />
              </div>
            }
          />

          {/* Youth Ministry Page */}
          <Route
            path="/youth"
            element={
              <section className="py-24 bg-gradient-to-b from-purple-950 via-purple-900 to-purple-800 min-h-screen m-0 p-0">
                <div className="container mx-auto px-6 m-0 p-0">
                  <Link
                    to="/"
                    className="inline-block mb-8 text-sm text-pink-400 hover:text-pink-300 transition"
                  >
                    ← Back to Home
                  </Link>
                  <YouthMinistry />
                </div>
              </section>
            }
          />

          {/* Outreach Page */}
          <Route
            path="/outreach"
            element={
              <section className="py-24 bg-gradient-to-b from-purple-950 via-purple-900 to-purple-800 min-h-screen m-0 p-0">
                <div className="container mx-auto px-6 m-0 p-0">
                  <Link
                    to="/"
                    className="inline-block mb-8 text-sm text-pink-400 hover:text-pink-300 transition"
                  >
                    ← Back to Home
                  </Link>
                  <Outreach />
                </div>
              </section>
            }
          />
        </Routes>
      </main>

      {/* Footer (always visible) */}
      <Footer />
    </div>
  );
}

export default App;
