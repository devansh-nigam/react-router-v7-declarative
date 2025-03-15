import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <>
      <h1>Now you can login</h1>
      <Link to="/register">Register</Link>
    </>
  );
};

export default Login;
