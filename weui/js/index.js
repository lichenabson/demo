$(function(){
  //严格模式
  'use strict';

  FastClick.attach(document.body);
  var u = navigator.userAgent;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
  /*var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端*/
  if(isAndroid){
    //增加返回头
    $("body").prepend('<header class="bar bar-nav"><button class="button button-link button-nav pull-left"<span class="icon icon-left"></span><a href="javascript:history.go(-1)"><返回</a></button</header>')
  }
});
