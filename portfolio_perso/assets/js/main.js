$(document).ready(function() {

    $('#menuIcon').on('click', function() {

        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function() {
        $('#menuIcon').removeClass('fa-times');
        $('header').removeClass('toggle');
    });

    // Script de ralentissement
        $("a").on('click', function(event) {
      
          if (this.hash !== "") {
            event.preventDefault();
           
            let hash = this.hash;
      
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 
            700, 
            function(){
      
              window.location.hash = hash;
            });
          } 
        });
});