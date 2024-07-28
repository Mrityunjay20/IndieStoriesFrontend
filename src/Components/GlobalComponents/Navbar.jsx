import { useState } from "react";
import { buttons1, buttons2, socialMediaLinks } from "../../constants";
import logo from "../../assets/HorizontalLogo.png";
import "../../App.css";

export default function NavBar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<>
			<div>
				<p className="header-top font-bold bg-pink-500 text-white py-2 text-center w-full text-sm sm:text-base md:text-lg">
					Free Shipping on all orders above INR 999!
				</p>
			</div>

			<div className="py-1  w-full flex flex-grow w-max mx-auto hidden md:flex md:space-x-1 lg:space-x-8 xl:space-x-16">
				{buttons1.map((button, index) => (
					<a
						className="px-2 mx-2 text-lg md:text-lg font-semibold text-customBrown w-max flex items-center transform transition-transform duration-300 ease-in-out hover:scale-125"
						key={index}
						href={button.link}
					>
						{button.name}
					</a>
				))}
				<img className="h-20 mx-24" src={logo} alt="Logo" />
				{buttons2.map((button, index) => (
					<a
						className="px-2 mx-2 text-lg md:text-lg font-semibold text-customBrown w-max flex items-center transform transition-transform duration-300 ease-in-out hover:scale-125"
						key={index}
						href={button.link}
					>
						{button.name}
					</a>
				))}
				<button>
					<i className="fa-solid px-2 fa-magnifying-glass text-customBrown"></i>
				</button>
			</div>

			<div className="md:hidden flex justify-between items-center px-4 py-2 bg-white shadow-md">
				<img className="h-24" src={logo} alt="Logo" />
				<button onClick={toggleMobileMenu} className="text-customBrown">
					<i className="fa-solid fa-bars text-2xl"></i>
				</button>
			</div>

			{isMobileMenuOpen && (
				<div className="absolute z-10 top-0 h-full md:hidden flex flex-col items-center w-[250px] bg-white shadow-lg px-4 py-6">
					{buttons1.map((button, index) => (
						<a
							className="px-4 py-2 text-lg font-semibold text-customBrown w-full text-center"
							key={index}
							href={button.link}
						>
							{button.name}
						</a>
					))}
					{buttons2.map((button, index) => (
						<a
							className="px-4 py-2 text-lg font-semibold text-customBrown w-full text-center"
							key={index}
							href={button.link}
						>
							{button.name}
						</a>
					))}
					<button onClick={toggleMobileMenu}>
						<i className="fa-solid fa-xmark absolute top-10 right-8 text-customBrown"></i>
					</button>
				</div>
			)}
		</>
	);
}