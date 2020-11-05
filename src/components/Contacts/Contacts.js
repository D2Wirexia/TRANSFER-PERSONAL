import React from 'react';
import w from './Contacts.module.css'
import nitra from '../../img/nitra.jpg'
import photo from '../../img/contactTest.png'
import '../../css/all.min.css'
import viber from '../../img/viber.png'
import telegram from '../../img/telegramm.png'
import watsapp from '../../img/watsapp.png'
import email from '../../img/email.png'

const Contacts = () => {
	return(
		 <div className={w.container}>
			 <div className={w.backImg}>
				 <img src={nitra} />
			 </div>
			 <div className={w.frontImg}></div>
			 <div className={w.contactInfoBackground}></div>
			 <div className={w.contactInfo}>
				 <div className={w.leftInfo}>
					 <div className={w.name}>Юрий Евдокименко</div>
					 <div className={w.telephoneInfo}>Звонить с <i>10:00</i> до <i>16:00</i></div>
					 <div className={w.phone}>+(421)-95-071-9551</div>
					 <div className={w.telephoneConnect}>
						 <a href="https://telegram.im/Maddiy">
							 <img src={telegram} />
						 </a>
						 <a href="viber://chat?number=+421950719551">
							 <img src={viber} />
						 </a>
						 <a href="https://wa.me/421950719551">
							 <img src={watsapp} />
						 </a>
					 </div>
					 <div className={w.line}></div>
					 <div className={w.eMail}>
						 <img src={email} />
						 <p>ukrain@transfer-personal.sk</p>
					 </div>
					 <div className={w.line}></div>
					 <div className={w.address}>Braneckého 17, Nitra 949 01, Slovensko</div>
					 <div className={w.map}>
						 <a href="https://goo.gl/maps/MSr1hBb8YsvETGHZA">Посмотреть на карте</a>
					 </div>
				 </div>
				 <div className={w.rightImg}>
					 <img src={photo} />
				 </div>

			 </div>
		 </div>
	);
};

export default Contacts;