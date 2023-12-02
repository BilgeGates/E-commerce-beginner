import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/Shop-context";

const CartItem = ({ data }) => {
  const { cartItems, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  const handleRemoveFromCart = () => {
    removeFromCart(data.id);
  };

  const handleInputChange = (e) => {
    const newAmount = parseInt(e.target.value);
    updateCartItemCount(newAmount, data.id);
  };

  return (
    <div className="cart-item">
      <img src={data.productImage} alt={data.productName} />
      <h3>{data.productName}</h3>
      <p>${data.price}</p>
      <div className="quantity-controls">
        <button onClick={handleRemoveFromCart}>-</button>
        <input
          type="number"
          value={cartItems[data.id]}
          onChange={handleInputChange}
        />
        <button
          onClick={() => updateCartItemCount(cartItems[data.id] + 1, data.id)}
        >
          +
        </button>
      </div>
      <Link
        className="btn"
        to={`/cart`}
        state={{ productId: data.id }}
        onClick={handleRemoveFromCart}
      >
        Remove from Cart
      </Link>
    </div>
  );
};

export default CartItem;
