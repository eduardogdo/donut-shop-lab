import DonutResponse from "./DonutResponse";

export default interface DonutListResponse {
  count: number;
  results: DonutResponse[];
}
