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

    let arrow = document.querySelector('.arrow-wrapper'),
        body = document.querySelector('.post__body');

    // arrow.addEventListener('click', () => {
    //     window.scrollBy({
    //         top: document.documentElement.clientHeight,
    //         left: 0,
    //         behavior: 'smooth'
    //     });
    // });

    // arrow.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     let id = arrow.getAttribute('href');
    //     document.querySelector(id).scrollIntoView({
    //         behavior: 'smooth',
    //         block: 'start'
    //     });
    // });

    arrow.addEventListener('click', (e)=> {
        e.preventDefault();

        // document.documentElement.scrollTop +=100;

        let timer = setInterval(()=>{
            if (body.getBoundingClientRect().top <= 0) {
                clearInterval(timer);
            }
        
            document.documentElement.scrollTop +=27;
        
        }, 10);
    });

});