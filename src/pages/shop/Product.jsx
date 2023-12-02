import React, { useContext } from "react";
import { ShopContext } from "../../context/Shop-context";

const Product = (props) => {
  const { productName, price, productImage } = props.data;
  const { addToCart } = useContext(ShopContext);

  const handleAddToCart = () => {
    addToCart(props.data.id);
  };

  return (
    <article className="product">
      <div className="product__img">
        <img src={productImage} alt="product" />
      </div>
      <div className="product__body">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="btn addToCartBtn" onClick={handleAddToCart}>
        Add To Cart
      </button>
    </article>
  );
};

export default Product;
