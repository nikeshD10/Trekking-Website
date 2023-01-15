import React, { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";
import Logo from "../../assets/logo-icon.png";

function Navbar() {
  const [active, setActive] = useState("navBar");
  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  const removeNavbar = () => {
    setActive("navBar");
  };
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="" className="logo flex">
            <img src={Logo} alt="logo" />
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">
                Packages
              </a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">
                Shop
              </a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">
                About
              </a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">
                {" "}
                Pages
              </a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">
                News
              </a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">
                {" "}
                Contact
              </a>
            </li>
            <button className="btn">BOOK NOW</button>
          </ul>

          <div className="closeNavbar" onClick={removeNavbar}>
            <CancelIcon />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <MenuIcon />
        </div>
      </header>
    </section>
  );
}

export default Navbar;
