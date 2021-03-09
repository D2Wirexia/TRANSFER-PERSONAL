
import {connect} from 'react-redux'
import Home from "./Home";
import {setShowInfoEC} from "../../redux/HomeReducer";

let mapStateToProps = (state) => {
	return {
		addInfo: state.homePage.addInfo,
	}
};
let mapDispatchToProps = (dispatch) => {
	return {
		setShowInfo: (addInfo) => {
			dispatch(setShowInfoEC(addInfo));
		},
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);