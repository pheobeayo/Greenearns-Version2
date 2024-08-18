import React from "react";
import bannerLogo from "../assets/Vector.svg";
import logo from "../assets/logo.svg"

const Footer = () => {
  return (
    <footer
      className="relative bg-[#2A382A] text-white"
      style={{
        backgroundImage: `url(${bannerLogo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="">
        <img src={logo} alt="" />
        <p>Where environmental consciousness meets blockchain innovation</p>
      </div>
    </footer>
  );
};

export default Footer;
