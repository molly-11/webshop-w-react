import { Link } from "react-router-dom";
import "../styles/App.css"

function CreateNavbar() {
  return (
    <nav >
      <div><img id="logo" src="src\assets\logo\logo3.svg" alt="Always Green Plants" /></div>
      <div id="menu"><a>About</a>
      <Link to={"/products"}>Shop</Link>
      <Link to={"/cart"}>Shopping Cart</Link>
      <a>Contact</a>
      </div>
      
    </nav>
  );
}

export default CreateNavbar;
