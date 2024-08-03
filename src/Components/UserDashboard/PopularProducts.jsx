// src/components/PopularProducts.jsx
import React from 'react';

export default function PopularProducts() {
    return (
        <div className="p-6 bg-white shadow-md rounded-md mt-4">
            <h2 className="text-xl font-bold mb-2">Our most popular products of the day</h2>
            <ul className="text-gray-700 space-y-2">
                <li className="w-full p-4 border-2 border-black rounded-lg">Product</li>
                <li className="w-full p-4 border-2 border-black rounded-lg">Product</li>
                <li className="w-full p-4 border-2 border-black rounded-lg">Product</li>
                <li className="w-full p-4 border-2 border-black rounded-lg">Product</li>
                <li className="w-full p-4 border-2 border-black rounded-lg">Product</li>
                <li className="w-full p-4 border-2 border-black rounded-lg">Product</li>
                <li className="w-full p-4 border-2 border-black rounded-lg">Product</li>
                
            </ul>
        </div>
    );
}
