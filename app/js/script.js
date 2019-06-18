$( document ).ready(function() {
    var navigationBurger = $('.header_menu_burger'),
        headerMenu = $('.header_menu');

    navigationBurger.on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('nav_add');
        headerMenu.toggleClass('open');
    });
//add class with scroll to 60px
    $(window).scroll(function() {

        if ($(this).scrollTop() > 60){
            $('.header').addClass("header_scroll");
            $('.header_wrapper').addClass("header_scroll_wrapper");
        }  else{
            $('.header').removeClass("header_scroll");
            $('.header_wrapper').removeClass("header_scroll_wrapper");
        }
    });

        $(".about_slider").owlCarousel({
            items: 1,
            autoWidth: true,
            autoplay: false,
            mouseDrag: false,
            loop: true,
            dots: true,
            responsiveClass: true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });
});