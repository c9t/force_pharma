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

            $('header').addClass("header_scroll");

        }  else{

            $('header').removeClass("header_scroll");
        }

    });

        $(".testimonials_slider").owlCarousel({
            items: 1,
            nav: true,
            dots: true,
        });
});