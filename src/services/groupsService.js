import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/groups";

// function OrderUrl(id) {
//   return `${apiEndpoint}/${id}`;
//}

export function getGroups() {
  return http.get(apiEndpoint);
}
