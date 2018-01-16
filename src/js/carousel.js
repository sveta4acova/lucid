$(function(){
  $(document).ready(function(){
    $('.plans__carousel').slick({
      arrows: false,
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
});