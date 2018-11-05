$(document).ready(function(){
//header
	$(window).scroll(function() {
		if ($('.section-1').height() > $(window).scrollTop()) {
			$('.header').removeClass('header-show');
		}
		else {
			$('.header').addClass('header-show');
		}
	});
//header-navmenu-scroll
// 	$('.header-nav ul li a').click(function(e){
// 		e.preventDefault();
// 		var x=$($(this).attr('href'))
// 			  .offset().top;
// 		$('html, body').animate({'scrollTop':x},400)
// 		$('.header-nav-activ').removeClass('header-nav-activ');
// 		$(this).addClass('header-nav-activ')
//
// 	});
// 	$(window).scroll(function() {
// 		var s_top=$(window).scrollTop();
//   		$('section[id]').each(function(){
// 			if($(this).offset().top <= (s_top+($( window ).height()/2))){
// 				$('.header-nav-activ').removeClass('header-nav-activ');
// 				$('a[href="#'+$(this).attr('id')+'"]').addClass('header-nav-activ')
// 			}
// 		})
// 	})
	$(window).on('load resize', function() {
		if ($(this).width() <= 800) {
			$('.header-nav').addClass('mobile-nav-menu')
		}
		else {
			$('.header-nav').removeClass('mobile-nav-menu');
			$('.header-nav').removeAttr('style');
		}
	});
	$('.mobile-menu-btn, .header-nav ul li a').click(function() {
		$('.mobile-nav-menu').delay(400).slideToggle(300);
		$('.mobile-menu-btn').toggleClass('mobile-menu-btn-activ');
	})
//slider
  	$(".slider").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
  		autoplaySpeed: 5000,
  		arrows: false,
  		adaptiveHeight: true,
  		responsive: [
    		{
    		  	breakpoint: 1174,
    		  	settings: {
    		    	slidesToShow: 2,
    		    	slidesToScroll: 2,
    		  	}
    		},
    		{
    		  	breakpoint: 800,
    		  	settings: "unslick"
    		}
    	]
    	
    });
//filtration
	$('.f-menu ul li span').click(function() {
		$('.f-menu-activ').removeClass('f-menu-activ');
		$(this).addClass('f-menu-activ')
	})

	$('.f-menu-all').click(function() {
		$('.content-box').filter('.f-all').show()
		$('.content-box').filter(':not(.f-all)').hide()
	})
	$('.f-menu-branding').click(function() {
		$('.content-box').filter('.f-branding').show()
		$('.content-box').filter(':not(.f-branding)').hide()
	})
	$('.f-menu-web').click(function() {
		$('.content-box').filter('.f-web').show()
		$('.content-box').filter(':not(.f-web)').hide()
	})
	$('.f-menu-logo').click(function() {
		$('.content-box').filter('.f-logo').show()
		$('.content-box').filter(':not(.f-logo)').hide()
	})
	$('.f-menu-photography').click(function() {
		$('.content-box').filter('.f-photography').show()
		$('.content-box').filter(':not(.f-photography)').hide()
	})
});	
