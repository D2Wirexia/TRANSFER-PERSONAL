import React from 'react';
import w from './Header.module.css';
import {NavLink} from "react-router-dom";
import logoType from './../../img/logo.png'

const Header = () => {
	return (
		 <div className={w.header}>
			 <div className={w.logo}>
				 <a href="https://transfer-personal.com/sk/">
				 	<img src={logoType} alt="Logo"/>
				 </a>
			 </div>
			 <div className={w.nav}>
				 <NavLink to="/main" activeClassName={w.active}>Главная</NavLink>
				 <NavLink to="/vacancies" activeClassName={w.active}>Вакансии</NavLink>
				 <NavLink to="/services" activeClassName={w.active}>Услуги</NavLink>
				 <NavLink to="/contacts" activeClassName={w.active}>Контакты</NavLink>
			 </div>
		 </div>
	);
}

export default Header;