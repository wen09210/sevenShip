
$(function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $("select").select2('destroy');
        $("select").addClass('select-arrow-down')
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

    $('#add_buyer_list').click(function () {
        var buyer_list_number = $('.buyer-list').length;
        if (buyer_list_number < 5){
            $(this).parent().prev().children('ol').append(' <li class="buyer-list"><input type="text" class="form-control" name=""placeholder="最多五則，可要求買家填入ATM匯款帳號" ><i class="bx bx-x" onclick="remove_buyer_list(this)"></i></li>');
        }
        buyer_list_number = buyer_list_number + 1;
    })
})
function remove_buyer_list(params) {
    let list = $(params).parent('.buyer-list');
    list.remove();
}


$('.mobile-hidden-accordin').click(function () {
    var el = $('.mobile-hidden-accordin .collapse-title span');
    el.text(el.text() == '收合' ? '全部展開' : '收合');
})


