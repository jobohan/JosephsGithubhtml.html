/*global $*/
/*jslint sloppy:true, browser: true, white: true*/

/*global $*/
/*jslint sloppy:true, browser: true, white: true*/

$("h1.page-title").text("sun");


$(window).on('mousemove', function (e) {
    $('img.sun').css({left: e.pageX }); });


$(window).on('mousemove', function (e) {
    $('img.sun').css({left: e.pageX,
                       top: e.pageY}); });



