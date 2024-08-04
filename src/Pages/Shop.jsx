import axios from "axios";
import { useEffect, useState } from "react";
import ProductDefault from "../Components/GlobalComponents/ProductDefault";

export default function Shop(){
  const [shopData, setShopData] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get("http://localhost:3000/shop/");
        setShopData(data); // Set the fetched data
      } catch (err) {
        
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, []);

  console.log(shopData.data);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

    
    return(
        <>
        <div className="text-center p-6">
            <h2 className="text-xl text-center py-6">~ Products ~</h2>
            <h1 className="text-4xl font-bold">All of our products are organic & fresh.</h1>
            <div className="w-full">
                <ProductDefault productData={shopData.data} productMJ={"mj"} />
            </div>
        </div>


        </>
    );
}