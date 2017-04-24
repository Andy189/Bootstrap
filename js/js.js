
$(document).ready(function(){
	//设置轮番自动播放
	$('#myCarousel').carousel({
	//播放时间4秒
		interval: 4000
		});
	//设置垂直居中
	/*$('.carousel-control').css('line-height',$('.banner img').height()+'px');
	$(window).resize(function(){
		var $height = $('.banner img').eq(0).height() ||
					  $('.banner img').eq(1).height() ||
					  $('.banner img').eq(2).height();
		$('.carousel-control').css('line-height',$height+'px');
		});*/
	$('.content2-text').css('margin-top',($('.content2 img').height()-$('.content2-text').height())/2);
	$(window).resize(function(){
		$('.content2-text').css('margin-top',($('.content2 img').height()-$('.content2-text').height())/2);
		});
	
	$('.content3-text').css('margin-top',($('.content3 img').height()-$('.content3-text').height())/2);
	$(window).resize(function(){
		$('.content3-text').css('margin-top',($('.content3 img').height()-$('.content3-text').height())/2);
		});
	});