// js jquery
$(document).ready(function() {
    //клонируем из мобильной для адаптива
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
        infinite: true,
    });
});