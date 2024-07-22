import logo from "../assets/HorizontalLogo.png";
import { ourStoriInfo } from "../constants";
import { team } from "../constants";
import { partners } from "../constants";

export default function OurStoryPage(){
    return(<>

    {/* DESCRIPTION  */}

    <div className="bg-[#f8f5ee] text-[#712c2c] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
            <h1 className="text-[58px] font-bold mb-4">Our Stori</h1>
            <div className="border-t-2 border-[#712c2c] w-24 mx-auto mb-8"></div>
        </div>
        <div className="flex justify-center mb-8 h-96 lg:mb-0">
          <img src={logo} alt="Indie Stori Logo" className="w-80 h-80 object-contain" />
        
            <div className="columns-1 space-y-6 font-medium  lg:columns-2 space-y-4">
            <p>Imagine a situation where you nurture a mango tree for years but when it starts bearing fruits someone else plucks it all away leaving nothing for you or your family. Instead you are handed over the leftovers. How would that make you feel? This was our experience and here began the journey of Indie Stori.</p>
            <p>Travelling and interacting with farmers and artisans, we discovered the age old indigenous ways of living that existed for years in the Indian subcontinent – a sustainable lifestyle in harmony with nature, from food to clothes to things used in our daily lives. Shifts from these practices degraded our health and wellbeing and also lead to an adverse effect on the environment.</p>
            <p>We at Indie Stori, promote products produced by nature and nurtured by hands through traditional indigenous methods practiced for centuries. We intend to create a lifestyle free from artificial chemicals with a mission to add value and happiness to the lives we touch. Our commitment towards providing 100% authentic products is above our profits. Our sustainable packaging comes with a utility value allowing the consumer to recycle or reuse it.</p>
            <p>We also aim to increase the production of these products to prevent its extinction, helping us to give back to Mother Nature and ensuring accessibility of our glorious past to all.</p>
            <p>Our vision is to create an ecosystem of sustainable villages to achieve a future for all in harmony with nature so that we get to eat those mangoes from our own trees.</p>
            </div>
        </div>
      </div>
    </div>


        {/* VISION  */}

    <div>
        <h2 className="text-[58px] font-bold m-6 text-center">Our Vision and Mission</h2>
        <div className="flex justify-center">
            <img src={logo} className="h-40 mt-8"></img>
            <p className="p-6 text-lg w-[680px] font-medium">Our Vision<br/>Our vision is to create an ecosystem of sustainable villages to achieve a future for all in harmony with nature.<br/><br/>
                Our Mission<br/>Our mission is to help produce, promote, preserve and protect the native indigenous produce of the Indian subcontinent region.</p>
        </div>
    </div>

        {/* WHY INDIE STORE  */}

        <div className="bg-pink-500 pb-8">
            <h2 className="text-[58px] font-bold my-6 pt-8 text-center">Why Indie Stroi?</h2>
            <div className="bg-customYellow h-[360px] mx-32 text-center rounded-tr-[64px] rounded-bl-[64px] flex justify-around items-center">
                {ourStoriInfo.map((ourStoriInfo, index) => (
                    <div key={index} className="text-center mx-8">
                        <img src={ourStoriInfo.img} className="bg-white h-32 w-32 rounded-full mx-auto"></img>
                        <h2 className="mt-6 text-3xl">{ourStoriInfo.title}</h2>
                        <p className="mt-2 text-md">{ourStoriInfo.description}</p>
                        </div>
                    ))}
            </div>
        </div>
        
        {/* TEAM  */}

        <div className="bg-[#f8f5ee]">
            <h2 className=" text-[58px] font-bold pb-4 text-center">Our Team</h2>
            <div className=" text-center flex flex-wrap justify-center space-x-6 font-medium">
                {team.map((team, index) => (
                    <div key={index} className="text-center p-4">
                        <img src={team.img} className="bg-customYellow h-64 w-64 rounded-full mx-auto"></img>
                        <h2 className="mt-6 text-2xl">{team.title}</h2>
                        <p className="mt-2 text-md">{team.description}</p>
                        </div>
                    ))}
            </div>
        </div>

        {/* OUR PARTNERS  */}

        <div>
            <h2 className=" text-[58px] font-bold pb-4 text-center">Our Partners</h2>
            <div className=" text-center flex flex-wrap justify-center space-x-4 font-medium">
                {partners.map((partners, index) => (
                    <div key={index} className="text-center py-16 px-24 border">
                        <img src={partners.img} className="bg-customYellow w-48 h-64 mx-auto"></img>
                        <h2 className="mt-6 text-2xl">{partners.title}</h2>
                        </div>
                    ))}
            </div>
        </div>


    </>)
}