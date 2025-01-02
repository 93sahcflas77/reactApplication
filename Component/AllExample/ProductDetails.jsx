import React from 'react'
import { useParams } from "react-router-dom";
import data from "../AllExample/data";

function ProductDetails() {

    const {id} = useParams();
    const product = data.find((val) => val.id === Number(id));

  return (
    <>
        <h1>{product.brand}</h1>
        <p>{product.title}</p>
        {/* <P>{product.category}</P> */}
        {/* <P>{product.description}</P> */}
        {/* <P>{product.discountPercentage}</P> */}
        {/* <P>{product.price}</P> */}
        {/* <P>{product.rating}</P> */}
        {/* <P>{product.stock}</P> */}
        {/* <P>{product.thumbnail}</P> */}
    </>
  )
}

export default ProductDetails