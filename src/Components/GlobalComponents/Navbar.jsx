import React, { useState } from "react";
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
import { buttons1, buttons2,img1, img2,img3 } from "../../constants";
import logo from "../../assets/HorizontalLogo.png";
import "../../App.css";
import WishlistItem from "../GlobalComponents/WishlistItem";
import OrderProduct from "../GlobalComponents/OrderProduct"; 

export default function NavBar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [size, setSize] = useState(null);
	const [activeTab, setActiveTab] = useState(null);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const handleDialogOpen = (value) => {
		setSize(value);
	};

	const handleTabChange = (tab) => {
		setActiveTab(tab);
	};

	const [orders, setOrders] = useState([
		{
			id: 1,
			name: 'Product one',
			price: 100,
			quantity: 2,
			image: img2,
			status: 'Delivered'
		},
		{
			id: 2,
			name: 'Product two',
			price: 200,
			quantity: 1,
			image: img1,
			status: 'Pending'
		},
		{
			id: 3,
			name: 'Product three',
			price: 10,
			quantity: 1,
			image: img3,
			status: 'Delivered'
		},
		{
			id: 4,
			name: 'Product four',
			price: 120,
			quantity: 1,
			image: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
			status: 'Cancelled'
		},
	]);

	const [wishlist, setWishlist] = useState([
		{
		  id: 1,
		  name: 'Wishlist Product One',
		  price: 150,
		  image: img1,
		},
		{
		  id: 2,
		  name: 'Wishlist Product Two',
		  price: 250,
		  image: img2
		},
	  ]);
	  

	return (
		<>
			<div>
				<p className="header-top font-bold bg-pink-500 text-white py-2 text-center w-full text-sm sm:text-base md:text-lg">
					Free Shipping on all orders above INR 999!
				</p>
			</div>

			<div className="py-1 w-full flex flex-grow w-max mx-auto hidden md:flex md:space-x-1 lg:space-x-8 xl:space-x-16">
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
				<button className="userProfile" onClick={() => handleDialogOpen("xxl")}>
					<img className="bg-black rounded-full size-12" alt="User profile" />
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

			<Dialog open={size === "xxl"} size="xxl" handler={() => handleDialogOpen(null)}>
				<DialogHeader>
					<div className="flex flex-row">
						<img src="" className="size-12 bg-black rounded-full"></img>
						<p className="px-12">Username</p>
					</div>
				</DialogHeader>
				<DialogBody>
					<div>
						<div className="flex space-x-4 mb-4">
							<button onClick={() => handleTabChange("profile")}>My Profile</button>
							<button onClick={() => handleTabChange("orders")}>My Orders</button>
							<button onClick={() => handleTabChange("wishlist")}>My Wishlist</button>
						</div>
						<div className="profile" style={{ display: activeTab === "profile" ? "block" : "none" }}>
							<div>
								<div className="flex flex-row">
									<img src="" className="size-12 bg-black rounded-full"></img>
									<p className="px-12">Username</p>
								</div>
								<p>Email:</p>
								<p>Phone number:</p>
								<p>Address:</p>
							</div>
						</div>
						<div className="orders" style={{ display: activeTab === "orders" ? "block" : "none" }}>
							<div>
								<div className="max-h-[74vh] px-4 space-y-4 overflow-y-auto">
									{orders.map(order => (
										<OrderProduct
											key={order.id}
											order={order}
										/>
									))}
								</div>
							</div>
						</div>
						<div className="wishlist" style={{ display: activeTab === "wishlist" ? "block" : "none" }}>
							<div className="max-h-[74vh] px-4 space-y-4 overflow-y-auto">
								{wishlist.length > 0 ? (
								wishlist.map(item => (
									<WishlistItem
									key={item.id}
									item={item}
									/>
								))
								) : (
								<p>No items in your wishlist.</p>
								)}
							</div>
						</div>

					</div>
				</DialogBody>
				<DialogFooter>
				
					<Button
						variant="gradient"
						color="green"
						onClick={() => handleDialogOpen(null)}
					>
						<span>Close</span>
					</Button>
				</DialogFooter>
			</Dialog>
		</>
	);
}
