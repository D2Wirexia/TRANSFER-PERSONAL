import React from "react";
import Services from "./Services";
import {connect} from "react-redux";
import {
	nextBtn,
	prevBtn,
	setItemSlider
} from "../../redux/ServicesReducer";

class ServicesContainer extends React.Component{
	render() {
		return <Services {...this.props}/>
	}
}

let mapStateToProps = (state) => {
	return {
		dataSlide: state.servicesPage.dataSlide,
		itemSlider: state.servicesPage.itemSlider
	}
};

export default connect(mapStateToProps, {nextBtn, prevBtn, setItemSlider})(ServicesContainer);