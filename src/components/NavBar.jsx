import React, { useState, useRef, useEffect } from "react";
import "../styles/navbar.css";
import Media from "react-media";
// import TemporaryDrawer from "./drawer";

const NavBar = () => {
  const [display, setDisplay] = useState(false);
  const [displayHamBurgerMenu, setDisplayHamBurgerMenu] = useState(false);

  const ref = useRef(null);
  const companyButtonRef = useRef(null);
  const Clickout = (eve) => {
    if (
      ref.current &&
      !ref.current.contains(eve.target) &&
      !companyButtonRef.current.contains(eve.target)
    ) {
      setDisplay(false);
      setDisplayHamBurgerMenu(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", Clickout);
    return () => {
      document.removeEventListener("mousedown", Clickout);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="navlogodiv">
        <a href="/">
          <img className="logo" src="techgenixlogo.png" alt="" />
        </a>

        {/* <h1 className="companyName">TECHGENIX</h1> */}
      </div>
      <Media query="(max-width: 1024px)">
        {(matches) =>
          !matches ? (
            <div className="navlinksdiv">
              <div className="navlink">
                <a className="link" href="/">
                  <b>Home</b>
                </a>
              </div>
              <div className="navlink">
                <a className="link" href="/#services">
                  <b>Services</b>
                </a>
              </div>
              <div className="navlink">
                <a className="link" href="/#contact">
                  <b>Contact Us</b>
                </a>
              </div>
              <div className="navlink">
                <a className="link" href="/#aboutUs">
                  <b>About Us</b>
                </a>
              </div>
              <div className="navlink">
                <button
                  className="link"
                  ref={companyButtonRef}
                  onClick={() => setDisplay(!display)}
                >
                  <b>Company</b>
                </button>
              </div>

              {display ? (
                <div className="company-sidebar" ref={ref}>
                  <div className="navlink">
                    <a className="link" href="/team">
                      <img
                        className="sidebar-logos"
                        src="teamlogo.png"
                        alt=""
                      />
                      <b>Team</b>
                    </a>
                  </div>
                  <div className="navlink">
                    <a className="link" href="/careers">
                      <img
                        className="sidebar-logos"
                        src="careerlogo.jpg"
                        alt=""
                      />
                      <b>Careers</b>
                    </a>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          ) : (
            <div className="navlinksdiv">
              <div
                className="hamburger-icon-container"
                onClick={() => {
                  setDisplayHamBurgerMenu(!displayHamBurgerMenu);
                }}
                ref={companyButtonRef}
              >
                <img
                  className="hamburger-icon"
                  src="hamburger-icon3.png"
                  alt=""
                />
              </div>
              {displayHamBurgerMenu ? (
                <div className="nav-sidebar" ref={ref}>
                  <div className="nav-sidebar-link">
                    <a className="link" href="/">
                      <img
                        className="sidebar-logos"
                        src="home-icon2.png"
                        alt="Home Icon"
                      />
                      <b>Home</b>
                    </a>
                  </div>
                  <div className="nav-sidebar-link">
                    <a className="link" href="/#services">
                      <img
                        className="sidebar-logos"
                        src="services-icon.png"
                        alt="Services Icon"
                      />
                      <b>Services</b>
                    </a>
                  </div>
                  <div className="nav-sidebar-link">
                    <a className="link" href="/#contact">
                      <img
                        className="sidebar-logos"
                        src="contact-icon5.png"
                        alt="contact icon"
                      />
                      <b>Contact Us</b>
                    </a>
                  </div>
                  <div className="nav-sidebar-link">
                    <a className="link" href="/#aboutUs">
                      <img
                        className="sidebar-logos"
                        src="aboutus-icon.jpg"
                        alt="about us icon"
                      />
                      <b>About Us</b>
                    </a>
                  </div>
                  <div className="nav-sidebar-link">
                    <a className="link" href="/team">
                      <img
                        className="sidebar-logos"
                        src="teamlogo.png"
                        alt=""
                      />
                      <b>Team</b>
                    </a>
                  </div>
                  <div className="nav-sidebar-link">
                    <a className="link" href="/careers">
                      <img
                        className="sidebar-logos"
                        src="careerlogo.jpg"
                        alt=""
                      />
                      <b>Careers</b>
                    </a>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          )
        }
      </Media>
    </div>
  );
};

export default NavBar;
