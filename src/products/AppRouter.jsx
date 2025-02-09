import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductsListing from "./ProductsListing";
import CartPage from "./CartPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="" element={<ProductsListing />} />
      <Route path="cart" element={<CartPage />} />
    </Routes>
  );
}
