import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DonutResponse from "../../models/DonutResponse";
import { getDonutDetail } from "../../services/DonutService";
import Donut from "../Donut/Donut";
import "./Detail.css";

const Detail = () => {
  const [donut, setDonut] = useState<DonutResponse>();
  const id: string | undefined = useParams().id;

  useEffect(() => {
    getDonutDetail(id!).then((respo: DonutResponse) => {
      setDonut(respo);
    });
  }, [id]);

  return (
    <div className="Detail">
      {donut ? <Donut donut={donut}></Donut> : <p>Loading...</p>}
    </div>
  );
};

export default Detail;
