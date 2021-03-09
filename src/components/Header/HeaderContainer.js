import {connect} from 'react-redux'
import {setStateBorder} from "../../redux/HomeReducer";
import Header from "./Header";

let mapStateToProps = (state) => {
	return {

	}
};


export default connect(mapStateToProps, {setStateBorder})(Header);