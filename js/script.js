"use strict"

window.addEventListener('load', windowLoad);

function windowLoad() {
    if (document.querySelector('.main-slider')) {
        new Swiper('.main-slider', {
            speed: 2000,
            effect: "fade",
            autoplay: {
                delay:300
            },
            pagination: {
                el: '.bullets__items',
                type: 'bullets',
                clickable: true
            },
        });
    }
}