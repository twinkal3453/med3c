import { API } from "../../../backend";

// get All universities
export const getUniversities = (countryId) => {
  return fetch(`${API}universities/show/${countryId}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
