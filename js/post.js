// Smooth scrol and page up
// $(window).scroll(function(){
//     if ($(this).scrollTop() > 800) {
//         $('.pageup').fadeIn('slow');
//     } else {
//         $('.pageup').fadeOut();
//     }
    
// });
// $("a[href=#up]").click(function(){
//     const _href = $(this).attr("href");
//     $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
//     return false;
// });

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let arrow = document.querySelector('.arrow-wrapper');

    arrow.addEventListener('click', () => {
        window.scrollBy({
            top: document.documentElement.clientHeight,
            left: 0,
            behavior: 'smooth'
        });
    });
});