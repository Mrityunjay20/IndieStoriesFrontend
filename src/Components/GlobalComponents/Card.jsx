import { useState } from "react";

const Card = () => {
  const [curr, setCurr] = useState(0);

  const cards = [
    {
      id: 1,
      title: 'Card 1',
      subtitle: 'Subtitle 1',
      image: 'https://via.placeholder.com/300'
    },
    {
      id: 2,
      title: 'Card 2',
      subtitle: 'Subtitle 2',
      image: 'https://via.placeholder.com/300'
    },
    {
      id: 3,
      title: 'Card 3',
      subtitle: 'Subtitle 3',
      image: 'https://via.placeholder.com/300'
    },
    {
      id: 4,
      title: 'Card 4',
      subtitle: 'Subtitle 4',
      image: 'https://via.placeholder.com/300'
    }
  ];

  const cardsToShow = 4;
  const totalCards = cards.length;

  // Duplicate cards for smooth looping
  const cardsExtended = [...cards, ...cards, ...cards];

  // Calculate the total number of slides
  const totalSlides = Math.ceil(cardsExtended.length / cardsToShow);

  // Handle previous button click
  const prev = () => {
    setCurr((prevCurr) =>
      prevCurr === 0 ? totalSlides - 1 : prevCurr - 1
    );
  };

  // Handle next button click
  const next = () => {
    setCurr((prevCurr) =>
      prevCurr === totalSlides - 1 ? 0 : prevCurr + 1
    );
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(-${curr * (100 / cardsToShow)}%)`,
          width: `${(totalSlides / (cardsExtended.length / cardsToShow)) * 100}%`,
        }}
      >
        {cardsExtended.map((card, index) => (
          <div
            key={card.id}
            className="w-full sm:w-1/4 p-12 px-2 flex justify-center"
            style={{ minWidth: `${100 / cardsToShow}%` }}
          >
            <div className="w-72 transition-transform duration-500 hover:border-4 hover:border-black rounded-lg overflow-hidden border-2 border-gray-300">
              <img
                src={card.image}
                alt={card.title}
                className="w-32 h-32 mt-4 mx-auto object-cover rounded-lg opacity-50"
              />
              <div className="p-4 ">
                <h1 className="text-2xl font-bold text-black mb-2">{card.title}</h1>
                <h2 className="text-lg text-black mb-4">{card.subtitle}</h2>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev} className="p-2 bg-gray-300 rounded-full">
          <i className="fa-solid fa-chevron-left text-white opacity-75"></i>
        </button>
        <button onClick={next} className="p-2 bg-gray-300 rounded-full">
          <i className="fa-solid fa-chevron-right text-white opacity-75"></i>
        </button>
      </div>
    </div>
  );
};

export default Card;
