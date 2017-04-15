import { connect} from "react-redux";
import App from "../components/App";
import {fetchAllBears, addNewBear, deleteBear, updateBear} from "../actions/Bears";

function mapStateToProps(state) {
    return({bears: state.bears})
}

function mapDispatchToProps(dispatch) {
    return({
        fetchAllBears: () => {dispatch(fetchAllBears())},
        addNewBear: (newBear) => {dispatch(addNewBear(newBear))},
        deleteBear: (bearID) => {dispatch(deleteBear(bearID))},
        updateBear: (bear) => {dispatch(updateBear(bear))}
    })
}

const AppContainer = connect(mapStateToProps,mapDispatchToProps)(App)
export default AppContainer;
