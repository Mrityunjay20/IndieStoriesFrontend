import React from 'react'; // Adjust the import based on your UI library
import {Button} from "@material-tailwind/react";
const CartProduct = ({ product, onQuantityChange, onBuyNow, onDelete }) => {
  return (
    <div className="flex justify-between p-8 bg-lightGray rounded-lg">
      <div className="flex space-x-8">
        <img
          className="w-1/6"
          src={product.image}
          alt={product.name}
        />
        <div>
          <h2>{product.name}</h2>
          <p>Rs. {product.price}</p>
          <p>Quantity:
            <Button variant="text" color="error" onClick={() => onQuantityChange(product.id, -1)}>-</Button>
            <Button>{product.quantity}</Button>
            <Button variant="text" color="primary" onClick={() => onQuantityChange(product.id, 1)}>+</Button>
          </p>
        </div>
      </div>
      <div className="space-y-4">
        <Button variant="text" color="green" onClick={() => onBuyNow(product.id)}>Buy Now</Button>
        <Button variant="text" color="red" onClick={() => onDelete(product.id)}>Delete</Button>
      </div>
    </div>
  );
};

export default CartProduct;
