import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { cards } from "../../constants";
  
  export default function CardDefault() {
    return (
      <div className="flex flex-wrap justify-center">
        {cards.map((card, index) => (
          <Card key={index} className="w-72 m-4">
            <CardHeader shadow={false} floated={false} className="h-48">
              <img
                src={card.image}
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <div className="mb-2 flex items-center justify-between">
                <Typography color="blue-gray" className="font-medium">
                  {card.title}
                </Typography>
                <Typography color="blue-gray" className="font-medium">
                  {card.subtitle}
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                {card.description}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 flex space-x-6 justify-between">
              <Button
                ripple={false}
                className="w-1/2 bg-[#0B78BD] text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                Add to Cart
              </Button>
              <Button
                ripple={false}
                className="w-1/2 bg-pink-600 text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                Buy Now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }
  