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
    $("body").css({ overflow: "hidden" });
    $('#card-images').slick('refresh')
    $('#card-images-dotted').slick('refresh')
  });

  $(".popup-overlay").click(function () {
    $(".popup-overlay, .popup").hide();
    $("body").css({ overflow: "inherit" });
  });

  $(".popup-close").click(function () {
    $(".popup-overlay, .popup").hide();
    $("body").css({ overflow: "inherit" });
  });
});

// card-product-gallery
$(document).ready(function () {
  $(".card-product .popup-gallery .img").click(function () {
    $(".card-product .popup-gallery .img").removeClass("active");
    $(this).toggleClass("active");
    $(".picture .img").attr("src", $(this).data("img"));
  });
});

// mask for input phone
function phone_mask() {
  $.mask.definitions["9"] = "";
  $.mask.definitions["d"] = "[0-9]";
  $(".phone").mask("+7 ddd ddd-dd-dd");
  $(".phone").intlTelInput({
    autoHideDialCode: false,
    autoPlaceholder: "aggressive",
    placeholderNumberType: "MOBILE",
    preferredCountries: ["ru", "th"],
    utilsScript: "/assets/js/intl-tel-input/js/utils.js",
    customPlaceholder: function (
      selectedCountryPlaceholder,
      selectedCountryData
    ) {
      return (
        "+" +
        selectedCountryData.dialCode +
        " " +
        selectedCountryPlaceholder.replace(/[0-9]/g, "_")
      );
    },
  });
  $(".iti").css({ display: "block" });
  $(".phone").on("close:countrydropdown", function (e, countryData) {
    $(this).val("");
    $(this).mask($(this).attr("placeholder").replace(/[_]/g, "d"));
  });
}
phone_mask();

// jQuery UI Datepicker
/* localization datepicker */
$.datepicker.regional["ru"] = {
  closeText: "Закрыть",
  prevText: "Предыдущий",
  nextText: "Следующий",
  currentText: "Сегодня",
  monthNames: [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ],
  monthNamesShort: [
    "Янв",
    "Фев",
    "Мар",
    "Апр",
    "Май",
    "Июн",
    "Июл",
    "Авг",
    "Сен",
    "Окт",
    "Ноя",
    "Дек",
  ],
  dayNames: [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
  ],
  dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
  dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
  weekHeader: "Не",
  dateFormat: "dd.mm.yy",
  firstDay: 1,
  isRTL: false,
  showMonthAfterYear: false,
  yearSuffix: "",
};
$.datepicker.setDefaults($.datepicker.regional["ru"]);

$(function () {
  $("#datepicker").datepicker({
    dateFormat: "dd-mm-yy",
  });
});

//slider for main page
$(".slick").slick({
  dots: true,
  arrow: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: "linear",
  prevArrow: "#left-arrow",
  nextArrow: "#right-arrow",
});

// btn-up
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $("#toTop").fadeIn();
    } else {
      $("#toTop").fadeOut();
    }
  });

  $("#toTop").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 800);
  });
});

// Slider for card in modal
$('#card-images').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  asNavFor: '#card-images-dotted',
  prevArrow: "#left-arrow",
  nextArrow: "#right-arrow",
});

$('#card-images-dotted').slick({
  slidesToShow: 3,
  asNavFor: '#card-images',
  focusOnSelect: true,
  arrows: false,
});

// venobox for cadr images
$(document).ready(function(){
  $('.venobox').venobox({
    overlayColor: '#ffffff',
    overlayClose: true,
    cb_post_open  : function(){
      $('.vbox-zoom').click(function () {
        $(this).toggleClass("active");
        $('.vbox-figlio').toggleClass("increase");
      });

      $('.vbox-content').click(function () {
        $('.vbox-figlio').removeClass("increase");
        $('.vbox-zoom').removeClass("active");
      });
  },
  });
});