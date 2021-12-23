import { API } from "../../backend";

// get All countries
export const getCountrys = () => {
  return fetch(`${API}countries`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
