import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./store/CartSlice";
import { fetchProducts } from "./store/ProductSlice";
import { STATUS } from "./store/ProductSlice";

const ProductsListing = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAdd = (product) => {
    console.log(product);
    dispatch(add(product));
  };

  const productList = products.map((item) => (
    <div className="col-sm-3 mb-4" key={item.id}>
      <div className="card h-100 pt-3 text-center">
        <img
          src={item.image}
          className="card-img-top m-auto"
          style={{ maxWidth: "fit-content" }}
          height="200"
          alt={item.title}
        />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <h6>Price: {item.price}</h6>
          <button className="btn btn-primary" onClick={() => handleAdd(item)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <h1 className="text-center my-4">Products</h1>
      {status === STATUS.LOADING ? (
        <h2>Loading...</h2>
      ) : status === STATUS.ERROR ? (
        <h2>Error fetching products</h2>
      ) : (
        <div className="row">{productList}</div>
      )}
    </>
  );
};

export default ProductsListing;
