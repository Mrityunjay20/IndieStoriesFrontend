// src/components/Sidebar.jsx
import React from 'react';

export default function Sidebar({ onSelectSection }) {
    return (
        <aside className="w-1/4 p-4 bg-gray-200 h-screen">
            <div className="text-2xl font-bold mb-4">Indie Stori</div>
            <nav>
                <ul>
                    <li onClick={() => onSelectSection('dashboard')} className="cursor-pointer mb-2">Dashboard</li>
                    <li onClick={() => onSelectSection('account')} className="cursor-pointer mb-2">Account</li>
                    <li onClick={() => onSelectSection('orders')} className="cursor-pointer mb-2">Orders</li>
                    <li onClick={() => onSelectSection('addresses')} className="cursor-pointer mb-2">Addresses</li>
                    <li onClick={() => onSelectSection('logout')} className="cursor-pointer mb-2">Logout</li>
                </ul>
            </nav>
        </aside>
    );
}
