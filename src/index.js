import accordeon from './modules/accordeon';
import carousel from './modules/carousel';
import modal from './modules/modal';
import scrollToSection from './modules/scrollToSection';
import scrollToUp from './modules/scrollToUp';
import sendForm from './modules/sendForm';
import slider from './modules/slider';
import validation from './modules/validation';

accordeon();
carousel();
modal('.modal-overlay', '.modal-callback');
scrollToSection();
scrollToUp();
sendForm();
slider();
validation();
