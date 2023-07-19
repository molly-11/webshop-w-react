import { useContext } from "react";
import CartItem from "../components/CartItem";
import { PRODUCTS } from "../productlist";
import { ShopContext } from "../components/shop-context";
import { Link } from "react-router-dom";
import "../styles/ShoppingCart.css"

function ShoppingCart() {
  const { cartItems, getTotalAmount } = useContext(ShopContext);

  const totalAmount = getTotalAmount();

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
          <Link to={"/products"}>Continue Shopping</Link>{" "}
        </div>
      </nav>
      <div className="cartWrapper">
        <h1>Shopping cart</h1>
        <div className="cartItems">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} key={product.id} />;
            }
          })}
        </div>
        <div id="totalPice"> Total amount:  <span>
        $ {totalAmount}</span></div>
      </div>
    </>
  );
}

export default ShoppingCart;
