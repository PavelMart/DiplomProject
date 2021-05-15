const modal = (modalOver, modalCall) => {
    const modalOverlay = document.querySelector(modalOver),
        modalCallback = document.querySelector(modalCall),
        buttonUp = document.querySelector('.up');

    const toggleActive = (modal) => {
        modal.classList.toggle('active');
    };

    const showModal = (modal) => {

        let count = 0;

        let interval = setInterval(() => {
            if (count <= 1) {
                modal.style.opacity = `${count}`;
                count += 0.2;
            } else {
                modal.style.opacity = '1';
                clearInterval(interval);
                return;
            }
        }, 25);
    };

    const hideModal = (modal) => {
        modal.style.opacity = '0';
    };

    const openModal = (modalOver, modal) => {
        toggleActive(modalOver);
        toggleActive(modal);

        showModal(modalOver);
        showModal(modal);
    };

    const closeModal = (modalOver, modal) => {
        toggleActive(modalOver);
        toggleActive(modal);

        hideModal(modalOver);
        hideModal(modal);
    };

    document.addEventListener('click', e => {
        e.preventDefault();
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
            closeModal(modalOverlay, modalCallback);
            return;
        }

        if (modalCallback.classList.contains('active') && !target.closest('.modal-callback')) {
            closeModal(modalOverlay, modalCallback);
            return;
        }


    });
};

export default modal;