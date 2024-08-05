import React from 'react';

const CheckoutPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      
      <div className="flex space-x-8">
        <div className="w-2/3">
          <div className="border p-6 mb-6">
            <h2 className="text-lg font-bold mb-4">Billing details</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1" htmlFor="firstName">First name *</label>
                  <input id="firstName" type="text" className="w-full border p-2" />
                </div>
                <div>
                  <label className="block mb-1" htmlFor="lastName">Last name *</label>
                  <input id="lastName" type="text" className="w-full border p-2" />
                </div>
              </div>
              <div>
                <label className="block mb-1" htmlFor="companyName">Company name (optional)</label>
                <input id="companyName" type="text" className="w-full border p-2" />
              </div>
              <div>
                <label className="block mb-1" htmlFor="country">Country/Region *</label>
                <input id="country" type="text" className="w-full border p-2" defaultValue="India" readOnly />
              </div>
              <div>
                <label className="block mb-1" htmlFor="streetAddress">Street address *</label>
                <input id="streetAddress" type="text" className="w-full border p-2" placeholder="House number and street name" />
                <input type="text" className="w-full border p-2 mt-2" placeholder="Apartment, suite, unit, etc. (optional)" />
              </div>
              <div>
                <label className="block mb-1" htmlFor="city">Town / City *</label>
                <input id="city" type="text" className="w-full border p-2" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1" htmlFor="state">State *</label>
                  <select id="state" className="w-full border p-2">
                    <option>Select an option...</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1" htmlFor="pinCode">PIN Code *</label>
                  <input id="pinCode" type="text" className="w-full border p-2" />
                </div>
              </div>
              <div>
                <label className="block mb-1" htmlFor="phone">Phone *</label>
                <input id="phone" type="text" className="w-full border p-2" />
              </div>
              <div>
                <label className="block mb-1" htmlFor="email">Email address *</label>
                <input id="email" type="email" className="w-full border p-2" />
              </div>
              <div>
                <label className="block mb-1" htmlFor="orderNotes">Order notes (optional)</label>
                <textarea id="orderNotes" className="w-full border p-2" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
              </div>
            </form>
          </div>
        </div>

        <div className="w-1/3">
          <div className="border p-6">
            <h2 className="text-lg font-bold mb-4">Your order</h2>
            <div className="border-b pb-4 mb-4">
              <div className="flex justify-between mb-2">
                <span>Product</span>
                <span>Subtotal</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Product name</span>
                <span>₹115.00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>₹115.00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>₹80.00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Cash on delivery</span>
                <span>₹20.00</span>
              </div>
              <div className="flex justify-between mb-2 font-bold">
                <span>Total</span>
                <span>₹215.00</span>
              </div>
            </div>
            <div className="mb-4">
              <div>
                <input id="cashOnDelivery" type="radio" name="paymentMethod" className="mr-2" defaultChecked />
                <label htmlFor="cashOnDelivery">Cash on delivery</label>
                <p className="text-sm">Pay with cash upon delivery.</p>
              </div>
              <div className="mt-2">
                <input id="razorpay" type="radio" name="paymentMethod" className="mr-2" />
                <label htmlFor="razorpay">UPI/Credit Card/Debit Card/NetBanking</label>
                <p className="text-sm">Pay by Razorpay</p>
              </div>
            </div>
            <button className="w-full bg-green-600 text-white p-2 rounded">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
