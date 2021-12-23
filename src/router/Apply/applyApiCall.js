import { API } from "../../backend";
import axios from "axios";

// post Contacts
export const createApply = (apply) => {
  return axios
    .post(`${API}apply/create`, apply)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
};
