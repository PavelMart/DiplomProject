import openModal from './modal/openModal';
import closeModal from './modal/closeModal';

const sendForm = () => {
    const errorMessage = 'Что-то пошло не так...',
        successMessage = 'Спасибо! Мы с Вами скоро свяжемся!',
        preloader = document.querySelector('.preloader'),
        form = document.querySelector('[name="form-callback"]'),
        inputElems = [...form.querySelectorAll('input')].filter( input => input.type !== 'submit'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('title-h2');

    const postData = (data) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
    };

    const processing = (message) => {
        const modalOverlay = document.querySelector('.modal-overlay'),
            modalCallback = document.querySelector('.modal-callback'),
            modalResponse = document.getElementById('responseMessage');

        statusMessage.textContent = message;

        modalResponse.prepend(statusMessage);

        closeModal(modalOverlay, modalCallback, inputElems);
        openModal(modalOverlay, modalResponse);

        setTimeout(() => {
            closeModal(modalOverlay, modalResponse);

            statusMessage.textContent = '';
        }, 2000);
    };
    
    form.addEventListener('submit', e => {
        e.preventDefault();
        
        let isEmpty = false,
            notAllowed = false;
            
        inputElems.forEach( elem => {
            if (!elem.value) {
                isEmpty = true;
            }
        });
        
        inputElems.forEach( elem => {
            if (elem.dataset.flag === 'false') {
                notAllowed = true;
            }
        });
        

        if (isEmpty || notAllowed) {
            return;
        }

        preloader.style.display = 'flex';

        const formData = new FormData(form),
            formJSON = {};

        formData.forEach( (item, key) => {
            formJSON[key] = item;
        });

        postData(formJSON)
            .then(response => {
                preloader.style.display = '';

                if (response.status !== 200) {
                    throw new Error('status network not 200');
                }

            })
            .then(() => {
                processing(successMessage);
            })
            .catch(error => {
                processing(errorMessage);
                console.error(error);
            });
    });
};

export default sendForm;