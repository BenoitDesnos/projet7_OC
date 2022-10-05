// origin Home.js

import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function Navigation() {
  return (
    <header>
      <Logo />
      <ul>
        <li>
          <NavLink
            to="/"
            end
            className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/About"
            className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
          >
            About
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Navigation;
