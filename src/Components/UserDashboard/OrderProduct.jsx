import React from 'react';

const OrderProduct = ({ order }) => {
  return (
    <div className="flex justify-between p-4 sm:p-8 bg-lightGray rounded-lg">
      <div className="flex space-x-4 sm:space-x-8 items-center">
        <div className='w-24 md:w-36'> 
          <img
            className=" rounded-lg mx-auto"
            src={order.image}
            alt={order.name}
          />
        </div>
        <div>
          <h2>{order.name}</h2>
          <p>Rs. {order.price}</p>
          <p>Quantity: {order.quantity}</p>
        </div>
      </div>
      <div className="flex flex-col justify-center space-y-4">
        <p className={`status ${order.status.toLowerCase()}`}>{order.status}</p>
      </div>
    </div>
  );
};

export default OrderProduct;
