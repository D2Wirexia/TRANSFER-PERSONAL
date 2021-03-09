import React from "react";
import w from './Operator-proizvodstva.module.css'
import OperatorImg from '../../../img/zavod.jpg'
import NoVac from "../NoVac/NoVac";

const OperatorProizvodstva = () => {
	const postponed = true;

	return(
		 <div className={w.vacansion}>
			 <div className={w.topInfo}>Мы предлагаем работу в Словакии оператором производства в городе Трнава на заводе PSA Group. <i>(В основном мужчины, или люди с опытом в данной сфере)</i></div>
			 <div className={w.container}>
				 <div className={w.list}>
					 <ul className={w.menu1}>
						 <li className={w.title}>Условия труда и финансы
							 <ul className={w.submenu1}>
								 <li>Зарплата (брутто, базовая ставка): 850€ (ставка) + 100 €/месяц (премия с второго месяца) +60-120€ доплата за ночные. (зарплата в чистом без надчасов 710 – 820 €/месяц)</li>
								 <li>Работа 5 дней в неделю по 8 часов в день</li>
								 <li>Работа в 3 смены</li>
								 <li>Проезд на работу 20 €/месяц</li>
							 </ul>
						 </li>
					 </ul>
					 <ul className={w.menu2}>
						 <li className={w.title}>Наши бенефиты
							 <ul className={w.submenu2}>
								 <li>Официальное трудоустройство</li>
								 <li>Помощь при оформлении ВНЖ или смена работодателя в полиции</li>
								 <li>Не обязательное знание словацкого</li>
								 <li>Предоставляем жилье (137 €/месяц)</li>
								 <li>Обеды на заводе 1-1,5€ за комплекс</li>
								 <li>13 зарплата </li>
							 </ul>
						 </li>
					 </ul>
					 <ul className={w.menu3}>
						 <li className={w.title}>Требования к кандидатам
							 <ul className={w.submenu3}>
								 <li>Ответственность</li>
								 <li>Готовность работать в команде</li>
								 <li>Готовность отработать минимум 6 месяцев</li>
								 <li>Желание работать на 100% легально</li>
							 </ul>
						 </li>
					 </ul>
					 <ul className={w.menu4}>
						 <li className={w.title}>Рабочие обязанности
							 <ul className={w.submenu4}>
								 <li>Операция сборочной линии</li>
								 <li>Манипуляция с запчастями в рамках склада и монтажной линии</li>
								 <li>Сборка отдельных деталей (фары, коробка передач, колеса)</li>
								 <li>Завинчивание, клепка, склеивание</li>
								 <li>Соблюдение рабочего порядка действий</li>
								 <li>Соблюдение порядка на рабочем месте</li>
								 <li>Готовность работать в 3 смены</li>
							 </ul>
						 </li>
					 </ul>
				 </div>
				 <div className={w.vocansionImg}>
					 <img src={OperatorImg} alt="OperatorImg"/>
					 {
						 !postponed ? <NoVac/> : null
					 }
				 </div>
			 </div>
		 </div>
	)
};

export default OperatorProizvodstva;