import React from "react";
import "./login.css";
import "../index.css";

const Login = () => {
  const togglePasswordVisibility = () => {
    const show = document.getElementById("password");
    if (show.type === "password") {
      show.type = "text";
    } else {
      show.type = "password";
    }
  };

  return (
    <div>
      <form className="cta cta-form--sign-in" name="login">
        <div>
          <label className="log-in--label" htmlFor="log-in">
            Login
          </label>
        </div>
        <div>
          <label className="text-color--login" htmlFor="email">
            Email:
          </label>
          <input
            id="email"
            type="email"
            placeholder="example@kyanon.digital"
            name="email"
            required
          ></input>
        </div>

        <div>
          <label className="text-color--login" htmlFor="password">
            Password:
          </label>
          <input
            id="password"
            type="password"
            placeholder="******"
            name="password"
            required
          ></input>
        </div>

        <div className="password-checkbox">
          <div className="password-check-box-container">
            <input
              id="check-box"
              className="checkbox-input"
              type="checkbox"
              name="check-box"
              onChange={togglePasswordVisibility()}
            ></input>
            <label htmlFor="check-box" className="label-showPassword">
              Show password
            </label>
          </div>
          <button className="btn btn--form btn-sign-in">Sign in</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
