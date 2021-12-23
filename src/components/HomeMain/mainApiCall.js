import { API } from "../../backend";

// get All Sliders
export const getSliders = () => {
  return fetch(`${API}sliders`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
