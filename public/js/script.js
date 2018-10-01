/*$('.carousel.carousel-slider').carousel({
    fullWidth: true
  });*/

  $(document).ready(function(){
    $('.parallax').parallax();
    $('.modal').modal();
    $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy();
     $('.carousel.carousel-slider').carousel({
	    fullWidth: true,
	    indicators: true
	  });
	      

  });