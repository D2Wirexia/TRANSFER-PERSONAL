import React from 'react';
import w from './Home.module.css'
import backGround from '../../img/main.png'
import mapSlovak from '../../img/map.png'
import photoProfile from '../../img/test.png'
import {NavLink} from "react-router-dom";


const Home = (props) => {
	const bonus_info1 = 'Мы быстрорастущая компания – Transfer Personal, занимающаяся официальным ' +
		 'трудо- устройством украинцев на крупные пред- приятия Словакии. ';
	const bonus_info2 ='В 2020 году мы вошли в ТОП 10 словацких агентур. ' +
		 'Вы можете с нами пообщаться в нашем офисе в Нитре или Трнаве. Также, мы с ' +
		 'радостью вас проконсультируем по любым вопросам в Вайбере, Вотсапе или Телеграме.';
	const deployed = 'Наша главная задача – трудоустроить хороших, трудолюбивых людей на хорошую работу! ' +
		 'Если вы заинтересованы этой вакансией – отправьте свое резюме или свяжитесь со мной';

	return (
		 <div className={w.body}>
			 <div className={w.main}>
				 <img src={backGround} alt="backGround"/>
			 </div>
			 <div className={w.content}>
				 <div className={w.title}>
					 <h1>Работа в Словакии</h1>
					 <h3>Начни работать в Европе!</h3>
					 <div className={w.profile}>
						 <NavLink to={'/contacts'}>
							 <div className={w.photoProfile}>
								 <img src={photoProfile} alt="photoProfile"/>
							 </div>
						 </NavLink>
						 <div className={w.shortInfo}>
							 <div className={w.name} id="name">Юрий</div>
							 <div className={w.positionWork}>Рекрутер компании Transfer Personal</div>
							 {
								 props.addInfo
									  ? <div className={w.addInfo} onClick={() => props.setShowInfo(false)} id="details">Подробнее</div>
									  : <div className={w.unShowInfo} onClick={() => props.setShowInfo(true)} id="deployed">
										  <div className={w.showInfo}>Скрыть</div>
										  <div className={w.deployed}>{deployed}</div>
									  </div>

							 }


						 </div>
					 </div>
				 </div>
				 <div className={w.bonusInfo}>
					 <img src={mapSlovak} alt="mapSlovak"/>
					 <div className={w.bonus}>
						 <p>{bonus_info1}</p>
						 <p>{bonus_info2}</p>
					 </div>
				 </div>
			 </div>
			 <footer>
				 <div>©2020 Работа в Словакии. Сайт визитка - &nbsp;
					 <a href="https://transfer-personal.com/sk/"><u>TRANSFER PERSONAL</u></a>
				 </div>
			 </footer>
		 </div>
	);
}

export default Home;