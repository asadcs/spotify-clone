import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

const Login = () => {
  return (
    <div className="login">
      <img src="https://i.imgur.com/mL4iAd0.png" alt="" />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
      {/* <a href="">LOGIN WITH SPOTIFY</a> */}
    </div>
  );
};

export default Login;
