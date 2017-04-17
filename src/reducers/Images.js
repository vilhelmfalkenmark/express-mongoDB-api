import InitialState from "./InitialState";

export default function images(state = InitialState.images, action) {

 if(action.type === "IMAGES_FETCHED") {
  return action.payload;
 }


 return state;
}
