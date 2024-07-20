import Carousel from "../Components/GlobalComponents/Carousel";
import Testimonials from "../Components/GlobalComponents/Testimonials";
import CircleHover from "../Components/GlobalComponents/CircleHover";
import Card from "../Components/GlobalComponents/Card";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

export default function HomePage() {
  const slides = [img1, img1, img1];


  const testimonials = [
    {
      image: img1,
      paragraph: "‘’Tempor incididunt ut labore et dolore magna aliquat enim veniam quis nostru exercitation ullamco laboris nis aliquip.’’",
      heading1: "Sinira Fro",
      heading2: "Managing Director",
    },
    {
      image: img2,
      paragraph: "‘’Tempor incididunt ut labore et dolore magna aliquat enim veniam quis nostru exercitation ullamco laboris nis aliquip.’’",
      heading1: "Sinira Fro",
      heading2: "Managing Director",
    },
    {
      image: img3,
      paragraph: "‘’Tempor incididunt ut labore et dolore magna aliquat enim veniam quis nostru exercitation ullamco laboris nis aliquip.’’",
      heading1: "Sinira Fro",
      heading2: "Managing Director",
    },
    {
        image: img2,
        paragraph: "‘’Tempor incididunt ut labore et dolore magna aliquat enim veniam quis nostru exercitation ullamco laboris nis aliquip.’’",
        heading1: "Sinira Fro",
        heading2: "Managing Director",
      },
  ];


  return (
    <>
      <div className="relative">
        <div className="max-w-full max-h-[554px]">
          <Carousel autoSlide={true} slides={slides} size={{ width: '100%', height: '554px' }} imagesToShow={1} />
        </div>
      </div>

      <div className="flex justify-center">
        <img className="m-12 mt-24 h-[410px] w-[560px]" src={img2} alt="About us" />
        <div className=" w-1/3 p-6">
          <h3 className="text-xl">~ About us ~</h3>
          <h1 className="text-4xl py-4">What is Lorem Ipsum</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <p className=" py-6 text-customBrown">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="flex space-x-16" >
            <div>
              <h2>Why Organic?</h2>
              <p>We're making room for self care today with plan.</p>
            </div>
            <div>
              <h2>Why Organic?</h2>
              <p>We're making room for self care today with plan.</p>
            </div>
          </div> 
        </div>
      </div>

      <div className="flex justify-center space-x-16 p-12 bg-customYellow">
        <div>5000 Customers</div>
        <div>5000 Customers</div>
        <div>5000 Customers</div>
        <div>5000 Customers</div>
      </div>

        {/* Products */}

      <div className="py-6">
        <h2 className="text-xl text-center py-6">~Products~</h2>
        <h1 className="py-4 text-4xl text-center">Go Native | Go inside</h1>
        <div className="flex space-x-6 justify-center">
        
            <div className="bg-pink-500 px-8 py-12 w-1/4 group transition-all duration-700 ease-in-out hover:shadow-2xl">
                <h2 className="text-xl py-4 font-medium">Get 10% off on Vegetables</h2>
                <p>Shop our selection of organic fresh vegetables at a discounted price. 10% off on all vegetables.</p>
                <button className="px-6 py-1 mt-6 rounded-full outline relative transition-all duration-300 ease-in-out bg-customYellow group-hover:pr-8"> 
                    Shop Now
                    <i className="fa-solid fa-arrow-right absolute text-black right-2 top-1/2 transform -translate-y-1/2 opacity-0 transition-opacity duration-300 ease-in-out   group-hover:opacity-100 "></i>
                </button>
            </div>
            <div className="bg-customYellow px-8 py-12 w-1/4 group transition-all duration-700 ease-in-out hover:shadow-2xl">
                <h2 className="text-xl py-4 font-medium">Get 10% off on Vegetables</h2>
                <p>Shop our selection of organic fresh vegetables at a discounted price. 10% off on all vegetables.</p>
                <button className="px-6 py-1 mt-6 rounded-full outline relative transition-all duration-300 ease-in-out bg-pink-500 group-hover:pr-8"> 
                    Shop Now
                    <i className="fa-solid fa-arrow-right absolute text-black right-2 top-1/2 transform -translate-y-1/2 opacity-0 transition-opacity duration-300 ease-in-out   group-hover:opacity-100 "></i>
                </button>
            </div>
            <div className="bg-pink-500 px-8 py-12 w-1/4 group transition-all duration-700 ease-in-out hover:shadow-2xl">
                <h2 className="text-xl py-4 font-medium">Get 10% off on Vegetables</h2>
                <p>Shop our selection of organic fresh vegetables at a discounted price. 10% off on all vegetables.</p>
                <button className="px-6 py-1 mt-6 rounded-full outline relative transition-all duration-300 ease-in-out bg-customYellow group-hover:pr-8"> 
                    Shop Now
                    <i className="fa-solid fa-arrow-right absolute text-black right-2 top-1/2 transform -translate-y-1/2 opacity-0 transition-opacity duration-300 ease-in-out   group-hover:opacity-100 "></i>
                </button>
            </div>
        </div>
      </div>

        {/* Testimonials */}

      <div className="p-12">
        <h2 className="text-4xl text-center p-6">- Client’s testimonial -</h2>
        <Testimonials
        autoSlide={false}
        autoSlideInterval={8000}
        testimonials={testimonials}
      />
      </div>

        {/* Shop By Category  */}

        <div className="p-4 bg-customYellow">
            <h2 className="text-center font-medium pt-6 text-3xl">Shop By Category</h2>
            <div className="flex p-12 space-x-24 justify-center">
            <CircleHover imageSrc={img1} />
            <CircleHover imageSrc={img2} />
            <CircleHover imageSrc={img3} />
            <CircleHover imageSrc={img1} />
            </div>
        </div>

        {/* Best Seller */}
        <Card/>

        {/* Why Choose us?  */}

        <div className="flex justify-center">
            <img className="m-12 mt-24 h-[410px] w-[560px]" src={img2} alt="About us" />
            <div className=" w-1/3 p-6">
                <h3 className="text-xl">~ Why Choose us? ~</h3>
                <h1 className="text-4xl py-4">We do not buy from the open market & traders.</h1>
                
                <p className=" py-6 text-customBrown">
                Purchasing from select family farmers who farm organically because they believe in it and so we do. We are conscious of air miles and our carbon footprint so a lot of our produce comes from Egypt.
                <br/><br/>Organic Foods and Café is a family run company that runs organic super markets and cafés selling fresh organic and biodynamic food, supplers, skincare, cosmetics, baby items and household cleaning products. We have 5 shops in Dubai – on Sheikh Zayed Road.
                </p> 
            </div>
        </div>

        {/* What We Are Cooking */}

        <div>
            <h2 className="text-4xl text-center p-4">What We Are Cooking</h2>
            <h3 className="mx-auto text-center w-1/3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
            <div className="flex space-x-8 justify-center p-6">
            <div className="relative flex container justify-center h-72 w-64">
                <img src={img3} className="h-full w-full object-cover rounded-lg" alt="Card Image" />

                <div className="absolute bottom-0 w-full h-12 text-white flex items-center justify-center bg-white bg-opacity-60 transition-transfrom duration-300 rounded-b-lg hover:bg-black">
                    Heading One
                </div>
            </div>
            <div className="relative flex container justify-center h-72 w-64">
                <img src={img3} className="h-full w-full object-cover rounded-lg" alt="Card Image" />

                <div className="absolute bottom-0 w-full h-12 text-white flex items-center justify-center bg-white bg-opacity-60 transition-transfrom duration-300 rounded-b-lg hover:bg-black">
                    Heading One
                </div>
            </div>
            <div className="relative flex container justify-center h-72 w-64">
                <img src={img3} className="h-full w-full object-cover rounded-lg" alt="Card Image" />

                <div className="absolute bottom-0 w-full h-12 text-white flex items-center justify-center bg-white bg-opacity-60 transition-transfrom duration-300 rounded-b-lg hover:bg-black">
                    Heading One
                </div>
            </div>
            <div className="relative flex container justify-center h-72 w-64">
                <img src={img3} className="h-full w-full object-cover rounded-lg" alt="Card Image" />

                <div className="absolute bottom-0 w-full h-12 text-white flex items-center justify-center bg-white bg-opacity-60 transition-transfrom duration-300 rounded-b-lg hover:bg-black">
                    Heading One
                </div>
            </div>
            </div>
        </div>

        {/* Products  */}

        <div className="text-center p-6">
            <h2 text-xl text-center py-6>~ Products ~</h2>
            <h1 className="text-4xl font-bold">All of our products are organic & fresh.</h1>
            <div className="w-full p-8 space-x-4 bg-customYellow">
            <div className="relative w-1/5 h-[366px] p-4 bg-white space-y-4 group">
                <div className="absolute h-full w-full opacity-0 transform transition-all delay-10 duration-700 ease-in-out group-hover:opacity-100">
                    <div className="relative left-32 p-4 space-y-4 transform transition-all delay-10 duration-700 ease-in-out group-hover:left-48 ">
                        <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-500 text-black hover:bg-black hover:text-white">
                        <i className="fa-solid fa-cart-shopping"></i>
                        </a>
                        <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-500 text-black hover:bg-black hover:text-white">
                        <i className="fa-regular fa-heart"></i>
                        </a>
                        <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-500 text-black hover:bg-black hover:text-white">
                        <i className="fa-regular fa-eye"></i>
                        </a>
                    </div>
                    <button className="absolute bg-customBlue rounded-full px-4 py-2 left-[67px] bottom-0 transform transition-all delay-10 duration-700 ease-in-out group-hover:bottom-8">
                        Add to Cart
                    </button>
                </div>
                <img src={img3} className="h-36 w-40 mx-auto mt-12" alt="Product" />
                <h2 className="text-xl">Orange Juice</h2>
                <p>$10.00-$20.00</p>
                <div>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                
            </div>
            </div>
        </div>

        {/* NEWS */}

        <div className="space-y-4 p-4">
            <h1 className="text-4xl font-bold text-center"><span className="text-pink-500" >Latest</span> News & Blog</h1>
            <p className="text-center w-1/3 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="flex h-full w-full p-6 space-x-8 justify-center ">

                <div className="h-[440px] w-1/4 bg-customYellow rounded-lg">
                    <img className="w-full h-1/2 rounded-t-lg" src={img1}></img>
                    <div className="flex justify-between p-4">
                    <p><i class="fa-solid fa-tags"></i>  Organic Food</p>
                    <p><i class="fa-solid fa-calendar-days"></i>  1/17/2021</p>
                    </div>
                    <hr/>
                    <div className="p-4 space-y-4">
                        <a href="#" className="text-2xl font-medium"><p>What Should Know About Detox Water</p></a>
                        <button className="text-lg px-4 py-2 border-2 border-black rounded-lg font-medium duration-700 ease-in-out hover:bg-pink-500">Learn More</button>
                    </div>
                </div>
                
                <div className="h-[440px] w-1/4 bg-customYellow rounded-lg">
                    <img className="w-full h-1/2 rounded-t-lg" src={img1}></img>
                    <div className="flex justify-between p-4">
                    <p><i class="fa-solid fa-tags"></i>  Organic Food</p>
                    <p><i class="fa-solid fa-calendar-days"></i>  1/17/2021</p>
                    </div>
                    <hr/>
                    <div className="p-4 space-y-4">
                        <a href="#" className="text-2xl font-medium"><p>What Should Know About Detox Water</p></a>
                        <button className="text-lg px-4 py-2 border-2 border-black rounded-lg font-medium duration-700 ease-in-out hover:bg-pink-500">Learn More</button>
                    </div>
                </div>

                <div className="h-[440px] w-1/4 bg-customYellow rounded-lg">
                    <img className="w-full h-1/2 rounded-t-lg" src={img1}></img>
                    <div className="flex justify-between p-4">
                    <p><i class="fa-solid fa-tags"></i>  Organic Food</p>
                    <p><i class="fa-solid fa-calendar-days"></i>  1/17/2021</p>
                    </div>
                    <hr/>
                    <div className="p-4 space-y-4">
                        <a href="#" className="text-2xl font-medium"><p>What Should Know About Detox Water</p></a>
                        <button className="text-lg px-4 py-2 border-2 border-black rounded-lg font-medium duration-700 ease-in-out hover:bg-pink-500">Learn More</button>
                    </div>
                </div>

            </div>
        </div>
    </>
  );
}
