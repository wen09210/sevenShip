
$(function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $("select").select2('destroy');
    }

    if ($(window).innerWidth() > 768) { $('.mobile-hidden-accordin').addClass('mobile-display-collapse'); }
    var resizeTimer = null;
    $(window).bind('resize', function () {
        if (resizeTimer) clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            if ($(window).innerWidth() > 768) {
                $('.mobile-hidden-accordin').addClass('mobile-display-collapse');
                $('.mobile-hidden-accordin').removeClass('collapsed');
                $('.mobile-hidden-accordin').parent('.collapse-header').addClass('open');
                $('[data-parent="#mobile-accordionWrapa1"]').addClass('show');
                $('.mobile-hidden-accordin .collapse-title span').text('全部展開');
            } else {
                $('.mobile-hidden-accordin').removeClass('mobile-display-collapse');

            }

        }, 500);
    });
})

$('.mobile-hidden-accordin').click(function () {
    var el = $('.mobile-hidden-accordin .collapse-title span');
    el.text(el.text() == '收合' ? '全部展開' : '收合');
})
