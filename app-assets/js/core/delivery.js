
        // 輪播
        $(function () {

            $('[data-slider="banner"]').slick({
                autoplay: false,
                autoplaySpeed: 5000,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                asNavFor: '[data-text="text"]',
                appendDots: $('[data-slider-nav="mainKv"]'),
            });
            $('[data-text="text"]').slick({
                autoplay: false,
                autoplaySpeed: 5000,
                asNavFor: '[data-slider="banner"]',
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
                cssEase: false,
                touchMove: false,
            });
            $('.actitvity_wrap,.best_seller').slick({
                autoplay: false,
                autoplaySpeed: 5000,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                responsive: [
                    {
                        breakpoint: 960,
                        settings: {
                            dots: true,
                            arrows: false,
                        }
                    },
                ]    
            });

        });
        // sideFunctionClose

        $('.myFavorBtn').click(function () {
            $('.sideFunction').removeClass('closeFunction');

        })
        $('.sideFunctionClose').click(function () {
            $('.sideFunction').addClass('closeFunction')
            $('.sideFixedBtn').removeClass('active');
            $('.blackMask').removeClass('on');
        })
        $('.smallDelete').click(function (e) {
            $(this).parents('.favorOuter').remove();
            return false;
        })
        $('button.closeBtn').click(function(){
            $('.global-alert').remove()
        })
$(document).ready(function () {
    $('body').scrollspy({
        target: '#side-nav'
    });
});
$('[data-id="js-burger"]').on('click', function () {
    $('body').toggleClass('is-openMenu');
    $('.header').toggleClass('on');
});

$('.o-menuMask').on('touchstart click', function (e) {
    e.preventDefault();
    $('body').removeClass('is-openMenu');
    $('.header').removeClass('on');
});

$('.c-menuLv1__name').on('click', function () {
    $(this).toggleClass('on');
});

$('.c-menuLv2__name').on('click', function () {
    $(this).toggleClass('on');
});
// 漢堡連結
$('.cs-o-link').on('touchstart click', function (e) {
    e.preventDefault();
    $('body').removeClass('is-openMenu');
    $('.header').removeClass('on');
    $([document.documentElement, document.body]).animate({
        scrollTop: $($(this).attr("href")).offset().top
    }, 1000);
});

$('.side-nav .nav-link').on('touchstart click', function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $($(this).attr("href")).offset().top
    }, 1000);
});