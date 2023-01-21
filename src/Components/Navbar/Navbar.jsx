import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-logo">
          <img
            src="../../img/logo.png"
            alt="logo"
          />
        </div>
      </div>
      <div className="n-right">
        <div className="n-list">
            <ul>
                <li className="n-item">Home</li>
                <li className="n-item">About</li>
                <li className="n-item">Portfolio</li>
                <li className="n-item">Contact</li>
            </ul>
        </div>
        <button className="btn n-btn">Contact Me</button>
      </div>
    </div>
  );
};

export default Navbar;
