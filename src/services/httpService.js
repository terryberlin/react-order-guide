import axios from "axios";
//import logger from "./logService";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response && error.response >= 400 && error.response.status < 500;

  if (!expectedError) {
    console.log("Logging error", error);
    //Raven.captureException(error);
    //logger.log(error);
    //toast.error("An unexpected error occurred.");
    toast("An unexpected error occurred.");
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};
