import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { cards } from "../../constants";
  import ShoppingCartDialog from "../GlobalComponents/ShoppingCartDialog";
  
  export default function ProductDefault() {
    return (
      <div className="flex flex-wrap justify-center">
        {cards.map((card, index) => (
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
                src={card.image}
                alt="card-image"
                className="h-full w-full object-cover transition-transform transform"
              />
            </CardHeader>
            <CardBody className="p-4">
              <div className="mb-2 flex flex-col md:flex-row items-center justify-between">
                <Typography color="blue-gray" className="font-medium">
                  {card.title}
                </Typography>
                <Typography color="blue-gray" className="font-medium mt-2 md:mt-0">
                  {card.subtitle}
                </Typography>
                
              </div>
              <p className="w-full text-center sm:text-left">short description </p>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                {card.description}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <ShoppingCartDialog/>
              <Button
                ripple={false}
                className="w-full md:w-1/2 bg-blue-gray-700 text-white shadow-none hover:bg-black hover:shadow-lg"
              >
                Buy Now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }
  