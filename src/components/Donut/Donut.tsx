import { Link } from "react-router-dom";
import DonutResponse from "../../models/DonutResponse";
import "./Donut.css";

interface Props {
  donut: DonutResponse;
}

const Donut = (props: Props) => {
  return (
    <div className="Donut">
      <img src={props.donut?.photo} alt={props.donut?.name} width="150" />
      <h3>{props.donut?.name}</h3>
      <Link to={"/"}>Go back</Link>
    </div>
  );
};

export default Donut;
