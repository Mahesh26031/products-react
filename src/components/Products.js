import React, { Component } from "react";

function Products({ product }) {
  return (
    <div className="product-container" key={product.id}>
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-details">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
      </div>
    </div>
  );
}

export default Products;
