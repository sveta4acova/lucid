$(function(){
  isVisible($('.details__image'));
  isVisible($('.about__image'));

	$(window).scroll(function(){
		isVisible($('.details__image'));
		isVisible($('.about__image'));
	});

	function isVisible(elem){
		var elemOffsetTop = elem.offset().top,
			scrollValue = $(document).scrollTop(),
			windowHeight = $(window).height();

		if(scrollValue + windowHeight > elemOffsetTop*1.08){
			elem.addClass('animate');
		}
	}
});