
jQuery(function($) {

    // CUSTOM LINKS SCROLLING 

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    // PARALLAX
    
    $('.parallax').scrolly({ bgParallax: true });

    // MEDIA ELEMENT

    $('audio').mediaelementplayer();

    // TEXT FADE IN/OUT

    var scroll_size = 600;

    $(document).ready(function(){
        if ($(window).width() >= 1200){  
            scroll_size= 600;
        } 
        if ($(window).width() <= 1199){  
            scroll_size= 500;
        }   
        if ($(window).width() <= 991){  
            scroll_size= 300;
        }   
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > scroll_size) {
            $('.quote').fadeIn(900);
        } else {
            $('.quote').fadeOut(900);
        }
    });

    // LISTEN ACTIVE TOGGLE

    $(document).ready(function(){

       $(".mejs-button").click(function() {
          var toggle;
          toggle = false;
          if ($(this).closest('.preview').find('h3').hasClass("active")) {
            toggle = true;
          }
          $("h3").removeClass("active");
          if (!toggle) {
            $(this).closest('.preview').find('h3').addClass("active");
          }
        });
     });


    // MOBILE NAVIGATION COLLAPSE

    $('.nav a').on('click', function(){

        if($('.navbar-toggle').css('display') != 'none')
        $('.navbar-toggle').click();

    });

});

