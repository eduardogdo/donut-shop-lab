import { useContext } from "react";
import CartContext from "../../context/CartContext";
import "./Cart.css";
import CartList from "./CartList";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="Cart">
      <CartList items={cart}></CartList>
    </div>
  );
};

export default Cart;
