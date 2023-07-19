import { ShopContext } from "./shop-context";
import { useContext } from "react";

function CartItem(props) {
  const data = props.data;
  const { cartItems, addToCart, removeFromCart } =
    useContext(ShopContext);

  return (
    <div>
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
            className="qtyDecr"
            onClick={(e) => {
              e.preventDefault();
              removeFromCart(data.id);
            }}
          >
            -
          </button>
          <div className="shopQty">{cartItems[data.id]}</div>
          <button
            className="qtyIncr"
            onClick={(e) => {
              e.preventDefault();
              addToCart(data.id);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
