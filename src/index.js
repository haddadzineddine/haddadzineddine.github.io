import './styles/index.css';
import './assets/images/cleanfolio.png';
import './assets/images/startpage.png';
import './assets/images/haddad.png';
import './assets/images/php-banner.png';
import './assets/images/covid.png';
import './assets/images/school.png';
import './assets/images/Haddad_Zineddine_Resume.pdf';

import scroll from './modules/scroll';
import { toggleTheme, addBodyClass, addBtnClass } from './modules/toggleTheme';
import displayList from './modules/displayList';

const btnHamburger = document.querySelector('.fa-bars');
const btnTheme = document.querySelector('.fa-moon');

btnHamburger.addEventListener('click', displayList);
btnTheme.addEventListener('click', toggleTheme);

document.addEventListener('scroll', scroll.scrollUp);

addBodyClass();
addBtnClass();