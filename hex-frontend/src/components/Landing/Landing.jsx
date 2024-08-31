import React, { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import Cards from "./Cards"; // Import the Cards component
import MyDonutChart from "./MyChart";
import QuoteBox from "./Quotebox";

function Landing() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div>
      <header className="bg-gray-800 text-white p-4 shadow-md sticky top-0 z-50">
        <div className="flex justify-between items-center">
          <img src="/assets/logo.png" alt="logo" className="h-16 w-auto" />

          <nav className="hidden md:flex gap-6">
            {["Features", "UseCases", "Impact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-orange-500 text-xl"
              >
                {item}
              </a>
            ))}
            <Link to="/login">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md">
                Login
              </button>
            </Link>
          </nav>

          {/* Hamburger menu for mobile view */}
          <button
            className={`p-2 md:hidden ${navbarOpen ? "active" : ""}`}
            onClick={toggleNavbar}
          >
            <div
              className={`w-6 h-0.5 bg-gray-500 transform transition-transform duration-300 ${
                navbarOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-gray-500 mt-1 transform transition-transform duration-300 ${
                navbarOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile navigation */}
        <nav className={`md:hidden ${navbarOpen ? "block" : "hidden"} mt-4`}>
          {["Features", "UseCases", "Impact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-lg py-2 hover:text-orange-500"
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* Section with Background Image */}
      <section
        id="impact"
        className="p-8 mb-8 rounded-lg shadow-lg h-screen"
        style={{
          backgroundImage: "url('/assets/construction.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content Layer */}
        <div className="relative z-10 text-white flex border-red-400 border-2 justify-between">
          <div className="w-1/3">
            <MyDonutChart />
          </div>
          <div className="w-1/3">
            <QuoteBox />
          </div>
        </div>
      </section>

      <section id="features" className="my-8 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6">Features</h2>
        <Cards />
      </section>

      <section id="usecases" className="p-8 my-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Use Cases</h2>
        <div className="flex justify-center">
          <Carousel />
        </div>
      </section>

      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2024 HexCode. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Landing;
