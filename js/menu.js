document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let menu = document.getElementById('menu'),
        hamburger = document.querySelector('.hamburger'),
        close = document.querySelector('.menu__close');
    
    document.addEventListener('scroll', function() {
        if (document.documentElement.scrollTop >= 60) {
            menu.classList.add('scroll');
        } else {
            menu.classList.remove('scroll');
        }
    });

    hamburger.addEventListener('click', () => {
        menu.classList.add('mobileMenu');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', () => {
        menu.classList.remove('mobileMenu');
        document.body.style.overflow = '';
    });

});