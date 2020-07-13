// accordion
$(document).ready(function () {
  $("#accordion .acc-head").on("click", f_acc);
});

function f_acc() {
  $("#accordeon .acc-head").not($(this).next()).slideUp(200);
  $(this).toggleClass("active");
  $(this).next().slideToggle(200);
}

// tabs
$(document).ready(function () {
  $("ul.tabs-caption").on("click", "li:not(.active)", function () {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active")
      .closest("div.tabs")
      .find("div.tabs-content")
      .removeClass("active")
      .eq($(this).index())
      .addClass("active");
  });
});

// menu
$(document).ready(function () {
  var header = $(".header");
  var headerMob = $(".header-mob");
  var burger = $(".burger");

  burger.click(function () {
    header.toggleClass("opened");
    headerMob.toggleClass("active");
  });
});

// active menu item
$(document).ready(function () {
  var pathname_url = window.location.pathname;
  var href_url = window.location.href;

  $(".menu-list li").each(function () {
    var link = $(this).find("a").attr("href");
    if (pathname_url == link || href_url == link) {
      $(this).addClass("active");
    }
  });
});

// popup
$(document).ready(function () {
  $(".show-popup").click(function () {
    var popup_id = $("#" + $(this).attr("rel"));
    $(popup_id).show();
    $(".popup-overlay").show();
    $('body').css({'overflow' : "hidden"})
  });

  $(".popup-overlay").click(function () {
    $(".popup-overlay, .popup").hide();
    $('body').css({'overflow' : "inherit"})
  });

  $(".popup-close").click(function () {
    $(".popup-overlay, .popup").hide();
    $('body').css({'overflow' : "inherit"})
  });
});

// dropdown
$(".dropdown-link").click(function() {
  $('.dropdown-content').hide();
  $(this).next().toggle();
});
$(document).on('click', function(e) {
  if (!$(e.target).closest(".dropdown").length) {
    $('.dropdown-content').hide();
  }
  e.stopPropagation();
});

// dropdown-mobile
$(".options-mob").click(function() {
  $(".options").toggle();
  $(".filters").css({"flex-direction" : "column"});
});

$(".search-mob").click(function() {
  $(".search").toggle();
  $(".filters").css({"flex-direction" : "column"});
});
