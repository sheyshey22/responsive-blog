(function(window) {
  $('document').ready(function() {
    //on click of hamburger nav element - toggle to x or vice versa
    $('#outer-nav-control').click(function() {
      toggleNav();
    });
    //mobile nav back to top link - scrolls user back to page top
    $('.backToTop').click(function() {
      $('html, body').animate({
        scrollTop: 0
      }, 'slow');
    });
    //mobile slider nav variables
    var body = document.body,
      mask = document.createElement("div"),
      toggleSlideRight = document.querySelector(".mobile-nav"),
      slideMenuRight = document.querySelector(".slide-menu-right");
    //mask over page not covered by opened mobile nav
    mask.className = "mask";
    //on click of mobile nav hamburger icon open nav
    toggleSlideRight.addEventListener("click", function() {
      $(body).toggleClass("smr-open");
      if ($(body).hasClass("smr-open")) {
        document.body.appendChild(mask);
        $('html, body').animate({
          scrollTop: 0
        }, 'slow');
      } else {
        document.body.removeChild(mask);
      }
    });
    //on click of mask close nav
    mask.addEventListener("click", function() {
      $(body).toggleClass("smr-open");
      document.body.removeChild(mask);
      toggleNav();
    });

    var userLang = navigator.language || navigator.userLanguage;
    //set active nav class if any
    $(".navigation__link").each(function() {
      var link = $(this);
      var linkHref = link.attr("data-href");
      var langHref = linkHref.slice(-2);
      var currentPage = window.location.href.split('/').pop();
      if (linkHref === currentPage) {
        link.addClass("active");
      } else if (userLang.indexOf(langHref) >= 0 && $(".languages").children(".active").length < 0) {
        link.addClass("active");
      } else {}
    });

    //SHOP OUTLETS SUB NAV
    $(".shop-outlets > div").click(function() {
      $(".shop-outlets ul").height($("#nav-menu").height());
      if ($(this).parent().hasClass("nav-out")) {
        $(this).parent().removeClass("nav-out");
        $(".slide-menu-right > ul > li:not(.shop-outlets), .shop-outlets > div:first-child").each(function() {
          $(this).removeClass("hide-main-nav");
        });
      } else {
        $(this).parent().addClass("nav-out");
        $(".slide-menu-right > ul > li:not(.shop-outlets), .shop-outlets > div:first-child").each(function() {
          $(this).addClass("hide-main-nav");
        });
      }
    });

    $(".po-go-back").click(function() {
      $(".slide-menu-right > ul > li:not(.shop-outlets), .shop-outlets > div:first-child").each(function() {
        $(this).removeClass("hide-main-nav");
      });
      $(".shop-outlets").removeClass("nav-out");
    });

  });
}(window));
//set initial mobile nav open state to false becasue its closed
var isOpen = false;
//toggle mobile nav hamburger
//X when opened - hamburger when closed
function toggleNav() {
  if (!isOpen) {
    $('#outer-nav-control').attr('data-icon', 'close');
    isOpen = true;
    $('#bar-1,#bar-3').addClass('hide-hamburger-line');
    $('#bar-2').addClass('bar-2-x');
    $('#bar-4').addClass('bar-4-x');
    $('nav.slide-menu-right').height($('body').height());
  } else {
    $('#outer-nav-control').attr('data-icon', 'hamburger');
    isOpen = false;
    $('#bar-1,#bar-3').removeClass('hide-hamburger-line');
    $('#bar-2').removeClass('bar-2-x');
    $('#bar-4').removeClass('bar-4-x');
    $(".slide-menu-right > ul > li:not(.shop-outlets), .shop-outlets > div:first-child").each(function() {
      $(this).removeClass("hide-main-nav");
    });
    $(".shop-outlets").removeClass("nav-out");
  }
}