import axios from "axios";

// Get all bears
export function fetchAllBears() {
  return function(dispatch) {
    axios.get("http://localhost:5000/api/bears")
    .then((response) => {
      // console.log(response.data, "är fetchAllBears response från API");
      dispatch({type: "BEARS_FETCHED", payload: response.data})
    })
    .catch((err) => {
      dispatch({type: "BEARS_NOT_FETCHED", payload: err})
    })
  }
}

// Add new bear
export function addNewBear(newBear) {
 console.log(newBear);
  return function(dispatch) {
    axios.post("http://localhost:5000/api/bears", newBear)
    .then((response) => {
      console.log(response, " är response från addNewBear action");
      dispatch({type: "NEW_BEAR_ADDED", payload: response.data.newBear})
    })
    .catch((err) => {
      dispatch({type: "COULD_NOT_ADD_BEAR", payload: err})
    })
  }
}

// Delete bear
export function deleteBear(bearID) {
  return function(dispatch) {
    axios.delete(`http://localhost:5000/api/bears/${bearID}`)
    .then((response) => {
     console.log(response," response från deletebear");
      dispatch({type: "BEAR_DELETED", payload: bearID})
    })
    .catch((err) => {
      dispatch({type: "COULD_NOT_DELETE_BEAR", payload: err})
    })
  }
}

// Update bear
export function updateBear(bear) {
  return function(dispatch) {
    axios.put(`http://localhost:5000/api/bears/${bear._id}`,bear)
    .then((response) => {
      dispatch({type: "BEAR_UPDATED", payload: response.data.updatedBear})
    })
    .catch((err) => {
      dispatch({type: "COULD_NOT_UPDATE_BEAR", payload: err})
    })
  }
}
