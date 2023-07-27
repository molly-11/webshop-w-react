import { Link } from "react-router-dom";
import "../styles/App.css"

function Navbar() {
  return (
    <nav id="home">
              <Link to={"/"}><img
            id="logo"
            src="src\assets\logo\logo3.svg"
            alt="Always Green Plants"
          /></Link>
      <div id="menu"><a>About</a>
      <Link to={"/products"}> <span>Shop</span></Link>
      <Link to={"/cart"}>Shopping Cart</Link>
      <a>Contact</a>
      </div>
      
    </nav>
  );
}

export default Navbar;
