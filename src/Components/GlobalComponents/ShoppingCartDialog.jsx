import React, { useState, useEffect } from "react";
import CartProduct from "../GlobalComponents/CartProduct";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, removeFromCart } from "../../service/CartReducer";
import { getCart } from "../../service/cartApiService";
import { auth } from "../../firebaseConfig";
import axios from "axios";

export default function ShoppingCartDialog({ size, handleOpen }) {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.cart);

  const [totals, setTotals] = useState({
    netTotal: 0,
    taxes: 0,
    shippingCharges: 90, // Fixed shipping charge
    total: 0,
  });

  const handleQuantityChange = (id, delta) => {
    dispatch(updateQuantity({ productId: id, delta }));
  };

  const handleBuyNow = async(id) => {
    const valueofCart =await axios.post('http://localhost:3000/cart/',{
      "firebaseUid": auth.currentUser.uid
    } ) (auth.currentUser.uid);
    console.log(await valueofCart)
  };

  const handleDelete = (id) => {
    dispatch(removeFromCart({ productId: id }));
  };

  useEffect(() => {
    const netTotal = cartItems.reduce(
      (total, product) => total + product.product.price * product.quantity,
      0
    );
    const taxes = netTotal * 0.028; // 2.8% tax
    const total = netTotal + taxes + totals.shippingCharges;

    setTotals({
      netTotal,
      taxes,
      shippingCharges: totals.shippingCharges,
      total,
    });
  }, [cartItems, totals.shippingCharges]);

  return (
    <Dialog
      open={["xs", "sm", "md", "lg", "xl", "xxl"].includes(size)}
      size={size || "md"}
      handler={handleOpen}
    >
      <DialogHeader>
        <p className="px-4">SHOPPING CART</p>
      </DialogHeader>
      <DialogBody>
        <div className="max-h-[50vh] px-1 md:px-4 space-y-4 md:space-y-4 overflow-y-auto">
          {cartItems.map((product) => (
            <CartProduct
              key={product.product.id} // Use unique id from product
              product={product.product}
              quantity={product.quantity}
              onQuantityChange={handleQuantityChange}
              onBuyNow={handleBuyNow}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </DialogBody>
      <DialogFooter>
        <div className="w-full px-2 md:px-4">
          <div className="footer flex justify-between">
            <div>
              <p>Net Total</p>
              <p>Taxes</p>
              <p>Shipping Charges</p>
              <p>Total</p>
            </div>
            <div>
              <p>Rs. {totals.netTotal.toFixed(2)}</p>
              <p>Rs. {totals.taxes.toFixed(2)}</p>
              <p>Rs. {totals.shippingCharges.toFixed(2)}</p>
              <p>Rs. {totals.total.toFixed(2)}</p>
            </div>
          </div>
          <div className="text-right pt-4">
            <Button
              variant="text"
              color="red"
              onClick={() => handleOpen(null)}
              className="mr-1"
            >
              <span>Close Cart</span>
            </Button>
            <Button
              variant="gradient"
              color="green"
              onClick={() => handleOpen(null)}
            >
              <span>Place Order</span>
            </Button>
          </div>
        </div>
      </DialogFooter>
    </Dialog>
  );
}
