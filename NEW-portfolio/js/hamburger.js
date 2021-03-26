$(".open-btn").click(function () {
    $(this).toggleClass('active');
});

$(document).ready(function(){
    $(".open-btn").click(function(){
      $(".sp-nav").slideToggle();
    });
  });