import React from "react";
import "./Header.css";
import Vector from "../assets/Vector.png";

const Header = (title, pageNum) => {
  return (
    <div className="header">
      <div className="container">
        <button className="btn">
          <img src={Vector} alt="" />
        </button>
        <div className="cont1">
          <div className="title1">პირადი ინფო</div>
          <div className="pageNum">1/3</div>
        </div>
      </div>
      <hr className="line" />
    </div>
  );
};

export default Header;
