import { useState, useEffect } from "react";

export default function Carousel({
  autoSlide = true,
  autoSlideInterval = 8000,
  slides,
  size = { width: "100%", height: "550px" },
  imagesToShow = 1,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);
  
  return (
    <div className="overflow-hidden relative" style={{ maxWidth: size.width, maxHeight: size.height }}>
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * (100 / imagesToShow)}%)`, width: `${slides.length * (100 / imagesToShow)}%` }}
      >
        {slides.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className="object-cover"
            style={{ width: `${100 / imagesToShow}%`, height: "100%" }}
          />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev}>
          <i className="fa-solid fa-chevron-left text-white opacity-75"></i>
        </button>
        <button onClick={next}>
          <i className="fa-solid fa-chevron-right text-white opacity-75"></i>
        </button>
      </div>

      {/* <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`
                transition-all bg-white rounded-full
                ${curr === i ? "p-2" : "bg-opacity-50"}
              `}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
  
}
