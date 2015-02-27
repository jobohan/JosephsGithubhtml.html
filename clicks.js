/*global $*/
/*jslint sloppy:true, browser: true, white: true*/

/*global $*/
/*jslint sloppy:true, browser: true, white: true*/

$("h1.page-title").text("My code runs!");





var x = $(window).width() / 2;
var y = $(window).height() / 2;
var theta = 0;
var vtheta = Math.PI / 100;
var r = 140;
setInterval(function () {
    $('.logo').css({
        'left': x + r * Math.cos(theta),
        'top': y + r * Math.sin(theta)
    });
    theta = theta + vtheta;
}, 10);

