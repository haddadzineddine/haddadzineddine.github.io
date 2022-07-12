import scroll from './helpers/scroll';
import { toggleTheme, addBodyClass, addBtnClass } from './helpers/toggleTheme';
import displayList from './helpers/displayList';

const btnHamburger = document.querySelector('.fa-bars');
const btnTheme = document.querySelector('.fa-moon');

btnHamburger.addEventListener('click', displayList);
btnTheme.addEventListener('click', toggleTheme);

document.addEventListener('scroll', scroll.scrollUp);

addBodyClass();
addBtnClass();