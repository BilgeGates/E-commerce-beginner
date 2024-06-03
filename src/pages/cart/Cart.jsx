import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/Shop-context";
import productsList from "../../products";
import CartItem from "./Cart-item";
import "./cart.css";

const Cart = () => {
  const { cartItems, getTotalCart, checkout } = useContext(ShopContext);
  const total = getTotalCart();
  const navigate = useNavigate();

  return (
    <div className="container cart__container">
      <h1>Your Cart Items</h1>
      <div className="cart-items">
        {productsList.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
          return null;
        })}
      </div>
      {total > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${total} </p>
          <button className="btn" onClick={() => navigate("/")}>
            Continue Shopping
          </button>
          <button
            className="btn"
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h1>Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
