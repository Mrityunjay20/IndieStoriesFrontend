import ProductDefault from "../Components/GlobalComponents/ProductDefault";

export default function Shop(){
    
    return(
        <>
        <div className="text-center p-6">
            <h2 className="text-xl text-center py-6">~ Products ~</h2>
            <h1 className="text-4xl font-bold">All of our products are organic & fresh.</h1>
            <div className="w-full">
                <ProductDefault productMJ={"mj"} />
            </div>
        </div>


        </>
    );
}