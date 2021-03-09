import React from "react";
import neon from '../img/neon.png'
import w from './Neon.module.css'
import song from './song.mp3'

const Neon = () => {
	return(
		 <div className={w.presentation}>
			 <img src={neon} alt="neon"/>
			 <div className={w.texter}>
				 Сайт визиточка <br/><i>©Wirexia</i>
			 </div>
			 <audio preload="true" autoPlay="autoPlay" loop src={song}/>
		 </div>
	)
};

export default Neon;