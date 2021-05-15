const carousel = () => {
    
    const servicesCarousel = document.querySelector('.services-carousel'),
        servicesSection = document.querySelector('.services-section'),
        cards = [...document.querySelectorAll('.card')];
    
    const renderCards = () => {
        cards.forEach( (card, i) => {
            if (i < 3) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    };

    const moveRight = () => {
        servicesCarousel.append(cards[0]);

        cards.push(cards[0]);
        cards.shift();

        renderCards();

    };

    const moveLeft = () => {
        servicesCarousel.prepend(cards[cards.length - 1]);

        cards.unshift(cards[cards.length - 1]);
        cards.pop();

        renderCards();

    };

    renderCards();

    servicesSection.addEventListener( 'click', e => {
        e.preventDefault();
        const target = e.target;

        if (target.matches('.arrow-left')) {
            moveLeft();
        } else if (target.matches('.arrow-right')) {
            moveRight();
        }
    });


};

export default carousel;