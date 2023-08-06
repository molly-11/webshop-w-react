import { Link } from "react-router-dom";
import "../styles/App.css";
import Burger from "./Burger";

function Navbar() {
  return (
    <nav id="home">
      <Link to={"/"}>
        <img
          id="logo"
          src="./assets/logo/logo3.svg"
          alt="Always Green Plants"
        />
      </Link>
      <div id="menu">
        <Burger />
      </div>
    </nav>
  );
}

export default Navbar;
