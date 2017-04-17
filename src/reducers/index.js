import { combineReducers } from "redux";
import bears from "./Bears";
import images from "./Images";

const reducer = combineReducers({
  bears,
  images
})

export default reducer;
