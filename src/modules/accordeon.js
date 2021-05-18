const accordeon = () => {
    const accordeonSection = document.querySelector('.accordeon-section'),
        accordeonElements = accordeonSection.querySelectorAll('.element');

    const addActive = (elem) => {
        elem.classList.add('active');
    };

    const removeActive = (elem) => {
        elem.classList.remove('active');
    };

    document.addEventListener('click', e => {
        const target = e.target;

        if (target.closest('.accordeon-section .element-content')) {
            return;
        } else if (target.closest('.accordeon-section .element')) {
            const element = target.closest('.accordeon-section .element'),
                elementContent = element.querySelector('.element-content');

            if (element.classList.contains('active')) {
                removeActive(element);
                removeActive(elementContent);
                return;
            }

            accordeonElements.forEach( item => {
                const itemContent = item.querySelector('.element-content');

                if (element === item) {
                    addActive(item);
                    addActive(itemContent);
                } else {
                    removeActive(item);
                    removeActive(itemContent);
                }
            });
        } else {
            accordeonElements.forEach( item => {
                const itemContent = item.querySelector('.element-content');

                removeActive(item);
                removeActive(itemContent);
            });
        }
    });
};

export default accordeon;