import { useEffect, useState } from "react";
import CreateProductCard from "../components/ProductCard";
import "../styles/ProductCard.css";
import { PRODUCTS } from "../productlist";
import { Link } from "react-router-dom";

function Products() {
  //const [plants, setPlants] = useState(PRODUCTS);

  return (
    <>
      <nav>
        <div>
          <img
            id="logo"
            src="src\assets\logo\logo3.svg"
            alt="Always Green Plants"
          />
        </div>
        <div id="menu">
          
          <Link to={"/"}>Home</Link>
          <Link to={"/cart"}>Shopping Cart</Link>{" "}
        </div>
      </nav>
      <div id="products">
        <p>Products</p>
        {PRODUCTS && <CreateProductCard plants={PRODUCTS} />}
      </div>
    </>
  );
}

export default Products;
