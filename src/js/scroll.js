$(function(){
	let $detailsImage = $('.details__image'),
			$aboutImage = $('.about__image');

  let isVisible = (elem) => {
    let elemOffsetTop = elem.offset().top,
      scrollValue = $(document).scrollTop(),
      windowHeight = $(window).height();

    if(scrollValue + windowHeight > elemOffsetTop*1.08){
      elem.addClass('animate');
    }
  };

  isVisible($detailsImage);
  isVisible($aboutImage);

	$(window).scroll(() => {
    isVisible($detailsImage);
    isVisible($aboutImage);
	});

});