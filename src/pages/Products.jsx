import { useEffect, useState } from "react";
import CreateProductCard from "../components/ProductCard";
import"../styles/ProductCard.css"
import { PRODUCTS } from "../productlist";
import { Link } from "react-router-dom";

function Products() {
  const [plants, setPlants] = useState(PRODUCTS);

 /* useEffect(() => {
    fetch("data/plants.json")
      .then((response) => {
        return response.json();
      })
      .then((data)=>{
        setPlants(data);
       // console.log(data)
      });
  }, []);*/

  return (
    <div id="products">
      <Link to={"/"}>Home</Link>
      <p>Products</p>
     {plants && <CreateProductCard plants={plants}/>}
    </div>
  );
}

export default Products;
