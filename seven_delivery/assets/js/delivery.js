
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
            $('.actitvity_wrap').slick({
                autoplay: false,
                autoplaySpeed: 5000,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                
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
