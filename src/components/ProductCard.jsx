import { useContext, useState } from "react";
import "../styles/ProductCard.css";
import { ShopContext } from "./shop-context";

function CreateProductCard(props) {
  const plants = props.plants;
  const { addToCart, cartItems } = useContext(ShopContext);

  // const [qty, setQty] = useState(0);

  const cartItemQty = cartItems[plants.id];

  return (
    <div id="productsWrapper">
      {plants.map((plant) => (
        <div className="productCard" key={plant.id}>
          <img src={plant.img} alt="Plant image" />
          <div className="productData">
            <p className="productName">{plant.name}</p>
            <p className="productPrice">{plant.price}</p>
            <p className="productCategory">{plant.type}</p>
            <form className="shop">
              <button className="qtyDecr">-</button>
              <input
                className="shopQty"
                type="number"
                defaultValue={cartItemQty}
                id={plant.id}
              />
              <button className="qtyIncr">+</button>
              <button
                className="addToCart"
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(plant.id);
                }}
              >
                <img src="src\assets\images\cart.svg" alt="Add to cart" />
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CreateProductCard;
