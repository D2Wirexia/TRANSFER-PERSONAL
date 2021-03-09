import React from "react";
import neon from '../../img/neon.png'
import w from './Neon.module.css'
import song from './song.mp3'

const Neon = (props) => {
	return(
		 <div className={w.presentation}>
			 <audio preload="true" autoPlay="autoPlay" loop src={song}/>
			 <img src={neon} alt="neon"/>
			 {props.border
				  ? <div className={w.texter}>
					  Сайт визиточка <br/><i>©Wirexia</i>
				  </div>
				  : null
			 }
		 </div>
	)
};

export default Neon;