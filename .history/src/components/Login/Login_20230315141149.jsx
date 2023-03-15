import React from "react";
import "./login.css";
import "../index.css";

const Login = () => {
  return (
    <div>
      <form className="cta cta-form--sign-in" name="login">
        <div>
          <label htmlFor="log-in">Login</label>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            placeholder="example@kyanon.digital"
            name="email"
            required
          ></input>
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            placeholder="******"
            name="password"
            required
          ></input>
        </div>

        <div className="password-checkbox">
          <label htmlFor="check-box">show password</label>
          <input
            id="check-box"
            className="checkbox-input"
            type="checkbox"
            name="check-box"
          ></input>
        </div>

        <button className="btn btn--form">Sign in</button>
      </form>
    </div>
  );
};

export default Login;
