$(function() {

    // menu
    $('.cubinvest-l-guideLineHeader__burger').on('touchstart click', function(e) {
        e.preventDefault();
        $('html').toggleClass('is-menuOpened');
    });

    $('[data-menu="lv1"]').on('touchstart click', function(e) {
        e.preventDefault();
        if (!$(this).closest('.cubinvest-l-guidelineMenu__item').hasClass('is-open')) {
            $(this).closest('.cubinvest-l-guidelineMenu__item').addClass('is-open');
        } else {
            $(this).closest('.cubinvest-l-guidelineMenu__item').removeClass('is-open');
        }
        $(this).siblings('.cubinvest-l-guidelineMenuLv2').slideToggle();
    });

    printCode();

    function printCode() {
        var $target = $('[data-embedBlock-elements]');

        $target.each(function(i, element) {
            var codeBlock = $(element).closest('[data-embedBlock]').find('[data-embedBlock-code] code');
            var spaceLength = $(element).html().indexOf('<');
            var space = " ";
            for (var index = 1; index < spaceLength - 1; index++) {
                space += " ";
            }
            space = space + '<';
            var reSpace = new RegExp(space, "g");
            var html = $(element).html().replace(reSpace, "<").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
            codeBlock.html(html);
        })
    }
    urlTab();

    function urlTab() {
        var url = location.href;

        if (url.indexOf('?') != -1) {
            var index = url.indexOf('?') + 1;
            var type = decodeURI(url.substring(index));
            $('[data-menu-nav-container="' + type + '"]').show().siblings('[data-menu-nav-container]').hide();
        } else {
            $('[data-menu-nav-container]').eq(1).show();
        }
    }
})