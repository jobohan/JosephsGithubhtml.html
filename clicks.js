/*global $*/
/*jslint sloppy:true, browser: true, white: true*/

/*global $*/
/*jslint sloppy:true, browser: true, white: true*/

$(window).on('click', function (e) {
    $('sun').css({left: e.pageX});
});

$(window).on('click', function (e) {
    $('sun').css({left: e.pageXXX,
                       top: e.pageYYY});
});

$("h1.page-title").text("mercury");

var x = $(window).width() / 2;
var y = $(window).height() / 2;
var theta = 0;
var vtheta = Math.PI / 400;
var r = 100;
setInterval(function () {
    $('.mercury').css({
        'left': x + r * Math.cos(theta),
        'top': y + r * Math.sin(theta)
    });
    theta = theta + vtheta;
}, 20);



var xx = $(window).width() / 4;
var yy = $(window).height() / 4;
var theta = 0;
var vtheta = Math.PI / 180;
var r = 200;
setInterval(function () {
    $('.earth').css({
        'left': xx + r * Math.cos(theta),
        'top': yy + r * Math.sin(theta)
    });
    theta = theta + vtheta;
}, 20);

var x3 = $(window).width() / 6;
var y3 = $(window).height() / 6;
var theta = 0;
var vtheta = Math.PI / 300;
var r = 400;
setInterval(function () {
    $('.mars').css({
        'left': x3 + r * Math.cos(theta),
        'top': y3 + r * Math.sin(theta)
    });
    theta = theta + vtheta;
}, 20);

