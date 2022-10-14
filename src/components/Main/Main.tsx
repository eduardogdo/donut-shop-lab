import { useEffect, useState } from "react";
import DonutListResponse from "../../models/DonutListResponse";
import { getDonuts } from "../../services/DonutService";
import DonutList from "../DonutList/DonutList";
import "./Main.css";

const Main = () => {
  const [donuts, setDonuts] = useState<DonutListResponse>();
  useEffect(() => {
    getDonuts().then((resp: DonutListResponse) => {
      setDonuts(resp);
    });
  }, []);

  return (
    <div className="Main">
      {donuts ? (
        <DonutList donuts={donuts.results}></DonutList>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Main;
