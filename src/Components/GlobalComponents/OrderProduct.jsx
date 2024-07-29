import React from 'react';
import { Button } from "@material-tailwind/react";

const OrderProduct = ({ order }) => {
  return (
    <div className="flex justify-between p-8 bg-lightGray rounded-lg">
      <div className="flex space-x-8">
        <img
          className="w-1/6"
          src={order.image}
          alt={order.name}
        />
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
