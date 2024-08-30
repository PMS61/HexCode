// src/components/Landing/Cards.jsx

import React, { useState } from "react";

function Cards() {
  

  const cardData = [
    {
      description: "Keep your desk tidy and organized.",
    },
    {
      description: "Improve your posture and comfort.",
    },
    {
      description: "Charge your devices without the hassle.",
    },
    {
      description: "Declutter your space with these stylish shelves.",
    },
    {
      description: "Keep your desk tidy and organized.",
    },
    {
      description: "Improve your posture and comfort.",
    },
    {
      description: "Charge your devices without the hassle.",
    },
    {
      description: "Declutter your space with these stylish shelves.",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-lg shadow-lg cursor-pointer w-full h-72"
          >
            <p className="mt-2 text-xl text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>

      {/* {expandedCard !== null && (
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
      )} */}
    </div>
  );
}

export default Cards;
