import React from "react";
import AppRouter from "./AppRouter";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <header>
        <div className="header-area py-4">
          <h3>Shop</h3>
          <h3>Total items {0}</h3>
        </div>
        <h1 className="text-center mt-4">Products</h1>
      </header>
      <div className="container">
        <AppRouter />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
