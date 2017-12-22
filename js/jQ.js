$(function(){
	'use strict';
	$('html').niceScroll();
	$('.navbar ul .nav-i').hover(function(){
		$(this).css({color:'#f7600e',transform:'rotate(90deg'});

	})
		$('.navbar ul .nav-i').mouseleave(function(){
		$(this).css({color:'#fff',transform:'rotate(180deg)'});
	})
		$('.navbar .nav-down').click(function(){
		$('html,body').animate({
			scrollTop:$('.features').offset().top
		},1000)
	})
		$('.show-more').click(function(){
			$('.work .item-hidden').fadeIn(1000);
		});
		$('.us').click(function(){
			$('html,body').animate({
				scrollTop:$('.team').offset().top
			},1000)
		})
		$('.our').click(function(){
			$('html,body').animate({
				scrollTop:$('.work').offset().top
			},1000)
		})
});


