import React from "react";
import w from './Vacansions.module.css'
import {Route, NavLink} from "react-router-dom";
import nitra from "../../img/nitra.jpg";
import OperatorProizvodstva from "./Operator-proizvodstva/Operator-proizvodstva";
import Stock from "./Stock/Stock";
import Klybnichka from "./klybnichka/Klybnichka";
import NoVac from "./NoVac/NoVac";

const Vacansions = () => {
	const setOnly_Operator_proizvodstva = true;
	const setOnly_Operator_sklada = false;
	const setOnly_klubnichka = true;

	return(
		 <div className={w.vacansion}>
			 <div className={w.backImg}>
				 <img src={nitra} />
			 </div>
			 <div className={w.frontImg} />
			 <div className={w.switchBnt}>
				 <NavLink to="/vacancies/Operator-proizvodstva" activeClassName={w.active}>
					 <div className={`${w.chooseBtn} ${setOnly_Operator_proizvodstva == false && w.postponed}`}>Оператор производства</div>
				 </NavLink>
				 <NavLink to="/vacancies/sklad" activeClassName={w.active}>
					 <div className={`${w.chooseBtn} ${setOnly_Operator_sklada == false && w.postponed}`}>Оператор склада</div>
				 </NavLink>
				 <NavLink to="/vacancies/klybnichka" activeClassName={w.active}>
					 <div className={`${w.chooseBtn} ${setOnly_klubnichka == false && w.postponed}`}>Клубничка</div>
				 </NavLink>
			 </div>
			 <div className={w.componentVac}>
				 <div className={w.backComponentVac} />
				 <Route path="/vacancies/Operator-proizvodstva" render={() => <OperatorProizvodstva/> }/>
				 <Route path="/vacancies/sklad" render={() => <Stock/> }/>
				 {
					 setOnly_klubnichka
					  ? <Route path="/vacancies/klybnichka" render={() => <Klybnichka/> }/>
					  : <Route exact path="/vacancies/klybnichka" component={NoVac} />
				 }

			 </div>
		 </div>
	)
};

export default Vacansions;