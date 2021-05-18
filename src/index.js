import accordeon from './modules/accordeon';
import carousel from './modules/carousel';
import modal from './modules/modal';
import scrollToSection from './modules/scrollToSection';
import sendForm from './modules/sendForm';
import slider from './modules/slider';
import validation from './modules/validation';
import burgerMenu from './modules/burgerMenu';

accordeon();
carousel();
modal('.modal-overlay', '.modal-callback');
scrollToSection();
sendForm();
slider();
validation();
burgerMenu();
