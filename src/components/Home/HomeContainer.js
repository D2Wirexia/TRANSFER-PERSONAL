import {connect} from 'react-redux'
import Home from "./Home";
import {setShowInfo} from "../../redux/HomeReducer";

let mapStateToProps = (state) => {
	return {
		addInfo: state.homePage.addInfo
	}
};


export default connect(mapStateToProps, {setShowInfo})(Home);