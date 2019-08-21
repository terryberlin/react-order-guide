import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/locations";

export function getLocations() {
  return http.get(apiEndpoint);
}
