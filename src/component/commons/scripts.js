const $ = window.$;
window.onload = function () { }
$(function () {
    $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%'
    })
})

$(document).ready(function($) {
    var Body = $('body');
    Body.addClass('preloader-site');
});
$(window).on('load', function() {
    $('.preloader-wrapper').fadeOut();
    $('.preloader-wrapper').fadeOut();
    $('body').removeClass('preloader-site');
    $('.wrapper').fadeIn();
    $('.login-box').fadeIn();
});