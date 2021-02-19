import React from 'react';
import w from './Services.module.css'
import "react-responsive-carousel/lib/styles/carousel.css";
import nitra from "../../img/nitra.jpg";
import './../../css/all.min.css'

const Services = (props) => {

	let nowItemSlider = props.itemSlider;

	let slider =
		 <div className={w.slider}>
			 <img src={props.dataSlide[nowItemSlider].img}/>
			 <span>{props.dataSlide[nowItemSlider].description}</span>
		 </div>


	return(
		 <div className={w.container}>
			 <div className={w.backImg}>
				 <img src={nitra} />
			 </div>
			 <div className={w.frontImg}></div>
			<div className={w.sliderBlock}>
			 <div className={w.prev} onClick={()=>{
			 	props.prevBtn();
				 if(nowItemSlider <= 0){
					 props.setItemSlider(props.dataSlide.length - 1)
				 }
			 }}>
				 <i className="fas fa-arrow-circle-left"></i>
			 </div>

			 {slider}

			 <div className={w.next} onClick={()=>{
			 	props.nextBtn();
				 if(nowItemSlider >= props.dataSlide.length - 1){
					 props.setItemSlider(0)
				 }
			 }}>
				 <i className="fas fa-arrow-circle-right"></i>
			 </div>
		 </div>
		 </div>
	)
};

export default Services;