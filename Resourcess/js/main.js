$(document).ready(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    
    if($('.progres-line').length) {
    $('.progres-line').appear(function(){
        var el = $(this);
        var percent = el.data('width');
        $(el).css('width', percent+'%');
    }, {accY: 0});
   }
    
    const swiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,

        },
        speed: 2000,
        effect: 'cube',
        grabCursor: false,
        cubeEffect: {
            shadow: false,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })
});

//Smooth scroll

$(function(){
    $('.menu-item a, .scroll-down a').on('click', function(){
       $('html, body').animate({
           scrollTop: $($.attr(this, 'href')).offset() .top
       }, 1000);
        return false
    });     
});