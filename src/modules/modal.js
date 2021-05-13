const modal = () => {
    const modalOverlay = document.querySelector('.modal-overlay'),
        modalCallback = document.querySelector('.modal-callback');

    const toggleActive = (modal) => {
        modal.classList.toggle('active');
    };

    document.addEventListener('click', e => {
        e.preventDefault();
        const target = e.target;

        if (target.closest('.callback-btn')) {
            toggleActive(modalOverlay);
            toggleActive(modalCallback);
            return;
        }

        if (target.closest('.modal-close')) {
            toggleActive(modalOverlay);
            toggleActive(modalCallback);
            return;
        }

        if (modalCallback.classList.contains('active') && !target.closest('.modal-callback')) {
            toggleActive(modalOverlay);
            toggleActive(modalCallback);
            return;
        }
    });
};

export default modal;