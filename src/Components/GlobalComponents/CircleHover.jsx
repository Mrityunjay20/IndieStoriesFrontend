import React, { useState } from 'react';

const CircleHover = ({ imageSrc }) => {
    const [isRotating, setIsRotating] = useState(false);

    const handleMouseEnter = () => setIsRotating(true);
    const handleMouseLeave = () => setIsRotating(false);

  return (
    
    <div className='text-center space-y-2'>
    <div className="relative w-40 h-40 flex justify-center items-center">
      <div>
        <img 
          src={imageSrc} 
          alt="image" 
          className="m-2 absolute w-full h-full object-cover rounded-full " 
        />
        <div className={`relative w-44 h-44 flex justify-center items-center rounded-full overflow-hidden border-4 border-dotted border-black transition-transform duration-500 ease-in-out ${
            isRotating ? 'animate-spin' : ''
          }`}
            style={{
            animation: isRotating ? 'spin 10s linear infinite' : 'none'
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button className="relative w-44 h-44 text-white text-5xl opacity-0 hover:opacity-100 transition-opacity duration-300">+</button>
        </div>
        
      </div>
    </div>
    <h2> Fresh Veggies</h2>
    <p>(30 items)</p>
    </div>
  );
};

export default CircleHover;
