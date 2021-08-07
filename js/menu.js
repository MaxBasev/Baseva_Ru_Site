document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let menu = document.getElementById('menu');
    
    document.addEventListener('scroll', function() {
        if (document.documentElement.scrollTop >= 60) {
            menu.classList.add('scroll');
        } else {
            menu.classList.remove('scroll');
        }
    });

});