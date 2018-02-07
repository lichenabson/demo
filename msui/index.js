$(function(){
  //严格模式
  'use strict';
  $(document).on("pageInit", "#index", function() {
    $("#attendance-class-list").on("tap", "li.item-content", function() {
      $.router.load("list.html", false);
    });
  });
  $(document).on("pageInit", "#list", function() {
    $("#attendance-student-list").on("tap", "li", function() {
      $.router.load("detail.html", false);
    });
  });
  $(document).on("pageInit", "#index-class", function() {
    $("#attendance-student-list-class").on("tap", "li", function() {
      $.router.load("detail.html", false);
    });

  });
  $.init();
});
