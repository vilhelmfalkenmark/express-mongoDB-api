import axios from "axios";

 export function fetchAllBears() {
  return function(dispatch) {
   console.log("Kallas på fetchAllBears");
    axios.get("http://localhost:5000/api/bears")
    .then((response) => {
      console.log(response.data, "response från API");
      dispatch({type: "BEARS_FETCHED", payload: response.data})
    })
    .catch((err) => {
      dispatch({type: "BEARS_NOT_FETCHED", payload: err})
    })
  }
}
