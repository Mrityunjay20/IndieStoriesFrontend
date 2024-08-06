import React, { useState, useEffect } from 'react';
import CartProduct from "../GlobalComponents/CartProduct";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function ShoppingCartDialog({ size, handleOpen }) {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Product one',
      price: 100,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 2,
      name: 'Product two',
      price: 200,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 3,
      name: 'Product three',
      price: 10,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 4,
      name: 'Product four',
      price: 120,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
  ]);

  const [totals, setTotals] = useState({
    netTotal: 0,
    taxes: 0,
    shippingCharges: 90, // Fixed shipping charge
    total: 0
  });

  const handleQuantityChange = (id, delta) => {
    setProducts(products => 
      products.map(product =>
        product.id === id
          ? { ...product, quantity: Math.max(0, product.quantity + delta) }
          : product
      ).filter(product => product.quantity > 0)
    );
  };

  const handleBuyNow = (id) => {
    console.log(`Buy Now for product id: ${id}`);
  };

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  useEffect(() => {
    const netTotal = products.reduce((total, product) => total + product.price * product.quantity, 0);
    const taxes = netTotal * 0.028; // 2.8% tax
    const total = netTotal + taxes + totals.shippingCharges;
    setTotals({
      netTotal,
      taxes,
      shippingCharges: totals.shippingCharges,
      total
    });
  }, [products, totals.shippingCharges]);

  return (
    <Dialog
      open={
        size === "xs" ||
        size === "sm" ||
        size === "md" ||
        size === "lg" ||
        size === "xl" ||
        size === "xxl"
      }
      size={size || "md"}
      handler={handleOpen}
    >
      <DialogHeader><p className='px-4'>SHOPPING CART</p></DialogHeader>
      <DialogBody>
        <div className="max-h-[50vh] px-1 md:px-4 space-y-4 md:space-y-4 overflow-y-auto">
          {products.map(product => (
            <CartProduct
              key={product.id}
              product={product}
              onQuantityChange={handleQuantityChange}
              onBuyNow={handleBuyNow}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </DialogBody>
      <DialogFooter>
        <div className="w-full px-2 md:px-4">
          <div className="footer flex justify-between">
            <div>
              <p>Net Total</p>
              <p>Taxes</p>
              <p>Shipping Charges</p>
              <p>Total</p>
            </div>
            <div>
              <p>Rs. {totals.netTotal.toFixed(2)}</p>
              <p>Rs. {totals.taxes.toFixed(2)}</p>
              <p>Rs. {totals.shippingCharges.toFixed(2)}</p>
              <p>Rs. {totals.total.toFixed(2)}</p>
            </div>
          </div>
          <div className="text-right pt-4">
            <Button
              variant="text"
              color="red"
              onClick={() => handleOpen(null)}
              className="mr-1"
            >
              <span>Close Cart</span>
            </Button>
            <Button
              variant="gradient"
              color="green"
              onClick={() => handleOpen(null)}
            >
              <span>Place Order</span>
            </Button>
          </div>
        </div>
      </DialogFooter>
    </Dialog>
  );
}
