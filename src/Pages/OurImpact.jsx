import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

export default function OurImpactPage(){

    return(<>
    <h1 className="text-5xl font-semibold pt-8 text-center">Our Impact</h1>

    <div className="text-customBrown p-12">

        <div className="flex justify-center pt-12 items-center">
            <div className="w-1/2 p-12 space-y-4">
                <h2 className="text-xl font-bold">Gharat (Pun-Chakki or watermill)</h2>
                <h3 className="text-lg font-semibold">A Story of traditional sustainable technology</h3>
                <p className="w-[550px]">Gharat (Pun-Chakki or watermill) was a traditional indigenously designed instrument used for grinding spices and pulses by the native communities of the Himalayan region for hundreds of years. This method not only preserved the natural essential flavour and oils within the food but also ensured environmental sustainability since water was used as the main source of energy.</p>
            </div>
            <img src={img1} className="h-[350px] w-[420px] shadow-lg shadow-gray-500"></img>
        </div>

        <div className="flex justify-center items-center">
            <img src={img1} className="h-[350px] w-[420px] shadow-lg shadow-gray-500"></img>
            <p className="w-[600px] p-12 ">Traditional watermills were made by village communities from locally available materials like wood or Iron and consisted a turbine that rotated with the flow of water force coming from glaciers, perennial streams and rivulets. A shaft connecting the turbine to a rotating stone moved against a stationery stone grinding the food material. </p>
        </div>

        <div className="flex justify-center items-center">
            <p className="w-[600px] p-12 ">Traditional watermills were made by village communities from locally available materials like wood or Iron and consisted a turbine that rotated with the flow of water force coming from glaciers, perennial streams and rivulets. A shaft connecting the turbine to a rotating stone moved against a stationery stone grinding the food material. </p>
            <img src={img1} className="h-[350px] w-[420px] shadow-lg shadow-gray-500"></img>
        </div>

    </div>

    <div className="flex space-x-28 justify-center p-12 items-center  bg-customYellow">
        <img src={img3} className="h-[900px] w-80"></img>
        <div p className="w-[550px]">
            <h2 className="text-4xl font-bold">Farmer Training Program (Uttarakhand)</h2>
            <h3 className="text-lg font-semibold pt-4">Story of traditional cultivation methods</h3>
            <p className="pt-8">In earlier times, agriculture was done using traditional methods with natural and organic fertilisers which helped in maintaining the quality of soil and prevented degradation of land. We have been working with farmers to revive the indigenous methods and training them in skills which would help them to grow organic products and also enable them to earn a better livelihood.</p>
            <p className="pt-8">With modernisation, we switched our agriculture towards chemical based hazardous fertilizers and pesticides which not only hampered the quality of the food we eat leading to many chronic ailments but also degraded the soil and the extinction of thousands of native species each year. In this regard, we are working with the farmers’ community in the Kumaon region of Uttarakhand to bring awareness and training with respect to organic methods of cultivation.</p>
            <p className="pt-8">With scarcity of water in this region, it has become very difficult for farmers to yield the best cultivation especially in summer and has affected their livelihood mostly due to erosion of top soil due to lack of organic matter. Organic matter can hold up to 90% of its weight in water and releases it slowly over time to keep the humus intact. Therefore, we are working towards increasing the organic matter in the soil to hold more nutrients and regulate water flow.</p>
        </div>
    </div>

    <div className="text-customBrown">

        <div className="flex justify-center pt-12">
            <div className="w-1/2 p-12 space-y-4">
                <h2 className="text-4xl font-bold">Working with Local Artisans</h2>
                <h3 className="text-lg font-semibold">A Story of our wooden box</h3>
                <p className="w-[550px]">To promote the work of local artisans and create awareness about environmental sustainability, we trained some of the local artisans(carpenters) in creating packaging boxes using waste wood and other waste products. This not only helped them to gain an additional
                skill to increase their livelihood, it also ensured reduction in the amount of waste finding its way to dumping sites.</p>
            </div>
            <img src={img1} className="h-[350px] w-[420px] shadow-lg shadow-gray-500"></img>
        </div>

        <div className="flex justify-center items-center">
            <img src={img1} className="h-[350px] w-[420px] shadow-lg shadow-gray-500"></img>
            <p className="w-[600px] p-12 ">We believe that if we keep things to let them be rare all the time, it will surely get extinct someday. So, we our vision is to create a sustainable lifestyle where we do not have to depend on the artificial chemical based recycled but get access to the ways our ancestors lived in harmony with nature.</p>
        </div>

        <div className="flex justify-center items-center">
            <p className="w-[600px] p-12 ">As part of this project, the artisans created some hand-made wooden boxes for our packaging from waste wood of pinewood which we sourced from the scrap dealers in bulk and after rigorous effort and commitment, we could successfully carve out the best for our customers and also gather some monetary support for the local artisans. We also working towards better utilization of dried Pine leaves, which are mostly responsible for forest fires in Uttarakhand.</p>
            <img src={img1} className="h-[350px] w-[420px] shadow-lg shadow-gray-500"></img>
        </div>

    </div>


    </>)
}