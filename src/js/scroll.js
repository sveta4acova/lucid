$(function(){
	var $detailsImage = $('.details__image'),
			$aboutImage = $('.about__image');

  isVisible($detailsImage);
  isVisible($aboutImage);

	$(window).scroll(function(){
    isVisible($detailsImage);
    isVisible($aboutImage);
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