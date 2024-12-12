import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header id="nav-header">
      <h1>Planets!</h1>
      <nav>
        <Link to="/planets/" className="nav-link">
          All Planets
        </Link>
        <Link to="/planets/rock" className="nav-link">
          Rock Planets
        </Link>
        <Link to="/planets/gas" className="nav-link">
          Gas Planets
        </Link>
      </nav>
    </header>
  );
};
