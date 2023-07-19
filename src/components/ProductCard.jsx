import { useContext, useState } from "react";
import "../styles/ProductCard.css";
import { ShopContext } from "./shop-context";

function CreateProductCard(props) {
  const plants = props.plants;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  const [isActive, setIsActive] = useState(false);

  const cartItemQty = cartItems[plants.id];

  return (
    <div id="productsWrapper">
      {plants.map((plant) => (
        <div className="productCard" key={plant.id} >
          <img src={plant.img} alt="Plant image" />
          <div className="productData">
            <p className="productName">{plant.name}</p>
            <p className="productPrice">$ {plant.price}</p>
            <p className="productCategory">Category: {plant.type}</p>

            {/*<div>
              {isActive ? (
                <img className="chevron" src="src\assets\images\down.svg" alt="Click for details" onClick={() => setIsActive(!isActive)}/>
              ) : (
                <img className="chevron" src="src\assets\images\up.svg" alt="Hide details" onClick={() => setIsActive(!isActive)}/>
              )
            </div>*/}
          </div>
          {/*{isActive && (
            <div className="accordion-content ">{plant.description}</div>
          )}*/}

          <div className="shop">
            <p className="shopQty">
              Added to cart: <span>{cartItems[plant.id]} </span> pcs
            </p>

            <button
              className="addToCart"
              onClick={(e) => {
                e.preventDefault();
                addToCart(plant.id);
              }}
            >
              <img src="src\assets\images\cart.svg" alt="Add to cart" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CreateProductCard;
