import axios from "axios";

// Get all images
export function fetchAllImages() {
  return function(dispatch) {
    axios.get("http://localhost:5000/api/images")
    .then((response) => {
      dispatch({type: "IMAGES_FETCHED", payload: response.data})
    })
    .catch((err) => {
      dispatch({type: "IMAGES_NOT_FETCHED", payload: err})
    })
  }
}
