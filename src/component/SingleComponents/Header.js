import React from "react";
import logo from "../../assets/images/logo.png";
import "../css/Header.css";

const Header = () => {
  return (
    <>
      <div className="div_header">
        <div className="img_wrapper">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="header_liner"></div>
    </>
  );
};

export default Header;
