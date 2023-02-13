// import React, { useState } from "react";
import { useState } from "react";
import Header from "./Header";
import "./InfoPage.css";
import Landing from "./Landing";

const InfoPage = () => {
//   const [name, setName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [error, setError] = useState(false);

//   const handler = (e) => {
//     e.preventDefault();
//     if (name.length<2 || lastName.length<2) {
//         setError(true);
//     }
//     if (error) {
//         // setName("item1True");
//         console.log(name)
//     }
//   };

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
            //   onClick={ handler }
            />
            {/* <br /> */}
            <label className="valError">მინიმუმ 2 ასო, ქართული ასოები</label>
          </div>
          <div>
            <label className="lastName">გვარი</label>
            <br />
            <input
              className="item2"
              placeholder="მუმლაძე"
            //   onChange={(e) => setLastName(e.target.value)}
            />
            <label className="valError1">მინიმუმ 2 ასო, ქართული ასოები</label>
          </div>
        </div>
        <div className="uploadingImg">
            <label className="imgLab">პირადი ფოტოს ატვირთვა</label>
            <input type="file" name="file"/>                
        </div>
        <div className="aboutMe">
            <label className="ab">ჩემ შესახებ (არასავალდებულო)</label>
            <input type="text" placeholder="ზოგადი ინფო შენ შესახებ" className="aboutMeText"/>
        </div>

        <div className="emailCont">
            <label className="eLab">ელ.ფოსტა</label>
            <input type="text" placeholder="anzor666@redberry.ge" className="email"/>
            <label className="emailVal">უნდა მთავრდებოდეს @redberry.ge-ით</label>
        </div>

        <div className="numberCont">
            <label className="numLab">მობილურის ნომერი</label>
            <input type="text" placeholder="+995 555 55 55 88" className="number"/>
            <label className="numVal">უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</label>
        </div>

        <button type="submit">ᲨᲔᲛᲓᲔᲒᲘ</button>
      </div>

      <div className="CV"></div>
    </div>
  );
};

export default InfoPage;
