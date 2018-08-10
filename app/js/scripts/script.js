// js jquery
var isMobile = !window.matchMedia('(min-width: 680px)').matches;
var isDesktop = window.matchMedia('(min-width: 1280px)').matches;

//слайдер объектов
function objSlider(){
    if($('.obj-slider').length>0){
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
    }
}
$(window).on('load resize', function(){
    isMobile = !window.matchMedia('(min-width: 680px)').matches;
    isDesktop = window.matchMedia('(min-width: 1280px)').matches;
    if($('.obj-slider').length>0){
        objSlider();
        $('.obj-slider').each(function(){
            var frame  = $(this);
            if(!isMobile) frame.sly('reload');
            else frame.sly(false);
        });
    }
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

    //слайдер о компании
    $('.about-slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 7000,
        speed: 1000,
        responsive: [
            {
                breakpoint: 680,
                settings: {
                    arrows: true
                }
            }
        ]
    });

    //слайдер Принципы работы
    $('.principles-slider').slick({
        dots: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 680,
                settings: "unslick"
            }
        ]
    });
    //слайдер Сотрудники компании
    $('.employees-slider').slick({
        dots: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: "unslick"
            }
        ]
    });

    objSlider();

    //feedback
    var formModal =  $('.modal-form').iziModal({
        radius: 0,
        overlayColor: 'rgba(0, 0, 0, 0.7)',
        transitionIn: 'comingIn',
        transitionOut: 'comingOut',
        transitionInOverlay: 'fadeIn',
        transitionOutOverlay: 'fadeOut',
        onOpening: function(){
            if(window.matchMedia('(min-width: 780px)').matches) {
                formModal.iziModal('setWidth', 700);
            }
            else formModal.iziModal('setFullscreen', true);
            //else formModal.iziModal('setWidth', '100%');
        }
    });

    //form
    if($('.js-movePh').length>0){
        $('.js-movePh').each(function() {
            if($(this).val()) $(this).next('span').addClass('moveUp');
        });
        $('.js-movePh').on('focus', function() {
            $(this).next('span').addClass('moveUp');
        });
        $('.js-movePh').on('focusout', function() {
            if(!$(this).val()) $(this).next('span').removeClass('moveUp');
        });
        $("#phone").mask("+7 999 999 99 99");
    }

});
$(window).on('resize', function(){
    $('.principles-slider').slick('resize');
    $('.employees-slider').slick('resize');
});