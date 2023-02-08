import React from "react";
import "./Landing.css";
import Logo from "../assets/logo.png";
// import Logo2 from "../assets/logo2.png";

const Landing = () => {
  const addHandler = () => {
    alert("Successful!");
  }

  return (
    <div className="landing">
      <img src={Logo} alt="" className="logo" />
      <hr className="hr"/>
      <button className="button" onClick={addHandler}>რეზიუმეს დამატება</button>
    </div>
  );
};

export default Landing;
