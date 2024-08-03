import React, { useState } from 'react';
import { img1, img2,img3 } from "../constants";
import Sidebar from '../Components/UserDashboard/Sidebar';
import LastOrder from '../Components/UserDashboard/LastOrder';
import ReorderItems from '../Components/UserDashboard/ReorderItems';
import PopularProducts from '../Components/UserDashboard/PopularProducts';
import AccountSection from '../Components/UserDashboard/AccountSection';
import Address from '../Components/UserDashboard/Address';
import OrderProduct from '../Components/UserDashboard/OrderProduct';

export default function UserDashboard() {
    const [selectedSection, setSelectedSection] = useState('dashboard');

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

    const renderSection = () => {
        switch (selectedSection) {
            case 'dashboard':
                return (
                    <div className='flex w-full' >
                        <div className="w-1/2 p-4">
                            <LastOrder />
                            <ReorderItems />
                        </div>
                        <div className="w-1/2 p-4">
                            
                            <PopularProducts />
                        </div>
                    </div>
                );
            case 'account':
                return (
                <div className='w-full'>
                    <AccountSection/>
                </div>
                );
            case 'orders':
                return (
                <div className='w-full'>
                    <div className=" px-4 space-y-4 overflow-y-auto">
                        {orders.map(order => (
                            <OrderProduct
                                key={order.id}
                                order={order}
                            />
                        ))}
                    </div>
                </div>);
            case 'addresses':
                return (
                <div className='w-full'>
                    <Address/>
                </div>
                );
            case 'logout':
                return <div className='w-full'>Logout Section</div>;
            default:
                return null;
        }
    };

    return (
        <div className="flex w-full ">
            <Sidebar onSelectSection={setSelectedSection} />
            {renderSection()}
            
        </div>
    );
}
