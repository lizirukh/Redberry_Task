import React, { useState } from "react";
import "./Landing.css";
import Logo from "../assets/logo.png";
import InfoPage from "./InfoPage";
// import Logo2 from "../assets/logo2.png";
import { Navigate } from 'react-router-dom';

const Landing = () => {
  const [active, setActive] =useState(false);

  if (active) {
    return <InfoPage/>
  }

  return (
    <div className="landing">
      <img src={Logo} alt="" className="logo" />
      <hr className="hr"/>
      <button className="button" onClick={() => {setActive(true)}}>ᲠᲔᲖᲘᲣᲛᲔᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ</button>
    </div>
  );
};

export default Landing;
