import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <header>
      <img src="./assets/LOGO.png" alt="" />
      <ul>
        <NavLink
          to="/"
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
