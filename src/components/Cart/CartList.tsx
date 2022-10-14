import DonutResponse from "../../models/DonutResponse";
import CartItem from "./CartItem";
import "./CartList.css";

interface Props {
  items: DonutResponse[];
}

const CartList = ({ items }: Props) => {
  return (
    <div className="CartList">
      {items && items.length > 0 ? (
        items.map((item, key) => <CartItem item={item} key={key}></CartItem>)
      ) : (
        <p>Cart is empty</p>
      )}
    </div>
  );
};

export default CartList;
