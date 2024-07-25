import React from "react";

const ResponsiveCard = ({ cards }) => {
  return (
    <div className="flex flex-wrap justify-center p-1">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative flex justify-center h-72 w-64 m-2"
        >
          <img
            src={card.image}
            className="h-full w-full object-cover rounded-lg"
            alt="Card Image"
          />
          <div className="absolute bottom-0 w-full h-12 text-white flex items-center justify-center bg-white bg-opacity-60 transition-transform duration-300 rounded-b-lg hover:bg-black">
            {card.heading}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResponsiveCard;
