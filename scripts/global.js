$(document).ready(function(){
  $(window).scroll(toggleScrollUp);
  $('#scrollToTop').click(scrollToTop);
  $('#scrollToTop').click(scrollToTop);
  
});

function scrollToTop(){
  $('html, body').animate({ scrollTop: 0 }, 500);
}

function toggleScrollUp(){
  if($(window).scrollTop() > 250){
    $('#scrollToTop').addClass('active');
  } else {
    $('#scrollToTop').removeClass('active');
  }
  
}
