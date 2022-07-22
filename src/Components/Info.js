import React from "react";
import Mars from "../Assets/mars.jpg";
import Mail from "../Assets/Mail.png";
import linkedIn from "../Assets/linkedin.png";

export default function Info() {
  return (
    <div className="info__section">
      <img src={Mars} alt="" className="profile__photo" />
      <h1>Marshal Olu</h1>
      <h3 className="profile__title">Frontend Developer</h3>
      <a href="#www.google.com">Marshal's Website</a>
      <div className="btn">
        <button className="Email__btn">
          <img src={Mail} alt="" />
          <p>Email</p>
        </button>
        <button className="linkedIn__btn">
          <img src={linkedIn} alt="" />
          <p>LinkedIn</p>
        </button>
      </div>
    </div>
  );
}
