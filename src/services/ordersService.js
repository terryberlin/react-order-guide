import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint =
  apiUrl +
  "/order?store=1001&orderdate=8/20/2019&builddays=7&historicalweeks=4";

export function getOrders() {
  return http.get(apiEndpoint);
}
