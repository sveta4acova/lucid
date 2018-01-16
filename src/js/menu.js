$(function(){
  $(document).on('click', '.nav-link', function(){
    var $this = $(this),
      linkHref = $this.attr('href');

    if ($this.hasClass('mobile-menu__link')) {
      $(document).trigger(CustomEvents.MENU_CLOSE);
    }

    $(linkHref).animatescroll({
      scrollSpeed: 1000,
      padding: 20
    });
  });

  GLOBALS.$menuOpenBtn.click(function(){
    var $this = $(this);

    if($this.hasClass('open-menu')){
      $(document).trigger(CustomEvents.MENU_CLOSE);
    } else {
      GLOBALS.$body.addClass('open-menu');
      $this.addClass('open-menu');
    }

  });
});
