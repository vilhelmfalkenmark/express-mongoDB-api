import { connect} from "react-redux";
import App from "../components/App";
import {fetchAllBears,  addNewBear, deleteBear, updateBear} from "../actions/Bears";
import { fetchAllImages } from "../actions/Images";

function mapStateToProps(state) {
    return({bears: state.bears, images: state.images})
}

function mapDispatchToProps(dispatch) {
    return({
        fetchAllBears: () => {dispatch(fetchAllBears())},
        fetchAllImages: () => {dispatch(fetchAllImages())},
        addNewBear: (newBear) => {dispatch(addNewBear(newBear))},
        deleteBear: (bearID) => {dispatch(deleteBear(bearID))},
        updateBear: (bear) => {dispatch(updateBear(bear))}
    })
}

const AppContainer = connect(mapStateToProps,mapDispatchToProps)(App)
export default AppContainer;
