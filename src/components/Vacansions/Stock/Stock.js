import React from "react";
import w from './Stock.module.css'
import OperatorImg from '../../../img/sklad.png'

const Stock = () => {
	var postponed = false;

	return(
		 <div className={w.vacansion}>
			 <div className={w.topInfo}>Мы предлагаем работу в Словакии водителем погрузчика / электротягача на складе в Нитре (Словакия).
				 Если у вас нет опыта работы на погрузчике - мы организуем для вас курсы!</div>
			 <div className={w.container}>
				 <div className={w.list}>
					 <ul className={w.menu1}>
						 <li className={w.title}>Условия труда и финансы
							 <ul className={w.submenu1}>
								 <li>Зарплата (брутто, это базовая ставка): 890€/мес</li>
								 <li>Премии:
									 <ul>- в 1-ый месяц +5% к базовой ставке</ul>
									 <ul>- во 2-ой месяц +10%</ul>
									 <ul>- с 3-го месяца +15%</ul>
								 </li>
								 <li>Доплаты:
									 <ul>- за работу в надчасы в будние дни + 25%</ul>
									 <ul>- за работу в субботу +50%</ul>
									 <ul>- за работу в воскресенье +100%</ul>
								 </li>
								 <li>Итого, зарплата чистыми, приблизительно: 700-800 €/мес</li>
							 </ul>
						 </li>
					 </ul>
					 <ul className={w.menu2}>
						 <li className={w.title}>Наши бенефиты
							 <ul className={w.submenu2}>
								 <li>Официальное трудоустройство</li>
								 <li>Помощь при смене работодателя и оформлении документов в миграционной полиции</li>
								 <li>Жилье, за 40€ в месяц. (Комната в частном доме)</li>
								 <li>Карту на питание, на которую будут приходить каждый месяц около 80€</li>
								 <li>Курсы и права на погрузчик/тягач</li>
								 <li>Авансы каждую неделю</li>
								 <li>Бесплатный трансфер до места роботы</li>
							 </ul>
						 </li>
					 </ul>
					 <ul className={w.menu3}>
						 <li className={w.title}>Требования к кандидатам
							 <ul className={w.submenu3}>
								 <li>Желание работать на 100% легально</li>
								 <li>Ответственность</li>
								 <li>Готовность работать в команде</li>
								 <li>Желание работать длительный срок</li>
								 <li>Готовность работать в 3 смены</li>
							 </ul>
						 </li>
					 </ul>
					 <ul className={w.menu4}>
						 <li className={w.title}>Рабочие обязанности
							 <ul className={w.submenu4}>
								 <li>Погрузка, разгрузка грузовых автомобилей</li>
								 <li>Манипуляция с запчастями в рамках склада и монтажной линии</li>
								 <li>Работа со сканером</li>
								 <li>Снабжение производственной линии компонентами</li>
								 <li>Соблюдение рабочих алгоритмов</li>
								 <li>Соблюдение порядка на рабочем месте</li>
							 </ul>
						 </li>
					 </ul>
				 </div>
				 <div className={w.vacansionImg}>
					 <img src={OperatorImg} />
				 </div>
			 </div>
			 {
				 postponed === false
					  ? <div className={w.postponed}>Гуляй лесом <br/>мест нету...</div>
				 : <div/>
			 }

		 </div>
	)
};

export default Stock;