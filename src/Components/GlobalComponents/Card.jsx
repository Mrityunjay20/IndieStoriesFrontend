import { useState, useEffect } from "react";
import { cards } from "../../constants";

const Card = () => {
  const [curr, setCurr] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <div className="relative overflow-hidden p-8">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(-${curr * (100 / cardsToShow)}%)`,
          width: `${(totalSlides / (cardsExtended.length / cardsToShow)) * 100}%`,
        }}
      >
        {cardsExtended.map((card, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/4  px-2 flex justify-center"
            style={{ minWidth: `${100 / cardsToShow}%` }}
          >
            <div className="w-72 p-1 flex flex-col justify-between transition-transform duration-500 overflow-hidden border-2 border-pink-300 group hover:scale-110 hover:border-4 hover:border-pink-500 z-30">
              <div className="flex">
                <p className="text-9xl sm:text-10xl lg:pl-5 font-bold pl-10 transition-all duration-500 group-hover:text-pink-500">
                  {card.title[0]}
                </p>
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-24  h-24 lg:size-32 mt-6 lg:mt-2 lg:ml-20 absolute ml-24 z-2 object-cover rounded-lg opacity-50"
                />
              </div>
              <div className="p-4">
                <h1 className="text-lg sm:text-2xl font-bold text-black mb-2">{card.title}</h1>
                <h2 className="text-sm sm:text-lg text-black mb-4">{card.subtitle}</h2>
                <button className="px-4 py-1 mt-4 text-xs sm:mt-6 sm:px-6 sm:text-lg text-white bg-pink-500 rounded-full hover:text-pink-500 hover:bg-black hover:scale-110 duration-500 transition-all">
                  Shop Now
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
