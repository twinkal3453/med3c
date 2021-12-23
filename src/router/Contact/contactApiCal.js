import { API } from "../../backend";
import axios from "axios";

// post Contacts
export const createContact = (contactUs) => {
  return axios
    .post(`${API}contact/create`, contactUs)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
};
