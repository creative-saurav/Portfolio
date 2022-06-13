$("document").ready(function(){
  // Header Menu
  $('.mobail-icon').click(function(){
    $(".menu-area ul").addClass("menu-right");
    $(this).hide();
    $('.crose-icon').show();
    return false;
  });
  $('.crose-icon').click(function(){
    $(".menu-area ul").removeClass("menu-right");
    $(this).hide();
    $('.mobail-icon').show();
    return false;
  });
   // Scrol Side Bar
    $(".slide-icon").click(function(){
      $(".blog-sidebar").toggleClass("open");
    });  

    //Sticky Header 
    $(window).scroll(function(){
        if ($(document).scrollTop () < 1){
            $(".header-area").removeClass("fixed");
            $(".header-area").removeClass("active-bg");
        }
        else if ($(document).scrollTop () > 300){
            $(".header-area").removeClass("fixed");
            $(".header-area").addClass("active-bg");
        }
        else{
            $(".header-area").addClass("fixed");
        }
    });

    // scroll top main 
    $(window).scroll(function() {
      let scrollValue = $(window).scrollTop();

      if(scrollValue >400){
        $('.scroll-btn').show();
       

      }
      else{
        $('.scroll-btn').hide();
      }
    });
    // top scroll btn
    $(".scroll-btn").click(function() {
      $("html, body").animate({ scrollTop: 0 }, 2000);
      return false;
    });

    // Wow Js
     new WOW().init();
    // Bannar Owl Carousel
    $('.text-rotation ').owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        dots:false,
        nav:false,
        animateIn:true,
        smartSpeed:60
      });
      // Testimonials Owl Carousel
    $('.testimonials-contents').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      dots:true,
      responsive:{
          0:{
              items:1
          },
          768:{
              items:2
          },
          1000:{
            items:2
        }
      }
    })
     // Testimonials Owl Carousel
     $('.clients').owlCarousel({
      loop:true,
      nav:false,
      dots:true,
      responsive:{
          0:{
              items:1
          },
          768:{
              items:3
          },
          1000:{
            items:6
        }
      }
    })
    // Counter Up
    $('.count').counterUp({
      delay: 10,
      time: 1500
    });
    // Progress Bar
    $('#bar1').barfiller();
    $('#bar2').barfiller();
    $('#bar3').barfiller();
    $('#bar4').barfiller();
    $('#bar5').barfiller();
    $('#bar6').barfiller();
    // Acordion 
    var icons = {       
    };
    $( function() {
        $( "#accordion" ).accordion({
            icons: icons
        });
    });
    // Mixitup
    var gallary = document.querySelector('.mixi-gallary');
    var mixer = mixitup(gallary, {
      load: {
         filter: 'all'
     }
    });

});
