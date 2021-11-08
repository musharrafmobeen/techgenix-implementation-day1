import React from "react";
import "../styles/navbar.css";
// import TemporaryDrawer from "./drawer";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navlogodiv">
        <img className="logo" src="logoTechgenix.jpg" alt="" />
        <h1 className="companyName">TECHGENIX</h1>
      </div>
      <div className="navlinksdiv">
        <p className="navlink">
          <a className="link" href="#">
            <b>Home</b>
          </a>
        </p>
        <p className="navlink">
          <a className="link" href="#">
            <b>Services</b>
          </a>
        </p>
        <p className="navlink">
          <a className="link" href="#">
            <b>Projects</b>
          </a>
        </p>
        <p className="navlink">
          <a className="link" href="#">
            <b>About Us</b>
          </a>
        </p>
        {/* <TemporaryDrawer /> */}
      </div>
    </div>
  );
};

export default NavBar;
