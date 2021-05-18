import openModal from './modal/openModal';
import closeModal from './modal/closeModal';

const modal = (modalOver, modalCall) => {
    const modalOverlay = document.querySelector(modalOver),
        modalCallback = document.querySelector(modalCall),
        inputElems = [...modalCallback.querySelectorAll('input')].filter( input => input.type !== 'submit');

    document.addEventListener('click', e => {
        
        const target = e.target;

        if (target.closest('.callback-btn')) {
            openModal(modalOverlay, modalCallback);
            return;
        }

        if (target.href && target.href.match(/#\w+/)[0] === '#feedback') {
            openModal(modalOverlay, modalCallback);
            return;
        }

        if (target.href && target.href.match(/#\w+/)[0] === '#application') {
            openModal(modalOverlay, modalCallback);
            return;
        }

        if (target.closest('.modal-close')) {
            closeModal(modalOverlay, modalCallback, inputElems);
            return;
        }

        if (modalCallback.classList.contains('active') && !target.closest('.modal-callback')) {
            closeModal(modalOverlay, modalCallback, inputElems);
            return;
        }

    });

};

export default modal;