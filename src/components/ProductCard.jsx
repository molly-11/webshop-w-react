import { useContext } from "react";
import "../styles/ProductCard.css";
import { ShopContext } from "./shop-context";

function CreateProductCard({ plants }) {
  const { cartItems, addToCart } = useContext(ShopContext);

  return (
    <div id="productsWrapper">
      {plants.map((plant) => (
        <div className="productCard" key={plant.id}>
          <img src={plant.img} alt="Plant image" />
          <div className="productData">
            <p className="productName">{plant.name}</p>
            <p className="productPrice">$ {plant.price}</p>
            <p className="productCategory">Category: {plant.type}</p>
          </div>

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
              <img src="./assets/images/cart.svg" alt="Add to cart" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CreateProductCard;
