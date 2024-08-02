import { Carousel } from "@material-tailwind/react";
import SingleReviewCard from "./SingleReviewCard";

export default function SingleReview() {
    return (
      <>
        <section className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-12 mx-auto">
            <h1 className="text-3xl font-medium title-font text-white mb-12 text-center">
              Testimonials
            </h1>
            <Carousel
              className="w-full"
              navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                  {new Array(length).fill("").map((_, i) => (
                    <span
                      key={i}
                      className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                        activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                      }`}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>
              )}
            >
              
                <SingleReviewCard className="w-full md:w-1/2 lg:w-1/3 p-4" />
                <SingleReviewCard className="w-full md:w-1/2 lg:w-1/3 p-4" />
                <SingleReviewCard className="w-full md:w-1/2 lg:w-1/3 p-4" />
                <SingleReviewCard className="w-full md:w-1/2 lg:w-1/3 p-4" />
                <SingleReviewCard className="w-full md:w-1/2 lg:w-1/3 p-4" />
                <SingleReviewCard className="w-full md:w-1/2 lg:w-1/3 p-4" />
            </Carousel>
          </div>
        </section>
      </>
    );
  }