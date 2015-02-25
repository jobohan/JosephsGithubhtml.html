/*global $*/
/*jslint sloppy:true, browser: true, white: true*/

/*global $*/
/*jslint sloppy:true, browser: true, white: true*/

$("h1.page-title").text("My code runs!");


$(window).on('mousemove', function (e) {
    $('.logo').css({left: e.pageX,
                    top: e.pageY});
    $('.logo').toggleClass('rotated');
});


setInterval(function () {
    $('.logo').css({
        'margin-left': 200 * Math.random() - 100
    });
}, 200);


function randomMargin() {
    return Math.random() * 200 - 100;
}
setInterval(function () {
    $('.logo').css({
        'margin-left': randomMargin(),
        'margin-top': randomMargin()
    });
}, 200);

var vx = Math.random() * 10 - 5;
var x = $(window).width() / 2;

setInterval(function () {
    $('.logo').css({
        left: x
    });
    x = x + vx;
}, 20);

var vx = Math.random() * 10 - 5;
var vy = Math.random() * 10 - 5;
var x = $(window).width() / 2;
var y = $(window).height() / 2;

setInterval(function () {
    $('.logo').css({
        left: x,
        top: y
    });
    x = x + vx;
    y = y + vy;
}, 20);

var vx = Math.random() * 10 - 5;
var vy = Math.random() * 10 - 5;
var x = $(window).width() / 2;
var y = $(window).height() / 2;

setInterval(function () {
  $('.logo').css({
      left: x,
      top: y
  });
  x = x + vx;
  y = y + vy;
  if (x < 0) {
      x = 0;
      vx = -vx;
  } else if (x > $(window).width()) {
      x = $(window).width();
      vx = -vx;
  }
}, 20);

var vx = Math.random() * 10 - 5;
var vy = Math.random() * 10 - 5;
var x = $(window).width() / 2;
var y = $(window).height() / 2;

setInterval(function () {
  $('.logo').css({
      left: x,
      top: y
  });
  x = x + vx;
  y = y + vy;
  if (x < 0) {
      x = 0;
      vx = -vx;
  } else if (x > $(window).width()) {
      x = $(window).width();
      vx = -vx;
  }
  if (y < 0) {
      y = 0;
      vy = -vy;
  } else if (y > $(window).height()) {
      y = $(window).height();
      vy = -vy;
  }
}, 20);

var x = $(window).width() / 2;
var y = $(window).height() / 2;
var theta = 0;
var vtheta = Math.PI / 180;
var r = 60;
setInterval(function () {
    $('.logo').css({
        'left': x + r * Math.cos(theta),
        'top': y + r * Math.sin(theta)
    });
    theta = theta + vtheta;
}, 20);