import ProductDefault from "../Components/GlobalComponents/ProductDefault";
import { products } from "../constants";

export default function Shop(){
    
    return(
        <>
        {/* <div className="text-center space-y-6 p-4 h-72 bg-customBlue flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">Shop</h1>
            <h3 className="text-lg">Home <i className="fa-solid fa-angles-right text-pink-500"></i> Shop</h3>
        </div> */}

        <div className="text-center p-6">
            <h2 className="text-xl text-center py-6">~ Products ~</h2>
            <h1 className="text-4xl font-bold">All of our products are organic & fresh.</h1>
            <div className="w-full p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.map((product, index) => (
                <ProductDefault key={index} product={product} />
                ))}
            </div>
        </div>


        </>
    );
}