import React from "react";
import Services from "./Services";
import {connect} from "react-redux";

class ServicesContainer extends React.Component{
	render() {
		return <Services {...this.props}/>
	}
}

let mapStateToProps = (state) => {
	return {
		dataSlide: state.servicesPage.dataSlide,
	}
};

export default connect(mapStateToProps, {})(ServicesContainer);