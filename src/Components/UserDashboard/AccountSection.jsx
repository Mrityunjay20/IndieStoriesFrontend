import React from "react";

export default function Account(){
    return(
        <div className="p-8 w-full">
            <h2 className="pb-4">USERNAME</h2>
            <div>
                <p>Email</p>
                <p>+91 99 9999 9999</p>
            </div>
            <div className="flex justify-end">
                <button className="px-8 py-2 bg-black text-white rounded-lg ">RESET PASSWORD</button>
            </div>
        </div>
    );
}