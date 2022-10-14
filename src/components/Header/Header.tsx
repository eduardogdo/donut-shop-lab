import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import "./Header.css";

const Header = () => {
  const { cart } = useContext(CartContext);
  return (
    <header className="Header">
      <Link to={"/"}>
        <h1>Donut Shop</h1>
      </Link>

      <div className={"cart-section"}>
        <Link to={"/cart"}>
          {cart.length > 0 && <i className={"badge"}>{cart.length}</i>}
          <i>&#x1F6D2;</i>
        </Link>
      </div>
    </header>
  );
};

export default Header;
