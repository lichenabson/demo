$(function(){
  //严格模式
  'use strict';

  if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
    }, false);
  }

  $(document).on("pageInit", "#index", function() {
    $("#attendance-class-list").on("click", "li.item-content", function() {
      $.router.load("list.html", false);
    });
  });
  $(document).on("pageInit", "#list", function() {
    $("#attendance-student-list").on("click", "li", function() {
      $.router.load("detail.html", false);
    });
  });
  $(document).on("pageInit", "#index-class", function() {
    $("#attendance-student-list-class").on("click", "li", function() {
      $.router.load("detail.html", false);
    });

  });
  $.init();
});
