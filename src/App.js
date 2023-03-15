import React from "react";
import Login from "./components/Login/Login";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";
import "./app.css";

const App = () => {
  return (
    <div className="container">
      <div className="cta-form--box">
        <Login></Login>
        <UpdateProfile></UpdateProfile>
      </div>
    </div>
  );
};

export default App;
