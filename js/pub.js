$(document).ready(function () {
  // gnb
  $("header")
    .mouseover(function () {
      $(".gnb_menu_layer").show();
    })
    .mouseout(function () {
      $(".gnb_menu_layer").hide();
    });

  //quick menu
  $(window).on("scroll", function () {
    var scTop = $(window).scrollTop();
    var quickTop = $(".quick_menu").offset().top;
    var footTop = $(".footer").offset().top - 150;

    console.log(quickTop, footTop);
    if (quickTop >= footTop) {
      $(".quick_menu").css("z-index", -1);
    } else {
      $(".quick_menu").css("z-index", 10);
    }
  });
});
