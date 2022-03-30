$(document).ready(function() {

    $('#menuIcon').on('click', function() {

        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function() {
        $('menuIcon').removeClass('fa-times');
        $('header').removeClass('toggle');
    })
})