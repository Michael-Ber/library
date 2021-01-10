import $ from "../core";

$.prototype.carousel = function() {
    for (let i = 0; i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
        const slides = this[i].querySelectorAll('.carousel-item');
        const slidesField = this[i].querySelector('.carousel-slides');
        const dots = this[i].querySelectorAll('.carousel-indicators li');

        slides.forEach(slide => {
            slide.style.width = width;
        });
        slidesField.style.width = (100 * slides.length) + '%';

        let offset = 0,
            slideIndex = 0;

        $(this[i].querySelector('[data-slide="next"]')).click((e) => {
            e.preventDefault();
            if(offset == +width.replace(/\D/ig, '') * (slides.length - 1)) {
                offset = 0;
                slideIndex = 0;
            }else {
                offset += +width.replace(/\D/ig, '');
                slideIndex++;
            }

            slidesField.style.transform = `translateX(-${offset}px)`;
            dots.forEach(dot => {
                dot.classList.remove('active');
            });
            dots[slideIndex].classList.add('active');
        });

        $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
            e.preventDefault();
            if(offset == 0) {
                offset = +width.replace(/\D/ig, '') * (slides.length - 1);
                slideIndex = slides.length - 1;
            }else {
                offset -= +width.replace(/\D/ig, '');
                slideIndex--;
            }

            slidesField.style.transform = `translateX(-${offset}px)`;
            dots.forEach(dot => {
                dot.classList.remove('active');
            });
            dots[slideIndex].classList.add('active');
        });

        const sliderId = this[i].getAttribute('id');

        $(`#${sliderId} .carousel-indicators li`).click((e) => {
            offset = +width.replace(/\D/ig, '') * e.target.getAttribute('data-slide-to');
            slideIndex = e.target.getAttribute('data-slide-to');
            slidesField.style.transform = `translateX(-${offset}px)`;
            dots.forEach(dot => {
                dot.classList.remove('active');
            });
            dots[slideIndex].classList.add('active');
        });

    }
};

$('.carousel').carousel();