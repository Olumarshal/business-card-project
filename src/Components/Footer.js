import React from "react";
import Twitter from "../Assets/Twitter Icon.png";
import Facebook from "../Assets/Facebook Icon.png";
import Instagram from "../Assets/Instagram Icon.png";
import GitHub from "../Assets/GitHub Icon.png";

export default function Footer() {
  return (
    <div className="Footer">
        <img src={Twitter} className="Twitter__icon" alt="" />
        <img src={Facebook} className="Facebook__icon" alt="" />
        <img src={Instagram} className="Instagram__icon" alt="" />
        <img src={GitHub} className="GitHub__icon" alt="" />
    </div>
  );
}
