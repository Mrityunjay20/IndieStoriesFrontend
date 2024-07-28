import React, { useState } from 'react';
import CartProduct from "../GlobalComponents/CartProduct";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
export default function DialogSizes() {
  const [size, setSize] = React.useState(null);
 
  const handleOpen = (value) => setSize(value);
  
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
    // Add more products as needed
  ]);

  const handleQuantityChange = (id, delta) => {
    setProducts(products.map(product =>
      product.id === id
        ? { ...product, quantity: product.quantity + delta }
        : product
    ));
  };

  const handleBuyNow = (id) => {
    console.log(`Buy Now for product id: ${id}`);
  };

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };
 
  return (
    <>
      
      <div className="flex gap-3">
        <Button onClick={() => handleOpen("xl")} variant="gradient">
          Add to Cart
        </Button>
      </div>
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
         
            {/* <div>
                <div className="flex justify-between p-8 bg-lightGray rounded-lg">
                    
                    <div className="flex space-x-8">
                        <img className="w-1/6" src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
                        <div>
                            <h2>Product name</h2>
                            <p>Rs. 1200</p>
                            <p>Quantity: 
                                <Button variant="text" color="red" >-</Button> 
                                <Button>2</Button>
                                <Button variant="text" color="blue" >+</Button> </p>
                            
                        </div>
                    </div>
                    <div>
                        <Button variant="text" color="green">Buy Now</Button>
                        <Button variant="text" color="red">Delete</Button>
                    </div>
                        
                </div>
                
            </div> */}

            <div className="max-h-[50vh] px-4 space-y-4 overflow-y-auto">
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
        <div className="w-full p-8">
            <div className="footer flex justify-between">
                <div className="">
                    <p>Net Total</p>
                    <p>Taxes</p>
                    <p>Shipping Charges</p>
                    <p>Total</p>

                    
                </div>
                <div className="">
                    <p>Rs. 1200.00</p>
                    <p>Rs. 34.00</p>
                    <p>Rs. 40.00</p>
                    <p>Rs. 1274.00</p>
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
    </>
  );
}