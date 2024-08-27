import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";

function Landing() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };
  const [expandedCard, setExpandedCard] = useState(null)
  const cardData = [
    {
      title: "Bamboo Desk Organizer",
      description: "Keep your desk tidy and organized.",
      image: "/placeholder.svg",
      details:
        "This bamboo desk organizer is the perfect solution to keep your workspace clutter-free. With its sleek and minimalist design, it blends seamlessly into any office decor.",
    },
    {
      title: "Ergonomic Office Chair",
      description: "Improve your posture and comfort.",
      image: "/placeholder.svg",
      details:
        "This ergonomic office chair is designed to provide superior support and comfort, helping you maintain good posture throughout the workday.",
    },
    {
      title: "Wireless Charging Pad",
      description: "Charge your devices without the hassle.",
      image: "/placeholder.svg",
      details:
        "This wireless charging pad allows you to conveniently charge your devices without the need for messy cables.",
    },
    {
      title: "Minimalist Wall Shelves",
      description: "Declutter your space with these stylish shelves.",
      image: "/placeholder.svg",
      details:
        "These minimalist wall shelves are the perfect solution to declutter your space and display your favorite items.",
    },
  ];

  return (
    <div>
      <header className="bg-gray-800 text-white p-4 shadow-md">
        <div className="flex justify-between items-center">
          <img src={logo} alt="logo" className="h-16 w-auto" />

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
        <nav
          className={`md:hidden ${navbarOpen ? "block" : "hidden"} mt-4`}
        >
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

      {/* Expanded Card Overlay */}
      {expandedCard !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setExpandedCard(null)}
        >
          <div className="relative w-full max-w-3xl bg-white rounded-lg p-8">
            <img
              src={cardData[expandedCard].image}
              alt={cardData[expandedCard].title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="mt-4">
              <h3 className="text-2xl font-semibold">
                {cardData[expandedCard].title}
              </h3>
              <p className="mt-2 text-gray-600">
                {cardData[expandedCard].details}
              </p>
              <button className="mt-4 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Features Section */}
      <section
        id="features"
        className="my-8 p-8 bg-white rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-6">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-lg cursor-pointer"
              onClick={() => setExpandedCard(index)}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="mt-4 text-xl font-semibold">{card.title}</h3>
              <p className="mt-2 text-gray-600">{card.description}</p>
              <button className="mt-4 text-orange-500 underline">
                View More
              </button>
            </div>
          ))}
        </div>
      </section>
      <section id="usecases" className="p-8 my-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Use Cases</h2>
        <div className="flex justify-center">
      <Carousel />
    </div>
      </section>

      <section id="impact" className="p-8 my-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Experience</h2>
        <div className="space-y-8">
          <div className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow">
            <img
              src="https://media.licdn.com/dms/image/D4D03AQEYWZjikfmbQw/profile-displayphoto-shrink_800_800/0/1699066209140?e=2147483647&v=beta&t=M3MhBOVQNSVpw78FsTQKpWFKU44Ehnf9e8_mlvBn-9c"
              alt="Debate and Literary Arts Society"
              className="h-16 w-auto"
            />
            <div>
              <h3 className="text-xl font-semibold">Department Coordinator</h3>
              <p>Debate and Literary Arts Society VJTI</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow">
            <img
              src="https://media.licdn.com/dms/image/D4D0BAQGcvGvT5OqSZg/company-logo_200_200/0/1699363423839?e=2147483647&v=beta&t=i39SrkdgMyPHt0rqcabYrrdO7bwTJrcv9C7yaQUMocI"
              alt="Enthusia VJTI - Volleyball"
              className="h-16 w-auto"
            />
            <div>
              <h3 className="text-xl font-semibold">Event Coordinator</h3>
              <p>Enthusia VJTI - Volleyball</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow">
            <img
              src="https://media.licdn.com/dms/image/C5103AQE4NDuUYPYFXQ/profile-displayphoto-shrink_800_800/0/1517471379571?e=2147483647&v=beta&t=2-jnrBxS7BESvVFB8AXAAWDJ_GLZj9mgFkwUGDPlWAI"
              alt="ECell VJTI - Adomania"
              className="h-16 w-auto"
            />
            <div>
              <h3 className="text-xl font-semibold">Event Coordinator</h3>
              <p>ECell VJTI - Adomania</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow">
            <img
              src="https://media.licdn.com/dms/image/D4D03AQEYWZjikfmbQw/profile-displayphoto-shrink_800_800/0/1699066209140?e=2147483647&v=beta&t=M3MhBOVQNSVpw78FsTQKpWFKU44Ehnf9e8_mlvBn-9c"
              alt="Eclipse VJTI"
              className="h-16 w-auto"
            />
            <div>
              <h3 className="text-xl font-semibold">Event Coordinator</h3>
              <p>Eclipse VJTI</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2024 HexCode. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Landing;
