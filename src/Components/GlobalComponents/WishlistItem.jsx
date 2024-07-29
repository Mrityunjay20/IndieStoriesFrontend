import React from 'react';

const WishlistItem = ({ item }) => {
  return (
    <div className="flex items-center space-x-4 border-b py-2">
      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
      <div>
        <p className="font-semibold">{item.name}</p>
        <p>Price: INR {item.price}</p>
      </div>
    </div>
  );
};

export default WishlistItem;
