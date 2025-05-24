$(document).ready(function(){
    $('.slider').slick({
      infinite: true,
      slidesToShow: 3, // Muestra 3 productos a la vez (ajusta según tus necesidades)
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000, // Cambia la velocidad del autoplay según tus necesidades
      dots: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
  