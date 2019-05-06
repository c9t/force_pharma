$( document ).ready(function() {
    var navigationBurger = $('.navigation_burger'),
        headerMenu = $('.header_menu__content');

    navigationBurger.on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('nav_add');

        headerMenu.toggleClass('open');
    });

        $(".testimonials_slider").owlCarousel({
            items: 1,
            nav: true,
            dots: true,
        });
});