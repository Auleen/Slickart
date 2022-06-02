import React, { Component } from "react";
import Product from "./Product";

function ProductList(props) {
  const { list, incrementQ } = props;
  console.log(props);
  return props.list.map((item, i) => {
    return (
      <Product
        x={item}
        key={i}
        incrementQ={props.incrementQ}
        decrementQ={props.decrementQ}
        index={i}
      />
    );
  });
}

export default ProductList;
