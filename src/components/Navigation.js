// used in Home.js, About.js, Lodging.js, NotFound.js

import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <header>
      <img src="./assets/LOGO.png" alt="Logo Kasa" />;
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
