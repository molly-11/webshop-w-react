import { useEffect, useState } from "react";
import CreateProductCard from "./ProductCard";
import"../styles/ProductCard.css"

function CreateProducts() {
  const [plants, setPlants] = useState(null);

  useEffect(() => {
    fetch("data/plants.json")
      .then((response) => {
        return response.json();
      })
      .then((data)=>{
        setPlants(data);
        console.log(data)
      });
  }, []);

  return (
    <div id="products">
      <p>Products</p>
     {plants && <CreateProductCard plants={plants}/>}
    </div>
  );
}

export default CreateProducts;
