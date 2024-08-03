// src/components/LastOrder.jsx
import React from 'react';

export default function LastOrder() {
    return (
        <div className="p-6 bg-white shadow-md rounded-md">
            <h2 className="text-xl font-bold mb-2">Last Order</h2>
            <div className="text-gray-700">
                <p>Items</p>
                <ol className="list-decimal ml-4">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ol>
                <div className='flex flex-col items-end space-x-4'>
                    <p>Total: 2000</p>
                    <button className="text-blue-500">Details</button>
                </div>
            </div>
        </div>
    );
}
