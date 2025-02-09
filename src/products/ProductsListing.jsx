import React, { useEffect, useState } from "react";

const ProductsListing = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const productList = products.map((item) => (
    <div className="col-sm-3 mb-4">
      <div className="card h-100 pt-3 text-center">
        <img
          src={item.image}
          class="card-img-top m-auto"
          style={{ maxWidth: "fit-content" }}
          height="200"
          alt={item.title}
        />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <h6>Price: {item.price}</h6>
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      {!products.length > 0 ? (
        "Loading..."
      ) : (
        <div className="row">{productList}</div>
      )}
    </>
  );
};

export default ProductsListing;
