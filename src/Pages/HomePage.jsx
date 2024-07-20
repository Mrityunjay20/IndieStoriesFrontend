import Carousel from "../Components/GlobalComponents/Carousel";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

export default function HomePage() {
  const slides = [img1, img2, img3];

  return (
    <>
    <div className="relative">
      <div className="">
        <Carousel slides={slides} />
      </div>
    </div>

    <div>
        <h2 className="p-6 text-4xl text-center underline underline-offset-[16px] text-customBrown">Who Are We</h2>
        <div className="flex justify-center">
            <div className="p-4 w-1/4">
                <p className="p-6 pt-12 text-customBrown">Imagine a situation where you nurture a mango tree for years but when it starts bearing fruits someone else plucks it all away leaving nothing for you or your family. <br/> <br/>Instead you are handed over the leftovers. How would that make you feel? This was our experience and here began the journey of Indie Stori.
                    <br/><br/>
                </p>
                <div className="w-full">
                    <a className="outline py-1 px-3 mx-auto text-center">OUR STORI</a></div>
            </div>
            <img className="m-6 h-[410px] w-[760px] shadow-xl shadow-slate-500 " src={img2}></img>
        </div>

    </div>
    </>
  );
}
