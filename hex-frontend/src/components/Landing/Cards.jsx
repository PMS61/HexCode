// src/components/Landing/Cards.jsx

import React, { useState } from "react";

function Cards() {
  const [expandedCard, setExpandedCard] = useState(null);

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
            <button className="mt-4 text-orange-500 underline">View More</button>
          </div>
        ))}
      </div>

      {expandedCard !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setExpandedCard(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-white rounded-lg p-8"
            onClick={(e) => e.stopPropagation()} // Prevent click from closing the modal when interacting inside it
          >
            <img
              src={cardData[expandedCard].image}
              alt={cardData[expandedCard].title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="mt-4">
              <h3 className="text-2xl font-semibold">
                {cardData[expandedCard].title}
              </h3>
              <p className="mt-2 text-gray-600">{cardData[expandedCard].details}</p>
              <button className="mt-4 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cards;
