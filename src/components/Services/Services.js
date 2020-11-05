import React from 'react';
import w from './Services.module.css'
import "react-responsive-carousel/lib/styles/carousel.css";
import $ from 'jquery'

const Services = (props) => {

	let slider =
		 <div>
			 {props.dataSlide.description}
		 </div>


	return(
		 <div className={w.sliderBlock}>
			 {slider}
		 </div>
	)
};

export default Services;