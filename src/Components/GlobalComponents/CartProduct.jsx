import React from 'react';
import {Button} from "@material-tailwind/react";


const CartProduct = ({ product,quantity, onQuantityChange, onBuyNow, onDelete }) => {
  return (
    <div className="flex justify-between p-2 md:p-8 bg-lightGray rounded-lg">
      <div className="flex space-x-4 items-center  sm:space-x-8">
        <div className='w-1/4 min-w-12'>
          <img
            className="object-fill rounded-sm"
            src={product.imageUrl[0]}
            alt={product.name}
          />
        </div>
        <div className='text-sm md:text-lg'>
          <h2 className='font-semibold'>{product.name}</h2>
          <p>Rs. {product.price}</p>
          <div className='flex items-center'>
            <p>Quantity:</p>
            <Button variant="text" size='sm' color="black" onClick={() => onQuantityChange(product.id, -1)}>-</Button>
            <button className='w-2 sm:w-4 text-black font-semibold'>{quantity}</button>
            <Button variant="text" size='sm' color="black" onClick={() => onQuantityChange(product.id, 1)}>+</Button>
          </div>
        </div>
      </div>
      <div className="space-y-4 flex flex-col items-end justify-between">
        <i className="fa-solid fa-trash hover:cursor-pointer text-blue-gray-400" onClick={() => onDelete(product.id)}></i>
        <button className='hidden p-2 hover:cursor-pointer sm:flex rounded-md font-medium bg-green-400 text-white w-20 text-xs md:text-sm items-center justify-center' onClick={() => onBuyNow()}>
          Buy Now
        </button>
      </div>
      
    </div>
  );
};

export default CartProduct;
