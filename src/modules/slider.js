const slider = () => {
    const topSlider = document.querySelector('.top-slider'),
        slides = document.querySelectorAll('.top-slider .item'),
        slideTables = document.querySelectorAll('.top-slider .table');
        
    
    let currentSlide = 0;

    const createSlickDots = () => {
        const slickDots = document.createElement('div');
        slickDots.classList.add('slick-dots');

        for (let i = 0; i < slides.length; i++) {
            const li = document.createElement('li');
            slickDots.append(li);
        }

        topSlider.append(slickDots);

    };
    createSlickDots();

    const slickDots = document.querySelectorAll('.slick-dots li');

    const prev = (elem, index, className) => {
        elem[index].classList.remove(className);
    };

    const next = (elem, index, className) => {
        elem[index].classList.add(className);
    };
    
    const prevAll = (i) => {
        prev(slides, i, 'active');
        prev(slideTables, i, 'active');
        prev(slickDots, i, 'slick-active');
    };

    const nextAll = (i) => {
        next(slides, i, 'active');
        next(slideTables, i, 'active');
        next(slickDots, i, 'slick-active');
    };

    nextAll(currentSlide);

    const autoPlay = () => {

        prevAll(currentSlide);

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        
        nextAll(currentSlide);

    };

    let interval = setInterval(autoPlay, 3000);

    const start = () => {
        interval = setInterval(autoPlay, 3000);
    };

    const stop = () => {
        clearInterval(interval);
    };

    topSlider.addEventListener('click', e => {
        const target = e.target;

        prevAll(currentSlide);

        if (target.closest('.slick-dots li')) {
            slickDots.forEach( (dot, i) => {
                if (dot === target) {
                    currentSlide = i;
                }
            });
        }

        nextAll(currentSlide);

    });

    topSlider.addEventListener('mouseover', e => {
        const target = e.target;

        if (target.closest('.slick-dots li')) {
            stop();
        }
    });
    topSlider.addEventListener('mouseout', e => {
        const target = e.target;

        if (target.closest('.slick-dots li')) {
            start();
        }
    });


};

export default slider;