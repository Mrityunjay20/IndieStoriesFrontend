import React from 'react';

const BlogCard = ({ image, category, date, title, link }) => {
  return (
    <div className="h-[440px] w-full sm:w-1/3 bg-customYellow rounded-lg overflow-hidden">
      <img className="w-full h-1/2 object-cover rounded-t-lg" src={image} alt="Blog Image" />
      <div className="flex justify-between p-4">
        <p><i className="fa-solid fa-tags"></i> {category}</p>
        <p><i className="fa-solid fa-calendar-days"></i> {date}</p>
      </div>
      <hr />
      <div className="p-4 space-y-4">
        <a href={link} className="text-2xl font-medium hover:underline">{title}</a>
        <button className="text-lg px-4 py-2 border-2 border-black rounded-lg font-medium duration-700 ease-in-out hover:bg-pink-500">Learn More</button>
      </div>
    </div>
  );
};

export default BlogCard;
