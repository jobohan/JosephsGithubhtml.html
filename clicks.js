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