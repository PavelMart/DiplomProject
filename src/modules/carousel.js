const carousel = () => {
    
    const servicesCarousel = document.querySelector('.services-carousel'),
        servicesSection = document.querySelector('.services-section'),
        cards = [...document.querySelectorAll('.card')];
    
    const renderCards = () => {
        let numberElements = 3;

        if (document.documentElement.offsetWidth < 992) {
            numberElements = 2;
        } 

        if (document.documentElement.offsetWidth < 768) {
            numberElements = 1;
        } 

        cards.forEach( (card, i) => {
            if (i < numberElements) {
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

    window.addEventListener('resize', () => {
        renderCards();
    });
};

export default carousel;