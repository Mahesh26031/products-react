import React, { Component } from "react";
const { data } = require("./items");

class Products extends Component {
  render() {
    return (
      <div>
        {data.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <img
              src={product.image}
              alt={product.title}
              height={200}
              width={200}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Products;
