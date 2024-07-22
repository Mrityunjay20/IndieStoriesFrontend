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

  // Calculate the actual number of indicator dots needed
  const slides = Array.from({ length: totalCards });

  return (
    <div className="relative overflow-hidden h-96">
      <div
        className="flex transition-transform duration-500 ease-out"
        // for sliding the carousel
        style={{
          transform: `translateX(-${curr * (100 / cardsToShow)}%)`,
          width: `${(totalSlides / (cardsExtended.length / cardsToShow)) * 100}%`,
        }}
      >
        {cardsExtended.map((card, index) => (
          <div
            key={index}
            className="w-full sm:w-1/4 p-12 px-2 flex justify-center "
            style={{ minWidth: `${100 / cardsToShow}%` }}
          >
            <div className="w-72 transition-transform duration-500 overflow-hidden border-2 border-pink-300 hover:scale-110 hover:border-4 hover:border-pink-500 z-30">
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
      {/* <div className="absolute inset-0 flex items-center justify-between p-4 z-10">
        <button onClick={prev} className="p-2 bg-gray-300 rounded-full z-10">
          <i className="fa-solid fa-chevron-left text-white opacity-75"></i>
        </button>
        <button onClick={next} className="p-2 bg-gray-300 rounded-full z-10">
          <i className="fa-solid fa-chevron-right text-white opacity-75"></i>
        </button>
      </div> */}

      {/* Indicator Dots */}
      <div className="absolute bottom-0 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurr(i)}
              className={`
                transition-all bg-pink-500 rounded-full
                ${curr % totalCards === i ? "p-2" : "p-1 bg-opacity-50"}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
