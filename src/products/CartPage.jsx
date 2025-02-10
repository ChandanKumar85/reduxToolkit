import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "./store/CartSlice";

export default function CartPage() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    console.log(productId);
    dispatch(remove(productId));
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
          <button
            className="btn btn-primary"
            onClick={() => handleRemove(item.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <h1 className="text-center my-4">Cart</h1>
      {!products.length > 0 ? (
        "Loading..."
      ) : (
        <div className="row">{productList}</div>
      )}
    </>
  );
}
