const ProductSection = ({ bgColor, buttonColor, title, description }) => {
  return(
  <div className={`bg-${bgColor} p-6 sm:p-8 w-full group transition-all duration-700 ease-in-out hover:shadow-2xl`}>
    <h2 className="text-xl py-2 font-medium md:text-2xl">{title}</h2>
    <p className="md:text-lg">{description}</p>
    <button className={`px-4 py-1 mt-4 text-xs sm:mt-6 sm:px-6 sm:text-lg rounded-full outline relative transition-all duration-300 ease-in-out bg-${buttonColor} group-hover:pr-8`}>
      Shop Now
      <i className="fa-solid fa-arrow-right absolute text-black right-2 top-1/2 transform -translate-y-1/2 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></i>
    </button>
  </div>
  );
};
export default ProductSection;

