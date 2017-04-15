import InitialState from "./InitialState";

export default function bears(state = InitialState.bears, action) {

 if(action.type === "BEARS_FETCHED") {
   return action.payload;
 }

 else if (action.type === "NEW_BEAR_ADDED") {
   return state.concat(action.payload)
 }

 else if (action.type === "BEAR_DELETED") {
   return state.filter((bear) => bear._id !== action.payload)
 }

 else if (action.type === "BEAR_UPDATED") {
   return state.map((bear) => {
    if(bear._id !== action.payload._id) {
     return bear;
    } else {
     return action.payload
    }
   })
 }
 
return state;
}
