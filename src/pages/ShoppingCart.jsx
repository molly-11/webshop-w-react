import { useContext } from "react";
import CartItem from "../components/CartItem";
import { PRODUCTS } from "../productlist";
import { ShopContext } from "../components/shop-context";

function ShoppingCart() {
  const { cartItems, getTotalAmount } = useContext(ShopContext);

  const totalAmount = getTotalAmount();

  return (
    <div className="cartWrapper">
      <h1>Shopping cart</h1>
      <div className="cartItems">
        {PRODUCTS.map((product)=>{
          if(cartItems[product.id]!==0){
            return<CartItem data={product} key={product.id}/>
          }
        })}
      </div>
      <div id="totalPice"> Total amount: $ {totalAmount}</div>
    </div>
  );
}

export default ShoppingCart;
