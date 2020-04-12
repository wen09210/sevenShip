// 輪播
$(function () {
	$('body').removeClass('is-loading');
	$('[data-slider="banner"]').slick({
		autoplay: false,
		autoplaySpeed: 5000,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
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
	});
});

// 歡迎引導頁
    $(function () {
    $('[data-src="#welcomeBanner"]').click()
	var modalIsClick = false;
	/* 防止燈箱被重複觸發 */
	function clickOrNot(){
		if(modalIsClick === false){
		modalIsClick = true
		$('body,html').animate({
			scrollTop: 0
		})
		var focusThis = new Anno({

			target: '.bankLogin',
			content: '<div class="annoTitle">網路銀行登入</div><div class="annoTextContent">網路銀行請改由此登入</div>',
			position: 'bottom',
			buttons: [{
				text: '',
				className: 'anno-btn-skip',
			}]
		})

		focusThis.show()
		}
	}
	$('.fancybox-is-open').click(function () {
		clickOrNot()
			}) 
		
		return false
		})
