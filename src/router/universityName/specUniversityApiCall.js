import { API } from "../../backend";

// get All universities
export const getUniversityById = (universityId) => {
  return fetch(`${API}university/${universityId}`, {
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
