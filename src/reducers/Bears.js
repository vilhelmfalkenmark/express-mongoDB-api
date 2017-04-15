import InitialState from "./InitialState";

export default function Bears(state = InitialState.bears, action) {

 if(action.type === "BEARS_FETCHED") {
   return action.payload;
 }


return state;
}
