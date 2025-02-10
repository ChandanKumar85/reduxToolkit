import React from "react";
import AppRouter from "./AppRouter";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/Store";
import Products from "./Products";

const Dashboard = () => {
  return (
    <Provider store={store}>
      <Products />
      <div className="container">
        <AppRouter />
        <Outlet />
      </div>
    </Provider>
  );
};

export default Dashboard;
