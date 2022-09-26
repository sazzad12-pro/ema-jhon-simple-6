import React from "react";
import "./header.css";
import Img from "../../images/Logo.svg";

const Header = () => {
  return (
    <div className="header-container">
      <div className="img-container">
        <img src={Img} alt="" />
      </div>
      <div className="text-container">
        <li>Order</li>
        <li>Order Review</li>
        <li>Manage Inventory</li>
      </div>
    </div>
  );
};

export default Header;
