import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Products() {
  const totalItem = useSelector((state) => state.cart);
  return (
    <header>
      <div className="header-area py-4 fs-5">
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>Cart {totalItem.length}</Link>
      </div>
    </header>
  );
}
