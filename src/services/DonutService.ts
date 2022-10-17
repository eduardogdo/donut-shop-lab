import axios from "axios";
import DonutListResponse from "../models/DonutListResponse";
import DonutResponse from "../models/DonutResponse";

export const getDonuts = (): Promise<DonutListResponse> => {
  return axios
    .get(`https://grandcircusco.github.io/demo-apis/donuts.json`)
    .then((response) => {
      return response.data;
    });
};

export const getDonutDetail = (id: string): Promise<DonutResponse> => {
  return axios
    .get(
      `https://grandcircusco.github.io/demo-apis/donuts/${encodeURIComponent(
        id
      )}.json`
    )
    .then((response) => {
      return response.data;
    });
};
