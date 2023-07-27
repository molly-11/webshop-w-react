import { Link } from "react-router-dom";
import "../styles/Home.css";

function Footer() {
  return (
    <footer>
      <div id="footerTop">
        <div id="footerText">
          <img className="logo" src="src\assets\logo\logo3.svg" />
          <div id="footerLinks">
            {" "}
            <a href="#home">Home</a>
            <Link to={"/products"}>Web Shop</Link>
            <Link to={"/cart"}>Shopping cart</Link>
            <Link>Contact</Link>
          </div>
        </div>
        <div id="footerIcons">
          <img
            src="src\assets\images\facebook.svg"
            alt="Facebook logo"
            className="socialMedia"
          />
          <img
            src="src\assets\images\instagram.svg"
            alt="INstagram logo"
            className="socialMedia"
          />
          <img
            src="src\assets\images\twitter.svg"
            alt="Twitter logo"
            className="socialMedia"
          />
        </div>
      </div>

      <div id="footerBottom">created by Edit Selmeczi, 2023</div>
    </footer>
  );
}

export default Footer;
