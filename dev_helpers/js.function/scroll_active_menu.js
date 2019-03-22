function activeMenuLink() {
    $('.header.fixed nav ul li a').each(function () {
        let selector = $(this).attr('href');
        let windowTop = $(window).scrollTop();
        let sectionTop = $(selector).offset().top;
        if (windowTop > sectionTop - 100) {
            $('.header.fixed nav ul li a').removeClass('selected').filter(this).addClass('selected');
        }
    });
}