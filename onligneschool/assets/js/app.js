$(document).ready(function(){

    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    
  $(window).on('scroll load',function(){

    $('.fa-bars').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if($(window).scrollTop() > 60){
      $('header').addClass('header-active');
      if($(window).scrollTop() > 320){
        $('header').addClass('header-active-design');
      }
    }else{
      $('header').removeClass('header-active');
      $('header').removeClass('header-active-design');
    }

    $('section').each(function(){
        let id = $(this).attr('id');
        let height = $(this).height();
        let offset = $(this).offset().top - 200;
        let top = $(window).scrollTop();
        if(top >= offset && top < offset + height){
          $('.navbar ul li a').removeClass('active');
          $('.navbar').find('[href="#' + id + '"]').addClass('active');
        }
    })
});
});