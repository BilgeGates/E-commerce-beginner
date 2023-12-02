import React from "react";
import productsList from "../../products";
import Product from "./Product";
import "./shop.css";

const Shop = () => {
  return (
    <div className="container shop__container">
      <div className="shopTitle">
        <h1>PedroTech Shop</h1>
      </div>
      <div className="products">
        {productsList.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
