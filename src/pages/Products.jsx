import { useContext, useEffect, useState } from "react";
import CreateProductCard from "../components/ProductCard";
import "../styles/ProductCard.css";
import { PRODUCTS } from "../productlist";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { ShopContext } from "../components/shop-context";

function Products() {
  //const [plants, setPlants] = useState(PRODUCTS);
  const { products, filterProducts } =
    useContext(ShopContext);

  return (
    <>
      <nav>
        <div>
        <Link to={"/"}><img
            id="logo"
            src="./assets/logo/logo3.svg"
            alt="Always Green Plants"
          /></Link>
        </div>
        <div id="menu">
          
          <Link to={"/"}>Home</Link>
          <Link to={"/cart"}>Shopping Cart</Link>{" "}
        </div>
      </nav>
      <div id="products">
        <h1>Products</h1>
        <SearchBar/>
        {products && <CreateProductCard plants={products} />}
      </div>
    </>
  );
}

export default Products;
