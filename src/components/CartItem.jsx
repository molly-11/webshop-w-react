import { ShopContext } from "./shop-context";
import { useContext } from "react";
import "../styles/ShoppingCart.css"

function CartItem(props) {
  const data = props.data;
  const { cartItems, addToCart, removeFromCart } =
    useContext(ShopContext);

  return (
    <>
      <div className="productInCart" key={data.id}>
        <img src={data.img} alt="Plant image" />
        <div className="cartItemData">
          <p className="cartItemName">{data.name}</p>
          <p className="cartUnitPrice">Unit price $ {data.price}</p>
          <p className="subtotal">
            Subtotal: $ {data.price * cartItems[data.id]}
          </p>
        </div>
        <div className="countHandler">
          <button
            className="qtyChange"
            onClick={(e) => {
              e.preventDefault();
              removeFromCart(data.id);
            }}
          >
            -
          </button>
          <div className="shoppedQty">{cartItems[data.id]}</div>
          <button
            className="qtyChange"
            onClick={(e) => {
              e.preventDefault();
              addToCart(data.id);
            }}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default CartItem;
