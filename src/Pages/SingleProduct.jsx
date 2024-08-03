import { useParams } from "react-router";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  ButtonGroup,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { useState } from "react";
import RandomIcon from "../assets/img1.jpg";
import VegIcon from "../assets/Veg.png";
import CardDefault from "../Components/GlobalComponents/CardDefault";
import SingleReview from "../Components/SingleProduct/SingleReview";
import UsesSection from "../Components/SingleProduct/userSection";

export default function SingleProduct() {
  const { id } = useParams();
  const data = [
    {
      imgelink:
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },

    {
      imgelink:
        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    },
  ];
  const [active, setActive] = useState(
    "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  );
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div className="w-full lg:flex my-12">
        <div className="sm:w-full md:w-full lg:w-1/2 mx-auto">
          <div className="w-4/5 grid gap-4 mx-auto">
            <div>
              <img
                className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
                src={active}
                alt=""
              />
            </div>
            <div className="grid grid-cols-5 gap-4">
              {data.map(({ imgelink }, index) => (
                <div key={index}>
                  <img
                    onClick={() => setActive(imgelink)}
                    src={imgelink}
                    className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                    alt="gallery-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="sm:w-full md:w-full lg:w-1/2 py-8 sm:mx-auto lg:mx-auto px-20">
          <div className="flex items-center mb-2">
            <p className="text-gray-600">Indie Stori</p>
            <img className="h-8 w-8 mx-4" src={VegIcon} />
          </div>

          <h1 className="text-5xl font-serif font-semibold">
            Himalayan Pahadi Salt
          </h1>
          <p className="mt-4">Best turmeric that you could get......</p>
          <p className="text-yellow-800 text-2xl py-4">
            ★ ★ ★ ★ ★{" "}
            <span className="text-black opacity-60 text-lg mx-4">
              (4.9 Based on 02 Reviews)
            </span>
          </p>
          <div className="flex my-4">
            <img className="w-8 h-8 mr-4" src={RandomIcon} />
            <img className="w-8 h-8 mx-4" src={RandomIcon} />
            <img className="w-8 h-8 mx-4" src={RandomIcon} />
            <img className="w-8 h-8 mx-4" src={RandomIcon} />
          </div>
          <p>Paid Shipping</p>
          <h2 className="text-pink-400 text-lg">
            SKU: <span className="text-black">WT-05789-567-78</span>
          </h2>
          <h2 className="text-pink-400 text-lg">
            Category: <span className="text-black">Beverage</span>
          </h2>
          <h1 className="text-3xl font-semibold my-4">Rs. 299.00</h1>

          {/* <div>
            <h1 className="text-xl my-4">Variants:</h1>
            <ButtonGroup className="border-pink-300" variant="outlined">
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </div> */}

          <div className="my-6 text-xl">
            <p>Quantity:</p>
            <div className="flex w-max gap-4 my-4">
              <IconButton ripple={true}>
                <i className="fas fa-minus" />
              </IconButton>
              <p className="py-1">1</p>
              <IconButton ripple={false}>
                <i className="fas fa-plus" />
              </IconButton>
            </div>
          </div>
          <div className="flex">
            <Button className="mr-2 py-4 px-6 bg-blue-700" variant="filled">
              Buy Now
            </Button>
            <Button className="mx-2 py-4 px-6 bg-pink-500" variant="filled">
              Add to cart
            </Button>
          </div>
        </div>
      </div>


      <UsesSection/>

      <section class="text-gray-600 body-font w-full">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center w-full flex-col">
          {/* <img
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          /> */}
          <iframe className="w-10/12" height="460" src="https://www.youtube.com/embed/o5AAI5WaMFE?si=yBg-yB2bT3rtcrcf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl my-4  mt-8 font-medium text-gray-900">
              Microdosing synth tattooed vexillologist
            </h1>
            <p class="leading-relaxed">
              Meggings kinfolk echo park stumptown DIY, kale chips beard
              jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice
              godard disrupt ramps hexagon mustache umami snackwave tilde
              chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac
              mlkshk freegan photo booth af fingerstache pitchfork.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <SingleReview />

      {/* Best Seller */}
      <div className="text-center py-2 md:pt-8 ">
        <p className="text-lg font-semibold md:text-2xl md:py-2 uppercase">
          You may also like
        </p>
      </div>
      {/* <Card/> */}
      <div className="py-4">
        <CardDefault />
      </div>

      <div className="mx-auto w-4/5">
        <Accordion open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            What is Material Tailwind?
          </AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            How to use Material Tailwind?
          </AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            What can I do with Material Tailwind?
          </AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
      </div>
    </>
  );
}
