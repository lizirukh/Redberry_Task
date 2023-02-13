import React, {useState} from "react";
import "./Header.css";
import Vector from "../assets/Vector.png";
import Landing from "./Landing";

const Header = (title, pageNum) => {
  const [active, setActive] =useState(false);

  if (active) {
    return <Landing/>
  }

  return (
    <div className="header">
      <div className="container">
        <button className="btn" onClick={() => {setActive(true)}}>
          <img src={Vector} alt="" />
        </button>
        <div className="cont1">
          <div className="title1">ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ</div>
          <div className="pageNum">1/3</div>
        </div>
      </div>
      <hr className="line" />
    </div>
  );
};

export default Header;
