import React, { useState } from "react";
import Header from "./Header";
import "./InfoPage.css";

const InfoPage = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState(false);

  const handler = (e) => {
    e.preventDefault();
    if (name.length<2 || lastName.length<2) {
        setError(true);
    }
    if (name&&lastName) {
        console.log("First Name: ", name, "Last Name: ", lastName);
    }
  };

  return (
    <div className="container">
      <div className="form">
        <Header />
        <div className="form1">
          <div>
            <label className="name">სახელი</label>
            <br />
            <input
              className="item1"
              placeholder="ანზორ"
              onChange={(e) => setName(e.target.value)}
            />
            {/* <br /> */}
            <label className="valError">მინიმუმ 2 ასო, ქართული ასოები</label>
          </div>
          <div>
            <label className="lastname">გვარი</label>
            <br />
            <input
              className="item2"
              placeholder="მუმლაძე"
              onChange={(e) => setLastName(e.target.value)}
            />
            <label className="valError1">მინიმუმ 2 ასო, ქართული ასოები</label>
          </div>
        </div>

        <div>
          <button onClick={handler}>Submit</button>
        </div>
      </div>

      <div className="CV"></div>
    </div>
  );
};

export default InfoPage;
