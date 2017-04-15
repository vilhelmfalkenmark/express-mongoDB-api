import { connect} from "react-redux";
import App from "../components/App";
import {fetchAllBears} from "../actions/Bears";

function mapStateToProps(state) {
    return({bears: state.bears})
}

function mapDispatchToProps(dispatch) {
    return({
        fetchAllBears: () => {dispatch(fetchAllBears())},
        deleteBear: () => {dispatch(fetchAllBears())}
    })
}

const AppContainer = connect(mapStateToProps,mapDispatchToProps)(App)

export default AppContainer;
