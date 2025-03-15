import React from "react";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <>
      <h1>Welcome to AuthLayout</h1>
      <Outlet />
    </>
  );
};

export default AuthLayout;
