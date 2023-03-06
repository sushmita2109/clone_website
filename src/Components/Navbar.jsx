import React from "react";
import "./styles/Navbar.css";

export const Navbar = () => {
  return (
    <div className="navBar">
      <div className="logo">Logo</div>
      <div className="right">
        <button className="detailBtn">What's New</button>
        <div className="userName">User Name</div>
        <label className="switch">
          <input type="checkbox"></input>
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
};
