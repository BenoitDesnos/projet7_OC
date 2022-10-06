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
            className={(nav) =>
              nav.isActive ? "nav-active hover size3" : "hover size3"
            }
          >
            ACCUEIL
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/About"
            className={(nav) =>
              nav.isActive ? "nav-active hover size3" : "hover size3"
            }
          >
            A PROPOS
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Navigation;
