import { API } from "../../backend";

// get All reviews
export const getReviews = () => {
  return fetch(`${API}/reviews`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
