import { Link } from "react-router-dom";
import DonutResponse from "../../models/DonutResponse";
import "./DonutList.css";

interface Props {
  donuts: DonutResponse[];
}
const DonutList = ({ donuts }: Props) => {
  return (
    <div className="DonutList">
      <ul>
        {donuts &&
          donuts?.map((item: DonutResponse, key) => (
            <li key={key}>
              <Link to={`donut/${item.id}`}>{item.name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DonutList;
