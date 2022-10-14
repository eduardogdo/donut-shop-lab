import { useContext } from "react";
import CartContext from "../../context/CartContext";
import DonutResponse from "../../models/DonutResponse";
import "./CartItem.css";

interface Props {
  item: DonutResponse;
}
const CartItem = ({ item }: Props) => {
  const { removeItem } = useContext(CartContext);
  return (
    <div className="CartItem">
      <img src={item.photo} width="150" alt={item.name} />
      <hgroup>
        <h3 className={"mb-0"}>{item.name}</h3>
        <h4 className={"mt-0 mb-0"}>Price: 1$</h4>
        <h5 className={"mt-0"}>Calories: {item.calories}</h5>
      </hgroup>
      <button onClick={() => removeItem(item.id)}>
        <span>&#128465;</span>
      </button>
    </div>
  );
};

export default CartItem;
