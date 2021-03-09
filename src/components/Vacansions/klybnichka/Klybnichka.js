import React from "react";
import w from './Klybnichka.module.css'
import OperatorImg from '../../../img/bordel.jpg'

const Klybnichka = () => {
	return(
		 <div className={w.vacansion}>
			 <div className={w.topInfo}>Мы предлагаем работу в Словакии девочкой-целочкой на уличных трасах в Нитре (Словакия).
				 Если у вас нет опыта работы - мы организуем для вас курсы!</div>
			 <div className={w.container}>
				 <div className={w.list}>
					 <ul className={w.menu1}>
						 <li className={w.title}>Условия труда и финансы
							 <ul className={w.submenu1}>
								 <li>Зарплата (брутто, базовая ставка): 850€ (ставка) + 100 €/месяц (премия с второго месяца) +60-120€ доплата за ночные. (зарплата в чистом без надчасов 710 – 820 €/месяц)</li>
								 <li>Работа 7 дней в неделю по 24 часа в день</li>
								 <li>Работа в 3 смены</li>
								 <li>Проезд на работу бесплатный</li>
							 </ul>
						 </li>
					 </ul>
					 <ul className={w.menu2}>
						 <li className={w.title}>Наши бенефиты
							 <ul className={w.submenu2}>
								 <li>НЕ Официальное трудоустройство</li>
								 <li>Помощь при оформлении ВНЖ или смена работодателя в прокуратуре</li>
								 <li>Не обязательное знание словацкого</li>
								 <li>Предоставляем жилье (137 €/месяц)</li>
								 <li>Обеды на заводе 1-1,5€ за комплекс</li>
								 <li>Бесплатные порции билка</li>
							 </ul>
						 </li>
					 </ul>
					 <ul className={w.menu3}>
						 <li className={w.title}>Требования к кандидатам
							 <ul className={w.submenu3}>
								 <li>Ответственность</li>
								 <li>Готовность работать в команде</li>
								 <li>Чистая киска</li>
								 <li>Готовность отработать минимум 6 месяцев</li>
								 <li>Желание работать на 100% не легально</li>
							 </ul>
						 </li>
					 </ul>
					 <ul className={w.menu4}>
						 <li className={w.title}>Рабочие обязанности
							 <ul className={w.submenu4}>
								 <li>Быть прошмандовкой</li>
								 <li>Игры со всеми поситителями в удобной кровате</li>
								 <li>Выполнение самых потаенных желаний VIP-гостей</li>
								 <li>Соблюдение личной гигиены</li>
								 <li>Соблюдение рабочего порядка действий</li>
								 <li>Соблюдение порядка на рабочем месте</li>
								 <li>Готовность работать в 3 смены</li>
							 </ul>
						 </li>
					 </ul>
				 </div>
				 <div className={w.vocansionImg}>
					 <img src={OperatorImg} alt="OperatorImg"/>
				 </div>
			 </div>
		 </div>
	)
};

export default Klybnichka;