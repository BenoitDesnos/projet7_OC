// used in Home.js, About.js, Lodging.js, NotFound.js
import React from "react";
import Logo from "../assets/VectorLogo.svg";

function Footer() {
  return (
    <footer>
      <img src={Logo} alt="kasa Logo" />
      <p className="size3">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
