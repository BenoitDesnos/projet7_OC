// origin Home.js

import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function Navigation() {
  return (
    <header>
      <Logo />
      <ul>
        <NavLink
          to="/Home"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>Accueil</li>
        </NavLink>

        <NavLink
          to="/About"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>About</li>
        </NavLink>
      </ul>
    </header>
  );
}

export default Navigation;
