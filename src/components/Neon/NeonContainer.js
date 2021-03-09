import {connect} from 'react-redux'
import {setShowInfo} from "../../redux/HomeReducer";
import Neon from "./Neon";

let mapStateToProps = (state) => {
	return {
		border: state.homePage.border
	}
};


export default connect(mapStateToProps, {setShowInfo})(Neon);