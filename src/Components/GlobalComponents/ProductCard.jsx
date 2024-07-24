import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="relative p-12 bg-white space-y-6 group border-2 border-pink-300 transform transition-all delay-10 duration-700 ease-in-out hover:scale-110 hover:border-4 hover:border-pink-500">
      
        {/* ICONS ON HOVERING */}

      <div className="absolute h-full w-full opacity-0 transform transition-all delay-10 duration-700 ease-in-out group-hover:opacity-100">

        <div className="relative p-4 left-32 space-y-4 transform transition-all delay-10 duration-700 ease-in-out group-hover:left-48">
          <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-500 text-black hover:bg-black hover:text-white">
            <i className="fa-solid fa-cart-shopping"></i>
          </a>
          <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-500 text-black hover:bg-black hover:text-white">
            <i className="fa-regular fa-heart"></i>
          </a>
          <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-500 text-black hover:bg-black hover:text-white">
            <i className="fa-regular fa-eye"></i>
          </a>
        </div>

        <button className="absolute bg-customBlue rounded-full px-4 py-2 left-[48px] bottom-0 transform transition-all delay-10 duration-700 ease-in-out group-hover:bottom-8">
          Add to Cart
        </button>

      </div>

      {/* ABOUT PRODUCT  */}
      <img src={product.image} className="h-36 w-40 mx-auto mt-12" alt="Product" />
      <h2 className="text-xl">{product.name}</h2>
      <p>{product.price}</p>
      <div>
        {[...Array(product.rating)].map((_, index) => (
          <i key={index} className="fa-solid fa-star"></i>
        ))}
      </div>

    </div>
  );
};

export default ProductCard;
