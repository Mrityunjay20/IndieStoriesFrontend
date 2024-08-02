import React from "react";

export default function Address(){
    return(
        <div className="p-6 space-y-4">
            <div className="w-full p-4 border-2 border-black rounded-lg">Address Lane 1</div>
            <div className="w-full p-4 border-2 border-black rounded-lg">Address Lane 2</div>
            <div className="w-full p-4 border-2 border-black rounded-lg">City</div>
            <div className="w-full flex space-x-4">
                <div className="w-1/2 p-4 border-2 border-black rounded-lg">State</div>
                <div className="w-1/2 p-4 border-2 border-black rounded-lg">Pincode</div>
            </div>
            <div className="w-full flex justify-end space-x-4">
                <button className="px-8 py-2 bg-black text-white rounded-lg ">Edit</button>
                <button className="px-8 py-2 bg-black text-white rounded-lg">Save</button>
            </div>
        </div>
    );
}