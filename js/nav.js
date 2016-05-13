var mainbottom = $('#carousel-example-generic').offset().top + $('#carousel-example-generic').height();

$(window).on('scroll', function() {
  stop = Math.round($(window).scrollTop());
if (stop >= mainbottom) {
  $('.navbar-default').addClass('navbar-fixed-top');
} else {
  $('.navbar-default').removeClass('navbar-fixed-top');
}
});

/*$("nav ul li a[href^='#']").on('click', function(event){
  var target;
  target = this.hash;

  event.preventDefault();

  var navOffset;
  navOffset =
})*/
