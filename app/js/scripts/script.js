// js jquery
var isModile = !window.matchMedia('(min-width: 680px)').matches;
$(window).on('load resize', function(){
    isModile = !window.matchMedia('(min-width: 680px)').matches;
});
$(document).ready(function() {
    //клонируем для адаптива
    $('.application-btn').clone().appendTo('.header__application');
    $('.ss-list').clone().appendTo('.footer__desktop-ss');
    $('.footer__application .application-btn-footer').clone().appendTo('.footer__tablet-application');
    $('.footer__application .application-btn-footer').clone().appendTo('.footer__desktop-application');

    //кнопка бургер
    $('.js-menu-btn').click(function(){
        $(this).addClass('open');
        $('.js-menu').slideDown();
    });

    //закрыть моб. меню
    $('.js-menu-close').click(function(){
        $('.js-menu').slideUp();
        $('.js-menu-btn').removeClass('open');
    });

    //выпадающее меню
    $('.js-menu-link').click(function () {
        $(this).next().slideToggle();
        return false;
    });

    //слайдер на главной
    $('.slider-index-sm').slick({
        dots: true,
        infinite: true
    });

    //слайдер объектов
    /*$('.obj-slider').slick({
        dots: true,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 680,
                settings: "unslick"
            }
        ]
    });*/
    $('.obj-slider').each(function(){
        var frame  = $(this);
        var wrap   = frame.parent();

        frame.sly({
            horizontal: 1,
            itemNav: 'basic',
            smart: 1,
            scrollBar: wrap.find('.sly-scrollbar'),
            scrollBy: 0,
            pagesBar: wrap.find('.sly-pages'),
            activatePageOn: 'click',
            speed: 300,
            dragHandle: 1,
            clickBar: 1,

            prevPage: wrap.find('.prevPage'),
            nextPage: wrap.find('.nextPage')
        });
    });


});