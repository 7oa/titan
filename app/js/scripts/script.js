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
                touchDragging: true,

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
        $(this).toggleClass('open').next().slideToggle();
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

    //слайдер контакты Сотрудники компании
    if (!window.matchMedia('(min-width: 680px)').matches) {
        $('.contacts-employees-slider').slick({
            dots: true,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 1280,
                    settings: "unslick"
                }
            ]
        });
    }

    //слайдер объектры
    $('.obj-more').slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 680,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //слайдер news-more
    $('.news-more').slick({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    dots: false,
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 680,
                settings: {
                    dots: false,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    if (window.matchMedia('(min-width: 680px)').matches) {
        $('.contacts-employees-slider').slick({
            dots: true,
            slidesPerRow: 1,
            rows: 2,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 1280,
                    settings: "unslick"
                }
            ]
        });
    }

    objSlider();



    //popup куки
    /*var cookiesModal =  $('#cookies').iziModal({
        radius: 0,
        width: '100%',
        bottom: 0,
        overlay: false,
        transitionIn: 'fadeInUp',
        transitionOut: 'fadeOutDown',
        transitionInOverlay: 'fadeIn',
        transitionOutOverlay: 'fadeOut',
        zindex: '999',
        bodyOverflow: false
    });*/

    //Использование куков
    if($.cookie('use_cookie')!='yes'){
        //cookiesModal.iziModal('open');
        $('#cookies').show();
    }
    $(document).on('click','.cookies__button',function () {
        $.cookie('use_cookie', 'yes', {
            expires: 365,
            path: '/'
        });
        $('#cookies').fadeOut();
    });

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

    $('.js-select').click(function(){
        $(this).parent().toggleClass('open');
        $(this).next().slideToggle();
    });

    $('.js-open-filtr').click(function(){
        $('.js-filtr').fadeIn();
        $('.wrapper').addClass('hidden');
    });
    $('.js-filtr-close').click(function(){
        $('.js-filtr').fadeOut();
        $('.wrapper').removeClass('hidden');
    });

    //галлерея
    $('.photo-gallery').simpleLightbox();
    $('.plan-gallery').simpleLightbox();

    //тэги
    $('.js-tag').click(function(){
        var img = $(this).data('img');
        $('.js-tag-img img').attr('src',img);
        $(this).addClass('selected').siblings().removeClass('selected');
    });

    //галерея видео
    $('.video-full').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        asNavFor: '.video-prev',
        infinite: true,
        responsive: [
            {
                breakpoint: 680,
                settings: {
                    arrows: true,
                    dots: true,
                    asNavFor: null
                }
            }
        ]
    });
    $('.video-prev').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.video-full',
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
        infinite: true
    });

    //значок композитного сайта в футер
    $('.bx-composite-btn').parent().appendTo( $('.footer') );

});
$(window).on('resize', function(){
    $('.principles-slider').slick('resize');
    $('.employees-slider').slick('resize');
    $('.contacts-employees-slider').slick('resize');
});
$(document).mouseup(function (e){
    var filtr = $('.select.open');
    if (!filtr.is(e.target)
        && filtr.has(e.target).length === 0) {
        setTimeout(function () {
            filtr.removeClass('open').children('.select__list').slideUp();
        }, 50);
    }

    var childMenu = $('.js-menu-child');
    var menuLink = $('.js-menu-link');
    if (!childMenu.is(e.target) && !menuLink.is(e.target)
        && childMenu.has(e.target).length === 0 && menuLink.has(e.target).length === 0) {
            if(menuLink.hasClass('open')){
            childMenu.slideUp().prev('.js-menu-link').removeClass('open');
        }
    }

    var filtr2 = $('.select-obj.open');
    if (!filtr2.is(e.target)
        && filtr2.has(e.target).length === 0) {
        setTimeout(function () {
            filtr2.removeClass('open').children('.select-obj__list').slideUp();
        }, 50);
    }


});
