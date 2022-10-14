import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import DonutResponse from "../../models/DonutResponse";
import "./Donut.css";

interface Props {
  donut: DonutResponse;
}

const Donut = (props: Props) => {
  const { cart, addToCart } = useContext(CartContext);
  return (
    <div className="Donut">
      <img src={props.donut?.photo} alt={props.donut?.name} width="150" />
      <h3>{props.donut?.name}</h3>
      <button onClick={() => addToCart(props.donut)}>Add to cart</button>
      <Link to={"/"}>Go back</Link>
    </div>
  );
};

export default Donut;
