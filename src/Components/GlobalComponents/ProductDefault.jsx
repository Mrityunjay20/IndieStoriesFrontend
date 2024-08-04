import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import ShoppingCartDialog from "../GlobalComponents/ShoppingCartDialog";
import { useNavigate } from 'react-router';

export default function ProductDefault({productData ,productMJ}) {
  const [size, setSize] = useState(null);

  const handleOpen = (value) => setSize(value);
  const navigate = useNavigate();
  const handleProductClick = (productId) => {
    console.log("handleclick called");
    navigate(`/shop/${productId}`);
  };
  
  return (
    <div className="grid grid-cols-4 mx-auto w-full">
      {productData.map((card, index) => (
        <Card
          key={index}
          className="w-full sm:w-72 md:w-80 m-4 transition-transform transform hover:scale-105"
        >
          <CardHeader
            shadow={false}
            floated={false}
            className="h-48 overflow-hidden relative"
          >
            
            <img
              src={card.imageUrl}
              alt="card-image"
              className="h-full w-full object-cover transition-transform transform hover:cursor-pointer"
              onClick={() => handleProductClick(card.id)}
              
            />
          </CardHeader>
          <CardBody className="p-4">
            <div className="mb-2 flex flex-col md:flex-row items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                {card.name}
              </Typography>
              <Typography color="blue-gray" className="font-medium mt-2 md:mt-0">
                RS. {card.price}
              </Typography>
            </div>
            <p className="w-full text-left sm:text-left">{}</p>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              {card.description}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <Button
              ripple={false}
              className="w-full md:w-1/2 bg-blue-500 text-white shadow-none hover:bg-black hover:shadow-lg"
              onClick={() => handleOpen("xl")}
            >
              Add to Cart
            </Button>
            <Button
              ripple={false}
              className="w-full md:w-1/2 bg-pink-500 text-white shadow-none hover:bg-black hover:shadow-lg"
              
            >
              Buy Now
            </Button>
          </CardFooter>
        </Card>
      ))}
      <ShoppingCartDialog size={size} handleOpen={handleOpen} />
    </div>
  );
}
