// Global $ ,alert , console
$(function() {
  "use strict";

  // Adjuct Header Height
  var MyHeader = $(".header"),
    MySlider = $(".bxslider");
  MyHeader.height($(window).height());
  $(window).resize(function() {
    MyHeader.height($(window).height());

    // Adjust Bx Slider List Item Center
    MySlider.each(function() {
      $(this).css(
        "paddingTop",
        ($(window).height() - $(".bxslider li").height()) / 2
      );
    });
  });

  // Links Add Active Class

  $(".links li a").click(function() {
    $(this)
      .parent()
      .addClass("active")
      .siblings()
      .removeClass("active");
  });

  // Triger The Bx Slider
  MySlider.bxSlider({
    pager: false,
  });
  // Adjust Bx Slider List Item Center
  MySlider.each(function() {
    $(this).css(
      "paddingTop",
      ($(window).height() - $(".bxslider li").height()) / 2
    );
  });

  // Smooth Scroll
  $(".links li a").click(function() {
    $("html , body").animate(
      {
        scrollTop: $("#" + $(this).data("value")).offset().top,
      },
      1000
    );
  });

  // projects
  $(".projects .container .kinds li").click(function() {
    $(this)
      .addClass("selected")
      .siblings()
      .removeClass("selected");
  });

  // Triger MixItUp
  $("#Container").mixItUp();

  // Triger Nice Scroll

  $("body").niceScroll({
    cursorcolor: "#1eb396",
    cursorwidth: "10px",
    cursorborder: "none",
    borderborderradious: "1px",
  });
  $("body").mouseover(function() {
    $("body")
      .getNiceScroll()
      .resize();
  });
});
